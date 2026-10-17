import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";
globalThis.requestAnimationFrame = () => 1; globalThis.cancelAnimationFrame = () => {};
globalThis.devicePixelRatio = 1;
const RECT = { left: 0, top: 0, right: 900, bottom: 700, width: 900, height: 700 };
const ctx = () => new Proxy({ createLinearGradient: () => ({ addColorStop() {} }), measureText: () => ({ width: 10 }) }, { get: (t, k) => (k in t ? t[k] : () => {}) });
const el = (id = "") => ({ id, width: 900, height: 700, clientWidth: 900, clientHeight: 700, style: {}, dataset: {}, textContent: "", innerHTML: "", value: "", children: [], isConnected: true, className: "", classList: { _s: new Set(), add() {}, remove() {}, toggle() {}, contains() { return false; } }, getContext: () => ctx(), getBoundingClientRect: () => RECT, addEventListener() {}, appendChild(c) { return c; }, remove() {}, removeChild() {}, setAttribute() {}, querySelector: () => el(), querySelectorAll: () => [] });
const reg = new Map();
globalThis.document = { createElement: () => el(), getElementById: id => { if (!reg.has(id)) reg.set(id, el(id)); return reg.get(id); }, addEventListener() {}, removeEventListener() {}, querySelector: () => el(), body: el("b") };
globalThis.window = { addEventListener() {}, removeEventListener() {}, innerWidth: 1280, innerHeight: 720, devicePixelRatio: 1 };
globalThis.navigator ??= { userAgent: "node" };
const { BuildScene } = await import("file:///D:/pc-builder-3d/src/scene/BuildScene.js");
const { ALL_HARDWARE_ITEMS } = await import("file:///D:/pc-builder-3d/src/data/hardware.js");
const THREE = await import("three");
const s = new BuildScene(document.getElementById("build-canvas"));
s.snapCamera();
await s.setGhostItem(ALL_HARDWARE_ITEMS.find(i => i.id === "gpu_rtx_3090"));
const inv = new THREE.Matrix4().copy(s.caseRoot.matrixWorld).invert();
const box = s.caseInterior;
console.log("interior", box.min.toArray().map(v=>v.toFixed(3)), box.max.toArray().map(v=>v.toFixed(3)));
const worst = { x: [0,""], y: [0,""], z: [0,""] };
let snapInfo = null;
for (let px = -0.9; px <= 0.9; px += 0.05) for (let py = -0.9; py <= 0.9; py += 0.05) {
  s.setPointer(900 * (px + 1) / 2, 700 * (py + 1) / 2);
  s.updateGhost("gpu", true);
  s.caseRoot.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(s.ghost.group);
  const lo = b.min.clone().applyMatrix4(inv), hi = b.max.clone().applyMatrix4(inv);
  for (const [ax, i] of [["x",0],["y",1],["z",2]]) {
    const over = Math.max(box.min.getComponent(i) - lo.getComponent(i), hi.getComponent(i) - box.max.getComponent(i));
    if (over > worst[ax][0]) worst[ax] = [over, `lo=${lo.getComponent(i).toFixed(4)} hi=${hi.getComponent(i).toFixed(4)} pos=${s.ghost.group.position.toArray().map(v=>v.toFixed(4))} snap=${s.ghostOverTarget}`];
  }
}
for (const ax of ["x","y","z"]) console.log(ax, "worst", worst[ax][0].toFixed(5), worst[ax][1]);
console.log("centreOffset", s.ghost.centreOffset.toArray().map(v=>v.toFixed(4)), "half", s.ghost.half.toArray().map(v=>v.toFixed(4)));
console.log("anchor", [0.016, 0.2775, -0.038]);