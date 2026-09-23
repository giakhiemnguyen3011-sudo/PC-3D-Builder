This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
````
src/
  audio/
    SoundEffects.js
  controls/
    HeldItemManager.js
    PlayerControls.js
  core/
    Game.js
  data/
    hardware.js
  scene/
    CaseAssembly.js
    ItemPreviewScene.js
    PlacedItemManager.js
    Room.js
    ShelfHardware.js
  ui/
    AssemblyGuideUI.js
    InventoryUI.js
  main.js
  style.css
index.html
package.json
README.md
start.bat
vite.config.js
````

# Files

## File: src/audio/SoundEffects.js
````javascript
/**
 * Procedural Web Audio Sound Synthesizer
 * Provides crisp, zero-latency mechanical and electrical sound effects.
 */

class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.fanSource = null;
    this.fanGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }

  playPickup() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(520, this.ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }

  playSnap() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    // Crisp transient click
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(1800, t);
    osc.frequency.exponentialRampToValueAtTime(250, t + 0.08);
    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(t + 0.08);

    // Deep latch lock thud
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(220, t + 0.02);
    osc2.frequency.exponentialRampToValueAtTime(60, t + 0.14);
    gain2.gain.setValueAtTime(0.35, t + 0.02);
    gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.start(t + 0.02);
    osc2.stop(t + 0.14);
  }

  playScrew() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    // Screw ratchet sound
    const t = this.ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const timeOffset = t + i * 0.04;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(900 + i * 150, timeOffset);
      gain.gain.setValueAtTime(0.12, timeOffset);
      gain.gain.exponentialRampToValueAtTime(0.001, timeOffset + 0.025);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(timeOffset);
      osc.stop(timeOffset + 0.025);
    }
  }

  playPowerSwitch() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, t);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.06);
    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.06);
  }

  playPostBeep() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    // Classic motherboard POST success beep: 880Hz sine wave for 120ms
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, t);
    gain.gain.setValueAtTime(0.25, t);
    gain.gain.setValueAtTime(0.25, t + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.15);
  }

  startFanHum() {
    if (!this.enabled || this.fanSource) return;
    this.init();
    if (!this.ctx) return;

    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // Pink / Brown noise filter for smooth air whoosh
      lastOut = (lastOut + 0.02 * white) / 1.02;
      data[i] = lastOut * 3.5;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    // Filter to simulate 120mm fans
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

    this.fanGain = this.ctx.createGain();
    this.fanGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.fanGain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 2.0);

    noise.connect(filter);
    filter.connect(this.fanGain);
    this.fanGain.connect(this.ctx.destination);

    noise.start();
    this.fanSource = noise;
  }

  playVictoryFanfare() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const chords = [
      { f: 523.25, dur: 0.15, d: 0 },    // C5
      { f: 659.25, dur: 0.15, d: 0.15 }, // E5
      { f: 783.99, dur: 0.15, d: 0.3 },  // G5
      { f: 1046.50, dur: 0.5, d: 0.45 }  // C6
    ];

    const t = this.ctx.currentTime;
    chords.forEach(c => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(c.f, t + c.d);
      gain.gain.setValueAtTime(0.2, t + c.d);
      gain.gain.exponentialRampToValueAtTime(0.001, t + c.d + c.dur);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + c.d);
      osc.stop(t + c.d + c.dur);
    });
  }
}

export const sounds = new SoundEffects();
````

## File: src/controls/HeldItemManager.js
````javascript
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { sounds } from '../audio/SoundEffects.js';

export class HeldItemManager {
  constructor(camera, scene, playerControls) {
    this.camera = camera;
    this.scene = scene;
    this.playerControls = playerControls;

    this.heldItemData = null;
    this.heldObjectGroup = new THREE.Group();
    this.camera.add(this.heldObjectGroup);

    // Pivot group inside heldObjectGroup for clean rotation
    this.rotationPivot = new THREE.Group();
    this.heldObjectGroup.add(this.rotationPivot);

    // Hand positioning
    this.defaultPos = new THREE.Vector3(0.35, -0.28, -0.65);
    this.centerPos = new THREE.Vector3(0, -0.02, -0.52); // Centered right in front of camera
    this.currentPos = this.defaultPos.clone();
    this.heldObjectGroup.position.copy(this.currentPos);

    this.loader = new GLTFLoader();
    this.modelCache = new Map();

    // Inspection state
    this.isInspecting = false;
    this.itemRotation = { x: 0, y: 0 };

    this.setupMouseEvents();
  }

  setPlayerControls(controls) {
    this.playerControls = controls;
  }

  setupMouseEvents() {
    window.addEventListener('mousedown', e => {
      // Right Mouse Button (button === 2)
      if (e.button === 2 && this.heldItemData) {
        this.isInspecting = true;
        if (this.playerControls) {
          this.playerControls.isLookLocked = true; // Freeze camera look
        }
        this.showInspectHint(true);
      }
    });

    window.addEventListener('mouseup', e => {
      if (e.button === 2 && this.isInspecting) {
        this.isInspecting = false;
        if (this.playerControls) {
          this.playerControls.isLookLocked = false; // Restore camera look
        }
        this.showInspectHint(false);
      }
    });

    window.addEventListener('contextmenu', e => {
      e.preventDefault();
    });

    window.addEventListener('mousemove', e => {
      if (this.isInspecting && this.heldItemData) {
        const movementX = e.movementX || 0;
        const movementY = e.movementY || 0;

        // Rotate object around its center in view
        this.itemRotation.y += movementX * 0.009;
        this.itemRotation.x += movementY * 0.009;

        // Apply rotation to pivot
        this.rotationPivot.rotation.x = this.itemRotation.x;
        this.rotationPivot.rotation.y = this.itemRotation.y;
      }
    });
  }

  showInspectHint(show) {
    let hintEl = document.getElementById('inspect-hint');
    if (!hintEl) {
      hintEl = document.createElement('div');
      hintEl.id = 'inspect-hint';
      document.body.appendChild(hintEl);
    }
    if (show && this.heldItemData) {
      hintEl.textContent = `🔍 Đang quan sát ${this.heldItemData.name} • Rê chuột để xoay 360°`;
      hintEl.classList.add('active');
    } else {
      hintEl.classList.remove('active');
    }
  }

  holdItem(itemData) {
    this.clearHeldItem();
    this.heldItemData = itemData;
    sounds.playPickup();

    const loadAndAttach = model => {
      const cloned = model.clone();

      // Normalize size
      const box = new THREE.Box3().setFromObject(cloned);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      const maxDim = Math.max(size.x, size.y, size.z);
      const targetSize = 0.35;
      const s = targetSize / (maxDim || 1);
      cloned.scale.set(s, s, s);

      // Center model
      cloned.position.set(-center.x * s, -center.y * s, -center.z * s);

      // Wrapper to apply calibrated base rotation
      const wrapper = new THREE.Group();
      wrapper.add(cloned);

      if (itemData.baseRotation) {
        wrapper.rotation.set(
          itemData.baseRotation.x || 0,
          itemData.baseRotation.y || 0,
          itemData.baseRotation.z || 0
        );
      }

      this.rotationPivot.add(wrapper);
      this.itemRotation = { x: 0.15, y: -0.35 };
      this.rotationPivot.rotation.set(this.itemRotation.x, this.itemRotation.y, 0);
    };

    if (this.modelCache.has(itemData.modelPath)) {
      loadAndAttach(this.modelCache.get(itemData.modelPath));
    } else {
      this.loader.load(itemData.modelPath, gltf => {
        this.modelCache.set(itemData.modelPath, gltf.scene);
        loadAndAttach(gltf.scene);
      });
    }
  }

  clearHeldItem() {
    this.showInspectHint(false);
    if (this.isInspecting && this.playerControls) {
      this.playerControls.isLookLocked = false;
    }
    this.isInspecting = false;

    while (this.rotationPivot.children.length > 0) {
      this.rotationPivot.remove(this.rotationPivot.children[0]);
    }
    const oldItem = this.heldItemData;
    this.heldItemData = null;
    this.rotationPivot.rotation.set(0, 0, 0);
    return oldItem;
  }

  getHeldItem() {
    return this.heldItemData;
  }

  update(delta, time) {
    if (!this.heldItemData) return;

    // Smooth transition between default holding position and center inspection position
    const targetPos = this.isInspecting ? this.centerPos : this.defaultPos;
    const lerpSpeed = Math.min(1.0, 14.0 * delta);
    this.currentPos.lerp(targetPos, lerpSpeed);

    if (!this.isInspecting) {
      // Natural subtle idle breathing sway
      const swayY = Math.sin(time * 2.2) * 0.005;
      const swayX = Math.cos(time * 1.6) * 0.003;
      this.heldObjectGroup.position.set(
        this.currentPos.x + swayX,
        this.currentPos.y + swayY,
        this.currentPos.z
      );
    } else {
      this.heldObjectGroup.position.copy(this.currentPos);
    }
  }
}
````

## File: src/controls/PlayerControls.js
````javascript
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
````

## File: src/core/Game.js
````javascript
import * as THREE from 'three';
import { Room } from '../scene/Room.js';
import { CaseAssembly } from '../scene/CaseAssembly.js';
import { ShelfHardware } from '../scene/ShelfHardware.js';
import { PlacedItemManager } from '../scene/PlacedItemManager.js';
import { ItemPreviewScene } from '../scene/ItemPreviewScene.js';
import { HeldItemManager } from '../controls/HeldItemManager.js';
import { PlayerControls } from '../controls/PlayerControls.js';
import { InventoryUI } from '../ui/InventoryUI.js';
import { AssemblyGuideUI } from '../ui/AssemblyGuideUI.js';
import { HARDWARE_ITEMS } from '../data/hardware.js';
import { sounds } from '../audio/SoundEffects.js';

export class Game {
  constructor() {
    this.canvas = document.getElementById('webgl-canvas');
    this.clock = new THREE.Clock();

    this.initRenderer();
    this.initScene();
    this.initLighting();

    // Secondary 3D preview canvas for RPG Inventory
    const previewCanvas = document.getElementById('item-preview-canvas');
    this.previewScene = new ItemPreviewScene(previewCanvas);

    // Assembly Tracker Guide UI
    this.guideUI = new AssemblyGuideUI();

    // Scene elements
    this.room = new Room(this.scene);

    this.caseAssembly = new CaseAssembly(this.scene, (step, target) => {
      this.handleStepCompleted(step, target);
    });

    this.shelf = new ShelfHardware(this.scene);
    this.placedItems = new PlacedItemManager(this.scene);

    // Held Item Manager (first person hand)
    this.heldItemManager = new HeldItemManager(this.camera, this.scene, null);

    // RPG Inventory UI
    this.inventoryUI = new InventoryUI(
      this.previewScene,
      // onEquipItem
      item => {
        this.placedItems.removeItem(item.id);
        this.shelf.hideItem(item.id);
        this.heldItemManager.holdItem(item);
      },
      // onInstallItem
      item => {
        this.tryInstallComponent(item.categoryKey, item.id);
      },
      // onDropItem
      item => {
        this.heldItemManager.clearHeldItem();
        this.shelf.showItem(item.id);
      },
      // onRequestLock
      () => {
        this.controls.lockPointer();
      }
    );

    // Player Controls (WASD / Arrows + Shift-Lock + Raycasting)
    this.controls = new PlayerControls(
      this.camera,
      this.canvas,
      // onInteract (LMB)
      (target, hit) => this.handleWorldInteract(target, hit),
      // onStow (E)
      () => this.handleStowItem(),
      // onToggleInventory (R)
      () => {
        this.inventoryUI.toggle(this.heldItemManager.getHeldItem());
        if (this.inventoryUI.isOpen) {
          this.controls.unlockPointer();
        }
      }
    );

    // Link player controls to held item manager for RMB camera freeze
    this.heldItemManager.setPlayerControls(this.controls);

    // Initial camera position standing in front of table
    this.camera.position.set(0, 1.65, 1.8);
    this.controls.pitch = -0.2;
    this.controls.yaw = 0;

    // Load main PC Case model
    this.caseAssembly.loadModel(
      progress => {
        const loadBar = document.getElementById('loading-bar-fill');
        const loadText = document.getElementById('loading-text');
        if (loadBar) loadBar.style.width = `${Math.round(progress * 100)}%`;
        if (loadText) loadText.textContent = `Đang tải tài nguyên mô hình 3D... ${Math.round(progress * 100)}%`;
      },
      () => {
        const loaderScreen = document.getElementById('loading-screen');
        if (loaderScreen) {
          loaderScreen.classList.add('hidden');
          setTimeout(() => loaderScreen.remove(), 600);
        }
      }
    );

    this.setupWindowEvents();
    this.animate();
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0e141f);
    this.scene.fog = new THREE.FogExp2(0x0e141f, 0.035);

