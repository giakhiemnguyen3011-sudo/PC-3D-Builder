import { readFileSync, writeFileSync } from 'node:fs';

for (const file of [
  'D:/pc-builder-3d/src/data/hardware.js',
  'D:/pc-builder-3d/src/data/hardwareVariants.js'
]) {
  const lines = readFileSync(file, 'utf8').split(/\r?\n/);
  const out = lines.filter(l => !/^\s*shelfTier:\s*\d+,\s*$/.test(l));
  writeFileSync(file, out.join('\n'));
  console.log(`${file.split('/').pop()}: removed ${lines.length - out.length} shelfTier lines`);
}
