import * as THREE from 'three';
import { Room } from '../scene/Room.js';
import { ShelfHardware } from '../scene/ShelfHardware.js';
import { PlacedItemManager } from '../scene/PlacedItemManager.js';
import { ItemPreviewScene } from '../scene/ItemPreviewScene.js';
import { HeldItemManager } from '../controls/HeldItemManager.js';
import { PlayerControls } from '../controls/PlayerControls.js';
import { InventoryUI } from '../ui/InventoryUI.js';
import { BuildModeUI } from '../ui/BuildModeUI.js';
import { ALL_HARDWARE_ITEMS } from '../data/hardware.js';
import { sounds } from '../audio/SoundEffects.js';

// Anything dropped below this height counts as "on the floor"
const FLOOR_TOUCH_Y = 0.06;

// How often the shadow depth map is redrawn when nothing has asked for it. At
// 60 fps every 4th frame is 15 redraws a second, which is well past the point
// where a shadow in a static room can be seen to move, and it cuts the shadow
// pass to a quarter of the cost.
const SHADOW_REFRESH_FRAMES = 4;

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
    this.placedItems = new PlacedItemManager(this.scene);

    // The bench fills in progressively: placeholders go down immediately and
    // each real model replaces its box as it finishes parsing, which keeps the
    // main thread free instead of stalling on hundreds of megabytes at once.
    this.loadingBarFill = document.getElementById('loading-bar-fill');
    this.loadingText = document.getElementById('loading-text');
    this.shelf = new ShelfHardware(this.scene, {
      perFrame: 4,
      onProgress: (loaded, total) => this.setLoadingProgress(loaded, total),
      onReady: () => this.setLoadingProgress(1, 1)
    });
    this.shelf.seedPlaceholders();

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

    // The room is playable straight away; the loading bar only reports how much
    // of the bench has arrived, and the screen steps aside shortly after the
    // first models land rather than after all of them.
    this.loadingDone = false;
    this.setLoadingProgress(0, this.shelf.stream.total);

    this.setupWindowEvents();
    this.animate();
  }

  /**
   * Drives the loading bar from how much of the bench has arrived, then gets out
   * of the way. The first models usually land within a frame or two, so the
   * player is not left staring at a bar for the whole download.
   */
  setLoadingProgress(loaded, total) {
    const safeTotal = total || 1;
    const ratio = Math.min(1, loaded / safeTotal);
    if (this.loadingBarFill) {
      this.loadingBarFill.style.width = `${Math.round(ratio * 100)}%`;
    }
    if (this.loadingText) {
      this.loadingText.textContent = `Đang tải mô hình linh kiện... ${Math.round(ratio * 100)}%`;
    }
    if (ratio > 0.12 || this.loadingDone) this.dismissLoadingScreen();
  }

  dismissLoadingScreen() {
    if (this.loadingDone) return;
    this.loadingDone = true;
    const loaderScreen = document.getElementById('loading-screen');
    if (!loaderScreen) return;
    loaderScreen.classList.add('hidden');
    setTimeout(() => loaderScreen.remove(), 600);
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // The room is static, so redrawing the depth map every frame is wasted work.
    // This is the one performance change kept from the last pass: it costs no
    // image quality at all, because the shadow map still holds exactly the same
    // image - it is simply refreshed on a heartbeat instead of 60 times a second.
    this.renderer.shadowMap.autoUpdate = false;
    this.shadowDirty = true;
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
    this.markWorldChanged();
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
    this.markWorldChanged();
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
      // free-standing: it can be turned on all three axes, so it carries no
      // noTilt constraint. A single loose part keeps noTilt so it cannot be
      // tipped onto its side in the hand.
      realSize: Math.max(size.y, 0.2),
      prebuilt: group,
      prebuiltSizeY: size.y,
      installedParts: result.parts,
      // `yaw` is the resting pose. Rotating the machine updates `pose`, so
      // putting it back on the bench returns it the way the player left it.
      home: { position: anchor.clone(), yaw },
      pose: { x: 0, y: yaw, z: 0 }
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
    this.markWorldChanged();
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
    // keep whatever three-axis pose the player left it in
    const pose = pc.pose || pc.home;
    group.rotation.set(pose.x || 0, pose.y ?? pc.home.yaw, pose.z || 0);
    group.updateMatrixWorld(true);
    this.assembledPC = pc;
    this.markWorldChanged();
  }

  /**
   * Remembers the machine's orientation so parking it does not snap it upright.
   *
   * While held, the rotation lives on the hand's `rotationPivot` (the group
   * itself is zeroed on pick-up), so the hand's current item rotation is what has
   * to be carried over.
   */
  rememberAssembledPose(pc) {
    if (!pc?.prebuilt) return;
    const rot = this.heldItemManager?.itemRotation;
    if (rot) {
      pc.pose = { x: rot.x || 0, y: rot.y || 0, z: rot.z || 0 };
    } else {
      const e = pc.prebuilt.rotation;
      pc.pose = { x: e.x, y: e.y, z: e.z };
    }
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
          this.rememberAssembledPose(held);
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
        this.markWorldChanged();
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
      this.markWorldChanged();
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
      const item = ALL_HARDWARE_ITEMS.find(it => it.id === uData.itemId);
      if (item) {
        this.placedItems.removeItem(item.id);
        this.heldItemManager.holdItem(item);
        this.markWorldChanged();
      }
      return;
    }

    // 3. Clicked an item still sitting on the parts table
    if (uData.itemId) {
      const item = ALL_HARDWARE_ITEMS.find(it => it.id === uData.itemId);
      if (item) {
        this.shelf.hideItem(item.id);
        this.heldItemManager.holdItem(item);
        this.markWorldChanged();
      }
    }
  }

  handleStowItem() {
    // The finished machine is never stowed - it only lives on the bench or in hand
    const heldMachine = this.heldItemManager.getHeldItem();
    if (heldMachine?.isAssembled) {
      this.rememberAssembledPose(heldMachine);
      this.parkAssembledPC(heldMachine);
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
        this.markWorldChanged();
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

    const now = performance.now();
    const delta = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.getElapsedTime();

    // Build Mode is a full-screen modal with its own renderer. Skipping the room
    // while it is open is by far the biggest frame-time win we get, and it also
    // keeps the pointer lock from fighting the modal for the cursor.
    if (this.buildModeUI?.isOpen) {
      this.buildModeUI.update(delta, now);
      return;
    }

    // The crosshair only needs re-testing when the player or the world has
    // actually moved, so the target list is kept in one array instead of being
    // rebuilt with three spreads on every frame.
    this.controls.update(delta, this.getRaycastTargets());

    this.heldItemManager.update(delta, time);
    this.room.update(delta);

    if (this.inventoryUI.isOpen && this.inventoryUI.selectedItem) {
      this.previewScene.render();
    }

    // The depth map is redrawn on a slow heartbeat rather than every frame. The
    // room is static, so nothing visible changes between redraws; the only
    // continuously moving object is the part in the player's hand, which is
    // parented to the camera and never casts a useful shadow anyway.
    // `markWorldChanged` forces an immediate redraw when the world does change.
    this.frame = (this.frame || 0) + 1;
    if (this.shadowDirty || this.frame % SHADOW_REFRESH_FRAMES === 0) {
      this.renderer.shadowMap.needsUpdate = true;
      this.shadowDirty = false;
    }

    this.renderer.render(this.scene, this.camera);
  }

  /**
   * The combined raycast target list: hardware, dropped parts, the case and the
   * surfaces a part can be dropped onto.
   *
   * Rebuilt every frame into one reused array. Caching it on a length check does
   * not work here: `ShelfHardware._swapIn()` removes a placeholder and pushes the
   * real model in the same step, so the list is edited in place with no change in
   * length, and a cached copy silently keeps pointing at the discarded
   * placeholders - which leaves nothing on the bench reachable by the crosshair.
   * Refilling costs nothing measurable for a few dozen entries; the raycast it
   * feeds is gated separately on whether the camera actually moved.
   */
  getRaycastTargets() {
    if (!this.raycastList) {
      this.raycastSources = [
        this.shelf.interactables,
        this.placedItems.interactables,
        this.room.interactables,
        this.room.surfaces
      ];
      this.raycastList = [];
    }
    const list = this.raycastList;
    list.length = 0;
    for (const source of this.raycastSources) {
      for (let i = 0; i < source.length; i++) list.push(source[i]);
    }
    return list;
  }

  /**
   * Signals that the world changed: something was picked up, dropped, shown or
   * hidden. The hover test and the shadow map are both cached against the last
   * frame, so anything that alters what is under the crosshair or what casts a
   * shadow has to say so, otherwise the crosshair keeps highlighting a part
   * that is no longer there.
   */
  markWorldChanged() {
    this.controls?.markRaycastDirty();
    this.shadowDirty = true;
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

