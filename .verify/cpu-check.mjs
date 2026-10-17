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
globalThis.AudioContext = class {
  createGain() { return { gain: { value: 1, setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() {} }; }
  createBufferSource() { return { connect() {}, start() {}, buffer: { duration: 1 } }; }
  createOscillator() { const p = { value: 0, setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} }; return { frequency: p, type: '', connect() {}, start() {}, stop() {} }; }
  createBuffer(c, l) { return { getChannelData: () => new Float32Array(l), duration: 1 }; }
  get destination() { return {}; }
  get sampleRate() { return 48000; }
  get currentTime() { return 0; }
};

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
const THREE = await import('file:///D:/pc-builder-3d/node_modules/three/build/three.module.js');
const L = await import('file:///D:/pc-builder-3d/src/scene/caseLayout.js');
const { Game } = await import('file:///D:/pc-builder-3d/src/core/Game.js');
const game = new Game();
const s = game.buildModeUI.scene;
const I = (await import('file:///D:/pc-builder-3d/src/data/hardware.js')).ALL_HARDWARE_ITEMS;
const ui = game.buildModeUI;
const put = async (id, z) => { ui.pendingPress = id; await s.placePart(I.find(i => i.id === id), z, id + ':' + z); ui.pendingPress = null; };

await put('mb_msi_b550_tomahawk', 'motherboard');
await put('cpu_ryzen_3600', 'cpu');
await put('cooler_master_212', 'cooler');
await put('ram_corsair_dominator', 'ram');
await put('ram_gskill_tridentz_16gb', 'ram');
await put('gpu_rtx_3090', 'gpu');
await put('psu_aerocool_650w', 'psu');
await new Promise(r => setImmediate(r));

// case-local AABB of each seated part, transformed properly (8 corners)
const inv = new THREE.Matrix4().copy(s.caseRoot.matrixWorld).invert();
const caseBox = group => {
  const b = new THREE.Box3().setFromObject(group);
  const out = new THREE.Box3();
  for (let i = 0; i < 8; i++) {
    out.expandByPoint(new THREE.Vector3(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z).applyMatrix4(inv));
  }
  return out;
};
const mm = v => (v * 1000).toFixed(0);
const line = (label, g) => {
  const b = caseBox(g);
  console.log(
    label.padEnd(22),
    'x', mm(b.min.x), '..', mm(b.max.x),
    ' y', mm(b.min.y), '..', mm(b.max.y),
    ' z', mm(b.min.z), '..', mm(b.max.z)
  );
  return b;
};
console.log('case-local mm   (glass side is +X, up +Y, front panel +Z)\n');
const boxes = {};
for (const [k, v] of s.placedParts) boxes[k.split(':')[0]] = line(k.split(':')[0], v.group);

const BOARD_PCB_X = L.TRAY.face + 0.0015;
console.log('\nchecks');
const cpu = boxes.cpu_ryzen_3600;
console.log('  board copper at x =', mm(BOARD_PCB_X), 'mm; CPU starts at', mm(cpu.min.x),
  '-> gap', mm(cpu.min.x - BOARD_PCB_X), 'mm (socket frame is 6.6mm proud)');
console.log('  CPU centre y/z    =', mm(cpu.getCenter(new THREE.Vector3()).y), '/',
  mm(cpu.getCenter(new THREE.Vector3()).z), 'mm   (measured socket: 324 / -95)');
const cooler = boxes.cooler_master_212;
console.log('  cooler back face  =', mm(cooler.min.x), 'mm; CPU top face =', mm(cpu.max.x),
  cooler.min.x <= cpu.max.x + 0.001 ? '-> rests on the CPU' : '-> GAP');
const overlap = (a, b) => a.min.x < b.max.x && a.max.x > b.min.x && a.min.y < b.max.y && a.max.y > b.min.y && a.min.z < b.max.z && a.max.z > b.min.z;
const r1 = boxes.ram_corsair_dominator, r2 = boxes.ram_gskill_tridentz_16gb;
console.log('  cooler vs DIMMs   :', overlap(cooler, r1) ? 'OVERLAP' : 'clear');
console.log('  DIMM1 vs DIMM2    :', overlap(r1, r2) ? 'OVERLAP' : 'clear');
console.log('  DIMMs vs GPU      :', overlap(r1, boxes.gpu_rtx_3090) ? 'OVERLAP' : 'clear');
console.log('  cooler vs GPU     :', overlap(cooler, boxes.gpu_rtx_3090) ? 'OVERLAP' : 'clear');
console.log('  GPU vs shroud top : GPU bottom', mm(boxes.gpu_rtx_3090.min.y), 'mm, shroud', mm(L.SHROUD.top * 1000), 'mm');
console.log('  CPU vs board      :', overlap(boxes.mb_msi_b550_tomahawk, cpu) ? 'sunk into the board' : 'clear of the copper');