import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');

process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';

const nativeSetTimeout = globalThis.setTimeout;
globalThis.requestAnimationFrame = () => 1;
globalThis.cancelAnimationFrame = () => {};
globalThis.setTimeout = (fn) => nativeSetTimeout(fn, 0);
globalThis.clearTimeout = id => clearTimeout(id);
globalThis.devicePixelRatio = 1;
globalThis.performance ??= { now: () => Date.now() };

const makeEl = (id = '') => {
  const el = {
    id, width: 1280, height: 720, clientWidth: 360, clientHeight: 360,
    style: {}, dataset: {}, textContent: '', innerHTML: '', children: [], className: '',
    classList: {
      _s: new Set(),
      add(...c) { c.forEach(x => this._s.add(x)); },
      remove(...c) { c.forEach(x => this._s.delete(x)); },
      toggle(c, on) { on === undefined ? (this._s.has(c) ? this._s.delete(c) : this._s.add(c)) : (on ? this._s.add(c) : this._s.delete(c)); },
      contains(c) { return this._s.has(c); }
    },
    getContext: () => new Proxy({}, { get: () => () => {} }),
    addEventListener() {}, appendChild(c) { this.children.push(c); },
    remove() {}, removeChild() {}, setAttribute() {},
    querySelector: (sel) => (sel === '.prompt-text' ? makeEl('prompt-text') : null)
  };
  return el;
};
const registry = new Map();
globalThis.document = {
  createElement: makeEl,
  getElementById: id => { if (!registry.has(id)) registry.set(id, makeEl(id)); return registry.get(id); },
  addEventListener() {}, removeEventListener() {}, querySelector: () => null,
  body: makeEl('body')
};
globalThis.window = {
  addEventListener() {}, removeEventListener() {},
  innerWidth: 1280, innerHeight: 720, devicePixelRatio: 1
};
globalThis.navigator ??= { userAgent: 'node' };

const THREE = await import('three');
const { Game } = await import('file:///D:/pc-builder-3d/src/core/Game.js');
const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');

const game = new Game();
game.clock.getDelta = () => 0.016;
game.clock.getElapsedTime = () => 1;

const wait = async pred => {
  for (let i = 0; i < 3000; i++) { if (pred()) return true; await new Promise(r => nativeSetTimeout(r, 1)); }
  return false;
};
const ready = await wait(() => game.shelf.stream.loaded >= game.shelf.stream.total);
console.log(`stream ${game.shelf.stream.loaded}/${game.shelf.stream.total} ${ready ? 'complete' : 'TIMED OUT'}\n`);

// What the raycast list holds versus what the bench actually holds
const targets = game.getRaycastTargets();
const shelfInteractables = game.shelf.interactables;

const realIds = new Set();
for (const obj of shelfInteractables) {
  if (obj.userData?.itemId) realIds.add(obj.userData.itemId);
}
const targetIds = new Set();
for (const obj of targets) {
  if (obj.userData?.itemId) targetIds.add(obj.userData.itemId);
}

const placeholdersLeft = shelfInteractables.filter(o => o.userData?.isPlaceholder).length;
console.log(`placeholders still on the bench : ${placeholdersLeft}`);
console.log(`shelf.interactables entries     : ${shelfInteractables.length}`);
console.log(`  ...carrying an itemId         : ${realIds.size}`);
console.log(`raycast target list entries      : ${targets.length}`);
console.log(`  ...carrying an itemId         : ${targetIds.size}`);

const missing = [...realIds].filter(id => !targetIds.has(id));
console.log(`\nitems the bench has but the raycast cannot see: ${missing.length} of ${realIds.size}`);
if (missing.length) console.log(`  e.g. ${missing.slice(0, 6).join(', ')}`);

// How many targets are stale placeholders that were removed from the scene?
let stale = 0;
for (const obj of targets) {
  if (obj.userData?.isPlaceholder && !obj.parent) stale++;
}
console.log(`stale detached placeholders in the raycast list: ${stale}`);

// The real test: aim at a known part and try to pick it up.
// `controls.update` forces eye height to 1.65 and runs collision, so let it
// settle the position first, then aim with the same yaw/pitch a mouse would set.
const gpu = ALL_HARDWARE_ITEMS.find(i => i.id === 'gpu_rtx_3090');
const gpuObj = shelfInteractables.find(o => o.userData?.itemId === gpu.id);
console.log(`\n${gpu.name} -> wrapper on bench: ${!!gpuObj}, in raycast list: ${targets.includes(gpuObj)}`);

game.controls.isLocked = true;
game.camera.position.set(0, 1.65, 1.8);
game.camera.updateMatrixWorld(true);
game.controls.update(0.016, targets);   // settle whatever the engine decides

gpuObj.updateMatrixWorld(true);
const centre = new THREE.Box3().setFromObject(gpuObj).getCenter(new THREE.Vector3());
const camPos = game.camera.position;

// forward = (-sin yaw, 0, -cos yaw), then pitch tilts it down/up
const dx = centre.x - camPos.x;
const dz = centre.z - camPos.z;
const flat = Math.hypot(dx, dz) || 1e-6;
game.controls.yaw = Math.atan2(-dx / flat, -dz / flat);
const horiz = Math.hypot(flat, centre.y - camPos.y);
game.controls.pitch = Math.asin((centre.y - camPos.y) / horiz);
game.camera.quaternion.setFromEuler(new THREE.Euler(game.controls.pitch, game.controls.yaw, 0, 'YXZ'));
game.controls.markRaycastDirty();
game.controls.update(0.016, targets);

const hovered = game.controls.hoveredObject;
console.log(`camera at ${[camPos.x, camPos.y, camPos.z].map(n => n.toFixed(2)).join(', ')}`);
console.log(`crosshair hovers: ${hovered ? (hovered.userData?.itemId || hovered.userData?.type || 'untagged') : 'NOTHING'}`);

game.handleWorldInteract(hovered, game.controls.lastRaycastHit);
const held = game.heldItemManager.getHeldItem();
console.log(`picked up: ${held ? held.id : 'NOTHING -- BROKEN'}`);
console.log(`part hidden from the bench: ${gpuObj.visible === false}`);

// and a second, different part, to be sure this is not a one-off
const cooler = ALL_HARDWARE_ITEMS.find(i => i.id === 'cooler_master_212');
const coolerObj = shelfInteractables.find(o => o.userData?.itemId === cooler.id);
coolerObj.updateMatrixWorld(true);
const c2 = new THREE.Box3().setFromObject(coolerObj).getCenter(new THREE.Vector3());
const dx2 = c2.x - camPos.x, dz2 = c2.z - camPos.z;
const flat2 = Math.hypot(dx2, dz2) || 1e-6;
game.controls.yaw = Math.atan2(-dx2 / flat2, -dz2 / flat2);
game.controls.pitch = Math.asin((c2.y - camPos.y) / Math.hypot(flat2, c2.y - camPos.y));
game.camera.quaternion.setFromEuler(new THREE.Euler(game.controls.pitch, game.controls.yaw, 0, 'YXZ'));
game.controls.markRaycastDirty();
game.controls.update(0.016, targets);
game.handleWorldInteract(game.controls.hoveredObject, game.controls.lastRaycastHit);
console.log(`second part picked up: ${game.heldItemManager.getHeldItem()?.id || 'NOTHING -- BROKEN'}`);
