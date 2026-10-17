import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC='D:/pc-builder-3d/public/';
const { loadModelCopy } = await import('file:///D:/pc-builder-3d/src/scene/ModelCache.js');
const THREE = await import('file:///D:/pc-builder-3d/node_modules/three/build/three.module.js');
const c = await loadModelCopy('/models/Motherboard_model/motherboard_am4.glb');
function walk(o,depth){ for (const ch of o.children){ console.log(' '.repeat(depth)+(ch.name||ch.type)+' '+ch.type+(ch.isMesh?' verts='+(ch.geometry?.attributes?.position?.count):'')); walk(ch,depth+2); } }
console.log('root', c.name, c.type, c.children.length);
walk(c,2);