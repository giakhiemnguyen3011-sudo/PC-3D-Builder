import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";
globalThis.requestAnimationFrame = () => 1; globalThis.document={createElement:()=>({classList:{add(){},remove(){}},style:{},children:[]})}; globalThis.window={};
const THREE = await import("file:///D:/pc-builder-3d/node_modules/three/build/three.module.js");
const { loadModelCopy } = await import("file:///D:/pc-builder-3d/src/scene/ModelCache.js");
const { buildFittedModel } = await import("file:///D:/pc-builder-3d/src/scene/ModelFit.js");
const { REAL_DIMS } = await import("file:///D:/pc-builder-3d/src/data/hardwareDims.js").catch(()=>({}));
console.log('REAL_DIMS keys', Object.keys(REAL_DIMS||{}).slice(0,10));