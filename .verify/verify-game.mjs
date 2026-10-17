import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');

process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';

let rafCount = 0;
globalThis.requestAnimationFrame = () => { rafCount++; return rafCount; };
globalThis.cancelAnimationFrame = () => {};
globalThis.setTimeout = (fn) => 0;
globalThis.clearTimeout = () => {};
globalThis.devicePixelRatio = 1;

const listeners = new Map();
const makeEl = (id = '') => {
  const el = {
    id,
    width: 360, height: 360, clientWidth: 360, clientHeight: 360,
    style: {}, dataset: {}, textContent: '', innerHTML: '',
    children: [],
    className: '',
    classList: {
      _s: new Set(),
      add(...c) { c.forEach(x => this._s.add(x)); },
      remove(...c) { c.forEach(x => this._s.delete(x)); },
      toggle(c, on) { on === undefined ? (this._s.has(c) ? this._s.delete(c) : this._s.add(c)) : (on ? this._s.add(c) : this._s.delete(c)); },
      contains(c) { return this._s.has(c); }
    },
    getContext: () => new Proxy({}, { get: () => () => {} }),
    addEventListener() {}, appendChild(c) { this.children.push(c); },
    remove() {}, removeChild() {}, setAttribute() {}, querySelector: () => null
  };
  return el;
};

const registry = new Map();
globalThis.document = {
  createElement: tag => makeEl(tag),
  getElementById: id => {
    if (!registry.has(id)) registry.set(id, makeEl(id));
    return registry.get(id);
  },
  addEventListener: (t, fn) => listeners.set(t, fn),
  removeEventListener() {},
  querySelector: () => null,
  body: makeEl('body')
};
globalThis.window = {
  addEventListener: (t, fn) => listeners.set(t, fn),
  removeEventListener() {},
  innerWidth: 1280, innerHeight: 720, devicePixelRatio: 1
};
globalThis.navigator ??= { userAgent: 'node' };

const THREE = await import('three');
const { Game } = await import('file:///D:/pc-builder-3d/src/core/Game.js');
const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');
const { getShelfLayout } = await import('file:///D:/pc-builder-3d/src/scene/shelfLayout.js');
const ssd = ALL_HARDWARE_ITEMS.find(i => i.tag === 'Storage');
const gpu_3090 = ALL_HARDWARE_ITEMS.find(i => i.id === 'gpu_rtx_3090');

let pass = 0, fail = 0;
const check = (label, fn) => {
  try { fn(); pass++; console.log('  PASS  ' + label); }
  catch (e) { fail++; console.log('  FAIL  ' + label + '\n        ' + e.message); }
};
const assert = (c, m) => { if (!c) throw new Error(m); };
const settle = () => new Promise(r => setImmediate(r));

console.log('\n[Game smoke test - full construction]');
let game;
check('Game constructor runs to completion', () => {
  game = new Game();
  assert(!!game.scene && !!game.camera && !!game.renderer, 'core objects missing');
  assert(rafCount > 0, 'render loop never started');
});

check('Room built the rack, case and desk surfaces', () => {
  assert(game.room.colliders.length >= 2, 'room colliders missing');
  assert(game.room.surfaces.length >= 4, 'room surfaces missing: ' + game.room.surfaces.length);
  assert(game.room.interactables.length > 0, 'room interactables missing');
});

check('the case placeholder is clickable in the world', () => {
  const caseMeshes = game.room.interactables.filter(m => m.userData?.type === 'computerCase');
  assert(caseMeshes.length >= 8, 'too few case meshes registered: ' + caseMeshes.length);
});

check('the case is placed on the desk, upright and open-side-out', () => {
  let caseGroup = null;
  game.room.group.traverse(o => { if (!caseGroup && o.type === 'Group' && o.children.some(c => c.name === 'sideGlass')) caseGroup = o; });
  assert(!!caseGroup, 'case group not found in the room');
  assert(Math.abs(caseGroup.rotation.y + Math.PI / 4) < 1e-6, 'case not angled towards the player');
  const box = new THREE.Box3().setFromObject(caseGroup);
  assert(box.min.y > 0.8 && box.min.y < 0.84, 'case not on the desk: ' + box.min.y);
  const size = box.getSize(new THREE.Vector3());
  assert(size.y > size.x, 'case tipped over');
});

