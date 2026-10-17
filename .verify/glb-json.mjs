import { readFileSync } from 'node:fs';

for (const f of ['corsair_dominator_rgb_ram.glb', 'ram_ddr4_g.skill_trident_z_rgb.glb']) {
  const buf = readFileSync('D:/pc-builder-3d/public/models/RAM_model/' + f);
  const jsonLen = buf.readUInt32LE(12);
  const json = JSON.parse(buf.subarray(20, 20 + jsonLen).toString('utf8'));
  console.log('\n=====', f, 'jsonLen', jsonLen);
  console.log('meshes', (json.meshes || []).length, 'nodes', (json.nodes || []).length,
    'materials', (json.materials || []).length, 'images', (json.images || []).length,
    'accessors', (json.accessors || []).length, 'animations', (json.animations || []).length);
  (json.meshes || []).forEach((m, i) => console.log('  mesh', i, m.name || '(unnamed)',
    'prims', m.primitives.map(p => `mode${p.mode ?? 4}:${p.attributes.POSITION}`).join(',')));
  (json.nodes || []).forEach((n, i) => console.log('  node', i, n.name || '(unnamed)',
    'mesh' in n ? `mesh=${n.mesh}` : '', n.translation ? 'T' + n.translation.map(v => +v.toFixed(3)) : '',
    n.rotation ? 'R' + n.rotation.map(v => +v.toFixed(3)) : '', n.scale ? 'S' + n.scale : ''));
  (json.accessors || []).forEach((a, i) => console.log('  acc', i, a.type, 'count', a.count, a.min ? 'min' + a.min.map(v => +v.toFixed(3)) : '', a.max ? 'max' + a.max.map(v => +v.toFixed(3)) : ''));
  (json.materials || []).forEach((m, i) => console.log('  mat', i, JSON.stringify(m).slice(0, 200)));
}