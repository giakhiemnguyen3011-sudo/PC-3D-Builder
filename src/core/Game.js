import * as THREE from 'three';
import { Room } from '../scene/Room.js';
import { ShelfHardware } from '../scene/ShelfHardware.js';
import { PlacedItemManager } from '../scene/PlacedItemManager.js';
import { ItemPreviewScene } from '../scene/ItemPreviewScene.js';
import { HeldItemManager } from '../controls/HeldItemManager.js';
import { PlayerControls } from '../controls/PlayerControls.js';
import { InventoryUI } from '../ui/InventoryUI.js';
import { BuildModeUI } from '../ui/BuildModeUI.js';
import { HARDWARE_ITEMS } from '../data/hardware.js';
import { sounds } from '../audio/SoundEffects.js';

// Anything dropped below this height counts as "on the floor"
const FLOOR_TOUCH_Y = 0.06;

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

    // Build Mode: guided 12-step assembly inside the x-ray case
    this.buildModeUI = new BuildModeUI({
      inventoryUI: this.inventoryUI,
      room: this.room,
      onRequestLock: () => this.controls.lockPointer(),
      onAssembled: result => this.adoptAssembledPC(result)
    });

    // Initial camera position standing in front of table
    this.camera.position.set(0, 1.65, 1.8);
    this.controls.pitch = -0.2;
    this.controls.yaw = 0;

    // Hide loading screen immediately
    const loaderScreen = document.getElementById('loading-screen');
    if (loaderScreen) {
      loaderScreen.classList.add('hidden');
      setTimeout(loaderScreen.remove, 600);
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

    // Hardware that ends up on the floor goes straight back to the parts table
    if (this.touchesFloor(dropPos, this.controls.lastRaycastHit)) {
      this.returnToTable(item);
      return;
    }

    this.placedItems.placeItemAt(item, dropPos);
  }

  /** True when the aim point is the room floor rather than a bench or table. */
  touchesFloor(position, hit) {
    if (position.y <= FLOOR_TOUCH_Y) return true;
    let node = hit?.object || null;
    while (node) {
      if (node.userData && node.userData.isFloor) return true;
      node = node.parent;
    }
    return false;
  }

  /** Puts a part back where it lives on the white wooden parts table. */
  returnToTable(item) {
    this.placedItems.removeItem(item.id);
    this.shelf.showItem(item.id);
    sounds.playClick();
    this.showToast(`↩️ ${item.name} đã được trả về bàn linh kiện.`);
  }

  /**
   * Takes the finished machine out of Build Mode and drops it on the workshop
   * bench as one grouped object. It can be picked up and spun around, but never
   * tilted over or stowed in the backpack.
   */
  adoptAssembledPC(result) {
    if (!result || !result.group) return;

    const anchor = this.room.casePlaceholder
      ? this.room.casePlaceholder.position.clone()
      : new THREE.Vector3(-0.25, 0.825, -0.05);
    const yaw = this.room.casePlaceholder
      ? this.room.casePlaceholder.rotation.y
      : -Math.PI / 4;

    const group = result.group;
    group.position.set(anchor.x, anchor.y, anchor.z);
    group.rotation.y = yaw;
    group.updateMatrixWorld(true);
    this.scene.add(group);
    this.room.hideCasePlaceholder();

    const size = new THREE.Box3().setFromObject(group).getSize(new THREE.Vector3());

    this.assembledPC = {
      id: 'assembled_pc',
      name: 'Máy tính đã lắp ráp',
      brand: 'PC Builder',
      price: '—',
      tag: 'Assembled PC',
      categoryKey: 'motherboard',
      isAssembled: true,
      // upright only: yaw is allowed, pitch and roll are not
      noTilt: true,
      realSize: Math.max(size.y, 0.2),
      prebuilt: group,
      prebuiltSizeY: size.y,
      installedParts: result.parts,
      home: { position: anchor.clone(), yaw }
    };

    // Tag the group and every mesh, so a raycast hitting any child resolves
    const tag = {
      type: 'assembledPC',
      itemId: 'assembled_pc',
      itemName: this.assembledPC.name
    };
    group.userData = { ...tag };
    group.traverse(child => {
      if (!child.isMesh) return;
      child.castShadow = true;
      child.receiveShadow = true;
      child.userData = { ...tag };
    });

    this.showToast('🎉 Máy tính của bạn đã sẵn sàng! Cầm lên và xoay thoải mái nhé.');
  }

  /**
   * Parks the finished machine back on the bench and makes it pickable again.
   * Takes the object explicitly: once it is in the player's hand it is no longer
   * `this.assembledPC`, so relying on that field would lose it for good.
   */
  parkAssembledPC(pc) {
    if (!pc) return;
    const group = pc.prebuilt;
    if (group.parent !== this.scene) this.scene.add(group);
    group.visible = true;
    group.position.copy(pc.home.position);
    group.rotation.set(0, pc.home.yaw, 0);
    group.updateMatrixWorld(true);
    this.assembledPC = pc;
  }

  handleWorldInteract(object, hit) {
    const held = this.heldItemManager.getHeldItem();
    // Resolve the tagged ancestor, exactly like the raycast hover does, so a hit
    // on any child of a grouped object behaves the same.
    let node = object;
    while (node && !node.userData?.type && !node.userData?.itemId) node = node.parent;
    const uData = node?.userData || {};

    // ==========================================
    // CASE A: PLAYER IS HOLDING AN ITEM
    // ==========================================
    if (held) {
      // Left Click drops/places the held item at the crosshair intersection
      if (hit && hit.point) {
        if (held.isAssembled) {
          this.parkAssembledPC(held);
          this.heldItemManager.clearHeldItem();
          return;
        }
        if (this.touchesFloor(hit.point, hit)) {
          this.heldItemManager.clearHeldItem();
          this.returnToTable(held);
          return;
        }
        this.placedItems.placeItemAt(held, hit.point);
        this.heldItemManager.clearHeldItem();
      }
      return;
    }

    // ==========================================
    // CASE B: PLAYER'S HAND IS EMPTY (OR SWAPPING)
    // ==========================================

    // 0. The finished machine: pick it up, swap it out
    if (uData.type === 'assembledPC') {
      const prev = this.assembledPC;
      if (!prev) return;
      this.assembledPC = null;
      prev.prebuilt.visible = false;
      if (prev.prebuilt.parent) prev.prebuilt.parent.remove(prev.prebuilt);
      this.heldItemManager.holdItem(prev);
      return;
    }

    // 1. Clicked the empty case placeholder -> Build Mode
    if (uData.type === 'computerCase') {
      this.buildModeUI.open();
      this.controls.unlockPointer();
      return;
    }

    // 2. Clicked an item placed on a bench / shelf
    if (uData.isPlaced && uData.itemId) {
      const item = HARDWARE_ITEMS.find(it => it.id === uData.itemId);
      if (item) {
        this.placedItems.removeItem(item.id);
        this.heldItemManager.holdItem(item);
      }
      return;
    }

    // 3. Clicked an item still sitting on the parts table
    if (uData.itemId) {
      const item = HARDWARE_ITEMS.find(it => it.id === uData.itemId);
      if (item) {
        this.shelf.hideItem(item.id);
        this.heldItemManager.holdItem(item);
      }
    }
  }

  handleStowItem() {
    // The finished machine is never stowed - it only lives on the bench or in hand
    if (this.heldItemManager.getHeldItem()?.isAssembled) {
      this.parkAssembledPC(this.heldItemManager.getHeldItem());
      this.heldItemManager.clearHeldItem();
      this.showToast('Máy tính đã lắp ráp được đặt lại lên bàn.');
      return;
    }
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

    // Build Mode is a full-screen modal with its own renderer. Skipping the room
    // while it is open is by far the biggest frame-time win we get, and it also
    // keeps the pointer lock from fighting the modal for the cursor.
    if (this.buildModeUI?.isOpen) {
      this.buildModeUI.update(delta, performance.now());
      return;
    }

    const interactables = [
      ...this.shelf.interactables,
      ...this.placedItems.interactables,
      ...this.room.interactables
    ];

    // Environment surfaces (tables, shelf, floor) for crosshair drop targeting
    const surfaces = this.room.surfaces || [];

    this.controls.update(delta, interactables, surfaces);
    this.heldItemManager.update(delta, time);
    this.room.update(delta);

    if (this.inventoryUI.isOpen && this.inventoryUI.selectedItem) {
      this.previewScene.render();
    }

    this.renderer.render(this.scene, this.camera);
  }

  showToast(message) {
    const existing = document.querySelector('.hud-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'hud-toast';
    toast.innerHTML = `<span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