    this.camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.scene.add(this.camera);
  }

  initLighting() {
    const ambientLight = new THREE.AmbientLight(0xf1f5f9, 0.7);
    this.scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xe2e8f0, 0x334155, 0.5);
    this.scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xfffbeb, 1.6);
    sunLight.position.set(-6, 5, 2);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 16;
    sunLight.shadow.camera.left = -4;
    sunLight.shadow.camera.right = 4;
    sunLight.shadow.camera.top = 4;
    sunLight.shadow.camera.bottom = -4;
    sunLight.shadow.bias = -0.0005;
    this.scene.add(sunLight);

    const tableLight = new THREE.DirectionalLight(0xdbeafe, 0.9);
    tableLight.position.set(2, 4, 3);
    this.scene.add(tableLight);

    const rackSpot = new THREE.PointLight(0x38bdf8, 1.5, 6);
    rackSpot.position.set(3.0, 2.8, 0);
    this.scene.add(rackSpot);
  }

  handleWorldInteract(object, hit) {
    const held = this.heldItemManager.getHeldItem();
    const uData = object?.userData || {};

    // ==========================================
    // CASE A: PLAYER IS HOLDING AN ITEM
    // ==========================================
    if (held) {
      // 1. If aiming at an assembly slot or case target: try install
      if (uData.snapType) {
        if (held.categoryKey === uData.snapType) {
          this.tryInstallComponent(uData.snapType, held.id);
          this.heldItemManager.clearHeldItem();
        } else {
          this.guideUI.showToast(`⚠️ Cần lắp ${uData.snapType.toUpperCase()}, bạn đang cầm ${held.tag}!`);
        }
        return;
      }

      // 2. Otherwise: Left Click drops/places the held item at crosshair intersection point
      if (hit && hit.point) {
        this.placedItems.placeItemAt(
          held,
          hit.point,
          hit.face ? hit.face.normal : new THREE.Vector3(0, 1, 0)
        );
        this.heldItemManager.clearHeldItem();
        this.inventoryUI.setItemState(held.id, 'shelf');
        this.guideUI.showToast(`Đã đặt ${held.name} xuống vị trí nhắm`);
        return;
      }
    }

    // ==========================================
    // CASE B: PLAYER'S HAND IS EMPTY
    // ==========================================

    // 1. Clicked an item placed on a table/floor/shelf
    if (uData.isPlaced && uData.itemId) {
      const item = HARDWARE_ITEMS.find(it => it.id === uData.itemId);
      if (item) {
        this.placedItems.removeItem(item.id);
        this.heldItemManager.holdItem(item);
        this.inventoryUI.setItemState(item.id, 'held');
        this.guideUI.showToast(`Đã nhặt lại: ${item.name}`);
      }
      return;
    }

    // 2. Clicked an item on the iron rack
    if (uData.itemId) {
      const item = HARDWARE_ITEMS.find(it => it.id === uData.itemId);
      if (item) {
        this.shelf.hideItem(item.id);
        this.heldItemManager.holdItem(item);
        this.inventoryUI.setItemState(item.id, 'held');
        this.guideUI.showToast(`Đã nhặt: ${item.name}`);
      }
      return;
    }

    // 3. Clicked Case Side Glass
    if (uData.type === 'glass_side') {
      const isOpen = this.caseAssembly.toggleSideGlass();
      if (isOpen) {
        this.guideUI.completeStep(1);
      } else {
        this.guideUI.completeStep(10);
      }
      return;
    }

    // 4. Clicked snap zone with empty hand: check if user has item in inventory to quick-install
    if (uData.snapType) {
      const matchingItem = HARDWARE_ITEMS.find(it => it.categoryKey === uData.snapType);
      if (matchingItem) {
        this.tryInstallComponent(uData.snapType, matchingItem.id);
      }
      return;
    }

    // 5. Clicked Cables
    if (uData.type === 'cables') {
      this.caseAssembly.connectCables();
      return;
    }

    // 6. Clicked Monitor / Video Cable
    if (uData.type === 'monitor') {
      this.caseAssembly.connectMonitorAndPower();
      this.room.setMonitorState('NO_SIGNAL');
      this.guideUI.completeStep(11);
      return;
    }

    // 7. Clicked Power Button
    if (uData.type === 'power_button') {
      if (this.caseAssembly.installedParts.size < 6) {
        this.guideUI.showToast('⚠️ Chưa lắp đủ linh kiện thiết yếu (Main, CPU, Cooler, RAM, GPU, PSU)!');
        return;
      }
      if (!this.caseAssembly.monitorConnected) {
        this.caseAssembly.connectMonitorAndPower();
        this.guideUI.completeStep(11);
      }
      const success = this.caseAssembly.powerOnSystem();
      if (success) {
        setTimeout(() => {
          this.room.setMonitorState('POST');
        }, 800);
      }
      return;
    }
  }

  tryInstallComponent(categoryKey, itemId) {
    const success = this.caseAssembly.installComponent(categoryKey);
    if (success) {
      if (itemId) {
        this.inventoryUI.setItemState(itemId, 'installed');
        this.shelf.hideItem(itemId);
        this.placedItems.removeItem(itemId);
      }
      const item = HARDWARE_ITEMS.find(it => it.id === itemId || it.categoryKey === categoryKey);
      this.guideUI.showToast(`Đã lắp thành công: ${item?.name || categoryKey.toUpperCase()}`);
    }
    return success;
  }

  handleStowItem() {
    const held = this.heldItemManager.getHeldItem();
    if (held) {
      sounds.playDrop();
      this.heldItemManager.clearHeldItem();
      this.inventoryUI.setItemState(held.id, 'inventory');
      this.guideUI.showToast(`Đã cất ${held.name} vào Túi đồ (Phím R)`);
    }
  }

  handleStepCompleted(stepNumber, target) {
    this.guideUI.completeStep(stepNumber);
  }

  setupWindowEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.getElapsedTime();

    // Interactable list including dropped/placed items
    const interactables = [
      ...this.caseAssembly.interactableObjects,
      ...this.shelf.interactables,
      ...this.placedItems.interactables,
      ...this.room.interactables
    ];

    // Environment surfaces (table, shelves, floor) for crosshair drop targeting
    const surfaces = this.room.surfaces || [];

    this.controls.update(delta, interactables, surfaces);
    this.heldItemManager.update(delta, time);
    this.caseAssembly.update(delta);
    this.room.update(delta);

    if (this.inventoryUI.isOpen) {
      this.previewScene.render();
    }

    this.renderer.render(this.scene, this.camera);
  }
}
````

## File: src/data/hardware.js
````javascript
/**
 * Hardware Components Database
 * Contains realistic technical specifications, tags, 3D model paths, educational notes,
 * and calibrated baseRotation to correct non-flat / tilted model exports.
 */

export const HARDWARE_CATEGORIES = {
  ALL: 'Tất cả',
  MOTHERBOARD: 'Motherboard',
  CPU: 'CPU',
  COOLER: 'CPU Cooler',
  RAM: 'RAM',
  GPU: 'GPU',
  STORAGE: 'Storage',
  PSU: 'Power Supply',
  CASE: 'Case'
};

export const HARDWARE_ITEMS = [
  {
    id: 'mb_asus_z370',
    name: 'ASUS ROG STRIX Z370-E GAMING',
    category: HARDWARE_CATEGORIES.MOTHERBOARD,
    categoryKey: 'motherboard',
    tag: 'Motherboard',
    modelPath: '/models/Motherboard_model/rog_strix_z370-e_gaming_motherboard_3d_model.glb',
    brand: 'ASUS Republic of Gamers',
    price: '4,890,000 đ',
    shelfPosition: { x: 3.2, y: 1.87, z: -0.8 },
    scale: 0.85,
    // Calibrated baseRotation: FBX export was standing up facing Z; rotate -90 deg around X to lay flat with ports/VRM facing up
    baseRotation: { x: -Math.PI / 2, y: 0, z: 0 },
    specs: [
      { label: 'Socket', value: 'LGA 1151 (Intel Gen 8/9)' },
      { label: 'Chipset', value: 'Intel Z370 Express' },
      { label: 'Kích thước', value: 'ATX (30.5 cm x 24.4 cm)' },
      { label: 'Khe RAM', value: '4x DDR4 DIMM (Max 64GB, 4000MHz OC)' },
      { label: 'Khe PCIe', value: '2x PCIe 3.0 x16 SafeSlot, 4x PCIe x1' },
      { label: 'Lưu trữ', value: '2x M.2 NVMe PCIe x4, 6x SATA III 6Gb/s' },
      { label: 'LED RGB', value: 'Aura Sync RGB Lighting' }
    ],
    description: 'Bo mạch chủ chuẩn Gaming cao cấp trang bị tản nhiệt VRM dày bản, tích hợp Wi-Fi AC và âm thanh SupremeFX S1220A chuyên nghiệp.',
    beginnerTip: '💡 Bo mạch chủ là nền móng kết nối tất cả linh kiện. Lắp CPU, RAM và SSD M.2 lên bo mạch chủ trước khi gắn vào thùng case để dễ thao tác nhất!',
    assemblyStep: 2,
    installedCasePartName: 'MotherBoard'
  },
  {
    id: 'cpu_ryzen_3600',
    name: 'AMD Ryzen 5 3600 Processor',
    category: HARDWARE_CATEGORIES.CPU,
    categoryKey: 'cpu',
    tag: 'CPU',
    modelPath: '/models/CPU_model/cpu_ryzen_5_3600.glb',
    brand: 'AMD',
    price: '3,290,000 đ',
    shelfPosition: { x: 3.2, y: 1.86, z: 0.1 },
    scale: 1.8,
    // Calibrated baseRotation: Collada export had thin Z axis; rotate -90 deg around X to lay flat with heat spreader facing up
    baseRotation: { x: -Math.PI / 2, y: 0, z: 0 },
    specs: [
      { label: 'Số nhân / Luồng', value: '6 Cores / 12 Threads' },
      { label: 'Xung cơ bản', value: '3.6 GHz (Boost 4.2 GHz)' },
      { label: 'Kiến trúc', value: 'Zen 2 (7nm FinFET TSMC)' },
      { label: 'Bộ nhớ đệm', value: '32MB GameCache L3' },
      { label: 'Điện năng (TDP)', value: '65 Watts' },
      { label: 'Socket tương thích', value: 'AM4 / LGA Adapter' },
      { label: 'Hỗ trợ PCIe', value: 'PCIe 4.0 x16' }
    ],
    description: 'Bộ vi xử lý quốc dân với hiệu năng đa nhân vượt trội, cân bằng hoàn hảo giữa chơi game eSports và làm việc đồ họa mượt mà.',
    beginnerTip: '💡 Khi lắp CPU, hãy tìm biểu tượng tam giác vàng ở góc con chip và căn trùng khớp với dấu tam giác trên socket. Nhẹ nhàng đặt xuống, tuyệt đối không dùng lực đè mạnh!',
    assemblyStep: 3,
    installedCasePartName: 'CPU'
  },
  {
    id: 'cooler_master_212',
    name: 'Cooler Master Hyper Black Edition',
    category: HARDWARE_CATEGORIES.COOLER,
    categoryKey: 'cooler',
    tag: 'CPU Cooler',
    modelPath: '/models/CPU_Cooler_model/cooler_master_cpu_cooler.glb',
    brand: 'Cooler Master',
    price: '890,000 đ',
    shelfPosition: { x: 3.2, y: 1.86, z: 0.9 },
    scale: 0.9,
    // Calibrated baseRotation: Model was tilted on its side; rotate +90 deg around X to stand upright on heatpipes
    baseRotation: { x: Math.PI / 2, y: 0, z: 0 },
    specs: [
      { label: 'Dạng tản nhiệt', value: 'Tháp tản nhiệt khí (Single Tower)' },
      { label: 'Ống dẫn nhiệt', value: '4 ống đồng Direct Contact 6mm' },
      { label: 'Kích thước quạt', value: '120 x 120 x 25 mm Silencio FP' },
      { label: 'Tốc độ quay', value: '650 - 2,000 RPM (PWM) ± 10%' },
      { label: 'Lưu lượng gió', value: '59 CFM max, Áp suất 2.1 mmH2O' },
      { label: 'Độ ồn tối đa', value: '8 - 30 dBA (Siêu êm)' },
      { label: 'Tương thích', value: 'Intel LGA 1700/1200/115x, AMD AM4/AM5' }
    ],
    description: 'Giải pháp làm mát khí kinh điển với các lá tản nhiệt nhôm mạ niken tối ưu khí động học và cụm tiếp xúc 4 ống đồng nguyên chất.',
    beginnerTip: '💡 Đừng quên bôi một lượng keo tản nhiệt (cỡ hạt đậu) lên giữa nắp lưng CPU trước khi siết ốc tản nhiệt để truyền nhiệt tốt nhất!',
    assemblyStep: 4,
    installedCasePartName: 'Radiator'
  },
  {
    id: 'ram_gskill_tridentz_16gb',
    name: 'G.SKILL Trident Z RGB 16GB (2x8GB) DDR4',
    category: HARDWARE_CATEGORIES.RAM,
    categoryKey: 'ram',
    tag: 'RAM',
    modelPath: '/models/RAM_model/ram_ddr4_g.skill_trident_z_rgb.glb',
    brand: 'G.SKILL',
    price: '1,750,000 đ',
    shelfPosition: { x: 3.2, y: 1.36, z: -0.8 },
    scale: 1.4,
    // Calibrated baseRotation: FBX export stood vertically; rotate -90 deg around X so light bar is on top or stands upright
    baseRotation: { x: -Math.PI / 2, y: 0, z: 0 },
    specs: [
      { label: 'Dung lượng kit', value: '16GB (2 thanh x 8GB)' },
      { label: 'Chuẩn RAM', value: 'DDR4 Unbuffered DIMM' },
      { label: 'Tốc độ Bus', value: '3200 MHz (PC4-25600)' },
      { label: 'Độ trễ (Timing)', value: 'CL16-18-18-38' },
      { label: 'Điện áp định mức', value: '1.35V (Intel XMP 2.0 Ready)' },
      { label: 'Đèn LED', value: 'RGB Dynamic Flow 5 vùng sáng' },
      { label: 'Tản nhiệt', value: 'Nhôm xước hairline cao cấp' }
    ],
    description: 'Thanh RAM cao cấp hàng đầu thế giới với dải LED RGB cầu vồng sống động cùng IC được tuyển chọn kỹ lưỡng cho khả năng ép xung tối đa.',
    beginnerTip: '💡 Khi cắm 2 thanh RAM trên bo mạch chủ có 4 khe, hãy cắm vào khe 2 và khe 4 (khe DIMM A2 & B2) để kích hoạt chế độ Kênh Đôi (Dual-Channel) giúp tăng gấp đôi băng thông nhớ!',
    assemblyStep: 5,
    installedCasePartName: 'RAM'
  },
  {
    id: 'ssd_samsung_860',
    name: 'Samsung 860 EVO 500GB 2.5" SATA III',
    category: HARDWARE_CATEGORIES.STORAGE,
    categoryKey: 'storage',
    tag: 'Storage',
    modelPath: '/models/SSD_model/samsung_ssd_2.5in_-_dirty.glb',
    brand: 'Samsung',
    price: '1,450,000 đ',
    shelfPosition: { x: 3.2, y: 1.36, z: 0.1 },
    scale: 1.5,
    // Calibrated baseRotation: FBX export was rotated sideways; rotate -90 deg around X so label is facing up
    baseRotation: { x: -Math.PI / 2, y: 0, z: 0 },
    specs: [
      { label: 'Dung lượng', value: '500 GB' },
      { label: 'Kích thước chuẩn', value: '2.5 inch (7mm mỏng nhẹ)' },
      { label: 'Giao tiếp', value: 'SATA III 6Gb/s (tương thích SATA II)' },
      { label: 'Tốc độ đọc tuần tự', value: 'Lên tới 550 MB/s' },
      { label: 'Tốc độ ghi tuần tự', value: 'Lên tới 520 MB/s' },
      { label: 'Công nghệ chip nhớ', value: 'Samsung V-NAND 3-bit MLC (TLC)' },
      { label: 'Độ bền (TBW)', value: '300 TBW (Bảo hành 5 năm)' }
    ],
    description: 'Ổ cứng SSD thể rắn huyền thoại từ Samsung đem lại độ bền bỉ phi thường, khởi động hệ điều hành và tải ứng dụng chỉ trong chớp mắt.',
    beginnerTip: '💡 Ổ cứng SSD không có bộ phận chuyển động cơ học nên chống sốc cực tốt và hoàn toàn im lặng. Kết nối cáp dữ liệu SATA từ ổ cứng vào bo mạch chủ và cáp nguồn từ PSU!',
    assemblyStep: 6,
    installedCasePartName: 'SSD'
  },
  {
    id: 'psu_aerocool_650w',
    name: 'Aerocool MasterWatt 650W 80 Plus Bronze',
    category: HARDWARE_CATEGORIES.PSU,
    categoryKey: 'psu',
    tag: 'Power Supply',
    modelPath: '/models/PSU_model/psu_power_supply_unit.glb',
    brand: 'Cooler Master / Aerocool',
    price: '1,590,000 đ',
    shelfPosition: { x: 3.2, y: 1.36, z: 0.9 },
    scale: 1.0,
    baseRotation: { x: 0, y: 0, z: 0 },
    specs: [
      { label: 'Công suất thực', value: '650 Watts liên tục' },
      { label: 'Chứng nhận hiệu suất', value: '80 PLUS Bronze (Hiệu suất > 85%)' },
      { label: 'Hệ thống cáp', value: 'Semi-Modular (Bọc lưới đen gọn gàng)' },
      { label: 'Kích thước quạt', value: '120mm LDB Fan điều tốc tự động' },
      { label: 'Mạch bảo vệ', value: 'OVP, OPP, SCP, OCP, UVP, OTP' },
      { label: 'Đầu nối cấp nguồn', value: '1x 24-Pin ATX, 1x 8-Pin EPS CPU, 2x 8-Pin PCIe, 6x SATA' },
      { label: 'Chuẩn nguồn', value: 'ATX 12V v2.4' }
    ],
    description: 'Trái tim cấp năng lượng bền bỉ cho toàn bộ dàn máy với tụ điện thể rắn cao cấp chịu nhiệt 105°C và đường 12V Single Rail công suất cao.',
    beginnerTip: '💡 Luôn lắp nguồn với quạt hút hướng xuống lưới lọc bụi dưới đáy thùng máy để hút không khí mát từ bên ngoài phòng vào làm mát linh kiện nguồn!',
    assemblyStep: 7,
    installedCasePartName: 'PSU'
  },
  {
    id: 'gpu_rtx_3090',
    name: 'NVIDIA GeForce RTX 3090 Founders Edition',
    category: HARDWARE_CATEGORIES.GPU,
    categoryKey: 'gpu',
    tag: 'GPU',
    modelPath: '/models/GPU_model/nvidia_geforce_rtx_3090_-_gpu.glb',
    brand: 'NVIDIA',
    price: '34,900,000 đ',
    shelfPosition: { x: 3.2, y: 0.86, z: -0.4 },
    scale: 1.0,
    baseRotation: { x: 0, y: 0, z: 0 },
    specs: [
      { label: 'Nhân đồ họa', value: '10,496 CUDA Cores' },
      { label: 'Bộ nhớ VRAM', value: '24 GB GDDR6X (Cực khủng)' },
      { label: 'Băng thông bộ nhớ', value: '384-bit (936 GB/s)' },
      { label: 'Xung Boost', value: '1.70 GHz' },
      { label: 'Công nghệ AI & RT', value: 'Ray Tracing Gen 2 & Tensor Cores Gen 3' },
      { label: 'Công suất tiêu thụ', value: '350 Watts (Cần 2 đầu 8-Pin PCIe)' },
      { label: 'Cổng xuất hình', value: '1x HDMI 2.1, 3x DisplayPort 1.4a' }
    ],
    description: 'Quái thú đồ họa (BFGPU) đỉnh cao nhất thế giới cho phép trải nghiệm game mượt mà ở độ phân giải 8K HDR và dựng hình 3D, Render video chuyên nghiệp.',
    beginnerTip: '💡 Card đồ họa rất nặng và tiêu thụ nhiều điện. Hãy lắp vào khe PCIe x16 trên cùng gần CPU nhất để đạt tốc độ tối đa, siết chặt ốc giữ ở thành case và cắm đủ nguồn 8-Pin PCIe!',
    assemblyStep: 8,
    installedCasePartName: 'RTX2080ti'
  }
];

