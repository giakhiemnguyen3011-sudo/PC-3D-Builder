import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');
process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';
globalThis.requestAnimationFrame = () => 1;

const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');
const { buildFittedModel, measureModel, computeFlatAlignment } = await import('file:///D:/pc-builder-3d/src/scene/ModelFit.js');
const { realDimsFor } = await import('file:///D:/pc-builder-3d/src/data/hardwareDims.js');
const THREE = await import('three');
const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
const loader = new GLTFLoader();
const load = p => new Promise(r => loader.load(p, g => r(g.scene)));

const show = ['ram_corsair_dominator', 'ram_gskill_tridentz_16gb', 'psu_aerocool_650w', 'mb_asus_z370'];
for (const id of show) {
  const item = ALL_HARDWARE_ITEMS.find(i => i.id === id);
  const scene = await load(item.modelPath);
  const m = measureModel(scene);
  const q = computeFlatAlignment(m.size);
  const dims = realDimsFor(item);
  const fitted = buildFittedModel(scene.clone(true), { realSize: item.realSize, realDims: dims, flat: true });
  const mm = n => (n * 1000).toFixed(1);
  console.log(`\n${id}`);
  console.log(`  native      x=${mm(m.size.x)} y=${mm(m.size.y)} z=${mm(m.size.z)}`);
  console.log(`  wanted      L=${mm(dims.length)} W=${mm(dims.width)} H=${mm(dims.height)}`);
  console.log(`  fitted      x=${mm(fitted.size.x)} y=${mm(fitted.size.y)} z=${mm(fitted.size.z)}`);
  console.log(`  mount       long=${JSON.stringify(dims.mount.length)} thin=${JSON.stringify(dims.mount.height)}`);
  const e = new THREE.Euler().setFromQuaternion(q);
  console.log(`  flatAlign   euler=(${e.x.toFixed(3)}, ${e.y.toFixed(3)}, ${e.z.toFixed(3)})`);
}
