import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";
globalThis.requestAnimationFrame = () => 1;
globalThis.performance = globalThis.performance || { now: () => Date.now() };

const THREE = await import('file:///D:/pc-builder-3d/node_modules/three/build/three.module.js');
const { loadModelCopy } = await import('file:///D:/pc-builder-3d/src/scene/ModelCache.js');
const { buildFittedModel, measureModel } = await import('file:///D:/pc-builder-3d/src/scene/ModelFit.js');
const { realDimsFor } = await import('file:///D:/pc-builder-3d/src/data/hardwareDims.js');
const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');

const r3 = v => v.toArray().map(n => +n.toFixed(4));

for (const id of ['ram_corsair_dominator', 'ram_gskill_tridentz_16gb']) {
  const item = ALL_HARDWARE_ITEMS.find(i => i.id === id);
  const copy = await loadModelCopy(item.modelPath);
  const whole = measureModel(copy);
  console.log('\n=== ' + id + '  native ' + r3(whole.size).join(' x '));
  const rows = [];
  copy.traverse(c => {
    if (!c.isMesh) return;
    const g = c.geometry;
    if (!g.boundingBox) g.computeBoundingBox();
    const s = g.boundingBox.getSize(new THREE.Vector3());
    const n = g.index ? g.index.count / 3 : (g.attributes.position?.count ?? 0) / 3;
    rows.push({ name: c.name || '(unnamed)', size: s, tris: Math.round(n), mat: c.material?.name || c.material?.type });
  });
  rows.sort((a, b) => (b.size.x * b.size.y * b.size.z) - (a.size.x * a.size.y * a.size.z));
  console.log('meshes:', rows.length);
  for (const r of rows.slice(0, 10)) {
    console.log('  ', r.name.padEnd(34), r3(r.size).join(' x ').padEnd(28), 'tris', String(r.tris).padEnd(7), r.mat);
  }
}