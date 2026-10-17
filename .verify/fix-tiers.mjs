import { readFileSync, writeFileSync } from 'node:fs';

const TIERS = {
  mb_asus_z370: 0,
  gpu_rtx_3090: 0,
  gpu_rx_480: 0,
  ram_gskill_tridentz_16gb: 1,
  ram_corsair_dominator: 1,
  ram_gskill_tridentz_16gb_b: 1,
  ram_corsair_dominator_b: 1,
  psu_aerocool_650w: 1,
  cpu_ryzen_3600: 2,
  cpu_intel: 2,
  cooler_master_212: 2,
  ssd_samsung_860: 2
};

for (const file of [
  'D:/pc-builder-3d/src/data/hardware.js',
  'D:/pc-builder-3d/src/data/hardwareVariants.js'
]) {
  const lines = readFileSync(file, 'utf8').split(/\r?\n/);
  const out = [];
  let current = null;
  let changed = 0;
  for (const line of lines) {
    const id = line.match(/^\s*id: '([a-z0-9_]+)',/);
    if (id) current = id[1];
    if (/^\s*shelfTier:/.test(line)) {
      if (TIERS[current] === undefined) throw new Error(`no tier planned for ${current}`);
      const want = `    shelfTier: ${TIERS[current]},`;
      if (line !== want) { out.push(want); changed++; continue; }
    }
    out.push(line);
  }
  writeFileSync(file, out.join('\n'));
  console.log(`${file.split('/').pop()}: ${changed} tier lines normalised`);
}

const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');
console.log(`\ncatalogue: ${ALL_HARDWARE_ITEMS.length} items`);
for (const t of [0, 1, 2]) {
  const row = ALL_HARDWARE_ITEMS.filter(i => i.shelfTier === t);
  console.log(`  tier ${t}: ${String(row.length).padStart(2)} items, ${row.reduce((s, i) => s + i.footprint.length, 0).toFixed(2)} m of parts`);
}
const bad = ALL_HARDWARE_ITEMS.filter(i => TIERS[i.id] !== i.shelfTier);
console.log(bad.length ? 'MISMATCH: ' + bad.map(i => i.id).join(', ') : 'every item sits on the planned tier');
const dupes = ALL_HARDWARE_ITEMS.map(i => i.id).filter((id, i, a) => a.indexOf(id) !== i);
console.log(dupes.length ? 'DUPLICATE IDS: ' + dupes.join(', ') : 'no duplicate ids');