export const ASSEMBLY_STEPS = [
  {
    step: 1,
    title: 'Mở nắp kính thùng máy tính',
    shortName: 'Mở nắp kính',
    target: 'case_glass',
    icon: 'wrench',
    instruction: 'Nhấn chuột trái vào nắp kính cường lực (Side Glass) ở mặt bên thùng máy để tháo ra, sẵn sàng cho việc lắp linh kiện.',
    tip: 'Trong thực tế, hãy vặn 4 ốc núm cao su ở 4 góc kính cẩn thận và đặt kính lên nơi êm mềm để tránh trầy xước!'
  },
  {
    step: 2,
    title: 'Lắp đặt Bo mạch chủ (Motherboard)',
    shortName: 'Lắp Bo mạch chủ',
    target: 'mb_asus_z370',
    icon: 'cpu',
    instruction: 'Lấy Bo mạch chủ ASUS ROG STRIX từ kệ sắt hoặc túi đồ (R) và đặt vào đúng vị trí ốc chân đồng (standoffs) trong case.',
    tip: 'Căn khớp mặt cổng I/O phía sau với miếng chặn main và siết các ốc vít theo thứ tự đối xứng.'
  },
  {
    step: 3,
    title: 'Lắp Bộ vi xử lý (CPU AMD Ryzen)',
    shortName: 'Lắp CPU',
    target: 'cpu_ryzen_3600',
    icon: 'zap',
    instruction: 'Mở cần gạt socket CPU, căn đúng góc tam giác vàng và đặt CPU Ryzen vào socket, sau đó gạt cần khóa ngàm lại.',
    tip: 'Không dùng sức ấn mạnh. Khi đúng chiều, chip CPU sẽ tự động trượt êm ái vào các lỗ socket.'
  },
  {
    step: 4,
    title: 'Lắp Tản nhiệt CPU (Cooler Master)',
    shortName: 'Lắp Tản nhiệt CPU',
    target: 'cooler_master_212',
    icon: 'wind',
    instruction: 'Bôi keo tản nhiệt lên lưng CPU và gắn tháp tản nhiệt Cooler Master lên socket, siết ốc đối xứng và cắm dây fan CPU.',
    tip: 'Siết ốc theo hình chữ X (chéo góc) từng vòng một để lực ép keo tản nhiệt trải đều trên bề mặt chip.'
  },
  {
    step: 5,
    title: 'Cắm thanh RAM G.SKILL Trident Z RGB',
    shortName: 'Cắm RAM',
    target: 'ram_gskill_tridentz_16gb',
    icon: 'layers',
    instruction: 'Mở lẫy 2 đầu khe RAM, căn rãnh khuyết ở chân cắm và ấn đều 2 đầu thanh RAM cho đến khi lẫy tự động gài kêu tách.',
    tip: 'Cắm vào khe DIMM 2 & 4 để chạy Dual Channel tối ưu hiệu năng băng thông.'
  },
  {
    step: 6,
    title: 'Lắp Ổ cứng thể rắn SSD Samsung',
    shortName: 'Lắp Ổ SSD',
    target: 'ssd_samsung_860',
    icon: 'hard-drive',
    instruction: 'Gắn ổ cứng SSD Samsung vào khay ổ cứng và siết ốc cố định.',
    tip: 'SSD thể rắn giúp máy tính khởi động Windows trong vòng 5 giây và mở phần mềm cực nhanh.'
  },
  {
    step: 7,
    title: 'Lắp Bộ nguồn máy tính (PSU)',
    shortName: 'Lắp Nguồn PSU',
    target: 'psu_aerocool_650w',
    icon: 'battery-charging',
    instruction: 'Đưa bộ nguồn vào khoang hộc đáy thùng case, quạt hướng xuống dưới và bắt 4 ốc ở mặt sau.',
    tip: 'Bộ nguồn đóng vai trò chuyển điện xoay chiều 220V thành các dòng điện 12V, 5V, 3.3V cho toàn bộ hệ thống.'
  },
  {
    step: 8,
    title: 'Lắp Card màn hình rời (NVIDIA RTX 3090)',
    shortName: 'Lắp Card GPU',
    target: 'gpu_rtx_3090',
    icon: 'tv',
    instruction: 'Cắm card RTX 3090 vào khe PCIe x16 đầu tiên trên mainboard, gạt lẫy khóa và siết ốc giữ vào khung case.',
    tip: 'RTX 3090 là card đồ họa đầu bảng, cần cắm đủ 2 đầu nguồn phụ 8-Pin PCIe để hoạt động ổn định.'
  },
  {
    step: 9,
    title: 'Cắm hệ thống Dây nguồn & Cáp tín hiệu',
    shortName: 'Cắm Dây cáp',
    target: 'cables_connected',
    icon: 'git-merge',
    instruction: 'Nhấn vào các đầu dây để cắm dây 24-Pin ATX Mainboard, 8-Pin CPU EPS, dây PCIe GPU và dây Power Switch.',
    tip: 'Dây cáp máy tính đều có ngàm chống cắm ngược, nếu thấy cắm vào bị cấn hãy kiểm tra lại chiều đầu cắm.'
  },
  {
    step: 10,
    title: 'Đóng nắp kính cường lực thùng máy',
    shortName: 'Đóng nắp kính',
    target: 'case_glass_close',
    icon: 'shield',
    instruction: 'Lắp lại nắp kính cường lực vào mặt bên case để bảo vệ linh kiện và hoàn thiện tính thẩm mỹ.',
    tip: 'Thùng máy kín giúp luồng gió thổi từ quạt trước ra quạt sau tạo áp suất làm mát tối ưu.'
  },
  {
    step: 11,
    title: 'Cắm Dây màn hình & Nguồn điện máy tính',
    shortName: 'Kết nối Màn hình & Điện',
    target: 'power_plug',
    icon: 'monitor',
    instruction: 'Cắm dây DisplayPort / HDMI từ card RTX 3090 lên Màn hình máy tính và cắm dây nguồn AC vào ổ điện.',
    tip: '⚠️ Lưu ý vàng cho người mới: Phải cắm dây màn hình vào Card đồ họa (GPU) ở dưới, KHÔNG cắm vào cổng trên mainboard!'
  },
  {
    step: 12,
    title: 'BẬT NGUỒN & KHỞI ĐỘNG HỆ THỐNG!',
    shortName: 'Bật nguồn & Test máy',
    target: 'power_button',
    icon: 'power',
    instruction: 'Nhấn nút Power ở mặt trên thùng máy! Chiêm ngưỡng quạt tản nhiệt quay, đèn RGB sáng rực và màn hình boot BIOS!',
    tip: 'Quy trình POST (Power-On Self Test) sẽ kiểm tra RAM, CPU, VGA. Khi tiếng beep ngắn vang lên tức là máy tính đã lắp ráp hoàn hảo!'
  }
];
````

## File: src/scene/CaseAssembly.js
````javascript
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { sounds } from '../audio/SoundEffects.js';

export class CaseAssembly {
  constructor(scene, onStepComplete) {
    this.scene = scene;
    this.onStepComplete = onStepComplete;
    this.group = new THREE.Group();
    this.caseModel = null;
    this.parts = {};
    this.fans = [];
    this.rgbLights = [];
    this.isGlassOpen = false;
    this.isPoweredOn = false;
    this.cablesConnected = false;
    this.monitorConnected = false;
    this.installedParts = new Set();
    this.highlightMesh = null;
    this.snapZones = {};
    this.interactableObjects = [];

    // Position in center-left of wooden workbench
    this.group.position.set(-0.35, 0.82, 0.05);
    this.group.rotation.y = Math.PI / 4; // 45 deg angle into case interior

    this.scene.add(this.group);
    this.createInteractiveSnapZones();
  }

