/**
 * Guards the loading work: one parse per file, progressive bench fill-in, and
 * nothing stored below the bench top where the player cannot reach it.
 */
import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');

process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';
globalThis.requestAnimationFrame = () => 1;
globalThis.cancelAnimationFrame = () => {};
globalThis.performance = globalThis.performance || { now: () => Date.now() };
globalThis.devicePixelRatio = 1;

let raf = 0;
globalThis.requestAnimationFrame = () => { raf++; return raf; };
globalThis.cancelAnimationFrame = () => {};

// A model cache that records how many times each file is actually parsed.
const parsed = [];
const clones = [];
globalThis.__TEST_MODEL_CACHE__ = { parsed, clones };

const RECT = { left: 0, top: 0, right: 900, bottom: 700, width: 900, height: 700 };
const makeCtx2D = () => new Proxy({
  createLinearGradient: () => ({ addColorStop() {} }),
  createRadialGradient: () => ({ addColorStop() {} }),
  measureText: () => ({ width: 10 }),
  getImageData: () => ({ data: new Uint8ClampedArray(4) })
}, { get: (t, k) => (k in t ? t[k] : () => {}) });
const makeEl = (id = '') => ({
  id, width: 900, height: 700, clientWidth: 900, clientHeight: 700,
  style: {}, dataset: {}, textContent: '', innerHTML: '', value: '',
  children: [], isConnected: true, className: '',
  classList: { _s: new Set(), add() {}, remove() {}, toggle() {}, contains() { return false; } },
  getContext: () => makeCtx2D(),
  getBoundingClientRect: () => RECT,
  addEventListener() {}, appendChild(c) { this.children.push(c); return c; },
  remove() {}, removeChild() {}, setAttribute() {},
  querySelector: () => makeEl('inner'), querySelectorAll: () => []
});
const registry = new Map();
globalThis.document = {
  createElement: () => makeEl(),
  getElementById: id => { if (!registry.has(id)) registry.set(id, makeEl(id)); return registry.get(id); },
  addEventListener() {}, removeEventListener() {},
  querySelector: () => makeEl(), body: makeEl('body')
};
globalThis.window = { addEventListener() {}, removeEventListener() {}, innerWidth: 1280, innerHeight: 720, devicePixelRatio: 1 };
globalThis.navigator ??= { userAgent: 'node' };

const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');
const { getShelfLayout, getTableObstacle } = await import('file:///D:/pc-builder-3d/src/scene/shelfLayout.js');
const { readdirSync, statSync } = await import('node:fs');

let pass = 0, fail = 0;
const assert = (c, m) => { if (!c) throw new Error(m); };
const check = (name, fn) => {
  try { fn(); console.log(`  PASS  ${name}`); pass++; }
  catch (e) { console.log(`  FAIL  ${name}\n        ${e.message}`); fail++; }
};

console.log('\n[one parse per file]');
check('the four model consumers all go through the shared cache', async () => {
  const sources = [
    'D:/pc-builder-3d/src/scene/ShelfHardware.js',
    'D:/pc-builder-3d/src/scene/BuildScene.js',
    'D:/pc-builder-3d/src/scene/ItemPreviewScene.js',
    'D:/pc-builder-3d/src/scene/ItemThumbnails.js',
    'D:/pc-builder-3d/src/controls/HeldItemManager.js'
  ];
  const { readFileSync } = await import('node:fs');
  const offenders = sources.filter(f => /new GLTFLoader\(\)/.test(readFileSync(f, 'utf8')));
  assert(offenders.length === 0,
    `still builds its own loader: ${offenders.map(f => f.split('/').pop()).join(', ')}`);
  const cache = await import('file:///D:/pc-builder-3d/src/scene/ModelCache.js');
  assert(typeof cache.loadModelCopy === 'function', 'no loadModelCopy export');
  assert(typeof cache.streamModels === 'function', 'no streamModels export');
});

