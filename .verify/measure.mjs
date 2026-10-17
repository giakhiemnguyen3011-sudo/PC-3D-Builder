import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";
const { loadModelCopy } = await import("file:///D:/pc-builder-3d/src/scene/ModelCache.js");
const THREE = await import("file:///D:/pc-builder-3d/node_modules/three/build/three.module.js");
const paths = ["/models/RAM_model/corsair_dominator_rgb_ram.glb","/models/RAM_model/ram_ddr4_g.skill_trident_z_rgb.glb","/models/RAM_model/motherboard_switch.glb".replace("motherboard_switch.glb","ram"+"","")];
for (const p of [paths[0], paths[1]]) {
  const c = await loadModelCopy(p);
  c.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(c);
  const size = box.getSize(new THREE.Vector3());
  console.log(p.split('/').pop(), sysToArray(size));
}
function sysToArray(v){ return `[${v.x.toFixed(4)}, ${v.y.toFixed(4)}, ${v.z.toFixed(4)}]`;}