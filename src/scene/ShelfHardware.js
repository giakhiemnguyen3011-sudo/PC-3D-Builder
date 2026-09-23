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
