import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";
globalThis.requestAnimationFrame = () => 1;
globalThis.performance = globalThis.performance || { now: () => Date.now() };

const THREE = await import('file:///D:/pc-builder-3d/node_modules/three/build/three.module.js');
const { loadModelCopy } = await import('file:///D:/pc-builder-3d/src/scene/ModelCache.js');
const { measureModel } = await import('file:///D:/pc-builder-3d/src/scene/ModelFit.js');
const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');

for (const id of ['ram_corsair_dominator', 'ram_gskill_tridentz_16gb', 'ram_crucial_8gb']) {
  const item = ALL_HARDWARE_ITEMS.find(i => i.id === id);
  const copy = await loadModelCopy(item.modelPath);
  const m = measureModel(copy);
  let mesh = null;
  copy.traverse(c => { if (c.isMesh && !mesh) mesh = c; });
  const g = mesh.geometry;
  const pos = g.attributes.position, uv = g.attributes.uv, idx = g.index;
  const tri = i => idx ? [idx.getX(i), idx.getX(i + 1), idx.getX(i + 2)] : [i, i + 1, i + 2];
  const count = idx ? idx.count : pos.count;

  // group triangles by dominant normal axis
  const faces = new Map();
  for (let t = 0; t < count; t += 3) {
    const ids = tri(t);
    const a = new THREE.Vector3().fromBufferAttribute(pos, ids[0]);
    const b = new THREE.Vector3().fromBufferAttribute(pos, ids[1]);
    const c = new THREE.Vector3().fromBufferAttribute(pos, ids[2]);
    const n = new THREE.Vector3().subVectors(b, a).cross(new THREE.Vector3().subVectors(c, a)).normalize();
    const axis = ['x', 'y', 'z'].reduce((p, k, i) => Math.abs(n.getComponent(i)) > Math.abs(n.getComponent(p)) ? i : p, 0);
    const key = axis + (n.getComponent(axis) > 0 ? '+' : '-');
    const rec = faces.get(key) || { n: 0, uMin: 9, uMax: -9, vMin: 9, vMax: -9, area: 0 };
    rec.n++;
    for (const id2 of ids) {
      if (!uv) continue;
      const u = uv.getX(id2), v = uv.getY(id2);
      rec.uMin = Math.min(rec.uMin, u); rec.uMax = Math.max(rec.uMax, u);
      rec.vMin = Math.min(rec.vMin, v); rec.vMax = Math.max(rec.vMax, v);
    }
    rec.area += new THREE.Vector3().subVectors(b, a).cross(new THREE.Vector3().subVectors(c, a)).length() / 2;
    faces.set(key, rec);
  }
  console.log('\n=== ' + id + ' native ' + m.size.toArray().map(v => v.toFixed(3)).join(' x '));
  for (const [k, r] of [...faces].sort((p, q) => q[1].area - p[1].area)) {
    console.log('  face', k.padEnd(3), 'tris', r.n,
      'uv u', r.uMin.toFixed(2), '..', r.uMax.toFixed(2),
      ' v', r.vMin.toFixed(2), '..', r.vMax.toFixed(2),
      ' area', r.area.toFixed(2));
  }
  const t = mesh.material?.map?.image;
  console.log('  texture:', t ? `${t.width}x${t.height}` : 'none');
}