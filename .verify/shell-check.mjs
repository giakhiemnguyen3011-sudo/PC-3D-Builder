import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";
globalThis.requestAnimationFrame = () => 1;
globalThis.setTimeout = () => 0;
globalThis.devicePixelRatio = 1;
globalThis.performance = globalThis.performance || { now: () => Date.now() };
globalThis.window = globalThis;
globalThis.addEventListener = () => {};
globalThis.removeEventListener = () => {};
const makeCtx2D = () => ({ createLinearGradient: () => ({ addColorStop() {} }), createRadialGradient: () => ({ addColorStop() {} }), createPattern: () => null, getImageData: () => ({ data: new Uint8ClampedArray(4) }), measureText: () => ({ width: 10 }) });
const makeEl = (id = '') => ({
  id, width: 900, height: 700, clientWidth: 900, clientHeight: 700, style: {}, dataset: {},
  textContent: '', innerHTML: '', value: '', children: [], isConnected: true, className: '',
  classList: { _s: new Set(), add(...c) { c.forEach(x => this._s.add(x)); }, remove(...c) { c.forEach(x => this._s.delete(x)); }, toggle(c, on) { on === undefined ? (this._s.has(c) ? this._s.delete(c) : this._s.add(c)) : (on ? this._s.add(c) : this._s.delete(c)); }, contains(c) { return this._s.has(c); } },
  getContext: () => new Proxy(makeCtx2D(), { get: (t, k) => (k in t ? t[k] : () => {}) }),
  getBoundingClientRect: () => ({ left: 0, top: 0, right: 900, bottom: 700, width: 900, height: 700 }),
  addEventListener() {}, appendChild(c) { this.children.push(c); return c; }, remove() {}, removeChild() {},
  setAttribute() {}, querySelector: () => makeEl('i'), querySelectorAll: () => []
});
globalThis.document = {
  createElement: () => makeEl(),
  getElementById: (id) => { if (!globalThis.document._r) globalThis.document._r = new Map(); let r = globalThis.document._r.get(id); if (!r) { r = makeEl(id); globalThis.document._r.set(id, r); } return r; },
  addEventListener() {}, removeEventListener() {}, querySelector: () => makeEl(), body: makeEl('body')
};
globalThis.AudioContext = class {
  createGain() { return { gain: { value: 1, setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() {} }; }
  createBufferSource() { return { connect() {}, start() {}, buffer: { duration: 1 } }; }
  createOscillator() { const p = { value: 0, setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} }; return { frequency: p, type: '', connect() {}, start() {}, stop() {} }; }
  createBuffer(c, l) { return { getChannelData: () => new Float32Array(l), duration: 1 }; }
  get destination() { return {}; }
  get sampleRate() { return 48000; }
  get currentTime() { return 0; }
};

const THREE = await import('file:///D:/pc-builder-3d/node_modules/three/build/three.module.js');
const { BuildScene } = await import('file:///D:/pc-builder-3d/src/scene/BuildScene.js');

const scene = new BuildScene(document.getElementById('c'));

const tally = root => {
  let total = 0, hidden = 0, translucent = 0;
  root.traverse(o => {
    if (!o.isMesh) return;
    total++;
    if (!o.visible) hidden++;
    const m = Array.isArray(o.material) ? o.material[0] : o.material;
    if (m && m.transparent && (m.opacity ?? 1) < 0.95) translucent++;
  });
  return { total, hidden, translucent };
};

const build = tally(scene.caseGroup);
console.log('build view   :', JSON.stringify(build));
console.log('  glass visible:', scene.sideGlass.visible, '| glass opacity:', scene.sideGlass.material.opacity);

// any shell material left semi-transparent?
let ghostMaterials = 0;
scene.caseGroup.traverse(o => {
  if (!o.isMesh) return;
  const m = Array.isArray(o.material) ? o.material[0] : o.material;
  if (m && m.userData && m.userData.buildShell && (m.transparent || m.opacity < 0.99)) ghostMaterials++;
});
console.log('  shell materials still faded:', ghostMaterials);

// what would actually render (accounting for hidden ancestors)
const rendered = [];
scene.caseGroup.traverse(o => {
  if (!o.isMesh || !o.visible) return;
  let p = o.parent, shown = true;
  while (p) { if (!p.visible) shown = false; p = p.parent; }
  if (shown) rendered.push(o.name || '(unnamed)');
});
console.log('  meshes still drawn in build view:', rendered.length, rendered.slice(0, 8));

// hardware placeholders (the zone / grid-spot boxes) must never be drawn
let placeholdersDrawn = 0;
for (const m of scene.zoneList) {
  let shown = m.visible;
  let p = m.parent;
  while (p) { if (!p.visible) shown = false; p = p.parent; }
  if (shown) placeholdersDrawn++;
}
console.log('  hardware placeholders drawn:', placeholdersDrawn, 'of', scene.zoneList.length);
scene.setZoneState('cpu', 'active');
console.log('  after setZoneState(cpu, active):', scene.zoneList.filter(m => m.visible).length, 'drawn');
console.log('  snap maths still works (isOverZone has a marker):', !!scene.zoneMeshes.get('cpu'));

// finalize: the room must get a solid case back
const result = scene.finalize();
const clone = result.group.getObjectByName('assembledCase');
const room = tally(clone);
console.log('finished machine:', JSON.stringify(room));
const cloneGlass = clone.getObjectByName('sideGlass');
console.log('  glass on the finished machine:', cloneGlass ? 'present, visible=' + cloneGlass.visible : 'MISSING');
scene.dispose();