  loadModel(onProgress, onLoaded) {
    const loader = new GLTFLoader();
    loader.load(
      '/models/Completed_Computer_Case_Model/dream_computer_setup.glb',
      gltf => {
        this.caseModel = gltf.scene;

        // Auto-scale to realistic ATX case dimensions (approx 48cm high, 45cm deep, 22cm wide)
        const box = new THREE.Box3().setFromObject(this.caseModel);
        const size = box.getSize(new THREE.Vector3());
        const targetHeight = 0.48;
        const scale = targetHeight / size.y;
        this.caseModel.scale.set(scale, scale, scale);

        // Center bottom to y=0
        box.setFromObject(this.caseModel);
        this.caseModel.position.y = -box.min.y;

        this.caseModel.traverse(node => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            if (node.material) {
              node.material.roughness = Math.max(0.2, node.material.roughness || 0.5);
            }
          }

          // Identify key component nodes
          const name = node.name;
          if (name) {
            this.parts[name] = node;

            // Collect fan rotors for spinning animation
            if (name.toLowerCase().includes('fan') || name.toLowerCase().includes('propeller')) {
              this.fans.push(node);
            }
          }
        });

        // Initially hide internal modular parts for empty case state
        this.resetToEmptyState();

        this.group.add(this.caseModel);

        if (onLoaded) onLoaded();
      },
      xhr => {
        if (xhr.lengthComputable && onProgress) {
          onProgress(xhr.loaded / xhr.total);
        }
      },
      error => {
        console.error('Error loading PC Case model:', error);
      }
    );
  }

  resetToEmptyState() {
    const hideList = [
      'MotherBoard',
      'CPU',
      'M2',
      'RTX2080ti',
      'Radiator',
      'RAM',
      'RAM1',
      'RAM2',
      'RAM3',
      'SSD',
      'PSU',
      'WaterCooling'
    ];

    hideList.forEach(name => {
      if (this.parts[name]) {
        this.parts[name].visible = false;
      }
    });

    // Side glass starts closed
    if (this.parts['GlassSide']) {
      this.parts['GlassSide'].visible = true;
      this.parts['GlassSide'].userData = { type: 'glass_side' };
      this.interactableObjects.push(this.parts['GlassSide']);
    }
  }

  createInteractiveSnapZones() {
    // Virtual click targets / snap zones on case
    const zoneMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });

    // Motherboard zone
    const mbZone = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.28, 0.05), zoneMat.clone());
    mbZone.position.set(0.02, 0.28, -0.05);
    mbZone.userData = { snapType: 'motherboard', step: 2 };
    this.snapZones['motherboard'] = mbZone;
    this.group.add(mbZone);
    this.interactableObjects.push(mbZone);

    // CPU zone
    const cpuZone = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.04), zoneMat.clone());
    cpuZone.position.set(0.04, 0.32, -0.02);
    cpuZone.userData = { snapType: 'cpu', step: 3 };
    this.snapZones['cpu'] = cpuZone;
    this.group.add(cpuZone);
    this.interactableObjects.push(cpuZone);

    // Cooler zone
    const coolerZone = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), zoneMat.clone());
    coolerZone.position.set(0.04, 0.32, 0.04);
    coolerZone.userData = { snapType: 'cooler', step: 4 };
    this.snapZones['cooler'] = coolerZone;
    this.group.add(coolerZone);
    this.interactableObjects.push(coolerZone);

    // RAM zone
    const ramZone = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.12, 0.04), zoneMat.clone());
    ramZone.position.set(0.11, 0.32, -0.02);
    ramZone.userData = { snapType: 'ram', step: 5 };
    this.snapZones['ram'] = ramZone;
    this.group.add(ramZone);
    this.interactableObjects.push(ramZone);

    // SSD zone
    const ssdZone = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.03), zoneMat.clone());
    ssdZone.position.set(-0.12, 0.22, 0.02);
    ssdZone.userData = { snapType: 'storage', step: 6 };
    this.snapZones['storage'] = ssdZone;
    this.group.add(ssdZone);
    this.interactableObjects.push(ssdZone);

    // PSU zone (bottom chamber)
    const psuZone = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.15), zoneMat.clone());
    psuZone.position.set(-0.08, 0.08, -0.05);
    psuZone.userData = { snapType: 'psu', step: 7 };
    this.snapZones['psu'] = psuZone;
    this.group.add(psuZone);
    this.interactableObjects.push(psuZone);

    // GPU zone (PCIe slot)
    const gpuZone = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.08), zoneMat.clone());
    gpuZone.position.set(0.02, 0.22, 0.02);
    gpuZone.userData = { snapType: 'gpu', step: 8 };
    this.snapZones['gpu'] = gpuZone;
    this.group.add(gpuZone);
    this.interactableObjects.push(gpuZone);

    // Power Button on top front of case
    const btnMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.8 });
    const pwrBtn = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.01, 16), btnMat);
    pwrBtn.position.set(0.12, 0.485, 0.15);
    pwrBtn.userData = { type: 'power_button', step: 12 };
    this.group.add(pwrBtn);
    this.interactableObjects.push(pwrBtn);
    this.pwrButtonMesh = pwrBtn;

    // Cable plug button
    const cableMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.3 });
    const cableNode = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.03, 0.03), cableMat);
    cableNode.position.set(0.14, 0.25, -0.05);
    cableNode.userData = { type: 'cables', step: 9 };
    this.group.add(cableNode);
    this.interactableObjects.push(cableNode);
    this.cableNodeMesh = cableNode;
  }

  toggleSideGlass() {
    this.isGlassOpen = !this.isGlassOpen;
    if (this.parts['GlassSide']) {
      sounds.playScrew();
      if (this.isGlassOpen) {
        // Slide / remove side glass
        this.parts['GlassSide'].position.z += 0.4;
        this.parts['GlassSide'].visible = false;
      } else {
        this.parts['GlassSide'].visible = true;
        this.parts['GlassSide'].position.z -= 0.4;
      }
    }
    return this.isGlassOpen;
  }

  installComponent(categoryKey) {
    let installedPartName = null;
    let stepNumber = null;

    switch (categoryKey) {
      case 'motherboard':
        installedPartName = 'MotherBoard';
        stepNumber = 2;
        break;
      case 'cpu':
        installedPartName = 'CPU';
        stepNumber = 3;
        break;
      case 'cooler':
        installedPartName = 'Radiator';
        stepNumber = 4;
        break;
      case 'ram':
        installedPartName = 'RAM';
        stepNumber = 5;
        // Also show extra RAM sticks
        if (this.parts['RAM1']) this.parts['RAM1'].visible = true;
        break;
      case 'storage':
        installedPartName = 'SSD';
        if (this.parts['M2']) this.parts['M2'].visible = true;
        stepNumber = 6;
        break;
      case 'psu':
        installedPartName = 'PSU';
        stepNumber = 7;
        break;
      case 'gpu':
        installedPartName = 'RTX2080ti';
        stepNumber = 8;
        break;
    }

    if (installedPartName && this.parts[installedPartName]) {
      this.parts[installedPartName].visible = true;
      this.installedParts.add(categoryKey);

      // Play authentic sound
      if (categoryKey === 'ram' || categoryKey === 'gpu') {
        sounds.playSnap();
      } else {
        sounds.playScrew();
      }

      // Hide corresponding snap zone
      if (this.snapZones[categoryKey]) {
        this.snapZones[categoryKey].visible = false;
      }

      if (this.onStepComplete) {
        this.onStepComplete(stepNumber, categoryKey);
      }

      return true;
    }
    return false;
  }

  connectCables() {
    this.cablesConnected = true;
    sounds.playSnap();
    if (this.cableNodeMesh) {
      this.cableNodeMesh.material.color.setHex(0x22c55e);
    }
    if (this.onStepComplete) {
      this.onStepComplete(9, 'cables');
    }
  }

  connectMonitorAndPower() {
    this.monitorConnected = true;
    sounds.playSnap();
    if (this.onStepComplete) {
      this.onStepComplete(11, 'monitor_power');
    }
  }

  powerOnSystem() {
    if (this.isPoweredOn) return false;
    this.isPoweredOn = true;

    // Sound: Power switch click -> POST beep -> Fan humming
    sounds.playPowerSwitch();

    setTimeout(() => {
      sounds.playPostBeep();
      sounds.startFanHum();
      sounds.playVictoryFanfare();
    }, 600);

    // RGB illumination inside case
    const psuLight = new THREE.PointLight(0x00ffff, 2.5, 1.2);
    psuLight.position.set(0, 0.25, 0);
    this.group.add(psuLight);
    this.rgbLights.push(psuLight);

    const ramLight = new THREE.PointLight(0xff00ff, 2.0, 0.8);
    ramLight.position.set(0.1, 0.32, 0);
    this.group.add(ramLight);
    this.rgbLights.push(ramLight);

    if (this.onStepComplete) {
      this.onStepComplete(12, 'power_on');
    }

    return true;
  }

  update(delta) {
    // Fan spin animation when powered on
    if (this.isPoweredOn) {
      this.fans.forEach(fan => {
        fan.rotation.z += delta * 15;
      });

      // Animated dynamic RGB lighting cycle
      this.group.position.y = 0.82; // maintain
      const t = performance.now() * 0.002;
      this.rgbLights.forEach((light, idx) => {
        const hue = (t + idx * 0.3) % 1;
        light.color.setHSL(hue, 1, 0.5);
      });
    }
  }
}
````

## File: src/scene/ItemPreviewScene.js
````javascript
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class ItemPreviewScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    this.camera.position.set(0, 0.3, 1.8);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(canvas.clientWidth || 360, canvas.clientHeight || 360);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    this.loader = new GLTFLoader();
    this.currentModel = null;
    this.modelCache = new Map();
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.autoRotate = true;

    this.setupLighting();
    this.setupControls();
  }

  setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(2, 4, 3);
    this.scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    rimLight.position.set(-2, -1, -2);
    this.scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xa855f7, 0.8);
    fillLight.position.set(-2, 2, 2);
    this.scene.add(fillLight);
  }

  setupControls() {
    this.canvas.addEventListener('mousedown', e => {
      this.isDragging = true;
      this.autoRotate = false;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', e => {
      if (!this.isDragging || !this.currentModel) return;
      const deltaX = e.clientX - this.previousMousePosition.x;
      const deltaY = e.clientY - this.previousMousePosition.y;

      this.currentModel.rotation.y += deltaX * 0.01;
      this.currentModel.rotation.x += deltaY * 0.01;

      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch support
    this.canvas.addEventListener('touchstart', e => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.autoRotate = false;
        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    });

    window.addEventListener('touchmove', e => {
      if (!this.isDragging || !this.currentModel || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
      const deltaY = e.touches[0].clientY - this.previousMousePosition.y;
      this.currentModel.rotation.y += deltaX * 0.01;
      this.currentModel.rotation.x += deltaY * 0.01;
      this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });
  }

  loadItemModel(modelPath, baseRotation = null) {
    if (this.currentModel) {
      this.scene.remove(this.currentModel);
      this.currentModel = null;
    }

    if (this.modelCache.has(modelPath)) {
      const cloned = this.modelCache.get(modelPath).clone();
      this.setModel(cloned, baseRotation);
      return;
    }

    this.loader.load(modelPath, gltf => {
      const model = gltf.scene;
      this.modelCache.set(modelPath, model.clone());
      this.setModel(model, baseRotation);
    });
  }

  setModel(model, baseRotation = null) {
    // Normalize and center model
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    const targetSize = 1.0;
    const scale = targetSize / (maxDim || 1);
    model.scale.set(scale, scale, scale);

    // Center pivot
    model.position.x = -center.x * scale;
    model.position.y = -center.y * scale;
    model.position.z = -center.z * scale;

    const baseWrapper = new THREE.Group();
    baseWrapper.add(model);

    if (baseRotation) {
      baseWrapper.rotation.set(
        baseRotation.x || 0,
        baseRotation.y || 0,
        baseRotation.z || 0
      );
    }

    // Wrap in outer pivot group for clean rotation
    const pivot = new THREE.Group();
    pivot.add(baseWrapper);
    pivot.position.set(0, 0, 0);

    this.currentModel = pivot;
    this.scene.add(this.currentModel);
    this.autoRotate = true;
  }

  resize() {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    if (width && height && (this.canvas.width !== width || this.canvas.height !== height)) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height, false);
    }
  }

  render() {
    this.resize();
    if (this.currentModel && this.autoRotate && !this.isDragging) {
      this.currentModel.rotation.y += 0.008;
    }
    this.renderer.render(this.scene, this.camera);
  }
}
````

## File: src/scene/PlacedItemManager.js
````javascript
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { sounds } from '../audio/SoundEffects.js';

export class PlacedItemManager {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.loader = new GLTFLoader();
    this.placedItems = new Map(); // id -> THREE.Group
    this.interactables = [];

    this.scene.add(this.group);
  }

  placeItemAt(itemData, worldPosition, surfaceNormal = new THREE.Vector3(0, 1, 0)) {
    sounds.playDrop();

    this.loader.load(
      itemData.modelPath,
      gltf => {
        const model = gltf.scene;

        // Normalize size
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const targetDim = 0.32;
        const s = (targetDim / (maxDim || 1)) * (itemData.scale || 1.0);
        model.scale.set(s, s, s);

        // Center on pivot
        model.position.set(-center.x * s, -box.min.y * s, -center.z * s);

        const innerWrapper = new THREE.Group();
        innerWrapper.add(model);

        // Apply calibrated base rotation so it lays flat / stands upright
        if (itemData.baseRotation) {
          innerWrapper.rotation.set(
            itemData.baseRotation.x || 0,
            itemData.baseRotation.y || 0,
            itemData.baseRotation.z || 0
          );
        }

        const outerWrapper = new THREE.Group();
        outerWrapper.add(innerWrapper);

        // Slight offset above surface to avoid z-fighting
        const posY = Math.max(0.01, worldPosition.y + 0.01);
        outerWrapper.position.set(worldPosition.x, posY, worldPosition.z);

        outerWrapper.traverse(child => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.userData = { itemId: itemData.id, itemName: itemData.name, isPlaced: true };
          }
        });

        outerWrapper.userData = { itemId: itemData.id, itemName: itemData.name, isPlaced: true };

        this.group.add(outerWrapper);
        this.placedItems.set(itemData.id, outerWrapper);
        this.interactables.push(outerWrapper);
      },
      undefined,
      err => console.warn(`Error placing ${itemData.name}:`, err)
    );
  }

  removeItem(itemId) {
    const mesh = this.placedItems.get(itemId);
    if (mesh) {
      this.group.remove(mesh);
      this.placedItems.delete(itemId);
      const idx = this.interactables.indexOf(mesh);
      if (idx !== -1) this.interactables.splice(idx, 1);
    }
  }
}
````

## File: src/scene/Room.js
````javascript
import * as THREE from 'three';

export class Room {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.colliders = [];
    this.surfaces = [];
    this.interactables = [];
    this.monitorTexture = null;
    this.monitorCanvas = null;
    this.monitorContext = null;
    this.monitorScreenMesh = null;
    this.monitorState = 'OFF'; // 'OFF', 'NO_SIGNAL', 'POST', 'OS'
    this.postProgress = 0;
    this.rgbTime = 0;

    this.createRoom();
    this.createWorkbench();
    this.createIronRack();
    this.createMonitor();
    this.createPeripherals();
    this.createDecorations();

