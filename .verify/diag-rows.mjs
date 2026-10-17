import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
const { getShelfLayout } = await import("file:///D:/pc-builder-3d/src/scene/shelfLayout.js");
const { table, tiers } = getShelfLayout();
console.log("tiers", tiers.length, "rows", tiers[0].rows?.length, "entries", tiers[0].entries.length);
console.log("first entry keys", Object.keys(tiers[0].entries[0]));
console.log("has item?", !!tiers[0].entries[0].item, "pos", JSON.stringify(tiers[0].entries[0].position));
console.log("row0 len", tiers[0].rows[0].length, "row0 first has item?", !!tiers[0].rows[0][0].item);