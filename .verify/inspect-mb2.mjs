import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC='D:/pc-builder-3d/public/';
const { loadModelCopy } = await import('file:///D:/pc-builder-3d/src/scene/ModelCache.js');
const THREE = await import('file:///D:/pc-builder-3d/node_modules/three/build/three.module.js');
const c = await loadModelCopy('/models/Motherboard_model/motherboard_am4.glb');
function show(o,d){ console.log(' '.repeat(d)+(o.name||o.type)+' '+o.type+(o.isMesh?' verts='+(o.geometry?.attributes?.position?.count):'')); for(const ch of o.children) show(ch,d+2);} show(c,0);