    this.scene.add(this.group);
  }

  createRoom() {
    // Room dimensions: 12m wide, 10m deep, 4.2m high
    const roomWidth = 12;
    const roomDepth = 10;
    const roomHeight = 4.2;

    // Floor texture: Clean light oak wood planks / modern concrete
    const floorCanvas = document.createElement('canvas');
    floorCanvas.width = 512;
    floorCanvas.height = 512;
    const fCtx = floorCanvas.getContext('2d');
    fCtx.fillStyle = '#e5e0d8';
    fCtx.fillRect(0, 0, 512, 512);
    // Subtle wood planks
    fCtx.strokeStyle = '#d0cac0';
    fCtx.lineWidth = 3;
    for (let y = 0; y <= 512; y += 64) {
      fCtx.beginPath();
      fCtx.moveTo(0, y);
      fCtx.lineTo(512, y);
      fCtx.stroke();
    }
    for (let y = 0; y < 512; y += 64) {
      const offset = (y / 64) % 2 === 0 ? 0 : 128;
      for (let x = offset; x <= 512; x += 256) {
        fCtx.beginPath();
        fCtx.moveTo(x, y);
        fCtx.lineTo(x, y + 64);
        fCtx.stroke();
      }
    }
    const floorTex = new THREE.CanvasTexture(floorCanvas);
    floorTex.wrapS = THREE.RepeatWrapping;
    floorTex.wrapT = THREE.RepeatWrapping;
    floorTex.repeat.set(6, 5);

    const floorMat = new THREE.MeshStandardMaterial({
      map: floorTex,
      roughness: 0.45,
      metalness: 0.05
    });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(roomWidth, roomDepth), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.group.add(floor);
    this.surfaces.push(floor);

    // Ceiling
    const ceilMat = new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.9 });
    const ceil = new THREE.Mesh(new THREE.PlaneGeometry(roomWidth, roomDepth), ceilMat);
    ceil.rotation.x = Math.PI / 2;
    ceil.position.y = roomHeight;
    this.group.add(ceil);

    // Walls
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xf4f3f0, roughness: 0.8 });
    const accentWallMat = new THREE.MeshStandardMaterial({ color: 0xe8e6e1, roughness: 0.7 });

    // Back Wall (Z = -roomDepth / 2)
    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(roomWidth, roomHeight), accentWallMat);
    backWall.position.set(0, roomHeight / 2, -roomDepth / 2);
    backWall.receiveShadow = true;
    this.group.add(backWall);

    // Front Wall (Z = roomDepth / 2)
    const frontWall = new THREE.Mesh(new THREE.PlaneGeometry(roomWidth, roomHeight), wallMat);
    frontWall.rotation.y = Math.PI;
    frontWall.position.set(0, roomHeight / 2, roomDepth / 2);
    this.group.add(frontWall);

    // Left Wall with large window
    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(roomDepth, roomHeight), wallMat);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-roomWidth / 2, roomHeight / 2, 0);
    this.group.add(leftWall);

    // Window frame on left wall
    const windowFrameMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.3 });
    const winOuter = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.4, 5.0), windowFrameMat);
    winOuter.position.set(-roomWidth / 2 + 0.05, 2.2, 0);
    this.group.add(winOuter);

    // Window Glass with sky glow
    const winGlassMat = new THREE.MeshBasicMaterial({
      color: 0xddf0ff,
      transparent: true,
      opacity: 0.85
    });
    const winGlass = new THREE.Mesh(new THREE.BoxGeometry(0.05, 2.2, 4.8), winGlassMat);
    winGlass.position.set(-roomWidth / 2 + 0.05, 2.2, 0);
    this.group.add(winGlass);

    // Right Wall (next to iron rack)
    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(roomDepth, roomHeight), wallMat);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(roomWidth / 2, roomHeight / 2, 0);
    rightWall.receiveShadow = true;
    this.group.add(rightWall);

    // Baseboards around walls
    const baseboardMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    const bbBack = new THREE.Mesh(new THREE.BoxGeometry(roomWidth, 0.15, 0.04), baseboardMat);
    bbBack.position.set(0, 0.075, -roomDepth / 2 + 0.02);
    this.group.add(bbBack);
  }

  createWorkbench() {
    // Workbench in center: 2.6m wide, 1.2m deep, 0.82m high
    const tableWidth = 2.6;
    const tableDepth = 1.2;
    const tableHeight = 0.82;
    const topThickness = 0.06;

    // Rich dark oak wooden tabletop texture
    const woodCanvas = document.createElement('canvas');
    woodCanvas.width = 512;
    woodCanvas.height = 512;
    const wCtx = woodCanvas.getContext('2d');
    wCtx.fillStyle = '#6b4724'; // Warm oak tone
    wCtx.fillRect(0, 0, 512, 512);
    // Subtle wood grain stripes
    for (let i = 0; i < 50; i++) {
      const y = Math.random() * 512;
      wCtx.strokeStyle = Math.random() > 0.5 ? '#553617' : '#7d542d';
      wCtx.lineWidth = 2 + Math.random() * 4;
      wCtx.beginPath();
      wCtx.moveTo(0, y);
      wCtx.bezierCurveTo(150, y + (Math.random() - 0.5) * 20, 350, y + (Math.random() - 0.5) * 20, 512, y);
      wCtx.stroke();
    }
    const woodTex = new THREE.CanvasTexture(woodCanvas);
    woodTex.wrapS = THREE.RepeatWrapping;
    woodTex.wrapT = THREE.RepeatWrapping;
    woodTex.repeat.set(2, 1);

    const tableTopMat = new THREE.MeshStandardMaterial({
      map: woodTex,
      roughness: 0.35,
      metalness: 0.05
    });

    const tableTop = new THREE.Mesh(
      new THREE.BoxGeometry(tableWidth, topThickness, tableDepth),
      tableTopMat
    );
    tableTop.position.set(0, tableHeight - topThickness / 2, 0);
    tableTop.castShadow = true;
    tableTop.receiveShadow = true;
    this.group.add(tableTop);
    this.surfaces.push(tableTop);

    // Sturdy matte black steel legs
    const legMat = new THREE.MeshStandardMaterial({
      color: 0x1f2226,
      roughness: 0.4,
      metalness: 0.8
    });

    const legRadius = 0.04;
    const legH = tableHeight - topThickness;
    const legPositions = [
      [-tableWidth / 2 + 0.1, legH / 2, -tableDepth / 2 + 0.1],
      [tableWidth / 2 - 0.1, legH / 2, -tableDepth / 2 + 0.1],
      [-tableWidth / 2 + 0.1, legH / 2, tableDepth / 2 - 0.1],
      [tableWidth / 2 - 0.1, legH / 2, tableDepth / 2 - 0.1]
    ];

    legPositions.forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, legH, 0.08), legMat);
      leg.position.set(x, y, z);
      leg.castShadow = true;
      leg.receiveShadow = true;
      this.group.add(leg);
    });

    // Crossbar support
    const crossbar = new THREE.Mesh(new THREE.BoxGeometry(tableWidth - 0.2, 0.05, 0.05), legMat);
    crossbar.position.set(0, 0.25, -tableDepth / 2 + 0.1);
    this.group.add(crossbar);

    // Add table to collision system
    this.colliders.push({
      minX: -tableWidth / 2 - 0.2,
      maxX: tableWidth / 2 + 0.2,
      minZ: -tableDepth / 2 - 0.2,
      maxZ: tableDepth / 2 + 0.2
    });

    // Antistatic assembly desk pad on table (center-left for assembling)
    const padMat = new THREE.MeshStandardMaterial({
      color: 0x1a2130,
      roughness: 0.6,
      metalness: 0.1
    });
    const pad = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.005, 0.8), padMat);
    pad.position.set(-0.25, tableHeight + 0.003, 0);
    pad.receiveShadow = true;
    this.group.add(pad);
    this.surfaces.push(pad);

    // Decorative grid on antistatic pad
    const padBorderMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
    const padBorder = new THREE.Mesh(new THREE.BoxGeometry(1.38, 0.006, 0.01), padBorderMat);
    padBorder.position.set(-0.25, tableHeight + 0.004, -0.39);
    this.group.add(padBorder);
  }

  createIronRack() {
    // 4-tier industrial metal shelf rack on the right side
    const rackWidth = 1.0;
    const rackDepth = 2.4;
    const rackHeight = 2.4;
    const rackX = 3.3; // Right side of the room
    const rackZ = 0;

    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x272b30,
      roughness: 0.35,
      metalness: 0.85
    });

    // 4 vertical upright posts
    const postGeo = new THREE.BoxGeometry(0.06, rackHeight, 0.06);
    const postOffsets = [
      [-rackWidth / 2, -rackDepth / 2],
      [rackWidth / 2, -rackDepth / 2],
      [-rackWidth / 2, rackDepth / 2],
      [rackWidth / 2, rackDepth / 2]
    ];

    postOffsets.forEach(([ox, oz]) => {
      const post = new THREE.Mesh(postGeo, metalMat);
      post.position.set(rackX + ox, rackHeight / 2, rackZ + oz);
      post.castShadow = true;
      this.group.add(post);
    });

    // 4 shelf tiers
    const tierHeights = [0.35, 0.85, 1.35, 1.85];
    const shelfGeo = new THREE.BoxGeometry(rackWidth + 0.04, 0.03, rackDepth + 0.04);
    const shelfMat = new THREE.MeshStandardMaterial({
      color: 0x3a4047,
      roughness: 0.5,
      metalness: 0.7
    });

    tierHeights.forEach(h => {
      const shelf = new THREE.Mesh(shelfGeo, shelfMat);
      shelf.position.set(rackX, h, rackZ);
      shelf.castShadow = true;
      shelf.receiveShadow = true;
      this.group.add(shelf);
      this.surfaces.push(shelf);

      // Shelf label bar / accent strip
      const stripMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff });
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.02, rackDepth), stripMat);
      strip.position.set(rackX - rackWidth / 2 - 0.02, h, rackZ);
      this.group.add(strip);
    });

    // Back cross braces
    const braceMat = new THREE.MeshStandardMaterial({ color: 0x1f2327, metalness: 0.8 });
    const brace = new THREE.Mesh(new THREE.BoxGeometry(0.02, 2.0, 0.02), braceMat);
    brace.rotation.x = Math.PI / 4;
    brace.position.set(rackX + rackWidth / 2, 1.2, rackZ);
    this.group.add(brace);

    // Signboard on top of rack: "HARDWARE STORAGE"
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 512;
    signCanvas.height = 128;
    const sCtx = signCanvas.getContext('2d');
    sCtx.fillStyle = '#0f172a';
    sCtx.fillRect(0, 0, 512, 128);
    sCtx.strokeStyle = '#38bdf8';
    sCtx.lineWidth = 6;
    sCtx.strokeRect(4, 4, 504, 120);
    sCtx.font = 'bold 36px "Segoe UI", sans-serif';
    sCtx.fillStyle = '#38bdf8';
    sCtx.textAlign = 'center';
    sCtx.textBaseline = 'middle';
    sCtx.fillText('KỆ LINH KIỆN PHẦN CỨNG', 256, 64);

    const signTex = new THREE.CanvasTexture(signCanvas);
    const sign = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.3, 1.4),
      new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.3 })
    );
    sign.position.set(rackX - rackWidth / 2 - 0.02, rackHeight + 0.15, rackZ);
    this.group.add(sign);

    // Rack collider
    this.colliders.push({
      minX: rackX - rackWidth / 2 - 0.2,
      maxX: rackX + rackWidth / 2 + 0.2,
      minZ: rackZ - rackDepth / 2 - 0.2,
      maxZ: rackZ + rackDepth / 2 + 0.2
    });
  }

  createMonitor() {
    // Monitor positioned on the right side of the desk
    const monX = 0.75;
    const monY = 0.82; // Table surface
    const monZ = -0.2;

    const bezelMat = new THREE.MeshStandardMaterial({ color: 0x111317, roughness: 0.3, metalness: 0.8 });

    // Stand base
    const standBase = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.015, 0.24), bezelMat);
    standBase.position.set(monX, monY + 0.01, monZ);
    standBase.receiveShadow = true;
    this.group.add(standBase);

    // Stand arm
    const standArm = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.35, 0.05), bezelMat);
    standArm.position.set(monX, monY + 0.18, monZ - 0.06);
    standArm.rotation.x = -0.1;
    this.group.add(standArm);

    // Monitor Body (27" 16:9 monitor: ~62cm wide, ~36cm high)
    const monW = 0.68;
    const monH = 0.40;
    const monBody = new THREE.Mesh(new THREE.BoxGeometry(monW, monH, 0.03), bezelMat);
    monBody.position.set(monX, monY + 0.34, monZ);
    monBody.rotation.y = -0.25; // angled slightly towards player
    this.group.add(monBody);

    // Interactive Screen Canvas
    this.monitorCanvas = document.createElement('canvas');
    this.monitorCanvas.width = 1024;
    this.monitorCanvas.height = 576;
    this.monitorContext = this.monitorCanvas.getContext('2d');
    this.monitorTexture = new THREE.CanvasTexture(this.monitorCanvas);
    this.monitorTexture.minFilter = THREE.LinearFilter;

    this.renderMonitorScreen();

    const screenMat = new THREE.MeshBasicMaterial({
      map: this.monitorTexture
    });

    this.monitorScreenMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(monW - 0.02, monH - 0.02),
      screenMat
    );
    // Position on front face of monitor body
    this.monitorScreenMesh.position.set(0, 0, 0.016);
    monBody.add(this.monitorScreenMesh);

    // Register monitor as interactable
    monBody.userData = { type: 'monitor' };
    this.interactables.push(monBody);
  }

  createPeripherals() {
    const pY = 0.82; // Table top

    // Mechanical Keyboard
    const kbMat = new THREE.MeshStandardMaterial({ color: 0x1e2229, roughness: 0.5 });
    const kb = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.02, 0.15), kbMat);
    kb.position.set(0.45, pY + 0.01, 0.22);
    kb.rotation.y = -0.15;
    this.group.add(kb);

    // RGB glow bar on keyboard
    const rgbKbMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const rgbKb = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.005, 0.01), rgbKbMat);
    rgbKb.position.set(0.45, pY + 0.022, 0.29);
    rgbKb.rotation.y = -0.15;
    this.group.add(rgbKb);

    // Gaming Mouse
    const mouseMat = new THREE.MeshStandardMaterial({ color: 0x22262e, roughness: 0.4 });
    const mouse = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.03, 0.12), mouseMat);
    mouse.position.set(0.82, pY + 0.015, 0.2);
    mouse.rotation.y = -0.1;
    this.group.add(mouse);

    // Toolkit / Screwdriver set on desk
    const toolMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.3, metalness: 0.7 });
    const screwdriver = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.2), toolMat);
    screwdriver.rotation.z = Math.PI / 2;
    screwdriver.position.set(-0.95, pY + 0.015, 0.25);
    this.group.add(screwdriver);

    // Thermal Paste tube
    const pasteMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.3 });
    const pasteTube = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.12), pasteMat);
    pasteTube.rotation.z = Math.PI / 2;
    pasteTube.rotation.y = 0.4;
    pasteTube.position.set(-0.92, pY + 0.01, 0.1);
    this.group.add(pasteTube);
  }

  createDecorations() {
    // Tech Posters on the back wall
    const makePoster = (title, subtitle, color, x, y) => {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 512;
      pCanvas.height = 720;
      const ctx = pCanvas.getContext('2d');
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, 512, 720);
      // Border
      ctx.strokeStyle = color;
      ctx.lineWidth = 12;
      ctx.strokeRect(16, 16, 480, 688);
      // Cyber lines
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 720; i += 40) {
        ctx.beginPath();
        ctx.moveTo(30, i);
        ctx.lineTo(480, i);
        ctx.stroke();
      }
      // Content
      ctx.fillStyle = color;
      ctx.font = 'bold 52px "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(title, 256, 320);
      ctx.font = '28px "Segoe UI", sans-serif';
      ctx.fillStyle = '#cbd5e1';
      ctx.fillText(subtitle, 256, 380);

      const pTex = new THREE.CanvasTexture(pCanvas);
      const poster = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 1.7),
        new THREE.MeshStandardMaterial({ map: pTex, roughness: 0.4 })
      );
      poster.position.set(x, y, -4.95);
      this.group.add(poster);
    };

    makePoster('PC MASTER RACE', 'BUILD • OPTIMIZE • GAME', '#38bdf8', -2.8, 2.5);
    makePoster('STAY COOL', 'HIGH AIRFLOW & LOW TEMPS', '#a855f7', 0, 2.5);

    // Ceiling Light Fixtures (modern linear LED lights)
    const lightFixtMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
    const ledMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let x = -3; x <= 3; x += 3) {
      const fixture = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.08, 4.0), lightFixtMat);
      fixture.position.set(x, 4.16, 0);
      this.group.add(fixture);

      const led = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.01, 3.8), ledMat);
      led.position.set(x, 4.11, 0);
      this.group.add(led);
    }
  }

  setMonitorState(state) {
    this.monitorState = state;
    this.renderMonitorScreen();
  }

  renderMonitorScreen() {
    const ctx = this.monitorContext;
    if (!ctx) return;
    const w = this.monitorCanvas.width;
    const h = this.monitorCanvas.height;

    ctx.clearRect(0, 0, w, h);

    if (this.monitorState === 'OFF') {
      ctx.fillStyle = '#05070a';
      ctx.fillRect(0, 0, w, h);
    } else if (this.monitorState === 'NO_SIGNAL') {
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 44px "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('NO SIGNAL', w / 2, h / 2 - 30);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '26px "Segoe UI", sans-serif';
      ctx.fillText('Vui lòng kết nối cáp DisplayPort / HDMI từ Card đồ họa', w / 2, h / 2 + 30);
    } else if (this.monitorState === 'POST') {
      // Classic BIOS POST screen
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 32px monospace';
      ctx.textAlign = 'left';
      ctx.fillText('AMERICAN MEGATRENDS / PC BUILDER BIOS v3.80', 50, 70);

      ctx.fillStyle = '#f8fafc';
      ctx.font = '22px monospace';
      ctx.fillText('Main Processor : AMD Ryzen 5 3600 6-Core Processor @ 3.60GHz', 50, 140);
      ctx.fillText('Memory Testing : 16384KB OK (Dual-Channel DDR4 3200MHz)', 50, 180);
      ctx.fillText('Primary Storage: Samsung SSD 860 EVO 500GB (SATA 6Gb/s)', 50, 220);
      ctx.fillText('Display Adapter: NVIDIA GeForce RTX 3090 (24576MB VRAM)', 50, 260);
      ctx.fillText('Power Supply   : 650W ATX Power Good Signal Detected [OK]', 50, 300);

      ctx.fillStyle = '#22c55e';
      ctx.font = 'bold 26px monospace';
      ctx.fillText('>>> POWER-ON SELF-TEST COMPLETED SUCCESSFULLY!', 50, 380);
      ctx.fillText('>>> BOOTING SYSTEM...', 50, 420);

      // Loading progress bar
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(50, 480, w - 100, 24);
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(50, 480, (w - 100) * Math.min(1, this.postProgress), 24);
    } else if (this.monitorState === 'OS') {
      // Futuristic OS Desktop
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#0f172a');
      grad.addColorStop(0.5, '#1e1b4b');
      grad.addColorStop(1, '#0284c7');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Cyber grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      for (let x = 0; x < w; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Success Banner
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 46px "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🎉 CHÚC MỪNG BẠN ĐÃ LẮP RÁP THÀNH CÔNG!', w / 2, 130);

      ctx.fillStyle = '#38bdf8';
      ctx.font = '26px "Segoe UI", sans-serif';
      ctx.fillText('PC BUILDER OS • HỆ THỐNG HOẠT ĐỘNG HOÀN HẢO', w / 2, 180);

      // Specs card
      ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.roundRect(140, 220, w - 280, 260, 16);
      ctx.fill();
      ctx.stroke();

      ctx.font = '22px "Segoe UI", sans-serif';
      ctx.textAlign = 'left';
      ctx.fillStyle = '#e2e8f0';

      const lines = [
        '⚡ CPU : AMD Ryzen 5 3600 (6 Cores / 12 Threads) - Nhiệt độ: 38°C [Mát mẻ]',
        '🎮 GPU : NVIDIA GeForce RTX 3090 24GB GDDR6X - Driver v551.86 Ready',
        '🧠 RAM : 16GB Dual-Channel G.SKILL Trident Z RGB @ 3200MHz',
        '💾 SSD : Samsung 860 EVO 500GB - Tốc độ đọc: 550 MB/s',
        '❄️ COOL: Tản nhiệt Cooler Master hoạt động êm ái, RGB đồng bộ Aura Sync',
        '🔌 PSU : Nguồn MasterWatt 650W Bronze cấp dòng điện cực kỳ ổn định'
      ];

      lines.forEach((line, idx) => {
        ctx.fillText(line, 170, 270 + idx * 34);
      });

      // Bottom taskbar
      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
      ctx.fillRect(0, h - 50, w, 50);
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 20px "Segoe UI", sans-serif';
      ctx.fillText('🔘 PC Builder Menu', 30, h - 18);
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('100% Ready • All Components Verified', w - 380, h - 18);
    }

    this.monitorTexture.needsUpdate = true;
  }

  update(delta) {
    if (this.monitorState === 'POST') {
      this.postProgress += delta * 0.4;
      this.renderMonitorScreen();
      if (this.postProgress >= 1.0) {
        this.setMonitorState('OS');
      }
    }
  }
}
````

