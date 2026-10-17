import fs from 'node:fs';
import * as THREE from 'file:///D:/pc-builder-3d/node_modules/three/build/three.module.js';
import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");

const { HARDWARE_REAL_DIMS } = await import('file:///D:/pc-builder-3d/src/data/hardwareDims.js');
const { computeFlatAlignment } = await import('file:///D:/pc-builder-3d/src/scene/ModelFit.js');

function parseGLB(file) {
  const buf = fs.readFileSync(file);
  let off = 12, json = null;
  while (off < buf.length) {
    const len = buf.readUInt32LE(off);
    const type = buf.readUInt32LE(off + 4);
    if (type === 0x4e4f534a) json = JSON.parse(buf.subarray(off + 8, off + 8 + len).toString('utf8'));
    off += 8 + len + ((4 - (len % 4)) % 4);
  }
  return json;
}

const json = parseGLB('D:/pc-builder-3d/public/models/Motherboard_model/motherboard_am4.glb');

// native world boxes, per node, plus the whole-model box
const boxes = new Map();
const total = new THREE.Box3();
const walk = (idx, parent, groupLabel) => {
  const n = json.nodes[idx];
  const label = n.name && n.name.trim() && !/^Object_\d+$/.test(n.name) ? n.name : groupLabel;
  const m = new THREE.Matrix4();
  if (n.matrix) m.fromArray(n.matrix);
  else m.compose(
    new THREE.Vector3(...(n.translation || [0, 0, 0])),
    new THREE.Quaternion(...(n.rotation || [0, 0, 0, 1])),
    new THREE.Vector3(...(n.scale || [1, 1, 1]))
  );
  const world = parent ? parent.clone().multiply(m) : m;
  if (n.mesh !== undefined) {
    const box = new THREE.Box3();
    for (const prim of json.meshes[n.mesh].primitives) {
      const acc = json.accessors[prim.attributes.POSITION];
      if (!acc?.min) continue;
      const mn = new THREE.Vector3(...acc.min), mx = new THREE.Vector3(...acc.max);
      for (let i = 0; i < 8; i++) {
        box.expandByPoint(new THREE.Vector3(i & 1 ? mx.x : mn.x, i & 2 ? mx.y : mn.y, i & 4 ? mx.z : mn.z).applyMatrix4(world));
      }
    }
    if (!box.isEmpty()) {
      total.union(box);
      const key = label || n.name || '(unnamed)';
      const cur = boxes.get(key) || new THREE.Box3();
      cur.union(box);
      boxes.set(key, cur);
    }
  }
  (n.children || []).forEach(c => walk(c, world, label));
};
json.scenes[json.scene || 0].nodes.forEach(n => walk(n, new THREE.Matrix4()));

const nativeSize = total.getSize(new THREE.Vector3());
const nativeCentre = total.getCenter(new THREE.Vector3());
console.log('native board size', nativeSize.toArray().map(v => v.toFixed(4)).join(' x '));

// ---- replicate buildFittedModel's transform for realDims: local X longest, Y thinnest, Z mid
const q = computeFlatAlignment(nativeSize);
const dims = HARDWARE_REAL_DIMS.motherboard;
const ranked = ['x', 'y', 'z'].map((k, i) => ({ k, v: nativeSize[k] })).sort((a, b) => a.v - b.v);
const thinAxis = ranked[0].k, midAxis = ranked[1].k, longAxis = ranked[2].k;
// aligned size: X=long, Y=thin, Z=mid
const aligned = { x: nativeSize[longAxis], y: nativeSize[thinAxis], z: nativeSize[midAxis] };
const wanted = [dims.length, dims.height, dims.width];
const scale = { x: wanted[0] / aligned.x, y: wanted[1] / aligned.y, z: wanted[2] / aligned.z };
console.log('aligned', JSON.stringify(aligned, (k, v) => typeof v === 'number' ? +v.toFixed(4) : v), 'scale', JSON.stringify(scale, (k, v) => typeof v === 'number' ? +v.toFixed(5) : v));

