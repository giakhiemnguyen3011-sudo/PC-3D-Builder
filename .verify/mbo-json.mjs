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
const json = parseGLB('D:/pc-builder-3d/public/models/' + file);
console.log('nodes', json.nodes.length, 'meshes', json.meshes.length, 'materials', json.materials.length);
const names = json.nodes.map((n, i) => `${i}: ${n.name || '(unnamed)'}`);
console.log(names.join('\n'));
console.log('--- materials ---');
json.materials.forEach((m, i) => console.log(i, m.name, Object.keys(m.pbrMetallicRoughness || {}).join(',')));
console.log('--- images ---');
(json.images || []).forEach((im, i) => console.log(i, im.uri || im.mimeType || 'bufferView'));
console.log('--- biggest meshes ---');
const rows = [];
const walk = (idx, parent) => {
  const n = json.nodes[idx];
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
    if (!box.isEmpty()) rows.push({ name: n.name || json.meshes[n.mesh].name || '(unnamed)', s: box.getSize(new THREE.Vector3()), c: box.getCenter(new THREE.Vector3()) });
  }
  (n.children || []).forEach(c => walk(c, world));
};
json.scenes[json.scene || 0].nodes.forEach(n => walk(n, new THREE.Matrix4()));
rows.sort((a, b) => (b.s.x * b.s.y * b.s.z) - (a.s.x * a.s.y * a.s.z));
rows.slice(0, 12).forEach(r => console.log('  ', r.name.padEnd(30), r.s.toArray().map(v => v.toFixed(3)).join(' x ').padEnd(26), 'centre', r.c.toArray().map(v => v.toFixed(3)).join(', ')));