## File: src/scene/ShelfHardware.js
````javascript
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { HARDWARE_ITEMS } from '../data/hardware.js';

export class ShelfHardware {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.items = [...HARDWARE_ITEMS];
    this.shelfMeshes = new Map();
    this.loader = new GLTFLoader();
    this.interactables = [];

    this.scene.add(this.group);
    this.populateShelf();
  }

  populateShelf() {
    this.items.forEach(item => {
      if (!item.shelfPosition) return;

      this.loader.load(
        item.modelPath,
        gltf => {
          const model = gltf.scene;

          // Normalize size
          const box = new THREE.Box3().setFromObject(model);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());

          const maxDim = Math.max(size.x, size.y, size.z);
          const targetDim = 0.32;
          const s = (targetDim / (maxDim || 1)) * (item.scale || 1.0);
          model.scale.set(s, s, s);

          // Center on base
          model.position.set(-center.x * s, -box.min.y * s, -center.z * s);

          // Inner wrapper for calibrated baseRotation
          const innerWrapper = new THREE.Group();
          innerWrapper.add(model);

          if (item.baseRotation) {
            innerWrapper.rotation.set(
              item.baseRotation.x || 0,
              item.baseRotation.y || 0,
              item.baseRotation.z || 0
            );
          }

          // Outer wrapper for position and orientation on shelf
          const wrapper = new THREE.Group();
          wrapper.add(innerWrapper);

          wrapper.position.set(item.shelfPosition.x, item.shelfPosition.y, item.shelfPosition.z);
          wrapper.rotation.y = -Math.PI / 2; // Face out into the room

          wrapper.traverse(child => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              child.userData = { itemId: item.id, itemName: item.name };
            }
          });

          wrapper.userData = { itemId: item.id, itemName: item.name };
          this.shelfMeshes.set(item.id, wrapper);
          this.interactables.push(wrapper);
          this.group.add(wrapper);
        },
        undefined,
        err => console.warn(`Could not load shelf model for ${item.name}:`, err)
      );
    });
  }

  hideItem(itemId) {
    const mesh = this.shelfMeshes.get(itemId);
    if (mesh) {
      mesh.visible = false;
    }
  }

  showItem(itemId) {
    const mesh = this.shelfMeshes.get(itemId);
    if (mesh) {
      mesh.visible = true;
    }
  }
}
````

## File: src/ui/AssemblyGuideUI.js
````javascript
import { ASSEMBLY_STEPS } from '../data/hardware.js';
import confetti from 'canvas-confetti';

export class AssemblyGuideUI {
  constructor() {
    this.steps = ASSEMBLY_STEPS;
    this.currentStepIndex = 0; // 0-indexed (Step 1 is index 0)
    this.completedSteps = new Set();
    this.isExpanded = false;

    this.hudContainer = document.getElementById('assembly-hud');
    this.setupDOM();
    this.render();
  }

