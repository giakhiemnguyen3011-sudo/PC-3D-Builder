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
