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

for (const f of ['corsair_dominator_rgb_ram.glb', 'ram_ddr4_g.skill_trident_z_rgb.glb']) {
  const json = parseGLB('D:/pc-builder-3d/public/models/RAM_model/' + f);
  const parts = [];
  const total = new THREE.Box3();
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
      if (!box.isEmpty()) {
        total.union(box);
        const s = box.getSize(new THREE.Vector3());
        parts.push({ name: node.name || json.meshes[node.mesh].name || '(unnamed)', box, s });
      }
    }
    (node.children || []).forEach(c => walk(c, world));
  };
  json.scenes[json.scene || 0].nodes.forEach(n => walk(n, new THREE.Matrix4()));

  const ts = total.getSize(new THREE.Vector3());
  console.log('\n=====', f);
  console.log('total bbox', ts.toArray().map(v => v.toFixed(3)).join(' x '), ' parts', parts.length);
  parts.sort((a, b) => (b.s.x * b.s.y * b.s.z) - (a.s.x * a.s.y * a.s.z));
  for (const p of parts.slice(0, 8)) {
    console.log('   ', String(p.name).padEnd(26), p.s.toArray().map(v => v.toFixed(3)).join(' x ').padEnd(26),
      'min', p.box.min.toArray().map(v => v.toFixed(2)).join(','));
  }
  // bbox of everything except the single largest part
  const rest = new THREE.Box3();
  parts.slice(1).forEach(p => rest.union(p.box));
  if (!rest.isEmpty()) console.log('    without largest:', rest.getSize(new THREE.Vector3()).toArray().map(v => v.toFixed(3)).join(' x '));
}