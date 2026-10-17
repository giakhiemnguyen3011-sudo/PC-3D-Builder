import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');
const THREE = await import('file:///D:/pc-builder-3d/node_modules/three/build/three.module.js');

// A representative worst case: the crosshair pointing into the densest part of
// the room, so the ray walks every mesh and takes a hit on each one.
const camera = new THREE.PerspectiveCamera(65, 16 / 9, 0.1, 100);
camera.position.set(0, 1.65, 1.8);
camera.updateMatrixWorld(true);

const targets = [];
for (let i = 0; i < 56; i++) {
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.1, 0.4), new THREE.MeshBasicMaterial());
  g.add(m);
  g.position.set((i % 8) * 0.4 - 1.4, 1.0 + Math.floor(i / 16) * 0.3, (i % 5) * 0.3 - 0.6);
  g.updateMatrixWorld(true);
  targets.push(g);
}

function isVisibleChain(object) {
  for (let node = object; node; node = node.parent) if (!node.visible) return false;
  return true;
}

const rc = new THREE.Raycaster();
const N = 400;
const bench = (label, fn) => {
  for (let i = 0; i < 40; i++) fn();          // warm up the JIT
  const runs = [];
  for (let r = 0; r < 5; r++) {
    const t0 = process.hrtime.bigint();
    for (let i = 0; i < N; i++) fn();
    runs.push(Number(process.hrtime.bigint() - t0) / 1e6 / N);
  }
  runs.sort((a, b) => a - b);
  console.log(`  ${label.padEnd(38)} median ${runs[2].toFixed(3)} ms  (min ${runs[0].toFixed(3)}, max ${runs[4].toFixed(3)})`);
};

console.log(`three r${THREE.REVISION}, 56 meshes, ${N} iterations x 5 runs\n`);
bench('raycast only (the old cost)', () => {
  rc.setFromCamera(new THREE.Vector2(0, 0), camera);
  return rc.intersectObjects(targets, true);
});
bench('raycast + isVisibleChain filter', () => {
  rc.setFromCamera(new THREE.Vector2(0, 0), camera);
  const hits = rc.intersectObjects(targets, true);
  let n = 0;
  for (const h of hits) if (isVisibleChain(h.object)) n++;
  return n;
});
bench('setFromCamera + updateMatrixWorld', () => {
  camera.updateMatrixWorld();
  rc.setFromCamera(new THREE.Vector2(0, 0), camera);
});
