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

const f = process.argv[2];
const json = parseGLB('D:/pc-builder-3d/public/models/RAM_model/' + f);
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
    if (!box.isEmpty()) parts.push({ name: node.name || '(unnamed)', s: box.getSize(new THREE.Vector3()), c: box.getCenter(new THREE.Vector3()) });
  }
  (node.children || []).forEach(c => walk(c, world));
};
json.scenes[json.scene || 0].nodes.forEach(n => walk(n, new THREE.Matrix4()));

console.log(f, 'parts', parts.length);
const buckets = { x: {}, y: {}, z: {} };
for (const p of parts) {
  for (const ax of ['x', 'y', 'z']) {
    const v = +p.s[ax].toFixed(2);
    buckets[ax][v] = (buckets[ax][v] || 0) + 1;
  }
}
for (const ax of ['x', 'y', 'z']) {
  const entries = Object.entries(buckets[ax]).map(([v, n]) => [+v, n]).sort((a, b) => b[1] - a[1]).slice(0, 8);
  console.log(' ', ax, 'extent histogram:', entries.map(([v, n]) => `${v}:${n}`).join('  '));
}
console.log('\n widest-in-X parts:');
parts.slice().sort((a, b) => b.s.x - a.s.x).slice(0, 6).forEach(p =>
  console.log('   ', p.name.padEnd(28), p.s.toArray().map(v => v.toFixed(3)).join(' x ')));
console.log(' tallest-in-Y parts:');
parts.slice().sort((a, b) => b.s.y - a.s.y).slice(0, 6).forEach(p =>
  console.log('   ', p.name.padEnd(28), p.s.toArray().map(v => v.toFixed(3)).join(' x ')));
console.log(' shortest-in-Y (thinnest) parts:');
parts.slice().sort((a, b) => a.s.y - b.s.y).slice(0, 6).forEach(p =>
  console.log('   ', p.name.padEnd(28), p.s.toArray().map(v => v.toFixed(3)).join(' x ')));