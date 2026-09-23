import * as THREE from 'three';

export class PlayerControls {
  constructor(camera, domElement, onInteract, onStow, onToggleInventory) {
    this.camera = camera;
    this.domElement = domElement;
    this.onInteract = onInteract;
    this.onStow = onStow;
    this.onToggleInventory = onToggleInventory;

    // Movement keys
    this.moveForward = false;
    this.moveBackward = false;
    this.moveLeft = false;
    this.moveRight = false;
    this.velocity = new THREE.Vector3(0, 0, 0);

    // Shift-Lock / Pointer Lock state
    this.isLocked = false;
    this.isLookLocked = false; // When true, mouse movement does not rotate camera (e.g. while inspecting held item)

    // Camera angles
    this.pitch = 0;
    this.yaw = 0;

    // Collision boundaries (room walls and central table)
    this.bounds = { minX: -5.4, maxX: 5.4, minZ: -4.4, maxZ: 4.4 };
    this.obstacles = [
      { minX: -1.35, maxX: 1.35, minZ: -0.75, maxZ: 0.75 }, // Workbench
      { minX: 2.7, maxX: 3.9, minZ: -1.35, maxZ: 1.35 }    // Iron rack
    ];

    // Raycaster for interactions and placement
    this.raycaster = new THREE.Raycaster();
    this.center = new THREE.Vector2(0, 0);
    this.hoveredObject = null;
    this.lastRaycastHit = null;

    this.setupPointerLock();
    this.setupKeyboard();
    this.setupMouse();
  }

  setupPointerLock() {
    document.addEventListener('pointerlockchange', () => {
      this.isLocked = document.pointerLockElement === this.domElement;
      const indicator = document.getElementById('shiftlock-status');
      if (indicator) {
        indicator.textContent = this.isLocked ? 'Shift-Lock: BẬT (Khóa tâm)' : 'Shift-Lock: TẮT (Tự do chuột)';
        indicator.className = this.isLocked ? 'active' : 'inactive';
      }
      const crosshair = document.getElementById('crosshair');
      if (crosshair) {
        crosshair.classList.toggle('unlocked', !this.isLocked);
      }
    });

    this.domElement.addEventListener('click', () => {
      const invModal = document.getElementById('inventory-modal');
      const isInvOpen = invModal && invModal.classList.contains('active');
      if (!this.isLocked && !isInvOpen) {
        this.lockPointer();
      }
    });
  }

  lockPointer() {
    try {
      this.domElement.requestPointerLock();
    } catch (err) {
      console.warn('Pointer lock error:', err);
    }
  }

  unlockPointer() {
    try {
      document.exitPointerLock();
    } catch (err) {
      console.warn('Pointer unlock error:', err);
    }
  }

  toggleShiftLock() {
    if (this.isLocked) {
      this.unlockPointer();
    } else {
      this.lockPointer();
    }
  }

  setupKeyboard() {
    window.addEventListener('keydown', e => {
      if (e.key === 'Shift') {
        e.preventDefault();
        this.toggleShiftLock();
        return;
      }

      if (e.code === 'KeyE') {
        if (this.onStow) this.onStow();
        return;
      }

      if (e.code === 'KeyR') {
        if (this.onToggleInventory) this.onToggleInventory();
        return;
      }

      switch (e.code) {
        case 'ArrowUp':
        case 'KeyW':
          this.moveForward = true;
          break;
        case 'ArrowLeft':
        case 'KeyA':
          this.moveLeft = true;
          break;
        case 'ArrowDown':
        case 'KeyS':
          this.moveBackward = true;
          break;
        case 'ArrowRight':
        case 'KeyD':
          this.moveRight = true;
          break;
      }
    });

    window.addEventListener('keyup', e => {
      switch (e.code) {
        case 'ArrowUp':
        case 'KeyW':
          this.moveForward = false;
          break;
        case 'ArrowLeft':
        case 'KeyA':
          this.moveLeft = false;
          break;
        case 'ArrowDown':
        case 'KeyS':
          this.moveBackward = false;
          break;
        case 'ArrowRight':
        case 'KeyD':
          this.moveRight = false;
          break;
      }
    });
  }

  setupMouse() {
    window.addEventListener('mousemove', e => {
      // If pointer is not locked, or if camera look is temporarily locked (RMB inspect), do not rotate camera
      if (!this.isLocked || this.isLookLocked) return;

      const movementX = e.movementX || 0;
      const movementY = e.movementY || 0;

      // Mouse sensitivity
      this.yaw -= movementX * 0.0022;
      this.pitch -= movementY * 0.0022;

      // Clamp vertical look angle
      this.pitch = Math.max(-Math.PI / 2.1, Math.min(Math.PI / 2.1, this.pitch));

      const euler = new THREE.Euler(0, 0, 0, 'YXZ');
      euler.x = this.pitch;
      euler.y = this.yaw;
      this.camera.quaternion.setFromEuler(euler);
    });

    window.addEventListener('mousedown', e => {
      if (e.button === 0 && this.isLocked) { // Left click
        if (this.onInteract) {
          this.onInteract(this.hoveredObject, this.lastRaycastHit);
        }
      }
    });
  }

