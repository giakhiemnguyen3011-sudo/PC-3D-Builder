import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";
globalThis.requestAnimationFrame = () => 1;
globalThis.performance = globalThis.performance || { now: () => Date.now() };

const THREE = await import('file:///D:/pc-builder-3d/node_modules/three/build/three.module.js');
const { loadModelCopy } = await import('file:///D:/pc-builder-3d/src/scene/ModelCache.js');
const { buildFittedModel } = await import('file:///D:/pc-builder-3d/src/scene/ModelFit.js');
const { realDimsFor } = await import('file:///D:/pc-builder-3d/src/data/hardwareDims.js');
const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');

const mm = v => v.toArray().map(n => +(n * 1000).toFixed(1)).join(' x ') + ' mm';

for (const id of ['ram_corsair_dominator', 'ram_gskill_tridentz_16gb', 'ram_crucial_8gb']) {
  const item = ALL_HARDWARE_ITEMS.find(i => i.id === id);
  const dims = realDimsFor(item);

  // Normal room: dropped on the workbench (PlacedItemManager - no realDims)
  const dropCopy = await loadModelCopy(item.modelPath);
  const dropped = buildFittedModel(dropCopy, { realSize: item.realSize, flat: true }).size;

  // Normal room: on the shelf / in hand / Build Mode (realDims applied)
  const shelfCopy = await loadModelCopy(item.modelPath);
  const shelved = buildFittedModel(shelfCopy, { realSize: item.realSize, realDims: dims, flat: true }).size;

  console.log(
    id.padEnd(26),
    'bench-drop', mm(dropped).padEnd(30),
    'shelf/build', mm(shelved)
  );
}