check('a second request for the same file reuses the parse', async () => {
  const { loadModelTemplate, modelCacheStats } = await import('file:///D:/pc-builder-3d/src/scene/ModelCache.js');
  const path = ALL_HARDWARE_ITEMS[0].modelPath;
  const before = modelCacheStats().requested;
  const [a, b] = await Promise.all([loadModelTemplate(path), loadModelTemplate(path)]);
  assert(a && b, 'model did not load');
  const after = modelCacheStats();
  assert(after.requested - before === 2, 'requests not recorded');
  assert(after.parsed === 1, `file parsed ${after.parsed} times, expected 1`);
  assert(after.reused >= 1, 'second request did not reuse the cache');
});

check('the returned copy is independent of the cached template', async () => {
  const { loadModelTemplate, loadModelCopy } = await import('file:///D:/pc-builder-3d/src/scene/ModelCache.js');
  const THREE = await import('three');
  const template = await loadModelTemplate(ALL_HARDWARE_ITEMS[0].modelPath);
  const copy = await loadModelCopy(ALL_HARDWARE_ITEMS[0].modelPath);
  assert(copy !== template, 'copy is the same object as the template');
  copy.position.set(9, 9, 9);
  assert(!template.position.equals(new THREE.Vector3(9, 9, 9)),
    'moving the copy moved the shared template');
});

console.log('\n[progressive fill]');
check('the bench is fully populated before it reports ready', async () => {
  const { ShelfHardware } = await import('file:///D:/pc-builder-3d/src/scene/ShelfHardware.js');
  const THREE = await import('three');
  const scene = new THREE.Scene();
  const shelf = new ShelfHardware(scene, { perFrame: 4 });
  shelf.seedPlaceholders();
  // placeholders first: the bench is never empty
  assert(shelf.shelfMeshes.size === ALL_HARDWARE_ITEMS.length,
    `${shelf.shelfMeshes.size} placeholders for ${ALL_HARDWARE_ITEMS.length} parts`);
  assert(shelf.placeholders.size === ALL_HARDWARE_ITEMS.length, 'not every slot was seeded');
  await shelf.ready;
  assert(shelf.placeholders.size === 0, `${shelf.placeholders.size} placeholders left behind`);
  assert(shelf.shelfMeshes.size === ALL_HARDWARE_ITEMS.length,
    `${shelf.shelfMeshes.size} meshes after load`);
  assert(shelf.interactables.length === ALL_HARDWARE_ITEMS.length,
    `${shelf.interactables.length} interactables, expected ${ALL_HARDWARE_ITEMS.length}`);
  // every visible mesh is a real one, not a stand-in
  let placeholdersLeft = 0;
  shelf.interactables.forEach(w => w.traverse(c => {
    if (c.isMesh && c.userData.isPlaceholder) placeholdersLeft++;
  }));
  assert(placeholdersLeft === 0, `${placeholdersLeft} placeholder meshes still in the scene`);
});

check('variants sharing one file all get their own mesh', async () => {
  const { ShelfHardware } = await import('file:///D:/pc-builder-3d/src/scene/ShelfHardware.js');
  const THREE = await import('three');
  const scene = new THREE.Scene();
  const shelf = new ShelfHardware(scene, { perFrame: 8 });
  shelf.seedPlaceholders();
  await shelf.ready;
  const byPath = new Map();
  ALL_HARDWARE_ITEMS.forEach(i => {
    if (!byPath.has(i.modelPath)) byPath.set(i.modelPath, []);
    byPath.get(i.modelPath).push(i.id);
  });
  const shared = [...byPath.entries()].filter(([, ids]) => ids.length > 1);
  assert(shared.length > 0, 'no shared model files in the catalogue to test');
  shared.forEach(([, ids]) => {
    ids.forEach(id => {
      assert(shelf.shelfMeshes.has(id), `${id} has no mesh despite sharing a file`);
    });
  });
});

