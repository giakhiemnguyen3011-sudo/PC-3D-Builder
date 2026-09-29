import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ALL_HARDWARE_ITEMS } from '../data/hardware.js';
import { buildFittedModel } from './ModelFit.js';
import { getShelfLayout } from './shelfLayout.js';

// Fitted models rest with minY = 0; lift by a hair so flat parts (SSD, CPU,
// RAM) do not z-fight with the shelf board they are sitting on.
const SEAT_OFFSET = 0.0005;

export class ShelfHardware {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.items = [...ALL_HARDWARE_ITEMS];
    this.shelfMeshes = new Map();
    this.loader = new GLTFLoader();
    this.interactables = [];
    this.layout = getShelfLayout();

    this.scene.add(this.group);
    this.populateShelf();
  }

  populateShelf() {
    const slots = new Map();
    this.layout.tiers.forEach(tier => {
      tier.entries.forEach(entry => slots.set(entry.item.id, entry));
    });

    this.items.forEach(item => {
      const slot = slots.get(item.id);
      if (!slot) return;

      this.loader.load(
        item.modelPath,
        gltf => {
          // Real-world metres + auto flat/straight alignment (rests on y = 0)
          const { group } = buildFittedModel(gltf.scene, {
            realSize: item.realSize,
            flat: true
          });

          // Long edge runs along the rack, front face turns into the room
          const yaw = new THREE.Group();
          yaw.rotation.y = -Math.PI / 2;
          yaw.add(group);

          const wrapper = new THREE.Group();
          wrapper.add(yaw);
          wrapper.position.set(
            slot.position.x,
            slot.position.y + SEAT_OFFSET,
            slot.position.z
          );


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
