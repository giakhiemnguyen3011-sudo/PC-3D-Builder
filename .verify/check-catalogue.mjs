import { readFileSync, readdirSync } from 'node:fs';

const { ALL_HARDWARE_ITEMS, HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');
const { HARDWARE_VARIANTS } = await import('file:///D:/pc-builder-3d/src/data/hardwareVariants.js');

console.log(`base ${HARDWARE_ITEMS.length} + variants ${HARDWARE_VARIANTS.length} = ${ALL_HARDWARE_ITEMS.length}`);

// every catalogued model must exist on disk
const modelsDir = 'D:/pc-builder-3d/public/models';
const onDisk = [];
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = `${dir}/${e.name}`;
    if (e.isDirectory()) walk(p);
    else if (/\.glb$/i.test(e.name)) onDisk.push(p.replace('D:/pc-builder-3d/public', ''));
  }
})(modelsDir);

const used = new Set(ALL_HARDWARE_ITEMS.map(i => i.modelPath));
const missing = [...used].filter(p => !onDisk.includes(p));
const unused = onDisk.filter(p => !used.has(p));
console.log(`\nglb files on disk: ${onDisk.length}, referenced: ${used.size}`);
console.log('referenced but missing on disk:', missing.length ? missing.join(', ') : 'none');
console.log('on disk but still unused      :', unused.length ? unused.join(', ') : 'none');

// every item needs the fields the scene, inventory and build mode rely on
const REQUIRED = ['id', 'name', 'category', 'categoryKey', 'tag', 'modelPath', 'realSize', 'footprint', 'iconSvg', 'specs'];
const incomplete = ALL_HARDWARE_ITEMS.filter(i => REQUIRED.some(k => i[k] === undefined || i[k] === null));
console.log('\nitems missing required fields:', incomplete.length ? incomplete.map(i => `${i.id}(${REQUIRED.filter(k => i[k] == null).join(',')})`).join(' ') : 'none');

const dupes = ALL_HARDWARE_ITEMS.map(i => i.id).filter((id, i, a) => a.indexOf(id) !== i);
console.log('duplicate ids:', dupes.length ? dupes.join(', ') : 'none');

const { getShelfLayout } = await import('file:///D:/pc-builder-3d/src/scene/shelfLayout.js');
const { table, tiers } = getShelfLayout();
console.log(`\nbench: ${table.length.toFixed(2)} m long x ${table.width.toFixed(2)} m deep, ${tiers.length} surface, ${tiers[0].rows.length} rows`);
tiers[0].rows.forEach((r, i) => {
  console.log(`  row ${i}: ${String(r.length).padStart(2)} parts, ${(r.totalLength || 0).toFixed(2)} m run`);
});
const low = tiers.flatMap(t => t.entries).filter(e => e.position.y < 0.8);
console.log('parts below 0.8 m (unreachable):', low.length ? low.map(e => e.item.id).join(', ') : 'none');
console.log('fits in the 12 x 10 m room:', table.length < 9 && table.width < 9 ? 'yes' : 'NO');

const badSize = ALL_HARDWARE_ITEMS.filter(i => i.footprint.length < i.realSize * 0.5);
console.log('footprint far smaller than the part:', badSize.length ? badSize.map(i => i.id).join(', ') : 'none');
