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
const json = parseGLB('D:/pc-builder-3d/public/models/CPU_Cooler_model/' + file);
const parts = [];
const total = new THREE.Box3();
const walk = (idx, parent, group) => {
  const n = json.nodes[idx];
  const label = n.name && !/^Object_\d+$/.test(n.name) ? n.name : group;
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
    if (!box.isEmpty()) { total.union(box); parts.push({ name: label || n.name || '(unnamed)', box }); }
  }
  (n.children || []).forEach(c => walk(c, world, label));
};
json.scenes[json.scene || 0].nodes.forEach(n => walk(n, new THREE.Matrix4()));
const s = total.getSize(new THREE.Vector3());
console.log(file, '\nbbox', s.toArray().map(v => v.toFixed(3)).join(' x '), '| parts', parts.length);

// rank native axes
const rank = [['x', s.x], ['y', s.y], ['z', s.z]].sort((a, b) => b[1] - a[1]);
console.log('longest axis:', rank[0][0], rank[0][1].toFixed(3), '| mid:', rank[1][0], '| thin:', rank[2][0]);
const longAx = rank[0][0];

// cluster the parts along the longest axis: which end carries the base?
const byEnd = { low: new Set(), high: new Set() };
for (const p of parts) {
  const size = p.box.getSize(new THREE.Vector3());
  const big = size[longAx] > s[longAx] * 0.3;
  if (!big) continue;
  (p.box.min[longAx] < total.min[longAx] + s[longAx] * 0.3 ? byEnd.low : byEnd.high).add(p.name);
}
console.log('parts reaching the low end of', longAx + ':', [...byEnd.low].slice(0, 8));
console.log('parts reaching the high end of', longAx + ':', [...byEnd.high].slice(0, 8));

// the thinnest axis is where the fan usually sticks out; find the biggest flat part
const thinAx = rank[2][0];
const flat = parts.slice().sort((a, b) => {
  const sa = a.box.getSize(new THREE.Vector3()), sb = b.box.getSize(new THREE.Vector3());
  return (sb.x * sb.y * sb.z) - (sa.x * sa.y * sa.z);
}).slice(0, 6);
console.log('biggest parts:');
for (const p of flat) {
  const sz = p.box.getSize(new THREE.Vector3()), c = p.box.getCenter(new THREE.Vector3());
  console.log('   ', String(p.name).slice(0, 34).padEnd(35), sz.toArray().map(v => v.toFixed(3)).join(' x '),
    '| centre', c.toArray().map(v => v.toFixed(3)).join(', '), '| flat axis:', thinAx);
}