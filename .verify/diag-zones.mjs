import { CASE_ZONES, CASE, CASE_BOUNDS, TRAY, SHROUD, BOARD, mountQuaternion } from 'file:///D:/pc-builder-3d/src/scene/caseLayout.js';
import * as THREE from 'file:///D:/pc-builder-3d/node_modules/three/build/three.module.js';

// Exactly how BuildScene builds the chassis.
const caseRoot = new THREE.Group();
caseRoot.rotation.y = -Math.PI / 2;
caseRoot.position.set(0, -CASE.feet, 0);
caseRoot.updateMatrixWorld(true);
const toPivot = caseRoot.matrixWorld.clone();

// The chassis occupies this box in pivot space.
const shell = new THREE.Box3();
for (let i = 0; i < 8; i++) {
  shell.expandByPoint(new THREE.Vector3(
    i & 1 ? CASE_BOUNDS.max[0] : CASE_BOUNDS.min[0],
    i & 2 ? CASE_BOUNDS.max[1] : CASE_BOUNDS.min[1],
    i & 4 ? CASE_BOUNDS.max[2] : CASE_BOUNDS.min[2]
  ).applyMatrix4(toPivot));
}
const pad = CASE.sheet + 0.004;
const inner = {
  x: [shell.min.x + pad, shell.max.x - pad],
  y: [shell.min.y + pad, shell.max.y - pad],
  z: [shell.min.z + pad, shell.max.z - pad]
};
// surface controls (rear DisplayPort, roof power button) legitimately sit on the
// shell, so they only have to be within a few mm of it.
const SURFACE = new Set(['display', 'power', 'glass']);

const inRange = (v, [lo, hi], slack) => v >= lo - slack && v <= hi + slack;

console.log('zone         position in pivot space        verdict');
let ok = true;
for (const [id, z] of Object.entries(CASE_ZONES)) {
  const p = new THREE.Vector3(...z.anchor).applyMatrix4(toPivot);
  const slack = SURFACE.has(id) ? 0.02 : 0;
  const good = inRange(p.x, inner.x, slack) && inRange(p.y, inner.y, slack) && inRange(p.z, inner.z, slack);
  if (!good) ok = false;
  console.log(
    id.padEnd(12),
    p.toArray().map(v => v.toFixed(4).padStart(8)).join(' ').padStart(30),
    good ? 'ok' : 'OUTSIDE'
  );
}
console.log('\nevery zone lands on the chassis:', ok);

// Round trip: pivot -> case-local must give the authored anchor back exactly.
let rt = 0;
for (const z of Object.values(CASE_ZONES)) {
  const back = new THREE.Vector3(...z.anchor).applyMatrix4(toPivot)
    .applyMatrix4(new THREE.Matrix4().copy(toPivot).invert());
  rt = Math.max(rt, back.distanceTo(new THREE.Vector3(...z.anchor)));
}
console.log('round-trip error (m):', rt.toExponential(2));

// The board must land on the tray face, not on a wall.
const mb = CASE_ZONES.motherboard.anchor;
console.log('motherboard on the tray face:',
  Math.abs(mb[0] - (TRAY.face + 0.002)) < 1e-9 && mb[0] > TRAY.face,
  `(x=${mb[0].toFixed(4)}, tray face=${TRAY.face.toFixed(4)})`);
const psu = CASE_ZONES.psu.anchor;
console.log('psu inside the shroud bay:',
  psu[0] > SHROUD.x0 && psu[0] < SHROUD.x1 && psu[2] > SHROUD.z0 && psu[2] < SHROUD.z1,
  `(x=${psu[0].toFixed(4)}, z=${psu[2].toFixed(4)})`);
const gpu = CASE_ZONES.gpu.anchor;
console.log('gpu hangs off the rear slots:',
  gpu[2] + 0.313 / 2 < CASE.depth / 2 && gpu[2] - 0.313 / 2 > CASE.depth / 2 - 0.45,
  `(z=${gpu[2].toFixed(4)}, card spans ${(gpu[2] - 0.313 / 2).toFixed(3)}..${(gpu[2] + 0.313 / 2).toFixed(3)})`);

let mountsOk = true;
for (const [id, z] of Object.entries(CASE_ZONES)) {
  if (!z.mount) continue;
  const m = new THREE.Matrix4().makeRotationFromQuaternion(mountQuaternion(z)).elements;
  const dot = m[0] * m[4] + m[1] * m[5] + m[2] * m[6];
  const det = m[0] * (m[5] * m[10] - m[6] * m[9]) - m[4] * (m[1] * m[10] - m[2] * m[9]) + m[8] * (m[1] * m[6] - m[2] * m[5]);
  if (Math.abs(dot) > 1e-9 || Math.abs(det - 1) > 1e-9) { mountsOk = false; console.log('bad mount', id, dot, det); }
}
console.log('mount quaternions orthonormal + right-handed:', mountsOk);
