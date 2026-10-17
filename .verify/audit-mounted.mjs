import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";
globalThis.requestAnimationFrame = () => 1;
const { ALL_HARDWARE_ITEMS } = await import("file:///D:/pc-builder-3d/src/data/hardware.js");
const { buildFittedModel } = await import("file:///D:/pc-builder-3d/src/scene/ModelFit.js");
const { realDimsFor } = await import("file:///D:/pc-builder-3d/src/data/hardwareDims.js");
const { CASE_ZONES, mountQuaternion } = await import("file:///D:/pc-builder-3d/src/scene/caseLayout.js");
const THREE = await import("three");
const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");
const loader = new GLTFLoader();
const Z = { motherboard: "motherboard", cpu: "cpu", cooler: "cooler", ram: "ram", storage: "ssd", psu: "psu", gpu: "gpu" };
const load = p => new Promise(r => loader.load(p, g => r(g.scene)));
const mm = n => (n * 1000).toFixed(1).padStart(7);
const groups = new Map();
for (const item of ALL_HARDWARE_ITEMS) {
  const z = Z[item.categoryKey]; if (!z) continue;
  const scene = await load(item.modelPath);
  const dims = realDimsFor(item);
  const { group } = buildFittedModel(scene, { realSize: item.realSize, realDims: dims, flat: true });
  const holder = new THREE.Group(); holder.add(group);
  // use the per-type mount from hardwareDims
  const m = dims.mount;
  const q = mountQuaternion({ mount: { long: m.length, thin: m.height } });
  if (q) group.quaternion.copy(q);
  holder.updateMatrixWorld(true);
  const s = new THREE.Box3().setFromObject(holder).getSize(new THREE.Vector3());
  if (!groups.has(z)) groups.set(z, []);
  groups.get(z).push({ id: item.id, s });
}
for (const [z, list] of groups) {
  console.log(`\n--- ${z}`);
  for (const r of list) console.log(`  ${r.id.padEnd(30)} W${mm(r.s.x)} H${mm(r.s.y)} D${mm(r.s.z)}`);
  const f = list.map(r => [r.s.x, r.s.y, r.s.z].map(n => n.toFixed(4)).join("/"));
  console.log(`  distinct shapes: ${new Set(f).size} of ${list.length}`);
}