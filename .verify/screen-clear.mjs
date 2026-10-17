import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');
process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';
globalThis.requestAnimationFrame = () => 1;
globalThis.performance = globalThis.performance || { now: () => Date.now() };
globalThis.window = globalThis;
globalThis.addEventListener = () => {};
globalThis.removeEventListener = () => {};
const ctx2d = () => ({ createLinearGradient: () => ({ addColorStop() {} }), createRadialGradient: () => ({ addColorStop() {} }), createPattern: () => null, getImageData: () => ({ data: new Uint8ClampedArray(4) }), measureText: () => ({ width: 10 }) });
const el = (id = '') => ({ id, width: 900, height: 700, clientWidth: 900, clientHeight: 700, style: {}, dataset: {}, textContent: '', innerHTML: '', value: '', children: [], isConnected: true, className: '', classList: { _s: new Set(), add(...c) { c.forEach(x => this._s.add(x)); }, remove(...c) { c.forEach(x => this._s.delete(x)); }, toggle(c, on) { on === undefined ? (this._s.has(c) ? this._s.delete(c) : this._s.add(c)) : (on ? this._s.add(c) : this._s.delete(c)); }, contains(c) { return this._s.has(c); } }, getContext: () => new Proxy(ctx2d(), { get: (t, k) => (k in t ? t[k] : () => {}) }), getBoundingClientRect: () => ({ left: 0, top: 0, right: 900, bottom: 700, width: 900, height: 700 }), addEventListener() {}, appendChild(c) { this.children.push(c); return c; }, remove() {}, removeChild() {}, setAttribute() {}, querySelector: () => el('i'), querySelectorAll: () => [] });
globalThis.document = { createElement: () => el(), getElementById: (id) => el(id), addEventListener() {}, removeEventListener() {}, querySelector: () => el(), body: el('body') };
globalThis.AudioContext = class { createGain() { return { gain: { value: 1, setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() {} }; } createBufferSource() { return { connect() {}, start() {}, buffer: { duration: 1 } }; } createOscillator() { const p = { value: 0, setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} }; return { frequency: p, type: '', connect() {}, start() {}, stop() {} }; } createBuffer(c, l) { return { getChannelData: () => new Float32Array(l), duration: 1 }; } get destination() { return {}; } get sampleRate() { return 48000; } get currentTime() { return 0; } };

const THREE = await import('file:///D:/pc-builder-3d/node_modules/three/build/three.module.js');
const { Room } = await import('file:///D:/pc-builder-3d/src/scene/Room.js');
const room = new Room(new THREE.Scene());
room.group.updateMatrixWorld(true);

const panel = room.monitorPanel;
panel.updateMatrixWorld(true);
const screenZ = room.monitorScreenMesh.position.z;
const halfW = room.monitorScreenMesh.geometry.parameters.width / 2;
const halfH = room.monitorScreenMesh.geometry.parameters.height / 2;

// Walk real vertices, not bounding boxes: a rotated panel turns an AABB corner
// into a point that never touched the geometry.
let worst = null;
room.monitorBody.traverse(o => {
  if (!o.isMesh || o === room.monitorScreenMesh) return;
  const pos = o.geometry.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    o.localToWorld(v);
    const l = panel.worldToLocal(v.clone());
    if (Math.abs(l.x) > halfW || Math.abs(l.y - 0.004) > halfH) continue;
    if (l.z <= screenZ + 0.0002) continue;
    if (!worst || l.z > worst.z) worst = { z: l.z, name: o.name || o.geometry.type, local: l };
  }
});
console.log(worst
  ? 'front of the screen: ' + worst.name + ' at local z=' + worst.local.z.toFixed(4)
  : 'nothing on the camera side of the screen within its footprint');