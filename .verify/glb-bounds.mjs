import fs from 'node:fs';
import path from 'node:path';
import * as THREE from 'file:///D:/pc-builder-3d/node_modules/three/build/three.module.js';
import { GLTFLoader } from 'file:///D:/pc-builder-3d/node_modules/three/examples/jsm/loaders/GLTFLoader.js';

// Minimal GLB parser: read JSON chunk + BIN chunk, then compute world AABB
// from POSITION accessor min/max (no decompression needed - accessor min/max
// are stored in the JSON and are the true bounds of the primitive in local space).

function parseGLB(buf) {
  if (buf.readUInt32LE(0) !== 0x46546c67) throw new Error('not a glb');
  let off = 12;
  let json = null;
  let bin = null;
  while (off < buf.length) {
    const len = buf.readUInt32LE(off);
    const type = buf.readUInt32LE(off + 4);
    const data = buf.subarray(off + 8, off + 8 + len);
    if (type === 0x4e4f534a) json = JSON.parse(data.toString('utf8'));
    else if (type === 0x004e4942) bin = data;
    off += 8 + len + ((4 - (len % 4)) % 4);
  }
  return { json, bin };
}

function boundsOf(file) {
  const { json } = parseGLB(fs.readFileSync(file));
  const box = new THREE.Box3();
  const tmpMin = new THREE.Vector3();
  const tmpMax = new THREE.Vector3();

  const nodeMatrix = (node, parent) => {
    const m = new THREE.Matrix4();
    if (node.matrix) m.fromArray(node.matrix);
    else {
      const t = node.translation || [0, 0, 0];
      const r = node.rotation || [0, 0, 0, 1];
      const s = node.scale || [1, 1, 1];
      m.compose(
        new THREE.Vector3(...t),
        new THREE.Quaternion(...r),
        new THREE.Vector3(...s)
      );
    }
    return parent ? parent.clone().multiply(m) : m;
  };

  const walk = (nodeIdx, parentM) => {
    const node = json.nodes[nodeIdx];
    const world = nodeMatrix(node, parentM);
    if (node.mesh !== undefined) {
      const mesh = json.meshes[node.mesh];
      for (const prim of mesh.primitives) {
        const acc = json.accessors[prim.attributes.POSITION];
        if (!acc || !acc.min || !acc.max) continue;
        tmpMin.fromArray(acc.min);
        tmpMax.fromArray(acc.max);
        for (let i = 0; i < 8; i++) {
          const v = new THREE.Vector3(
            i & 1 ? tmpMax.x : tmpMin.x,
            i & 2 ? tmpMax.y : tmpMin.y,
            i & 4 ? tmpMax.z : tmpMin.z
          ).applyMatrix4(world);
          box.expandByPoint(v);
        }
      }
    }
    for (const c of node.children || []) walk(c, world);
  };

  const scene = json.scenes[json.scene || 0];
  for (const n of scene.nodes) walk(n, new THREE.Matrix4());

  return {
    min: box.min.toArray().map(v => +v.toFixed(4)),
    max: box.max.toArray().map(v => +v.toFixed(4)),
    size: box.getSize(new THREE.Vector3()).toArray().map(v => +v.toFixed(4)),
    center: box.getCenter(new THREE.Vector3()).toArray().map(v => +v.toFixed(4)),
    nodes: json.nodes.length,
    meshes: json.meshes.length,
    ext: [
      ...Object.keys(json.extensionsUsed || {}),
      ...Object.keys(json.extensionsRequired || {})
    ]
  };
}

const root = 'D:/pc-builder-3d/public/models';
const targets = process.argv.slice(2);
for (const t of targets) {
  const file = path.join(root, t);
  try {
    const b = boundsOf(file);
    console.log(
      `${t}\n  size=[${b.size}]  min=[${b.min}] max=[${b.max}]  center=[${b.center}]  nodes=${b.nodes} meshes=${b.meshes} ext=${b.ext.join(',') || '-'}`
    );
  } catch (e) {
    console.log(`${t}\n  ERROR: ${e.message}`);
  }
}