console.log('\n[nothing out of reach]');
check('every part sits on the bench top', () => {
  const { tiers, table } = getShelfLayout();
  assert(tiers.length === 1, `${tiers.length} tiers`);
  assert(table.tierSurfaces.length === 1, 'bench still has lower shelves');
  const entries = tiers.flatMap(t => t.entries);
  assert(entries.length === ALL_HARDWARE_ITEMS.length, `${entries.length} placed`);
  const low = entries.filter(e => e.position.y < 0.75);
  assert(low.length === 0, `below 0.75 m: ${low.map(e => e.item.id).join(', ')}`);
  // standard bench height, within a short walk of the front of the room
  assert(Math.abs(tiers[0].surface - 0.82) < 1e-6, `surface at ${tiers[0].surface} m`);
});

check('rows are side by side and each stays inside the bench', () => {
  const { tiers, table } = getShelfLayout();
  const rows = tiers[0].rows;
  assert(rows.length >= 2, `only ${rows.length} row(s)`);
  rows.forEach((row, i) => {
    const line = row.map(e => ({
      id: e.item.id,
      a: e.position.z - e.footprint.length / 2,
      b: e.position.z + e.footprint.length / 2
    })).sort((p, q) => p.a - q.a);
    for (let k = 1; k < line.length; k++) {
      assert(line[k].a >= line[k - 1].b - 1e-9, `${line[k - 1].id} overlaps ${line[k].id}`);
    }
    assert(line[0].a > -table.length / 2, `row ${i} past the rear edge`);
    assert(line[line.length - 1].b < table.length / 2, `row ${i} past the front edge`);
    // and the band it sits in is on the bench
    assert(Math.abs(row[0].position.x - table.x) <= table.width / 2,
      `row ${i} band at x=${row[0].position.x.toFixed(3)} is off the bench centred at ${table.x}`);
  });
  // no two rows share a band
  const bands = rows.map(r => r[0].position.x.toFixed(4));
  assert(new Set(bands).size === bands.length, `duplicate bands: ${bands.join(', ')}`);
});

check('the bench is a sane size for the room', () => {
  const { table } = getShelfLayout();
  const o = getTableObstacle();
  assert(table.length > 1.5 && table.length < 4, `${table.length.toFixed(2)} m long`);
  assert(table.width > 0.6 && table.width <= 1.3, `${table.width.toFixed(2)} m deep`);
  assert(o.minX > -6 && o.maxX < 6, 'obstacle runs into a wall');
});

console.log('\n[assets]');
check('the premade case models are gone', () => {
  assert(!existsSyncSafe('D:/pc-builder-3d/public/models/Completed_Computer_Case_Model'),
    'Completed_Computer_Case_Model still present');
  const cases = ALL_HARDWARE_ITEMS.filter(i => /case/i.test(i.id) || i.tag === 'Case');
  assert(cases.length === 0, `case items still catalogued: ${cases.map(i => i.id).join(', ')}`);
});


check('every catalogued model file exists and the decorative set is untouched', () => {
  const missing = ALL_HARDWARE_ITEMS
    .map(i => i.modelPath)
    .filter(p => !existsSyncSafe(`D:/pc-builder-3d/public${p}`));
  assert(missing.length === 0, `missing: ${missing.join(', ')}`);
  ['warrior_toy', 'low_poly_computer_desk', 'computer_table_setup'].forEach(name => {
    assert(existsSyncSafe(`D:/pc-builder-3d/public/models/Decorative_model/${name}.glb`),
      `decorative asset ${name} was removed`);
  });
});

function existsSyncSafe(p) {
  try { statSync(p); return true; } catch { return false; }
}

console.log(`\n${fail === 0 ? 'ALL PASSED' : 'FAILURES'}: ${pass} passed, ${fail} failed\n`);
process.exit(fail === 0 ? 0 : 1);