  checkCollision(newX, newZ) {
    if (newX < this.bounds.minX || newX > this.bounds.maxX) return true;
    if (newZ < this.bounds.minZ || newZ > this.bounds.maxZ) return true;

    for (const obs of this.obstacles) {
      if (newX >= obs.minX && newX <= obs.maxX && newZ >= obs.minZ && newZ <= obs.maxZ) {
        return true;
      }
    }
    return false;
  }

  update(delta, interactables = [], environmentSurfaces = []) {
    // 1. Calculate inputs
    const inputForward = (this.moveForward ? 1 : 0) - (this.moveBackward ? 1 : 0);
    const inputRight = (this.moveRight ? 1 : 0) - (this.moveLeft ? 1 : 0);

    // 2. Camera-relative horizontal direction vectors:
    // forward: looking direction projected on horizontal X-Z plane
    // right: perpendicular vector pointing 90 deg clockwise to the right
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    const moveDir = new THREE.Vector3(0, 0, 0);
    if (inputForward !== 0 || inputRight !== 0) {
      moveDir.addScaledVector(forward, inputForward);
      moveDir.addScaledVector(right, inputRight);
      moveDir.normalize();
    }

    // 3. Smooth velocity interpolation
    const speed = 4.2;
    const targetVelX = moveDir.x * speed;
    const targetVelZ = moveDir.z * speed;
    const smooth = Math.min(1.0, 12.0 * delta);

    this.velocity.x += (targetVelX - this.velocity.x) * smooth;
    this.velocity.z += (targetVelZ - this.velocity.z) * smooth;

    const targetX = this.camera.position.x + this.velocity.x * delta;
    const targetZ = this.camera.position.z + this.velocity.z * delta;

    if (!this.checkCollision(targetX, this.camera.position.z)) {
      this.camera.position.x = targetX;
    }
    if (!this.checkCollision(this.camera.position.x, targetZ)) {
      this.camera.position.z = targetZ;
    }

    this.camera.position.y = 1.65; // Eye height

    // 4. Raycasting for object hover and surface targeting
    const crosshairEl = document.getElementById('crosshair');
    if (this.isLocked) {
      this.raycaster.setFromCamera(this.center, this.camera);

      // Check interactable hardware / case objects first
      const allTargets = [...interactables, ...environmentSurfaces];
      const intersects = this.raycaster.intersectObjects(allTargets, true);

      let foundInteractable = null;
      let surfaceHit = null;

      for (const hit of intersects) {
        if (hit.distance < 4.0) {
          let curr = hit.object;
          while (curr && !curr.userData?.type && !curr.userData?.snapType && !curr.userData?.itemId && curr.parent) {
            curr = curr.parent;
          }
          if (curr && (curr.userData?.type || curr.userData?.snapType || curr.userData?.itemId)) {
            foundInteractable = curr;
            surfaceHit = hit;
            break;
          }
          // If hit an environment surface (table, shelf, floor)
          if (!surfaceHit && (hit.object.isMesh || hit.point)) {
            surfaceHit = hit;
          }
        }
      }

      this.hoveredObject = foundInteractable;
      this.lastRaycastHit = surfaceHit;

      if (crosshairEl) {
        crosshairEl.classList.toggle('highlight', !!foundInteractable);
      }
      this.updateHUDPrompt(foundInteractable, surfaceHit);
    } else {
      this.hoveredObject = null;
      this.lastRaycastHit = null;
      if (crosshairEl) crosshairEl.classList.remove('highlight');
      this.updateHUDPrompt(null, null);
    }
  }

  updateHUDPrompt(hovered, hit) {
    const prompt = document.getElementById('hud-prompt');
    if (!prompt) return;

    if (!hovered) {
      prompt.style.display = 'none';
      return;
    }

    prompt.style.display = 'flex';
    const textEl = prompt.querySelector('.prompt-text');
    const uData = hovered.userData;

    if (uData.itemId) {
      textEl.textContent = `[Chuột trái] Nhặt ${uData.itemName || 'Linh kiện'}`;
    } else if (uData.type === 'glass_side') {
      textEl.textContent = `[Chuột trái] Tháo / Lắp Nắp kính thùng máy`;
    } else if (uData.type === 'power_button') {
      textEl.textContent = `[Chuột trái] BẬT NGUỒN MÁY TÍNH`;
    } else if (uData.type === 'cables') {
      textEl.textContent = `[Chuột trái] Cắm Dây nguồn & Cáp tín hiệu`;
    } else if (uData.snapType) {
      textEl.textContent = `[Chuột trái] Lắp ráp: ${uData.snapType.toUpperCase()}`;
    } else if (uData.type === 'monitor') {
      textEl.textContent = `[Chuột trái] Cắm cáp màn hình`;
    }
  }
}
