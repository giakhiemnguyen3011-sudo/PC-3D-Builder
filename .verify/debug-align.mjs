import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');
process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';
globalThis.requestAnimationFrame = () => 1;

const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');
const { measureModel, computeFlatAlignment } = await import('file:///D:/pc-builder-3d/src/scene/ModelFit.js');
const THREE = await import('three');
const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
const loader = new GLTFLoader();
const load = p => new Promise(r => loader.load(p, g => r(g.scene)));

const mm = n => (n * 1000).toFixed(1);
for (const id of ['ram_corsair_dominator', 'mb_asus_z370']) {
  const item = ALL_HARDWARE_ITEMS.find(i => i.id === id);
  const scene = await load(item.modelPath);
  const { size, center } = measureModel(scene);
  console.log(`\n${id}`);
  console.log(`  native size   x=${mm(size.x)} y=${mm(size.y)} z=${mm(size.z)}`);
  console.log(`  native centre x=${mm(center.x)} y=${mm(center.y)} z=${mm(center.z)}`);

  // replicate buildFittedModel step by step
  scene.position.set(-center.x, -center.y, -center.z);
  const scaleGroup = new THREE.Group();
  scaleGroup.add(scene);
  const alignGroup = new THREE.Group();
  alignGroup.quaternion.copy(computeFlatAlignment(size));
  alignGroup.add(scaleGroup);

  console.log(`  align euler   ${[new THREE.Euler().setFromQuaternion(alignGroup.quaternion).x, new THREE.Euler().setFromQuaternion(alignGroup.quaternion).y, new THREE.Euler().setFromQuaternion(alignGroup.quaternion).z].map(v => v.toFixed(3)).join(', ')}`);

  alignGroup.updateMatrixWorld(true);
  const aligned = new THREE.Box3().setFromObject(alignGroup).getSize(new THREE.Vector3());
  console.log(`  after align   x=${mm(aligned.x)} y=${mm(aligned.y)} z=${mm(aligned.z)}`);

  const sorted = [['x', size.x], ['y', size.y], ['z', size.z]].sort((a, b) => b[1] - a[1]);
  console.log(`  longest native axis=${sorted[0][0]}(${mm(sorted[0][1])}) thinnest=${sorted[2][0]}(${mm(sorted[2][1])})`);
}
