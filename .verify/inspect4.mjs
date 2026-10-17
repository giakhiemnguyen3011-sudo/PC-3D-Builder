import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";
globalThis.requestAnimationFrame = () => 1;
globalThis.setTimeout = (fn) => 0;
globalThis.devicePixelRatio = 1;
globalThis.performance = globalThis.performance || { now: () => Date.now() };

const makeCtx2D = () => {
  const g = { addColorStop() {} };
  const b = {
    createLinearGradient: () => g,
    createRadialGradient: () => g,
    createPattern: () => null,
    getImageData: () => ({ data: new Uint8ClampedArray(4) }),
    measureText: () => ({ width: 10 })
  };
  return new Proxy(b, { get: (t, k) => (k in t ? t[k] : () => {}) });
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
    getBoundingClientRect: () => ({ left: 0, top: 0, right: 900, bottom: 700, width: 900, height: 700 }),
    addEventListener() {}, appendChild(c) { this.children.push(c); return c; },
    remove() {}, removeChild() {}, setAttribute() {},
    querySelector: () => makeEl('i'),
    querySelectorAll: () => []
  };
  return el;
};
globalThis.document = {
  createElement: () => makeEl(),
  getElementById: (id) => { if (!globalThis.document._r) globalThis.document._r = new Map(); let r = globalThis.document._r.get(id); if (!r) { r = makeEl(id); globalThis.document._r.set(id, r); } return r; },
  addEventListener() {}, removeEventListener() {},
  querySelector: () => makeEl(),
  body: makeEl('body')
};
globalThis.window = { addEventListener() {}, removeEventListener() {}, innerWidth: 1280, innerHeight: 720, devicePixelRatio: 1 };
globalThis.navigator ??= { userAgent: 'node' };

const THREE = await import('file:///D:/pc-builder-3d/node_modules/three/build/three.module.js');
const { Game } = await import('file:///D:/pc-builder-3d/src/core/Game.js');
const game = new Game();
const s = game.buildModeUI.scene;
s.caseRoot.updateMatrixWorld(true);
const I = (await import('file:///D:/pc-builder-3d/src/data/hardware.js')).ALL_HARDWARE_ITEMS;
const ui = game.buildModeUI;
const put = async (id, z) => { ui.pendingPress = id; await s.placePart(I.find(i=>i.id===id), z, id + ':' + z); ui.pendingPress = null; };
await put('mb_msi_b550_tomahawk','motherboard');
await put('cpu_ryzen_3600','cpu');
await put('cooler_master_212','cooler');
await put('ram_corsair_dominator','ram');
await put('ram_gskill_tridentz_16gb','ram');
await put('ssd_samsung_860','ssd');
await put('psu_aerocool_650w','psu');
await put('gpu_rtx_3090','gpu');
await new Promise(r=>setImmediate(r));
for (const [k, v] of s.placedParts) {
  v.group.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(v.group);
  const center = b.getCenter(new THREE.Vector3());
  const lp = s.caseRoot.worldToLocal(b.min.clone());
  const lc = s.caseRoot.worldToLocal(center.clone());
  const ps = b.getSize(new THREE.Vector3());
  console.log(k, 'case-local min', lp.toArray().map(v=>+v.toFixed(3)), 'center', lc.toArray().map(v=>+v.toFixed(3)), 'world size', ps.toArray().map(v=>+v.toFixed(3)));
}