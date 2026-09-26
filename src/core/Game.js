import * as THREE from 'three';
import { Room } from '../scene/Room.js';
import { ShelfHardware } from '../scene/ShelfHardware.js';
import { PlacedItemManager } from '../scene/PlacedItemManager.js';
import { ItemPreviewScene } from '../scene/ItemPreviewScene.js';
import { HeldItemManager } from '../controls/HeldItemManager.js';
import { PlayerControls } from '../controls/PlayerControls.js';
import { InventoryUI } from '../ui/InventoryUI.js';
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

    // Scene elements
    this.room = new Room(this.scene);
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
        const prevHeld = this.heldItemManager.getHeldItem();
        if (prevHeld) {
          this.inventoryUI.addItem(prevHeld);
        }
        this.heldItemManager.holdItem(item);
      },
      // onInstallItem (deprecated/no-op now)
      item => {},
      // onDropItem (Drop from inventory to crosshair via E key or button)
      item => {
        this.dropItemAtCrosshair(item);
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

    // Hide loading screen immediately
    const loaderScreen = document.getElementById('loading-screen');
    if (loaderScreen) {
      loaderScreen.classList.add('hidden');
      setTimeout(() => loaderScreen.remove(), 600);
    }

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

  dropItemAtCrosshair(item) {
    let dropPos = null;
    if (this.controls.lastRaycastHit && this.controls.lastRaycastHit.point) {
      dropPos = this.controls.lastRaycastHit.point.clone();
    } else {
      const dir = new THREE.Vector3();
      this.camera.getWorldDirection(dir);
      dir.y = 0;
      dir.normalize();
      dropPos = this.camera.position.clone().add(dir.multiplyScalar(1.3));
      dropPos.y = 0.85;
    }
    dropPos.y = Math.max(0.02, dropPos.y);

    this.placedItems.placeItemAt(item, dropPos);
  }

  handleWorldInteract(object, hit) {
    const held = this.heldItemManager.getHeldItem();
    const uData = object?.userData || {};

    // ==========================================
    // CASE A: PLAYER IS HOLDING AN ITEM
    // ==========================================
    if (held) {
      // Left Click drops/places the held item at crosshair intersection point
      if (hit && hit.point) {
        this.placedItems.placeItemAt(
          held,
          hit.point,
          hit.face ? hit.face.normal : new THREE.Vector3(0, 1, 0)
        );
        this.heldItemManager.clearHeldItem();
        return;
      }
    }

    // ==========================================
    // CASE B: PLAYER'S HAND IS EMPTY (OR SWAPPING)
    // ==========================================

    // 1. Clicked an item placed on a table/floor/shelf
    if (uData.isPlaced && uData.itemId) {
      const item = HARDWARE_ITEMS.find(it => it.id === uData.itemId);
      if (item) {
        this.placedItems.removeItem(item.id);
        const prevHeld = this.heldItemManager.getHeldItem();
        if (prevHeld) {
          this.inventoryUI.addItem(prevHeld);
        }
        this.heldItemManager.holdItem(item);
      }
      return;
    }

    // 2. Clicked an item on the iron rack
    if (uData.itemId) {
      const item = HARDWARE_ITEMS.find(it => it.id === uData.itemId);
      if (item) {
        this.shelf.hideItem(item.id);
        const prevHeld = this.heldItemManager.getHeldItem();
        if (prevHeld) {
          this.inventoryUI.addItem(prevHeld);
        }
        this.heldItemManager.holdItem(item);
      }
      return;
    }
  }

  handleStowItem() {
    // If inventory is open: E drops selected item
    if (this.inventoryUI.isOpen) {
      if (this.inventoryUI.selectedItem) {
        this.inventoryUI.dropCurrentSelectedItem();
      }
      return;
    }

    // If inventory is closed: E stows the currently held item into an empty slot!
    const held = this.heldItemManager.getHeldItem();
    if (held) {
      const added = this.inventoryUI.addItem(held);
      if (added) {
        this.heldItemManager.clearHeldItem();
        sounds.playDrop();
      }
    }
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
      ...this.shelf.interactables,
      ...this.placedItems.interactables,
      ...this.room.interactables
    ];

    // Environment surfaces (table, shelves, floor) for crosshair drop targeting
    const surfaces = this.room.surfaces || [];

    this.controls.update(delta, interactables, surfaces);
    this.heldItemManager.update(delta, time);
    this.room.update(delta);

    if (this.inventoryUI.isOpen && this.inventoryUI.selectedItem) {
      this.previewScene.render();
    }

    this.renderer.render(this.scene, this.camera);
  }
}
