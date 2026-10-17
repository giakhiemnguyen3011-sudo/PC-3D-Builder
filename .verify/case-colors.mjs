import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";
globalThis.requestAnimationFrame = () => 1;
globalThis.setTimeout = () => 0; globalThis.devicePixelRatio = 1;
const mk = () => ({ width:900,height:700,clientWidth:900,clientHeight:700, style:{}, classList:{add(){},remove(){},toggle(){},contains(){return false}}, getContext:()=>new Proxy({},{get:()=>()=>{}}), getBoundingClientRect:()=>({left:0,top:0,right:900,bottom:700,width:900,height:700}), addEventListener(){}, appendChild(c){return c}, querySelector:()=>mk(), querySelectorAll:()=>[] });
const reg=new Map(); globalThis.document={createElement:mk,getElementById:id=>{if(!reg.has(id))reg.set(id,mk(id));return reg.get(id)},addEventListener(){},removeEventListener(){},querySelector:mk,body:mk("body")};
globalThis.window={addEventListener(){},removeEventListener(){},innerWidth:1280,innerHeight:720,devicePixelRatio:1};
const { BuildScene } = await import("file:///D:/pc-builder-3d/src/scene/BuildScene.js");
const s = new BuildScene(mk("c"));
const seen = new Map();
s.caseGroup.traverse(o => { if (o.isMesh && o.material && o.material.color) {
  const c = o.material.color; const key = `${c.r.toFixed(2)},${c.g.toFixed(2)},${c.b.toFixed(2)}`;
  seen.set(key, (seen.get(key)||0)+1);
}});
for (const [c,n] of seen) console.log(c,'x'+n);