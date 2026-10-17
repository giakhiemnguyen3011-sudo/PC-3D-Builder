import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";
globalThis.requestAnimationFrame = () => 1;
const { ALL_HARDWARE_ITEMS } = await import("file:///D:/pc-builder-3d/src/data/hardware.js");
const { realDimsFor } = await import("file:///D:/pc-builder-3d/src/data/hardwareDims.js");
const { stepPartNames, ASSEMBLY_STEPS } = await import("file:///D:/pc-builder-3d/src/data/assemblyPlan.js");
const out = [];
for (const s of ASSEMBLY_STEPS) {
  if (!s.accepts.length) continue;
  const p = stepPartNames(s, ALL_HARDWARE_ITEMS);
  out.push(`  step ${String(s.step).padStart(2)}: ${p.map(x => x.label).join(" | ")}`);
}
console.log(out.join("\n"));
console.log("\nreal dims:");
for (const t of ["motherboard","cpu","cooler","ram","storage","psu","gpu"]) {
  const it = ALL_HARDWARE_ITEMS.find(i => i.categoryKey === t);
  const d = realDimsFor(it);
  console.log(`  ${t.padEnd(12)} ${(d.length*1000).toFixed(1)} x ${(d.width*1000).toFixed(1)} x ${(d.height*1000).toFixed(1)} mm`);
}