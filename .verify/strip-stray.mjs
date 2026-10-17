import { readFileSync, writeFileSync } from 'node:fs';
const p = 'D:/pc-builder-3d/src/data/hardwareVariants.js';
const lines = readFileSync(p, 'utf8').split(/\r?\n/);
const keep = lines.filter(l => !/^\s*\$\d+,\s*$/.test(l));
writeFileSync(p, keep.join('\n'));
console.log(`removed ${lines.length - keep.length} stray lines`);
console.log(keep.filter(l => /\$1\d|shelfTier/.test(l)).length, 'shelfTier lines remain');