// fitted-local coordinates of a native world point:
//   1. recentre to the native centre
//   2. rotate by q (align), 3. scale per axis, 4. shift so the box centre is at
//      (0, size.y/2, 0) - buildFittedModel puts minY = 0 and centres x/z
const fittedBox = new THREE.Box3();
for (let i = 0; i < 8; i++) {
  const p = new THREE.Vector3(i & 1 ? total.max.x : total.min.x, i & 2 ? total.max.y : total.min.y, i & 4 ? total.max.z : total.min.z)
    .sub(nativeCentre).applyQuaternion(q);
  p.set(p.x * scale.x, p.y * scale.y, p.z * scale.z);
  fittedBox.expandByPoint(p);
}
console.log('fitted board box (local)', [
  fittedBox.min.toArray().map(v => +v.toFixed(4)),
  fittedBox.max.toArray().map(v => +v.toFixed(4))
]);
const offX = -(fittedBox.min.x + fittedBox.max.x) / 2;
const offY = -fittedBox.min.y;
const offZ = -(fittedBox.min.z + fittedBox.max.z) / 2;

const toFitted = box => {
  const out = new THREE.Box3();
  for (let i = 0; i < 8; i++) {
    const p = new THREE.Vector3(i & 1 ? box.max.x : box.min.x, i & 2 ? box.max.y : box.min.y, i & 4 ? box.max.z : box.min.z)
      .sub(nativeCentre).applyQuaternion(q);
    p.set(p.x * scale.x + offX, p.y * scale.y + offY, p.z * scale.z + offZ);
    out.expandByPoint(p);
  }
  return out;
};

console.log('\n--- named features, fitted-local box (X 305 = board height, Y 45 = thickness, Z 244 = depth) ---');
for (const [label, box] of boxes) {
  if (!/socket|ram|pci|dimm/i.test(label)) continue;
  const f = toFitted(box);
  const c = f.getCenter(new THREE.Vector3());
  const s = f.getSize(new THREE.Vector3());
  console.log('  ', label.padEnd(32),
    'centre', c.toArray().map(v => +v.toFixed(4)).join(', ').padEnd(30),
    'size', s.toArray().map(v => +v.toFixed(4)).join(', '));
}

console.log('\n--- which side do the components live on? (fitted Y, +Y = glass side) ---');
const rows = [];
for (const [label, box] of boxes) {
  const f = toFitted(box);
  rows.push({ label, minY: f.min.y, maxY: f.max.y, sizeY: f.max.y - f.min.y, sizeX: f.max.x - f.min.x });
}
console.log('  board front face  Y = +0.0225   board mid plane Y = 0   board back face Y = -0.0225');
console.log('  tallest above the mid plane:');
rows.filter(r => r.maxY > 0.010).sort((a, b) => b.maxY - a.maxY).slice(0, 6).forEach(r =>
  console.log('    ', r.label.padEnd(30), 'top Y', r.maxY.toFixed(4), ' spans', r.minY.toFixed(4), '..', r.maxY.toFixed(4)));
console.log('  deepest below the mid plane:');
rows.filter(r => r.minY < -0.010).sort((a, b) => a.minY - b.minY).slice(0, 6).forEach(r =>
  console.log('    ', r.label.padEnd(30), 'bottom Y', r.minY.toFixed(4), ' spans', r.minY.toFixed(4), '..', r.maxY.toFixed(4)));

console.log('\n--- the PCB plate and the main parts ---');
for (const [label, box] of boxes) {
  if (!/motherboard_65|Object_4$|24 pin|audio pin|Object_10/.test(label)) continue;
  const f = toFitted(box);
  console.log('  ', label.padEnd(32), 'min', f.min.toArray().map(v => +v.toFixed(4)).join(', '),
    ' max', f.max.toArray().map(v => +v.toFixed(4)).join(', '));
}