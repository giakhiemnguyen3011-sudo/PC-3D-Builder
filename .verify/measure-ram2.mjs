import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";
globalThis.requestAnimationFrame = () => 1;
globalThis.performance = globalThis.performance || { now: () => Date.now() };

const THREE = await import('file:///D:/pc-builder-3d/node_modules/three/build/three.module.js');
const { loadModelCopy } = await import('file:///D:/pc-builder-3d/src/scene/ModelCache.js');
const { buildFittedModel, measureModel, computeFlatAlignment } = await import('file:///D:/pc-builder-3d/src/scene/ModelFit.js');
const { realDimsFor } = await import('file:///D:/pc-builder-3d/src/data/hardwareDims.js');
const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');
const { CASE_ZONES, mountQuaternion } = await import('file:///D:/pc-builder-3d/src/scene/caseLayout.js');

const r3 = v => v.toArray().map(n => +n.toFixed(4));

for (const item of ALL_HARDWARE_ITEMS.filter(i => i.categoryKey === 'ram')) {
  const copy = await loadModelCopy(item.modelPath);
  if (!copy) { console.log(item.id, 'LOAD FAIL'); continue; }
  const m = measureModel(copy);
  const dims = realDimsFor(item);
  const fitted = buildFittedModel(copy, { realSize: item.realSize, realDims: dims, flat: true });
  const shelf = fitted.size.clone();

  // Build Mode pose
  const copy2 = await loadModelCopy(item.modelPath);
  const f2 = buildFittedModel(copy2, { realSize: item.realSize, realDims: dims, flat: true });
  const q = mountQuaternion(CASE_ZONES.ram);
  f2.group.quaternion.copy(q);
  f2.group.updateMatrixWorld(true);
  const built = new THREE.Box3().setFromObject(f2.group).getSize(new THREE.Vector3());

  // which native axis is longest/thin
  const sorted = [['x', m.size.x], ['y', m.size.y], ['z', m.size.z]].sort((a, b) => a[1] - b[1])
    .map(([k, v]) => `${k}=${v.toFixed(3)}`).join(' ');

  console.log(
    item.id.padEnd(26),
    'native', sorted.padEnd(30),
    'shelf', r3(shelf).join('x').padEnd(24),
    'build', r3(built).join('x'),
    'dims', dims ? `${dims.length}/${dims.width}/${dims.height}` : 'none'
  );
}