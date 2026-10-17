import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');
process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';
globalThis.requestAnimationFrame = () => 1; globalThis.cancelAnimationFrame = () => {};
globalThis.devicePixelRatio = 1;
const RECT = { left: 0, top: 0, right: 900, bottom: 700, width: 900, height: 700 };
const ctx = () => new Proxy({ createLinearGradient: () => ({ addColorStop() {} }), measureText: () => ({ width: 10 }) }, { get: (t, k) => (k in t ? t[k] : () => {}) });
const el = (id = '') => ({ id, width: 900, height: 700, clientWidth: 900, clientHeight: 700, style: {}, dataset: {}, textContent: '', innerHTML: '', value: '', children: [], isConnected: true, className: '', classList: { _s: new Set(), add() {}, remove() {}, toggle() {}, contains() { return false; } }, getContext: () => ctx(), getBoundingClientRect: () => RECT, addEventListener() {}, appendChild(c) { return c; }, remove() {}, removeChild() {}, setAttribute() {}, querySelector: () => el(), querySelectorAll: () => [] });
const reg = new Map();
globalThis.document = { createElement: () => el(), getElementById: id => { if (!reg.has(id)) reg.set(id, el(id)); return reg.get(id); }, addEventListener() {}, removeEventListener() {}, querySelector: () => el(), body: el('b') };
globalThis.window = { addEventListener() {}, removeEventListener() {}, innerWidth: 1280, innerHeight: 720, devicePixelRatio: 1 };
globalThis.navigator ??= { userAgent: 'node' };

const { BuildScene } = await import('file:///D:/pc-builder-3d/src/scene/BuildScene.js');
const { CASE_ZONES, mountQuaternion } = await import('file:///D:/pc-builder-3d/src/scene/caseLayout.js');
const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');
const THREE = await import('three');

const s = new BuildScene(document.getElementById('build-canvas'));
s.snapCamera();
const item = ALL_HARDWARE_ITEMS.find(i => i.id === 'mb_asus_z370');
const zone = CASE_ZONES.motherboard;
await s.placePart(item, 'motherboard', 'mb');
await new Promise(r => setImmediate(r));

const holder = s.placedParts.get('mb').group;
s.caseRoot.updateMatrixWorld(true);
const centre = new THREE.Box3().setFromObject(holder).getCenter(new THREE.Vector3());
s.caseRoot.worldToLocal(centre);

const fitted = holder.children[0];
fitted.updateMatrixWorld(true);
const local = new THREE.Box3().setFromObject(fitted);
const c = new THREE.Vector3(
  (local.max.x + local.min.x) / 2,
  (local.max.y + local.min.y) / 2,
  (local.max.z + local.min.z) / 2
);
const mount = mountQuaternion(zone);

console.log('local box (fitted frame) min', local.min.toArray().map(v => v.toFixed(4)));
console.log('local box (fitted frame) max', local.max.toArray().map(v => v.toFixed(4)));
console.log('local centre c            ', c.toArray().map(v => v.toFixed(4)));
console.log('mount R * c               ', c.clone().applyQuaternion(mount).toArray().map(v => v.toFixed(4)));
console.log('holder.position           ', holder.position.toArray().map(v => v.toFixed(4)));
console.log('zone anchor               ', zone.anchor.map(v => v.toFixed(4)));
console.log('predicted centre          ', holder.position.clone().add(c.clone().applyQuaternion(mount)).toArray().map(v => v.toFixed(4)));
console.log('actual   centre           ', centre.toArray().map(v => v.toFixed(4)));
console.log('holder.rotation           ', holder.rotation.toArray().slice(0, 3).map(v => v.toFixed(4)));
console.log('fitted.rotation           ', fitted.rotation.toArray().slice(0, 3).map(v => v.toFixed(4)));
console.log('fitted.position           ', fitted.position.toArray().map(v => v.toFixed(4)));
