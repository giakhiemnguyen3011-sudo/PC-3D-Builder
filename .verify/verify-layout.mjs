import fs from 'node:fs';
import path from 'node:path';
import * as THREE from 'file:///D:/pc-builder-3d/node_modules/three/build/three.module.js';
import { ALL_HARDWARE_ITEMS } from 'file:///D:/pc-builder-3d/src/data/hardware.js';
import { getShelfLayout, getTableObstacle } from 'file:///D:/pc-builder-3d/src/scene/shelfLayout.js';
import { computeFlatAlignment } from 'file:///D:/pc-builder-3d/src/scene/ModelFit.js';

function parseGLB(buf) {
  let off = 12;
  let json = null;
  while (off < buf.length) {
    const len = buf.readUInt32LE(off);
    const type = buf.readUInt32LE(off + 4);
    if (type === 0x4e4f534a) json = JSON.parse(buf.subarray(off + 8, off + 8 + len).toString('utf8'));
    off += 8 + len + ((4 - (len % 4)) % 4);
  }
  return json;
}

function nativeBox(file) {
  const json = parseGLB(fs.readFileSync(file));
  const box = new THREE.Box3();
  const walk = (nodeIdx, parentM) => {
    const node = json.nodes[nodeIdx];
    const m = new THREE.Matrix4();
    if (node.matrix) m.fromArray(node.matrix);
    else
      m.compose(
        new THREE.Vector3(...(node.translation || [0, 0, 0])),
        new THREE.Quaternion(...(node.rotation || [0, 0, 0, 1])),
        new THREE.Vector3(...(node.scale || [1, 1, 1]))
      );
    const world = parentM ? parentM.clone().multiply(m) : m;
    if (node.mesh !== undefined) {
      for (const prim of json.meshes[node.mesh].primitives) {
        const acc = json.accessors[prim.attributes.POSITION];
        if (!acc?.min) continue;
        const mn = new THREE.Vector3(...acc.min);
        const mx = new THREE.Vector3(...acc.max);
        for (let i = 0; i < 8; i++) {
          box.expandByPoint(
            new THREE.Vector3(i & 1 ? mx.x : mn.x, i & 2 ? mx.y : mn.y, i & 4 ? mx.z : mn.z)
              .applyMatrix4(world)
          );
        }
      }
    }
    (node.children || []).forEach(c => walk(c, world));
  };
  const scene = json.scenes[json.scene || 0];
  scene.nodes.forEach(n => walk(n, new THREE.Matrix4()));
  return box;
}

const layout = getShelfLayout();
const { table } = layout;
console.log('TABLE', { x: table.x, width: table.width, length: table.length, top: table.topHeight, tiers: table.tierHeights });
console.log('OBSTACLE', getTableObstacle());
console.log('SHELF X range', (table.x - table.width / 2).toFixed(3), '..', (table.x + table.width / 2).toFixed(3));
console.log('SHELF Z range', (table.z - table.length / 2).toFixed(3), '..', (table.z + table.length / 2).toFixed(3));
console.log('');

const placements = [];
layout.tiers.forEach(tier => {
  tier.entries.forEach(e => placements.push({ id: e.item.id, item: e.item, pos: e.position, tier: tier.index }));
});

let problems = 0;
for (const { id, item, pos, tier } of placements) {
  const box = nativeBox(path.join('D:/pc-builder-3d/public', item.modelPath.replace(/^\//, '')));
  const size = box.getSize(new THREE.Vector3());
  const nativeMax = Math.max(size.x, size.y, size.z) || 1;
  const s = item.realSize / nativeMax;

  const q = computeFlatAlignment(size);
  const aligned = box.clone().applyMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(q));
  const asize = aligned.getSize(new THREE.Vector3());

  // world extents after yaw -90deg: local X -> world Z, local Z -> world X
  const worldZ = asize.x * s;
  const worldX = asize.z * s;
  const worldY = asize.y * s;

  const reservedLen = item.footprint.length;
  const reservedDep = item.footprint.depth;
  const overlapX = worldX - reservedDep;
  const overlapZ = worldZ - reservedLen;

  const flags = [];
  if (Math.abs(asize.y * s - worldY) > 1e-9) flags.push('?');
  if (overlapX > 0.001) flags.push(`X_OVERLAP +${overlapX.toFixed(4)}`);
  if (overlapZ > 0.001) flags.push(`Z_OVERLAP +${overlapZ.toFixed(4)}`);
  if (flags.length) problems++;

  console.log(
    `t${tier} ${id.padEnd(26)} nat=[${size.toArray().map(v => v.toFixed(2)).join(',')}]` +
    ` scale=${s.toExponential(2)}` +
    ` world W(x)=${worldX.toFixed(4)} H(y)=${worldY.toFixed(4)} L(z)=${worldZ.toFixed(4)}` +
    ` @ x=${pos.x.toFixed(2)} y=${pos.y.toFixed(3)} z=${pos.z.toFixed(3)}` +
    (flags.length ? `  <<< ${flags.join(' ')}` : '')
  );
}

console.log('');
// spacing / overlap check within each tier
layout.tiers.forEach(tier => {
  const row = tier.entries
    .map(e => ({ id: e.item.id, z0: e.position.z - e.footprint.length / 2, z1: e.position.z + e.footprint.length / 2 }))
    .sort((a, b) => a.z0 - b.z0);
  let minGap = Infinity;
  for (let i = 1; i < row.length; i++) minGap = Math.min(minGap, row[i].z0 - row[i - 1].z1);
  const span = row.length ? row[row.length - 1].z1 - row[0].z0 : 0;
  const half = table.length / 2;
  const overflow = row.length ? Math.max(0, Math.abs(row[0].z0) - half + table.edgeMargin, Math.abs(row[row.length - 1].z1) - half + table.edgeMargin) : 0;
  console.log(
    `tier ${tier.index}: n=${row.length} span=${span.toFixed(3)} minGap=${Number.isFinite(minGap) ? minGap.toFixed(3) : '-'} marginOverflow=${overflow.toFixed(3)}`
  );
});

console.log(problems ? `\n${problems} PROBLEM(S)` : '\nNo overlap problems');
