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
