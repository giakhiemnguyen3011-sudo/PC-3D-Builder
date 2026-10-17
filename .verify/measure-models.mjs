import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";
globalThis.requestAnimationFrame = () => 1; globalThis.setTimeout = () => 0; globalThis.devicePixelRatio = 1;
try {
const mk=()=>({width:900,height:700,clientWidth:900,clientHeight:700,style:{},addEventListener(){},appendChild(c){return c},querySelector:()=>mk(),querySelectorAll:()=>[]});
globalThis.document={createElement:mk,addEventListener(){}}; globalThis.window={addEventListener(){},innerWidth:1280,innerHeight:720,devicePixelRatio:1};
} catch(e) {}
const { loadModelTemplate } = await import("file:///D:/pc-builder-3d/src/scene/ModelCache.js");
const THREE = await import("file:///D:/pc-builder-3d/node_modules/three/build/three.module.js");
const measure = async (p) => {
  const root = await loadModelTemplate(p);
  if (!root) { console.log(p, "-> null"); return; }
  root.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(root);
  const s = b.getSize(new THREE.Vector3());
  console.log(p.split('/').pop(), "native size (m?)", s.toArray().map(n=>+n.toFixed(4)).join(' x '));
};
await measure("/models/RAM_model/ram_ddr4_g.skill_trident_z_rgb.glb");
await measure("/models/RAM_model/corsair_dominator_rgb_ram.glb");
await measure("/models/RAM_model/crucial_8_gb_ddr4_2133_ram.glb");