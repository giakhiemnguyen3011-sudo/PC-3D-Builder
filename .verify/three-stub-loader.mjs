// Stub for three/examples/jsm/loaders/GLTFLoader.js
// Builds a fake model whose NATIVE bounding box matches the real .glb file on
// disk, so the scaling/alignment pipeline is exercised with true dimensions.
import fs from 'node:fs';
import * as THREE from 'three';

export const loadedPaths = [];

function parseGLB(file) {
  const buf = fs.readFileSync(file);
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

export function nativeBoxOf(absPath) {
  const json = parseGLB(absPath);
  const box = new THREE.Box3();
  const walk = (nodeIdx, parentM) => {
    const node = json.nodes[nodeIdx];
    const m = new THREE.Matrix4();
    if (node.matrix) m.fromArray(node.matrix);
    else {
      m.compose(
        new THREE.Vector3(...(node.translation || [0, 0, 0])),
        new THREE.Quaternion(...(node.rotation || [0, 0, 0, 1])),
        new THREE.Vector3(...(node.scale || [1, 1, 1]))
      );
    }
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

const PUBLIC_DIR = new URL('../../pc-builder-3d/public/', import.meta.url).pathname.replace(/^\//, '');
void PUBLIC_DIR;

export class GLTFLoader {
  constructor() {
    this.baseDir = process.env.PC3D_PUBLIC;
  }

  load(path, onLoad) {
    loadedPaths.push(path);
    const box = nativeBoxOf(this.baseDir + path.replace(/^\//, ''));
    const size = box.getSize(new THREE.Vector3());
    const centre = box.getCenter(new THREE.Vector3());

    // Recreate the same AABB as an off-centre box so the recentring step of
    // buildFittedModel is genuinely tested.
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(size.x, size.y, size.z),
      new THREE.MeshStandardMaterial({ color: 0x888888 })
    );
    mesh.position.copy(centre).multiplyScalar(2);

    const scene = new THREE.Group();
    scene.add(mesh);
    queueMicrotask(() => onLoad({ scene }));
  }
}