  setupDOM() {
    const toggleBtn = document.getElementById('btn-toggle-steps');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.isExpanded = !this.isExpanded;
        const listEl = document.getElementById('steps-list');
        if (listEl) {
          listEl.style.display = this.isExpanded ? 'block' : 'none';
        }
        toggleBtn.textContent = this.isExpanded ? '▲ Thu gọn' : '▼ Xem 12 bước chuẩn';
      });
    }
  }

  render() {
    const step = this.steps[this.currentStepIndex] || this.steps[this.steps.length - 1];

    // Current step badge
    const badgeEl = document.getElementById('current-step-badge');
    if (badgeEl) {
      badgeEl.textContent = `BƯỚC ${step.step} / ${this.steps.length}`;
    }

    // Title
    const titleEl = document.getElementById('current-step-title');
    if (titleEl) {
      titleEl.textContent = step.title;
    }

    // Instruction
    const descEl = document.getElementById('current-step-desc');
    if (descEl) {
      descEl.textContent = step.instruction;
    }

    // Pro tip
    const tipEl = document.getElementById('current-step-tip');
    if (tipEl) {
      tipEl.innerHTML = `<strong>💡 Mẹo thực tế:</strong> ${step.tip}`;
    }

    // Progress bar
    const progressEl = document.getElementById('assembly-progress-fill');
    if (progressEl) {
      const pct = (this.completedSteps.size / this.steps.length) * 100;
      progressEl.style.width = `${pct}%`;
    }

    // Steps checklist
    const listEl = document.getElementById('steps-list');
    if (listEl) {
      listEl.innerHTML = '';
      this.steps.forEach((s, idx) => {
        const item = document.createElement('div');
        const isDone = this.completedSteps.has(s.step);
        const isCurrent = idx === this.currentStepIndex;

        item.className = `step-item ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''}`;
        item.innerHTML = `
          <div class="step-num">${isDone ? '✓' : s.step}</div>
          <div class="step-text">
            <div class="step-name">${s.shortName}</div>
          </div>
        `;
        listEl.appendChild(item);
      });
    }
  }

  completeStep(stepNumber) {
    this.completedSteps.add(stepNumber);

    // Show toast
    this.showToast(`Hoàn thành Bước ${stepNumber}: ${this.steps[stepNumber - 1]?.shortName || ''}!`);

    // Advance to next uncompleted step
    if (stepNumber >= this.currentStepIndex + 1) {
      this.currentStepIndex = Math.min(stepNumber, this.steps.length - 1);
    }

    this.render();

    // If final step completed: celebration!
    if (stepNumber === 12) {
      this.celebrate();
    }
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'hud-toast';
    toast.innerHTML = `
      <div class="toast-icon">✨</div>
      <div class="toast-msg">${message}</div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

  celebrate() {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 400);
  }
}
````

## File: src/ui/InventoryUI.js
````javascript
import { HARDWARE_ITEMS, HARDWARE_CATEGORIES } from '../data/hardware.js';
import { sounds } from '../audio/SoundEffects.js';

export class InventoryUI {
  constructor(previewScene, onEquipItem, onInstallItem, onDropItem, onRequestLock) {
    this.previewScene = previewScene;
    this.onEquipItem = onEquipItem;
    this.onInstallItem = onInstallItem;
    this.onDropItem = onDropItem;
    this.onRequestLock = onRequestLock;

    this.isOpen = false;
    this.items = [...HARDWARE_ITEMS];
    this.selectedItem = this.items[0];
    this.activeFilter = HARDWARE_CATEGORIES.ALL;
    this.itemStates = new Map();

    // Initial state: first 4 in inventory, others on shelf
    this.items.forEach((item, idx) => {
      if (idx < 4) {
        this.itemStates.set(item.id, 'inventory');
      } else {
        this.itemStates.set(item.id, 'shelf');
      }
    });

    this.modalEl = document.getElementById('inventory-modal');
    this.setupDOM();
  }

  setupDOM() {
    const closeBtn = document.getElementById('btn-close-inventory');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        sounds.playClick();
        this.close();
      });
    }

    const tabsContainer = document.getElementById('inventory-tabs');
    if (tabsContainer) {
      tabsContainer.innerHTML = '';
      Object.values(HARDWARE_CATEGORIES).forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `inv-tab ${cat === this.activeFilter ? 'active' : ''}`;
        btn.textContent = cat;
        btn.addEventListener('click', () => {
          sounds.playClick();
          this.activeFilter = cat;
          document.querySelectorAll('.inv-tab').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.renderGrid();
        });
        tabsContainer.appendChild(btn);
      });
    }

    const btnEquip = document.getElementById('btn-inv-equip');
    const btnInstall = document.getElementById('btn-inv-install');
    const btnShelf = document.getElementById('btn-inv-shelf');

    if (btnEquip) {
      btnEquip.addEventListener('click', () => {
        if (!this.selectedItem) return;
        sounds.playClick();
        this.setItemState(this.selectedItem.id, 'held');
        if (this.onEquipItem) this.onEquipItem(this.selectedItem);
        this.close();
      });
    }

    if (btnInstall) {
      btnInstall.addEventListener('click', () => {
        if (!this.selectedItem) return;
        sounds.playClick();
        if (this.onInstallItem) this.onInstallItem(this.selectedItem);
        this.updateSpecsPanel();
        this.renderGrid();
      });
    }

    if (btnShelf) {
      btnShelf.addEventListener('click', () => {
        if (!this.selectedItem) return;
        sounds.playClick();
        const curr = this.itemStates.get(this.selectedItem.id);
        if (curr === 'shelf') {
          this.setItemState(this.selectedItem.id, 'inventory');
        } else {
          this.setItemState(this.selectedItem.id, 'shelf');
          if (this.onDropItem) this.onDropItem(this.selectedItem);
        }
        this.updateSpecsPanel();
        this.renderGrid();
      });
    }
  }

  open(heldItem = null) {
    this.isOpen = true;
    sounds.playClick();
    this.modalEl.classList.add('active');

    if (heldItem) {
      this.selectedItem = heldItem;
    } else if (!this.selectedItem) {
      this.selectedItem = this.items[0];
    }

    this.updateSpecsPanel();
    this.renderGrid();

    if (this.selectedItem && this.previewScene) {
      this.previewScene.loadItemModel(this.selectedItem.modelPath, this.selectedItem.baseRotation);
    }
  }

  close() {
    this.isOpen = false;
    this.modalEl.classList.remove('active');
    if (this.onRequestLock) {
      this.onRequestLock();
    }
  }

  toggle(heldItem = null) {
    if (this.isOpen) {
      this.close();
    } else {
      this.open(heldItem);
    }
  }

  selectItem(item) {
    sounds.playClick();
    this.selectedItem = item;
    this.updateSpecsPanel();
    this.renderGrid();

    if (this.previewScene) {
      this.previewScene.loadItemModel(item.modelPath, item.baseRotation);
    }
  }

  updateSpecsPanel() {
    if (!this.selectedItem) return;
    const item = this.selectedItem;
    const state = this.itemStates.get(item.id) || 'inventory';

    const tagEl = document.getElementById('inv-item-tag');
    if (tagEl) {
      tagEl.textContent = `Tag: ${item.tag}`;
      tagEl.className = `inv-tag tag-${item.categoryKey}`;
    }

    const nameEl = document.getElementById('inv-item-name');
    if (nameEl) nameEl.textContent = item.name;

    const brandEl = document.getElementById('inv-item-brand');
    if (brandEl) brandEl.textContent = `${item.brand} • ${item.price}`;

    const statusEl = document.getElementById('inv-item-status');
    if (statusEl) {
      let statusText = 'Trong túi đồ (Inventory)';
      let statusClass = 'status-bag';
      if (state === 'held') {
        statusText = '⚡ Đang cầm trên tay';
        statusClass = 'status-held';
      } else if (state === 'installed') {
        statusText = '✅ Đã lắp vào thùng máy';
        statusClass = 'status-installed';
      } else if (state === 'shelf') {
        statusText = '📦 Đang ở trên Kệ sắt';
        statusClass = 'status-shelf';
      }
      statusEl.textContent = statusText;
      statusEl.className = `inv-status-badge ${statusClass}`;
    }

    const specsListEl = document.getElementById('inv-specs-list');
    if (specsListEl) {
      specsListEl.innerHTML = '';
      item.specs.forEach(s => {
        const row = document.createElement('div');
        row.className = 'spec-row';
        row.innerHTML = `
          <span class="spec-label">${s.label}:</span>
          <span class="spec-value">${s.value}</span>
        `;
        specsListEl.appendChild(row);
      });
    }

    const tipEl = document.getElementById('inv-item-tip');
    if (tipEl) tipEl.textContent = item.beginnerTip;

    const btnEquip = document.getElementById('btn-inv-equip');
    const btnInstall = document.getElementById('btn-inv-install');
    const btnShelf = document.getElementById('btn-inv-shelf');

    if (btnEquip) {
      btnEquip.disabled = (state === 'installed');
      btnEquip.textContent = state === 'held' ? 'Đang cầm' : 'Cầm trên tay (Equip)';
    }
    if (btnInstall) {
      btnInstall.disabled = (state === 'installed');
      btnInstall.textContent = state === 'installed' ? 'Đã lắp ráp' : 'Lắp trực tiếp vào case';
    }
    if (btnShelf) {
      btnShelf.disabled = (state === 'installed');
      btnShelf.textContent = state === 'shelf' ? 'Lấy vào túi đồ' : 'Cất lên kệ sắt';
    }
  }

  renderGrid() {
    const gridEl = document.getElementById('inventory-grid');
    if (!gridEl) return;
    gridEl.innerHTML = '';

    const filtered = this.items.filter(it => {
      if (this.activeFilter === HARDWARE_CATEGORIES.ALL) return true;
      return it.category === this.activeFilter;
    });

    filtered.forEach(item => {
      const state = this.itemStates.get(item.id) || 'inventory';
      const isSelected = this.selectedItem && this.selectedItem.id === item.id;

      const slot = document.createElement('div');
      slot.className = `inv-slot ${isSelected ? 'selected' : ''} ${state}`;

      let iconType = '📦';
      if (item.categoryKey === 'motherboard') iconType = '🖲️';
      else if (item.categoryKey === 'cpu') iconType = '⚡';
      else if (item.categoryKey === 'cooler') iconType = '❄️';
      else if (item.categoryKey === 'ram') iconType = '💾';
      else if (item.categoryKey === 'gpu') iconType = '🎮';
      else if (item.categoryKey === 'storage') iconType = '🗄️';
      else if (item.categoryKey === 'psu') iconType = '🔌';

      slot.innerHTML = `
        <div class="slot-icon">${iconType}</div>
        <div class="slot-info">
          <div class="slot-name">${item.name}</div>
          <div class="slot-tag">${item.tag}</div>
        </div>
        <div class="slot-badge">${state === 'installed' ? 'Đã lắp' : (state === 'held' ? 'Cầm' : (state === 'shelf' ? 'Kệ' : 'Túi'))}</div>
      `;

      slot.addEventListener('click', () => {
        this.selectItem(item);
      });

      gridEl.appendChild(slot);
    });
  }

  setItemState(itemId, state) {
    this.itemStates.set(itemId, state);
    if (this.isOpen) {
      this.updateSpecsPanel();
      this.renderGrid();
    }
  }

  getItemState(itemId) {
    return this.itemStates.get(itemId) || 'inventory';
  }
}
````

## File: src/main.js
````javascript
import './style.css';
import { Game } from './core/Game.js';
import { sounds } from './audio/SoundEffects.js';

window.addEventListener('DOMContentLoaded', () => {
  // Initialize Web Audio on first user interaction
  const resumeAudio = () => {
    sounds.init();
    window.removeEventListener('click', resumeAudio);
    window.removeEventListener('keydown', resumeAudio);
  };
  window.addEventListener('click', resumeAudio);
  window.addEventListener('keydown', resumeAudio);

  // Initialize Simulator Game
  const game = new Game();
  window.pcBuilderGame = game;
});
````

## File: src/style.css
````css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
  --bg-dark: #0a0f18;
  --panel-bg: rgba(13, 20, 33, 0.85);
  --panel-border: rgba(56, 189, 248, 0.25);
  --accent-cyan: #38bdf8;
  --accent-gold: #fbbf24;
  --accent-green: #22c55e;
  --accent-purple: #c084fc;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --slot-bg: rgba(255, 255, 255, 0.04);
  --slot-border: rgba(255, 255, 255, 0.1);
  --slot-hover: rgba(56, 189, 248, 0.15);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}

body, html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--bg-dark);
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--text-main);
}

#webgl-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  outline: none;
}

/* Enhanced Crosshair */
#crosshair {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  pointer-events: none;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, opacity 0.2s ease;
}

/* Center dot */
#crosshair::before {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 0 1.5px rgba(0, 0, 0, 0.9), 0 0 6px rgba(56, 189, 248, 0.9);
  transition: all 0.15s ease;
}

/* Outer reticle ring */
#crosshair::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border: 1.5px solid rgba(255, 255, 255, 0.65);
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.8);
  transition: all 0.2s ease;
}

/* Crosshair highlight when pointing at interactable */
#crosshair.highlight::before {
  background-color: var(--accent-cyan);
  transform: scale(1.6);
  box-shadow: 0 0 0 1.5px rgba(0, 0, 0, 0.9), 0 0 12px var(--accent-cyan);
}

#crosshair.highlight::after {
  border-color: var(--accent-cyan);
  width: 24px;
  height: 24px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.8), 0 0 10px rgba(56, 189, 248, 0.6);
}

#crosshair.unlocked {
  opacity: 0.25;
}

/* On-screen inspection banner when holding RMB */
#inspect-hint {
  position: fixed;
  top: 75px;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(12px);
  border: 1.5px solid var(--accent-cyan);
  color: #38bdf8;
  font-weight: 700;
  font-size: 14px;
  padding: 8px 24px;
  border-radius: 24px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6), 0 0 16px rgba(56, 189, 248, 0.4);
  z-index: 100;
  pointer-events: none;
  opacity: 0;
  transition: all 0.2s ease;
}

#inspect-hint.active {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Interaction prompt */
#hud-prompt {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: none;
  align-items: center;
  gap: 8px;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid var(--accent-cyan);
  padding: 8px 18px;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 12px rgba(56, 189, 248, 0.3);
  pointer-events: none;
}

.prompt-text {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.3px;
}

/* Status bar & Hotkeys */
#hud-top-bar {
  position: absolute;
  top: 20px;
  left: 24px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 16px;
}

.game-logo {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
}

#shiftlock-status {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

#shiftlock-status.active {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.6);
  color: #4ade80;
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.3);
}

#shiftlock-status.inactive {
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.6);
  color: #f87171;
}

/* Bottom Controls Bar */
#hud-bottom-bar {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 8px 20px;
  border-radius: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.key-hint {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--text-muted);
}

.key-tag {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 3px 8px;
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.4);
}

.key-hint.active .key-tag {
  background: var(--accent-cyan);
  color: #0f172a;
  border-color: #38bdf8;
}

/* Assembly Quest HUD */
#assembly-hud {
  position: absolute;
  top: 20px;
  right: 24px;
  z-index: 10;
  width: 380px;
  background: var(--panel-bg);
  backdrop-filter: blur(16px);
  border: 1px solid var(--panel-border);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.1);
}

.hud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

#current-step-badge {
  background: linear-gradient(135deg, #0284c7, #2563eb);
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.5px;
}

#btn-toggle-steps {
  background: transparent;
  border: none;
  color: var(--accent-cyan);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s;
}

#btn-toggle-steps:hover {
  color: #7dd3fc;
}

#assembly-progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 14px;
}

#assembly-progress-fill {
  height: 100%;
  width: 8.33%;
  background: linear-gradient(90deg, #38bdf8, #22c55e);
  border-radius: 3px;
  transition: width 0.4s ease;
}

#current-step-title {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
  line-height: 1.4;
}

#current-step-desc {
  font-size: 13px;
  color: #cbd5e1;
  line-height: 1.5;
  margin-bottom: 10px;
}

#current-step-tip {
  font-size: 12px;
  color: #93c5fd;
  background: rgba(56, 189, 248, 0.08);
  border-left: 3px solid var(--accent-cyan);
  padding: 8px 12px;
  border-radius: 0 8px 8px 0;
  line-height: 1.4;
}

#steps-list {
  display: none;
  margin-top: 14px;
  max-height: 260px;
  overflow-y: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 10px;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 12px;
  color: var(--text-muted);
}

.step-item.done {
  color: #4ade80;
}

.step-item.current {
  background: rgba(56, 189, 248, 0.12);
  color: #38bdf8;
  font-weight: 600;
}

.step-num {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  font-size: 11px;
  font-weight: 700;
}

.step-item.done .step-num {
  background: #22c55e;
  color: #0f172a;
}

/* RPG INVENTORY MODAL */
#inventory-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(8, 12, 20, 0.72);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  opacity: 0;
  transition: opacity 0.25s ease;
}

#inventory-modal.active {
  display: flex;
  opacity: 1;
}

.rpg-inv-container {
  width: 1040px;
  max-width: 95vw;
  height: 760px;
  max-height: 94vh;
  background: linear-gradient(160deg, rgba(15, 23, 42, 0.94) 0%, rgba(10, 15, 26, 0.96) 100%);
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(56, 189, 248, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

/* Inventory Header */
.inv-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.inv-title-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.inv-title {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.8px;
  color: #ffffff;
}

.inv-capacity-badge {
  background: rgba(255, 255, 255, 0.08);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  color: var(--accent-cyan);
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
}

#btn-close-inventory {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #cbd5e1;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;
}

#btn-close-inventory:hover {
  background: rgba(239, 68, 68, 0.3);
  border-color: #ef4444;
  color: #ffffff;
  transform: scale(1.05);
}

/* Upper Section: 3D Preview (Left Square) + Specs Sheet (Right Rectangle) */
.inv-upper-section {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 20px;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
}

/* Left Square: 3D Preview */
.inv-preview-box {
  width: 360px;
  height: 340px;
  background: radial-gradient(circle at center, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.9) 100%);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.6);
}

#item-preview-canvas {
  width: 100%;
  height: 100%;
  cursor: grab;
}

#item-preview-canvas:active {
  cursor: grabbing;
}

.preview-overlay-hint {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 23, 42, 0.7);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 11px;
  color: var(--text-muted);
  pointer-events: none;
}

/* Right Rectangle: Specifications Sheet */
.inv-specs-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 340px;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 16px 20px;
  overflow-y: auto;
}

.specs-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.inv-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 4px 12px;
  border-radius: 6px;
  margin-bottom: 6px;
}

.tag-motherboard { background: rgba(56, 189, 248, 0.2); border: 1px solid #38bdf8; color: #38bdf8; }
.tag-cpu { background: rgba(251, 191, 36, 0.2); border: 1px solid #fbbf24; color: #fbbf24; }
.tag-cooler { background: rgba(168, 85, 247, 0.2); border: 1px solid #a855f7; color: #a855f7; }
.tag-ram { background: rgba(236, 72, 153, 0.2); border: 1px solid #ec4899; color: #ec4899; }
.tag-gpu { background: rgba(34, 197, 94, 0.2); border: 1px solid #22c55e; color: #22c55e; }
.tag-storage { background: rgba(14, 165, 233, 0.2); border: 1px solid #0ea5e9; color: #0ea5e9; }
.tag-psu { background: rgba(249, 115, 22, 0.2); border: 1px solid #f97316; color: #f97316; }

#inv-item-name {
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 4px;
}

#inv-item-brand {
  font-size: 13px;
  color: var(--text-muted);
}

.inv-status-badge {
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 12px;
}

.status-bag { background: rgba(56, 189, 248, 0.15); color: #38bdf8; }
.status-held { background: rgba(251, 191, 36, 0.2); color: #fbbf24; }
.status-installed { background: rgba(34, 197, 94, 0.2); color: #4ade80; }
.status-shelf { background: rgba(148, 163, 184, 0.2); color: #cbd5e1; }

#inv-specs-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px 16px;
  margin: 10px 0;
  padding: 10px 12px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-size: 12px;
}

.spec-row {
  display: flex;
  flex-direction: column;
}

.spec-label {
  color: var(--text-muted);
  font-size: 11px;
}

.spec-value {
  color: #f1f5f9;
  font-weight: 600;
}

#inv-item-tip {
  font-size: 12px;
  color: #bae6fd;
  background: rgba(56, 189, 248, 0.08);
  border-left: 3px solid var(--accent-cyan);
  padding: 6px 10px;
  border-radius: 0 6px 6px 0;
  line-height: 1.4;
  margin-bottom: 12px;
}

.inv-action-buttons {
  display: flex;
  gap: 10px;
}

.btn-rpg {
  flex: 1;
  padding: 10px 14px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid transparent;
}

.btn-primary {
  background: linear-gradient(135deg, #0284c7, #2563eb);
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(2, 132, 199, 0.3);
}

.btn-primary:hover:not(:disabled) {
  background: linear-gradient(135deg, #0369a1, #1d4ed8);
  transform: translateY(-1px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.15);
  color: #f8fafc;
}

.btn-secondary:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.12);
}

.btn-rpg:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Lower Section: Backpack & Grid */
.inv-lower-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  overflow: hidden;
}

#inventory-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
  overflow-x: auto;
  padding-bottom: 4px;
}

.inv-tab {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-muted);
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.inv-tab:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
}

.inv-tab.active {
  background: var(--accent-cyan);
  border-color: #38bdf8;
  color: #0f172a;
  font-weight: 700;
}

#inventory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
  flex: 1;
}

.inv-slot {
  background: var(--slot-bg);
  border: 1px solid var(--slot-border);
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}

.inv-slot:hover {
  background: var(--slot-hover);
  border-color: rgba(56, 189, 248, 0.4);
  transform: translateY(-2px);
}

.inv-slot.selected {
  background: rgba(56, 189, 248, 0.18);
  border: 1.5px solid var(--accent-cyan);
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.25);
}

.slot-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.slot-name {
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.slot-tag {
  font-size: 10px;
  color: var(--accent-cyan);
  font-weight: 600;
}

.slot-badge {
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 9px;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  color: #cbd5e1;
}

.inv-slot.installed .slot-badge {
  background: rgba(34, 197, 94, 0.3);
  color: #4ade80;
}

.inv-slot.held .slot-badge {
  background: rgba(251, 191, 36, 0.3);
  color: #fbbf24;
}

/* Toast Notifications */
.hud-toast {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid var(--accent-cyan);
  padding: 10px 24px;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.3);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  z-index: 200;
  animation: slideUp 0.3s ease;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.hud-toast.fade-out {
  opacity: 0;
  transform: translate(-50%, 10px);
}

@keyframes slideUp {
  from { opacity: 0; transform: translate(-50%, 20px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}

/* Loading Screen */
#loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #080c14;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.6s ease;
}

#loading-screen.hidden {
  opacity: 0;
  pointer-events: none;
}

.loading-logo {
  font-size: 32px;
  font-weight: 900;
  background: linear-gradient(135deg, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.loading-subtitle {
  color: var(--text-muted);
  font-size: 14px;
  margin-bottom: 24px;
}

#loading-bar-wrap {
  width: 320px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 12px;
}

#loading-bar-fill {
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, #38bdf8, #6366f1);
  border-radius: 4px;
  transition: width 0.2s ease;
}

#loading-text {
  font-size: 12px;
  color: #94a3b8;
  font-family: 'JetBrains Mono', monospace;
}
````

## File: index.html
````html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PC Builder 3D - Trình Mô Phỏng Lắp Ráp Máy Tính</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2338bdf8'><path d='M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z'/></svg>">
</head>
<body>
  <!-- 3D Canvas -->
  <canvas id="webgl-canvas"></canvas>

  <!-- Crosshair -->
  <div id="crosshair"></div>

  <!-- In-game Hover Interaction Prompt -->
  <div id="hud-prompt">
    <span class="prompt-text">[Chuột trái] Tương tác</span>
  </div>

  <!-- HUD Top Bar -->
  <div id="hud-top-bar">
    <div class="game-logo">⚡ PC BUILDER 3D</div>
    <div id="shiftlock-status" class="active">Shift-Lock: BẬT (Khóa tâm)</div>
  </div>

  <!-- Assembly Guide Quest Tracker -->
  <div id="assembly-hud">
    <div class="hud-header">
      <div id="current-step-badge">BƯỚC 1 / 12</div>
      <button id="btn-toggle-steps">▼ Xem 12 bước chuẩn</button>
    </div>
    <div id="assembly-progress-bar">
      <div id="assembly-progress-fill"></div>
    </div>
    <div id="current-step-title">Mở nắp kính thùng máy</div>
    <div id="current-step-desc">Nhấn vào nắp kính bên hông để tháo ra, chuẩn bị lắp đặt linh kiện.</div>
    <div id="current-step-tip">💡 Mẹo: Luôn tháo kính cẩn thận và đặt nơi an toàn trước khi lắp main.</div>
    <div id="steps-list"></div>
  </div>

  <!-- HUD Bottom Hotkeys Bar -->
  <div id="hud-bottom-bar">
    <div class="key-hint">
      <span class="key-tag">W A S D</span>
      <span>Di chuyển</span>
    </div>
    <div class="key-hint">
      <span class="key-tag">Chuột trái</span>
      <span>Cầm / Lắp ráp</span>
    </div>
    <div class="key-hint">
      <span class="key-tag">Chuột phải (giữ)</span>
      <span>Xoay vật thể</span>
    </div>
    <div class="key-hint">
      <span class="key-tag">E</span>
      <span>Cất vào túi</span>
    </div>
    <div class="key-hint active">
      <span class="key-tag">R</span>
      <span>Kho đồ (Inventory)</span>
    </div>
    <div class="key-hint">
      <span class="key-tag">Shift</span>
      <span>Thoát / Khóa Shift-Lock</span>
    </div>
  </div>

  <!-- RPG Inventory Modal -->
  <div id="inventory-modal">
    <div class="rpg-inv-container">
      <!-- Inventory Header -->
      <div class="inv-top-bar">
        <div class="inv-title-group">
          <div class="inv-title">🎒 KHO LINH KIỆN & BA LÔ (INVENTORY)</div>
          <div class="inv-capacity-badge">7 / 20 Ô CHỨA</div>
        </div>
        <button id="btn-close-inventory" title="Đóng (Phím R hoặc ESC)">✕</button>
      </div>

      <!-- Upper Section: 3D Preview (Square) + Specs Sheet (Rectangle) -->
      <div class="inv-upper-section">
        <!-- Top Left Square: 3D Interactive Model Preview -->
        <div class="inv-preview-box">
          <canvas id="item-preview-canvas"></canvas>
          <div class="preview-overlay-hint">🔄 Kéo chuột để xoay 360°</div>
        </div>

        <!-- Top Right Rectangle: Specs Sheet -->
        <div class="inv-specs-panel">
          <div>
            <div class="specs-header">
              <div>
                <span id="inv-item-tag" class="inv-tag tag-motherboard">Tag: Motherboard</span>
                <div id="inv-item-name">ASUS ROG STRIX Z370-E GAMING</div>
                <div id="inv-item-brand">ASUS Republic of Gamers • 4,890,000 đ</div>
              </div>
              <div id="inv-item-status" class="inv-status-badge status-bag">Trong túi đồ</div>
            </div>

            <!-- Technical Specifications Table -->
            <div id="inv-specs-list">
              <!-- Dynamically populated -->
            </div>
          </div>

          <div>
            <!-- Beginner Tip / Lore -->
            <div id="inv-item-tip">
              💡 Bo mạch chủ là xương sống kết nối toàn bộ hệ thống máy tính.
            </div>

            <!-- Action Buttons -->
            <div class="inv-action-buttons">
              <button id="btn-inv-equip" class="btn-rpg btn-primary">⚡ Cầm trên tay (Equip)</button>
              <button id="btn-inv-install" class="btn-rpg btn-primary">🛠️ Lắp vào thùng máy</button>
              <button id="btn-inv-shelf" class="btn-rpg btn-secondary">📦 Cất lên kệ sắt</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Lower Section: Filter Tabs & Backpack Grid Slots -->
      <div class="inv-lower-section">
        <div id="inventory-tabs">
          <!-- Filter Tabs dynamically populated -->
        </div>
        <div id="inventory-grid">
          <!-- Slots dynamically populated -->
        </div>
      </div>
    </div>
  </div>

  <!-- Loading Screen -->
  <div id="loading-screen">
    <div class="loading-logo">PC BUILDER 3D SIMULATOR</div>
    <div class="loading-subtitle">Khởi tạo không gian phòng 3D & nạp dữ liệu linh kiện...</div>
    <div id="loading-bar-wrap">
      <div id="loading-bar-fill"></div>
    </div>
    <div id="loading-text">Đang tải tài nguyên mô hình 3D... 0%</div>
  </div>

  <script type="module" src="/src/main.js"></script>
</body>
</html>
````

## File: package.json
````json
{
  "name": "pc-builder-3d",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "three": "^0.174.0",
    "canvas-confetti": "^1.9.4"
  },
  "devDependencies": {
    "vite": "^6.2.0"
  }
}
````

## File: README.md
````markdown
# PC Builder 3D - Trình Mô Phỏng Lắp Ráp Máy Tính 3D Chuẩn Thực Tế

Trình mô phỏng 3D tương tác trực quan cao cấp chạy trực tiếp trên nền tảng Web (Three.js + Vite), được thiết kế đặc biệt dành cho người mới bắt đầu làm quen với phần cứng và lắp ráp máy tính.

---

## 🌟 Các Tính Năng Nổi Bật

1. **Không gian căn phòng xưởng công nghệ (Tech Workshop) 3D rộng sáng:**
   - Bàn gỗ lắp ráp trung tâm (Wooden Workbench) với thảm lót chống tĩnh điện (Antistatic Pad).
   - Kệ sắt 4 tầng bên phải (Iron Rack) chứa sẵn các vỏ hộp và linh kiện máy tính vật lý.
   - Thùng máy tính ATX rỗng (PC Case) có thể tháo lắp nắp kính bên hông và quan sát chi tiết bên trong.
   - Màn hình máy tính gaming 27 inch hiển thị trực tiếp quá trình kiểm tra POST, BIOS và màn hình Windows Desktop khi máy khởi động thành công.

2. **Cơ chế điều khiển First-Person linh hoạt:**
   - `W`, `A`, `S`, `D` hoặc 4 phím mũi tên: Di chuyển xung quanh phòng với hệ thống va chạm vật lý (không đi xuyên tường hay xuyên bàn).
   - **Shift-Lock**: Tự động bật khóa tâm chuột khi vào game. Nhấn `Shift` để bật/tắt Shift-Lock (giải phóng chuột tự do).
   - **Chuột trái (LMB)**: Nhặt linh kiện từ kệ sắt, tương tác với các vị trí lắp ráp trên thùng máy, mở nắp kính, bật công tắc nguồn.
   - **Chuột phải (RMB giữ + rê chuột)**: Xoay 360° vật thể đang cầm trên tay để quan sát chi tiết chân pin, khe cắm, lá tản nhiệt.
   - `E`: Cất linh kiện đang cầm trên tay vào Túi đồ (Inventory).
   - `R`: Mở / Đóng giao diện Kho đồ (RPG Inventory).

3. **Kho đồ RPG Inventory chuẩn chuyên nghiệp:**
   - Làm mờ hậu cảnh (`backdrop-filter: blur(20px)`), phong cách Glassmorphism Cyberpunk.
   - **Góc trên bên trái (Ô vuông)**: Hiển thị mô hình 3D tương tác thời gian thực của linh kiện đang chọn (kéo chuột để xoay 360°, ánh sáng studio).
   - **Góc trên bên phải (Ô chữ nhật)**:
     - Tag loại linh kiện (Tag: `Motherboard`, `CPU`, `GPU`, `RAM`, `CPU Cooler`, `Storage`, `Power Supply`).
     - Tên đầy đủ, thương hiệu, giá tham khảo thực tế.
     - Bảng thông số kỹ thuật chi tiết (Socket, Chipset, Số nhân luồng, Bus RAM, VRAM, TDP...).
     - Lời khuyên & kiến thức thực tế dành cho người mới ("Kiến thức cho người mới").
     - Các nút chức năng: **Cầm trên tay (Equip)**, **Lắp trực tiếp vào case**, **Cất lên kệ sắt**.
   - **Không gian phía dưới**:
     - Các tab phân loại danh mục.
     - Lưới hiển thị các ô linh kiện trong túi với badge trạng thái (*Trong túi*, *Đang cầm*, *Đã lắp*, *Trên kệ*).

4. **12 Bước lắp ráp chuẩn thực tế (Interactive Quest Tracker):**
   - **Bước 1**: Tháo nắp kính cường lực thùng case.
   - **Bước 2**: Lắp Bo mạch chủ (Motherboard) vào các ốc chân đồng (standoffs).
   - **Bước 3**: Lắp Bộ vi xử lý (CPU AMD Ryzen) vào socket theo chiều tam giác vàng.
   - **Bước 4**: Bôi keo tản nhiệt và gắn Tháp tản nhiệt CPU Cooler Master.
   - **Bước 5**: Cắm thanh RAM G.SKILL Trident Z RGB vào khe Dual Channel 2 & 4.
   - **Bước 6**: Lắp Ổ cứng SSD Samsung thể rắn.
   - **Bước 7**: Lắp Bộ nguồn máy tính (PSU) vào hộc đáy case.
   - **Bước 8**: Lắp Card màn hình rời NVIDIA RTX 3090 vào khe PCIe x16.
   - **Bước 9**: Cắm Dây nguồn 24-Pin, 8-Pin CPU, PCIe và cáp nút nguồn.
   - **Bước 10**: Đóng nắp kính cường lực thùng máy.
   - **Bước 11**: Cắm cáp màn hình DisplayPort vào Card đồ họa & cắm nguồn điện.
   - **Bước 12**: BẬT NGUỒN! Đèn RGB đổi màu, quạt quay, tiếng beep POST vang lên và màn hình khởi động Windows báo cáo thành công cùng hiệu ứng pháo hoa chúc mừng!

5. **Hệ thống âm thanh Web Audio chân thực:**
   - Tiếng click lẫy RAM / PCIe ("Tách" đanh gọn).
   - Tiếng siết ốc kim loại.
   - Tiếng công tắc bật nguồn.
   - Tiếng còi Beep POST bo mạch chủ.
   - Tiếng gió êm của quạt tản nhiệt quay.
   - Giai điệu chúc mừng khi hoàn thành.

---

## 🚀 Hướng Dẫn Khởi Chạy

1. **Khởi chạy nhanh:**
   - Double click vào file `start.bat` trong thư mục này. Trình duyệt sẽ tự động mở tại địa chỉ `http://localhost:5173`.

2. **Khởi chạy thủ công từ terminal:**
   ```bash
   cd "C:\Users\Quynh Tien\pc-builder-3d"
   npm run dev
   ```
````

## File: start.bat
````batch
@echo off
title PC Builder 3D Simulator
echo ===================================================
echo     KHOI DONG PC BUILDER 3D SIMULATOR
echo ===================================================
cd /d "%~dp0"
start "" http://localhost:5173
npm run dev
pause
````

## File: vite.config.js
````javascript
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    host: true,
    open: false
  }
});
````
