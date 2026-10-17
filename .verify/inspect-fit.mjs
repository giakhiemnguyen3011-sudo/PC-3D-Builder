import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";

globalThis.requestAnimationFrame = () => 1;
globalThis.cancelAnimationFrame = () => {};
globalThis.performance = globalThis.performance || { now: () => Date.now() };
globalThis.setTimeout = (fn) => 0;
globalThis.clearTimeout = () => {};
globalThis.devicePixelRatio = 1;

const makeCtx2D = () => {
  const gradient = { addColorStop() {} };
  const base = {
    createLinearGradient: () => gradient,
    createRadialGradient: () => gradient,
    createPattern: () => null,
    getImageData: () => ({ data: new Uint8ClampedArray(4) }),
    measureText: () => ({ width: 10 })
  };
  return new Proxy(base, { get: (t, k) => (k in t ? t[k] : () => {}) });
};
const makeEl = (id = '') => {
  const el = {
    id, width: 900, height: 700, clientWidth: 900, clientHeight: 700,
    style: {}, dataset: {}, textContent: '', innerHTML: '', value: '',
    children: [], isConnected: true, className: '',
    classList: {
      _s: new Set(),
      add(...c) { c.forEach(x => this._s.add(x)); },
      remove(...c) { c.forEach(x => this._s.delete(x)); },
      toggle(c, on) { on === undefined ? (this._s.has(c) ? this._s.delete(c) : this._s.add(c)) : (on ? this._s.add(c) : this._s.delete(c)); },
      contains(c) { return this._s.has(c); }
    },
    getContext: () => makeCtx2D(),
    getBoundingClientRect: () => RECT,
    addEventListener() {}, appendChild(c) { this.children.push(c); return c; },
    remove() {}, removeChild() {}, setAttribute() {},
    querySelector: () => makeEl('inner'),
    querySelectorAll: () => []
  };
  return el;
};
const RECT = { left: 0, top: 0, right: 900, bottom: 700, width: 900, height: 700 };
const registry = new Map();
globalThis.document = {
  createElement: () => makeEl(),
  getElementById: id => { if (!registry.has(id)) registry.set(id, makeEl(id)); return registry.get(id); },
  addEventListener() {}, removeEventListener() {},
  querySelector: () => makeEl(),
  body: makeEl('body')
};
globalThis.window = { addEventListener() {}, removeEventListener() {}, innerWidth: 1280, innerHeight: 720, devicePixelRatio: 1 };
globalThis.navigator ??= { userAgent: 'node' };

const THREE = await import('three');
const { Game } = await import('file:///D:/pc-builder-3d/src/core/Game.js');
let game = new Game();
let s = game.buildModeUI.scene;
const it = async (id) => (await import('file:///D:/pc-builder-3d/src/data/hardware.js')).ALL_HARDWARE_ITEMS.find(i=>i.id===id);
const IEl = (await import('file:///D:/pc-builder-3d/src/data/hardware.js')).ALL_HARDWARE_ITEMS;
const ui = game.buildModeUI;
for (const id of ['mb_msi_b550_tomahawk','cpu_ryzen_3600','cooler_master_212','ram_corsair_dominator','ram_gskill_tridentz_16gb','ssd_samsung_860','psu_aerocool_650w','gpu_rtx_3090']) {
  const item = IEl.find(i=>i.id===id);
  if (!item) { console.log('missing',id); continue; }
  const key = 'mb_msi_b550_tomahawk'===id?'motherboard':('cpu_ryzen_3600'===id?'cpu':('cooler_master_212'===id?'cooler':('ram_corsair_dominator'===id?'ram':('ram_gskill_tridentz_16gb'===id?'ram2':('ssd_samsung_860'===id?'ssd':('psu_aerocool_650w'===id?'psu':'gpu'))))));
  ui.pendingPress = item.id;
  await s.placePart(item, key==='ram2'?'ram':key, item.id+':'+key);
  ui.pendingPress = null;
  console.log('placed',id,'=> key/zone',key);
  console.log('  anchor zone', key==='ram2'?'ram':key);
}
await new Promise(r=>setImmediate(r));
const done = (id) => console.log('has done',id,s.placedParts.has(id+':'));
for (const [k,v] of s.placedParts) {
  v.group.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(v.group);
  const sz = b.getSize(new THREE.Vector3());
  console.log('part',k,'box pos',b.min.toArray().map(v=>+v.toFixed(3)), 'size', sz.toArray().map(v=>+v.toFixed(3)));
}
console.log('RAM count in zone', [...s.placedParts.keys()].filter(k=>k.includes('ram')).join(' '));