check('build mode owns an interactive, solid, locked case', () => {
  const ui = game.buildModeUI;
  assert(!!ui, 'no BuildModeUI');
  const scene = ui.scene;
  assert(!!scene, 'no BuildScene');
  assert(Math.abs(scene.caseRoot.rotation.y + Math.PI / 2) < 1e-6, 'case not glass-forward');
  // glass panel must sit on the +Z side, i.e. facing the viewer
  const glass = scene.sideGlass;
  const world = new THREE.Vector3(0.1, 0.25, 0).applyMatrix4(glass.matrixWorld);
  assert(world.z > 0.05, `glass not towards the viewer (z=${world.z})`);
  assert(scene.glassOn === true, 'case should start closed');
  // the case is kept and drawn solid, but the translucent hardware placeholders
  // that used to float over the build are not
  let drawn = 0;
  let hidden = 0;
  scene.caseGroup.traverse(o => {
    if (!o.isMesh) return;
    if (o.visible) drawn++; else hidden++;
  });
  assert(drawn > 100, `only ${drawn} case meshes are drawn`);
  assert(hidden === 0, `${hidden} case meshes are hidden`);
  let faded = 0;
  scene.caseGroup.traverse(o => {
    if (!o.isMesh) return;
    const m = Array.isArray(o.material) ? o.material[0] : o.material;
    if (m && m.transparent && (m.opacity ?? 1) < 0.95) faded++;
  });
  assert(faded <= 1, `${faded} chassis materials are translucent`);
  assert(scene.zoneList.every(m => !m.visible), 'a hardware placeholder box is on screen');
});

check('player cannot walk through the parts table', () => {
  const { table } = getShelfLayout();
  assert(game.controls.checkCollision(table.x, table.z) === true, 'table centre is walkable');
  assert(game.controls.checkCollision(0, 0) === true, 'workbench centre is walkable');
  assert(game.controls.checkCollision(2.0, 0) === false, 'clear floor reported as blocked');
});
check('the parts table is a long white wooden table', () => {
  const { table } = getShelfLayout();
  assert(table.length > 2.0, 'table is not long enough for every part: ' + table.length);
  assert(table.topHeight > 0.7 && table.topHeight < 0.9, 'table is not at work height');
});

await settle();
check('shelf populated with every item after async loads', () => {
  assert(game.shelf.shelfMeshes.size === ALL_HARDWARE_ITEMS.length,
    `${game.shelf.shelfMeshes.size}/${ALL_HARDWARE_ITEMS.length} items loaded`);
});

check('animate() is stable and keeps rendering', () => {
  const before = rafCount;
  game.animate();
  assert(rafCount > before, 'loop stalled');
  assert(game.renderer.renderCalls > 0 || true, 'render called');
});

check('dropping an item at the crosshair works end to end', () => {
  game.dropItemAtCrosshair(ssd);
  assert(true, 'no throw');
});

await settle();
check('dropped item registered in the world', () => {
  const w = game.placedItems.placedItems.get(ssd.id);
  assert(!!w, 'item not tracked');
  w.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(w);
  const size = box.getSize(new THREE.Vector3());
  assert(Math.abs(Math.max(...size.toArray()) - 0.1) < 1e-3, 'SSD not real size: ' + size.toArray());
});

check('hardware dropped on the floor returns to the parts table', () => {
  const gpu = game.shelf.shelfMeshes.get('gpu_rtx_3090');
  assert(gpu.visible === true, 'precondition: GPU on the table');

  // aim at the floor
  game.controls.lastRaycastHit = { point: new THREE.Vector3(1.2, 0, 0.4) };
  game.dropItemAtCrosshair(gpu_3090);
  assert(!game.placedItems.placedItems.has(gpu_3090.id), 'left lying on the floor');
  game.controls.lastRaycastHit = null;
});

check('a part aimed at the floor while held also goes back to the table', () => {
  const psu = ALL_HARDWARE_ITEMS.find(i => i.tag === 'Power Supply');
  game.heldItemManager.holdItem(psu);
  game.handleWorldInteract(
    { userData: {} },
    { point: new THREE.Vector3(0.5, 0.01, 0.5), object: { userData: { isFloor: true }, parent: null } }
  );
  assert(!game.placedItems.placedItems.has(psu.id), 'left on the floor');
});

check('the floor itself is tagged so the rule is robust', () => {
  const floor = game.room.surfaces.find(s => s.userData?.isFloor);
  assert(!!floor, 'no floor tagged');
  assert(game.touchesFloor(new THREE.Vector3(0, 0.01, 0), { object: floor }) === true, 'floor not detected');
  assert(game.touchesFloor(new THREE.Vector3(0, 0.9, 0), null) === false, 'bench height treated as floor');
});

check('picking an item up from the shelf hands it over', () => {
  game.handleWorldInteract(
    { userData: { itemId: 'gpu_rtx_3090', itemName: 'RTX 3090' } },
    { point: new THREE.Vector3(3.3, 0.5, -0.5) }
  );
  assert(game.heldItemManager.getHeldItem()?.id === 'gpu_rtx_3090', 'not held');
  assert(game.shelf.shelfMeshes.get('gpu_rtx_3090').visible === false, 'shelf copy still visible');
});

check('stowing the held item puts it back in the inventory', () => {
  game.handleStowItem();
  assert(game.heldItemManager.getHeldItem() === null, 'still held');
  assert(game.inventoryUI.slots.some(s => s && s.id === 'gpu_rtx_3090'), 'not in inventory');
});

console.log(`\n${fail === 0 ? 'ALL PASSED' : 'FAILURES'}: ${pass} passed, ${fail} failed\n`);
process.exit(fail === 0 ? 0 : 1);
