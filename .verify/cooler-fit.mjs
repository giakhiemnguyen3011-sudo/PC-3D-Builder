import fs from 'node:fs';
import * as THREE from 'file:///D:/pc-builder-3d/node_modules/three/build/three.module.js';
import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');
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

for (const file of ['cooler_master_cpu_cooler.glb', 'cpu_cooler (1).glb', 'cpu_cooler.glb']) {
  const json = parseGLB('D:/pc-builder-3d/public/models/CPU_Cooler_model/' + file);
  const parts = [];
  const total = new THREE.Box3();
  const walk = (idx, parent, group) => {
    const n = json.nodes[idx];
    const label = n.name && !/^Object_\d+$/.test(n.name) ? n.name : group;
    const m = new THREE.Matrix4();
    if (n.matrix) m.fromArray(n.matrix);
    else m.compose(new THREE.Vector3(...(n.translation || [0, 0, 0])),
      new THREE.Quaternion(...(n.rotation || [0, 0, 0, 1])), new THREE.Vector3(...(n.scale || [1, 1, 1])));
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

  const centre = total.getCenter(new THREE.Vector3());
  const size = total.getSize(new THREE.Vector3());
  const q = computeFlatAlignment(size);
  console.log('\n=====', file);
  console.log('  native size', size.toArray().map(v => v.toFixed(3)).join(' x '));

  // where do the native axes end up after the flat alignment?
  const ax = ['x', 'y', 'z'].map(k => new THREE.Vector3(k === 'x' ? 1 : 0, k === 'y' ? 1 : 0, k === 'z' ? 1 : 0).applyQuaternion(q));
  console.log('  native +X ->', ax[0].toArray().map(v => v.toFixed(2)).join(','),
    '| +Y ->', ax[1].toArray().map(v => v.toFixed(2)).join(','),
    '| +Z ->', ax[2].toArray().map(v => v.toFixed(2)).join(','));

  const rows = parts.map(p => {
    const c = p.box.getCenter(new THREE.Vector3()).sub(centre).applyQuaternion(q);
    const s = p.box.getSize(new THREE.Vector3());
    return { name: p.name, c, s };
  });
  const byX = rows.slice().sort((a, b) => a.c.x - b.c.x);
  console.log('  lowest fitted X (the end that should meet the CPU):');
  byX.slice(0, 3).forEach(r => console.log('    ', String(r.name).slice(0, 30).padEnd(31),
    'centre', r.c.toArray().map(v => v.toFixed(3)).join(', ')));
  console.log('  highest fitted X (far end / heat-pipe end):');
  byX.slice(-2).forEach(r => console.log('    ', String(r.name).slice(0, 30).padEnd(31),
    'centre', r.c.toArray().map(v => v.toFixed(3)).join(', ')));
  // the fan: the flattest, widest part
  const flat = rows.slice().sort((a, b) => (b.s.x * b.s.y * b.s.z) - (a.s.x * a.s.y * a.s.z));
  const fanish = rows.map(r => ({ r, thin: Math.min(r.s.x, r.s.y, r.s.z), big: Math.max(r.s.x, r.s.y, r.s.z) }))
    .filter(o => o.big > 0.5 && o.thin / o.big < 0.25)
    .sort((a, b) => b.big - a.big).slice(0, 2);
  fanish.forEach(o => console.log('  fan-ish:', String(o.r.name).slice(0, 30).padEnd(31),
    'centre', o.r.c.toArray().map(v => v.toFixed(3)).join(', '),
    'size', o.r.s.toArray().map(v => v.toFixed(3)).join(' x ')));
}