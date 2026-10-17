import fs from 'node:fs';
import path from 'node:path';
import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');

const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');
const THREE = await import('three');

/** World AABB of a GLB, from the POSITION accessor min/max in the JSON chunk. */
function nativeSize(file) {
  const buf = fs.readFileSync(file);
  let off = 12;
  let json = null;
  while (off < buf.length) {
    const len = buf.readUInt32LE(off);
    const type = buf.readUInt32LE(off + 4);
    if (type === 0x4e4f534a) json = JSON.parse(buf.subarray(off + 8, off + 8 + len).toString('utf8'));
    off += 8 + len + ((4 - (len % 4)) % 4);
  }
  const box = new THREE.Box3();
  const nodeMatrix = (node, parent) => {
    const m = new THREE.Matrix4();
    if (node.matrix) m.fromArray(node.matrix);
    else {
      m.compose(
        new THREE.Vector3(...(node.translation || [0, 0, 0])),
        new THREE.Quaternion(...(node.rotation || [0, 0, 0, 1])),
        new THREE.Vector3(...(node.scale || [1, 1, 1]))
      );
    }
    return parent ? parent.clone().multiply(m) : m;
  };
  const walk = (idx, parentM) => {
    const node = json.nodes[idx];
    const world = nodeMatrix(node, parentM);
    if (node.mesh !== undefined) {
      for (const prim of json.meshes[node.mesh].primitives) {
        const acc = json.accessors[prim.attributes.POSITION];
        if (!acc?.min) continue;
        const mn = new THREE.Vector3(...acc.min);
        const mx = new THREE.Vector3(...acc.max);
        for (let i = 0; i < 8; i++) {
          box.expandByPoint(new THREE.Vector3(
            i & 1 ? mx.x : mn.x, i & 2 ? mx.y : mn.y, i & 4 ? mx.z : mn.z
          ).applyMatrix4(world));
        }
      }
    }
    (node.children || []).forEach(c => walk(c, world));
  };
  (json.scenes[json.scene || 0].nodes || []).forEach(n => walk(n, new THREE.Matrix4()));
  return box.getSize(new THREE.Vector3());
}

const root = 'D:/pc-builder-3d/public';
const AX = ['X', 'Y', 'Z'];
const mm = n => (n * 1000).toFixed(1).padStart(7);

const byType = new Map();
for (const item of ALL_HARDWARE_ITEMS) {
  const file = path.join(root, item.modelPath.replace(/^\//, ''));
  const size = nativeSize(file);
  const sorted = [...['x', 'y', 'z']].sort((a, b) => size[a] - size[b]);
  if (!byType.has(item.categoryKey)) byType.set(item.categoryKey, []);
  byType.get(item.categoryKey).push({
    item,
    size,
    thin: sorted[0],
    long: sorted[2],
    mid: sorted[1]
  });
}

let mixedCount = 0;
for (const [type, list] of byType) {
  const pairs = new Set(list.map(e => `${e.thin}-${e.long}`));
  const mixed = pairs.size > 1;
  if (mixed) mixedCount++;
  console.log(`\n=== ${type.toUpperCase()}${mixed ? '   *** MIXED ***' : ''}`);
  console.log(`  ${'id'.padEnd(30)} ${'Xmm'.padStart(8)}${'Ymm'.padStart(8)}${'Zmm'.padStart(8)}  thin long   flat?`);
  for (const e of list) {
    const d = e.size;
    const ratio = Math.max(d.x, d.y, d.z) / Math.min(d.x, d.y, d.z);
    console.log(
      `  ${e.item.id.padEnd(30)} ${mm(d.x)}${mm(d.y)}${mm(d.z)}   ${e.thin}    ${e.long}  ${ratio.toFixed(1).padStart(5)}`
    );
  }
  if (mixed) console.log(`  distinct thin-long: ${[...pairs].map(p => p.split('-').map(a => a.toUpperCase()).join('/')).join(' , ')}`);
}
console.log(`\ntypes with mixed native orientation: ${mixedCount}/${byType.size}`);
