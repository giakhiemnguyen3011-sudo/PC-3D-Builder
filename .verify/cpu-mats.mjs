import fs from 'node:fs';
const files = ['am4_cpu__free.glb', 'cpu_ryzen_5_3600.glb', 'free_intel_cpu.glb', 'free__cpu_3d_model_hyper_9_9920g.glb', 'intel_cpu (1).glb', 'intel_cpu.glb'];
for (const f of files) {
  const buf = fs.readFileSync('D:/pc-builder-3d/public/models/CPU_model/' + f);
  let off = 12, json = null;
  while (off < buf.length) {
    const len = buf.readUInt32LE(off);
    const type = buf.readUInt32LE(off + 4);
    if (type === 0x4e4f534a) json = JSON.parse(buf.subarray(off + 8, off + 8 + len).toString('utf8'));
    off += 8 + len + ((4 - (len % 4)) % 4);
  }
  const mats = (json.materials || []).map((m, i) => {
    const p = m.pbrMetallicRoughness || {};
    const c = p.baseColorFactor;
    const rgb = c ? c.slice(0, 3).map(v => v.toFixed(2)).join(',') : 'tex';
    return i + ':' + (m.name || '?').slice(0, 20) + ' rgb=' + rgb + ' m=' + (p.metallicFactor ?? '-') + ' r=' + (p.roughnessFactor ?? '-');
  });
  console.log('== ' + f + '  materials=' + mats.length);
  mats.slice(0, 6).forEach(m => console.log('   ' + m));
}