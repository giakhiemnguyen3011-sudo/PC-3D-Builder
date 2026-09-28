import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { sounds } from '../audio/SoundEffects.js';
import { buildFittedModel } from '../scene/ModelFit.js';

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

        // Upright-only items (the finished machine) may spin, never tip over
        if (this.heldItemData.noTilt) this.itemRotation.x = 0;

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

      // Real-world metres, laid flat. Tiny parts (CPU pins, RAM chips) get a
      // readability floor so they stay visible in the hand.
      const { group, size } = buildFittedModel(cloned, {
        realSize: itemData.realSize,
        minSize: 0.05,
        maxSize: 0.34,
        flat: true
      });
      // buildFittedModel seats the part with minY = 0, so its centre sits half a
      // height above the origin: pull it back so the part rests in the palm.
      group.position.y -= size.y / 2;

      this.rotationPivot.add(group);
      this.setDefaultPose();
    };

    if (itemData.prebuilt) {
      // A finished machine arrives already assembled: attach the group as-is
      // instead of loading and re-fitting a model.
      const holder = new THREE.Group();
      holder.add(itemData.prebuilt);
      itemData.prebuilt.position.set(0, 0, 0);
      itemData.prebuilt.rotation.set(0, 0, 0);
      holder.position.y = -itemData.prebuiltSizeY / 2 || 0;
      this.rotationPivot.add(holder);
      this.setDefaultPose();
      return;
    }

    if (this.modelCache.has(itemData.modelPath)) {
      loadAndAttach(this.modelCache.get(itemData.modelPath));
    } else {
      this.loader.load(itemData.modelPath, gltf => {
        this.modelCache.set(itemData.modelPath, gltf.scene);
        loadAndAttach(gltf.scene);
      });
    }
  }

  /** Inspection pose. `noTilt` items (the finished PC) may only spin on Y. */
  setDefaultPose() {
    this.itemRotation = { x: this.heldItemData?.noTilt ? 0 : 0.15, y: -0.35 };
    this.rotationPivot.rotation.set(this.itemRotation.x, this.itemRotation.y, 0);
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
