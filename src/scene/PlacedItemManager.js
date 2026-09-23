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
