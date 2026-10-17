import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC='D:/pc-builder-3d/public/';
const { loadModelCopy } = await import('file:///D:/pc-builder-3d/src/scene/ModelCache.js');
const THREE = await import('file:///D:/pc-builder-3d/node_modules/three/build/three.module.js');
const c = await loadModelCopy('/models/Motherboard_model/motherboard_am4.glb');
for (const o of c.children) console.log(o.name,o.type);
console.log('--deep names containing socket--');
c.traverse(n => { if (n.isMesh && /socket|cpu|dimm|ram|slot/i.test(n.name)) console.log(n.name,n.geometry?.attributes?.position?.count);});