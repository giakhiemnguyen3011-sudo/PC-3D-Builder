import fs from 'node:fs';
import * as THREE from 'file:///D:/pc-builder-3d/node_modules/three/build/three.module.js';

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

const file = process.argv[2];
const planes = [
  { h: 'y', label: 'top view  (X across, Z length)' },
  { h: 'z', label: 'front view (X across, Y up)' },
  { h: 'x', label: 'side view  (Z length, Y up)' }
];
const json = parseGLB('D:/pc-builder-3d/public/models/RAM_model/' + file);
const parts = [];
const walk = (nodeIdx, parentM) => {
  const node = json.nodes[nodeIdx];
  const m = new THREE.Matrix4();
  if (node.matrix) m.fromArray(node.matrix);
  else m.compose(
    new THREE.Vector3(...(node.translation || [0, 0, 0])),
    new THREE.Quaternion(...(node.rotation || [0, 0, 0, 1])),
    new THREE.Vector3(...(node.scale || [1, 1, 1]))
  );
  const world = parentM ? parentM.clone().multiply(m) : m;
  if (node.mesh !== undefined) {
    const box = new THREE.Box3();
    for (const prim of json.meshes[node.mesh].primitives) {
      const acc = json.accessors[prim.attributes.POSITION];
      if (!acc?.min) continue;
      const mn = new THREE.Vector3(...acc.min), mx = new THREE.Vector3(...acc.max);
      for (let i = 0; i < 8; i++) {
        box.expandByPoint(new THREE.Vector3(i & 1 ? mx.x : mn.x, i & 2 ? mx.y : mn.y, i & 4 ? mx.z : mn.z).applyMatrix4(world));
      }
    }
    if (!box.isEmpty()) parts.push(box);
  }
  (node.children || []).forEach(c => walk(c, world));
};
json.scenes[json.scene || 0].nodes.forEach(n => walk(n, new THREE.Matrix4()));
const total = new THREE.Box3();
parts.forEach(p => total.union(p));
const size = total.getSize(new THREE.Vector3());
console.log(file, 'bbox', size.toArray().map(v => v.toFixed(3)).join(' x '), 'parts', parts.length);

const W = 76, H = 26;
for (const { h, label } of planes) {
  const a = ['x', 'y', 'z'].filter(k => k !== h);
  const grid = Array.from({ length: H }, () => new Array(W).fill(' '));
  for (const b of parts) {
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const u0 = (x / W), u1 = ((x + 1) / W);
        const v0 = 1 - ((y + 1) / H), v1 = 1 - (y / H);
        const inside =
          b.min[a[0]] <= size[a[0]] * u0 + total.min[a[0]] &&
          b.max[a[0]] >= total.min[a[0]] + size[a[0]] * u1 &&
          b.min[a[1]] <= total.min[a[1]] + size[a[1]] * v1 &&
          b.max[a[1]] >= total.min[a[1]] + size[a[1]] * v0;
        if (inside && grid[y][x] === ' ') grid[y][x] = '#';
      }
    }
  }
  console.log('\n' + label + `   (horizontal = ${a[0]}, vertical = ${a[1]})`);
  grid.forEach(r => console.log('  |' + r.join('') + '|'));
}