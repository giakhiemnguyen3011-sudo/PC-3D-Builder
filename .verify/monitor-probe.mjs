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
const sw = new THREE.Box3().setFromObject(room.monitorScreenMesh);
room.group.traverse(o => {
  if (!o.isMesh || o === room.monitorScreenMesh) return;
  const b = new THREE.Box3().setFromObject(o);
  if (!b.intersectsBox(sw)) return;
  const path = [];
  let p = o;
  while (p) { path.unshift(p.name || p.type); p = p.parent; }
  const m = Array.isArray(o.material) ? o.material[0] : o.material;
  console.log('mesh   :', o.name || o.geometry.type);
  console.log('  path :', path.join(' > '));
  console.log('  box  :', b.min.toArray().map(v => v.toFixed(3)).join(','), '->', b.max.toArray().map(v => v.toFixed(3)).join(','));
  console.log('  size :', b.getSize(new THREE.Vector3()).toArray().map(v => (v * 1000).toFixed(0)).join(' x '), 'mm');
  console.log('  mat  :', m?.color?.getHexString?.(), 'type', m?.type);
  console.log('  pos  :', o.position.toArray().map(v => v.toFixed(3)).join(','), 'rot', o.rotation.toArray().slice(0, 3).map(v => v.toFixed(2)).join(','));
});