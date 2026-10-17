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
const f = v => v.toFixed(3).padStart(6);
const show = (title, list) => {
  console.log('  ' + title);
  list.forEach(p => {
    const sz = p.box.getSize(new THREE.Vector3()), c = p.box.getCenter(new THREE.Vector3());
    console.log('    ', String(p.name).slice(0, 30).padEnd(31),
      'size', f(sz.x), f(sz.y), f(sz.z), ' centre', f(c.x), f(c.y), f(c.z));
  });
};
show('tallest in Y (fin stack / fan height):', parts.slice().sort((a, b) => b.box.max.y - a.box.min.y - (a.box.max.y - a.box.min.y) + (b.box.max.y - b.box.min.y)).slice(0, 4).sort((a, b) => (b.box.max.y - b.box.min.y) - (a.box.max.y - a.box.min.y)));
show('lowest parts (the base / mounting block):', parts.slice().sort((a, b) => a.box.min.y - b.box.min.y).slice(0, 5));
show('widest in X:', parts.slice().sort((a, b) => b.box.max.x - b.box.min.x - (a.box.max.x - a.box.min.x) + (b.box.max.x - b.box.min.x)).slice(0, 4).sort((a, b) => (b.box.max.x - b.box.min.x) - (a.box.max.x - a.box.min.x)));
show('longest in Z:', parts.slice().sort((a, b) => (b.box.max.z - b.box.min.z) - (a.box.max.z - a.box.min.z)).slice(0, 4));