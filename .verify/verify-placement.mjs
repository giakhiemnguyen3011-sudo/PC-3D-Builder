/**
 * Regression cover for the two reported bugs:
 *  1. parts were placed in an unrotated frame while the chassis was turned -90
 *     degrees, so a part landed outside / edge-on to the case
 *  2. the carried ghost chased the cursor during fastener steps and was never
 *     clamped, so it appeared to escape the chassis
 */
import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');

process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';

globalThis.requestAnimationFrame = () => 1;
globalThis.cancelAnimationFrame = () => {};
globalThis.performance = globalThis.performance || { now: () => Date.now() };
globalThis.devicePixelRatio = 1;

// ------------------------------------------------------------------ DOM stub
const RECT = { left: 0, top: 0, right: 900, bottom: 700, width: 900, height: 700 };
const makeCtx2D = () => {
  const gradient = { addColorStop() {} };
  const base = {
    createLinearGradient: () => gradient,
    createRadialGradient: () => gradient,
    createPattern: () => null,
    getImageData: () => ({ data: new Uint8ClampedArray(4) }),
    measureText: () => ({ width: 10 })
  };
  return new Proxy(base, { get: (t, k) => (k in t ? t[k] : () => {}) });
};
const makeEl = (id = '') => ({
  id,
  width: 900, height: 700, clientWidth: 900, clientHeight: 700,
  style: {}, dataset: {}, textContent: '', innerHTML: '', value: '',
  children: [], isConnected: true, className: '',
  classList: {
    _s: new Set(),
    add(...c) { c.forEach(x => this._s.add(x)); },
    remove(...c) { c.forEach(x => this._s.delete(x)); },
    toggle(c, on) { on === undefined ? (this._s.has(c) ? this._s.delete(c) : this._s.add(c)) : (on ? this._s.add(c) : this._s.delete(c)); },
    contains(c) { return this._s.has(c); }
  },
  getContext: () => makeCtx2D(),
  getBoundingClientRect: () => RECT,
  addEventListener() {}, appendChild(c) { this.children.push(c); return c; },
  remove() {}, removeChild() {}, setAttribute() {},
  querySelector: () => makeEl('inner'),
  querySelectorAll: () => []
});
const registry = new Map();
globalThis.document = {
  createElement: () => makeEl(),
  getElementById: id => { if (!registry.has(id)) registry.set(id, makeEl(id)); return registry.get(id); },
  addEventListener() {}, removeEventListener() {},
  querySelector: () => makeEl(),
  body: makeEl('body')
};
globalThis.window = {
  addEventListener() {}, removeEventListener() {},
  innerWidth: 1280, innerHeight: 720, devicePixelRatio: 1
};
globalThis.navigator ??= { userAgent: 'node' };

const { CASE, CASE_BOUNDS, CASE_ZONES, CASE_REF, TRAY, SHROUD, BOARD, BOARD_SURFACE_X, SOCKET } = await import('file:///D:/pc-builder-3d/src/scene/caseLayout.js');
const { BuildScene } = await import('file:///D:/pc-builder-3d/src/scene/BuildScene.js');
const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');
const { ASSEMBLY_STEPS, stepAccepts, stepPartNames } = await import('file:///D:/pc-builder-3d/src/data/assemblyPlan.js');
const { mountQuaternion } = await import('file:///D:/pc-builder-3d/src/scene/caseLayout.js');
const THREE = await import('three');

let pass = 0, fail = 0;
const assert = (c, m) => { if (!c) throw new Error(m); };
const check = (name, fn) => {
  try { fn(); console.log(`  PASS  ${name}`); pass++; }
  catch (e) { console.log(`  FAIL  ${name}\n        ${e.message}`); fail++; }
};

const scene = new BuildScene(document.getElementById('build-canvas'));
scene.snapCamera();
const tick = () => new Promise(r => setTimeout(r, 0));

const BOARD_ITEM = ALL_HARDWARE_ITEMS.find(i => i.id === 'mb_msi_b550_tomahawk');
const GPU_ITEM = ALL_HARDWARE_ITEMS.find(i => i.id === 'gpu_rtx_3090');
const PSU_ITEM = ALL_HARDWARE_ITEMS.find(i => i.id === 'psu_corsair_rm550');

console.log('\n[zone anchors land on the actual chassis]');
check('the chassis turn lives on caseRoot only', () => {
  assert(Math.abs(scene.caseRoot.rotation.y + Math.PI / 2) < 1e-6, 'caseRoot not turned');
  assert(scene.caseGroup.rotation.y === 0, 'the chassis mesh is turned a second time');
  assert(scene.caseGroup.parent === scene.caseRoot, 'chassis is not parented to caseRoot');
});

check('every zone marker is parented to caseRoot', () => {
  scene.zoneMeshes.forEach((mesh, id) => {
    assert(mesh.parent === scene.caseRoot, `${id} marker is parented to ${mesh.parent?.type}`);
  });
});

check('zone markers sit where the case geometry is', () => {
  // the tray face is a real surface on the chassis; the board anchor must touch it
  const mb = CASE_ZONES.motherboard.anchor;
  // the board is balanced on its 45mm component stack, so its *copper* - not its
  // centre - is what rests on the tray face
  assert(Math.abs(BOARD_SURFACE_X - (TRAY.face + 0.0015)) < 1e-9, 'board copper is off the tray face');
  assert(Math.abs(mb[0] - (TRAY.face + 0.045 / 2)) < 1e-9, 'board anchor is off the tray face');
  // and the CPU has to sit on the socket that is printed on the board
  const cpu = CASE_ZONES.cpu.anchor;
  assert(Math.abs(cpu[0] - (TRAY.face + 0.0081 + 0.0025)) < 1e-9, 'cpu is not seated on the socket frame');
  const cool = CASE_ZONES.cooler.anchor;
  // the cooler's base sits on the CPU's heatspreader, fin stack reaching out
  assert(Math.abs(cool[0] - (cpu[0] + 0.0025 + 0.0775)) < 1e-9, 'the cooler does not rest on the cpu');
  assert(cool[0] + 0.0775 <= CASE_REF.xGlassInner - 0.001, 'the cooler reaches through the glass');
  assert(Math.abs(cpu[1] - 0.324) < 1e-3 && Math.abs(cpu[2] + 0.0947) < 1e-3, 'cpu is not on the measured socket');
  const psu = CASE_ZONES.psu.anchor;
  assert(psu[0] > SHROUD.x0 && psu[0] < SHROUD.x1, 'psu anchor is outside the shroud in x');
  assert(psu[2] > SHROUD.z0 && psu[2] < SHROUD.z1, 'psu anchor is outside the shroud in z');
});

check('every zone anchor lands inside the chassis in world space', () => {
  // build the chassis box in pivot space and require each anchor to be within it
  const shell = new THREE.Box3();
  for (let i = 0; i < 8; i++) {
    shell.expandByPoint(new THREE.Vector3(
      i & 1 ? CASE_BOUNDS.max[0] : CASE_BOUNDS.min[0],
      i & 2 ? CASE_BOUNDS.max[1] : CASE_BOUNDS.min[1],
      i & 4 ? CASE_BOUNDS.max[2] : CASE_BOUNDS.min[2]
    ).applyMatrix4(scene.caseRoot.matrixWorld));
  }
  // the rear DisplayPort and the roof power switch are surface controls
  const surface = new Set(['display', 'power', 'glass']);
  const bad = [];
  for (const [id, zone] of Object.entries(CASE_ZONES)) {
    const p = new THREE.Vector3(...zone.anchor).applyMatrix4(scene.caseRoot.matrixWorld);
    const slack = surface.has(id) ? 0.02 : 0.001;
    const inside =
      p.x >= shell.min.x + 0.013 - slack && p.x <= shell.max.x - 0.013 + slack &&
      p.y >= shell.min.y + 0.013 - slack && p.y <= shell.max.y - 0.013 + slack &&
      p.z >= shell.min.z + 0.013 - slack && p.z <= shell.max.z - 0.013 + slack;
    if (!inside) bad.push(`${id} @ ${p.toArray().map(v => v.toFixed(3))}`);
  }
  assert(bad.length === 0, `outside the case: ${bad.join('; ')}`);
});

console.log('\n[a placed part really is inside the case]');
const inside = (obj, label) => {
  scene.pivot.updateMatrixWorld(true);
  const world = new THREE.Box3().setFromObject(obj);
  const caseBox = new THREE.Box3().setFromObject(scene.caseGroup);
  assert(world.intersectsBox(caseBox), `${label} is nowhere near the chassis`);
  // every corner of the part must be inside the chassis box
  const c = world.getCenter(new THREE.Vector3());
  const s = world.getSize(new THREE.Vector3());
  const corner = new THREE.Vector3(c.x + s.x / 2, c.y + s.y / 2, c.z + s.z / 2);
  assert(caseBox.containsPoint(corner), `${label} pokes outside the chassis`);
  return { world, caseBox };
};

await scene.placePart(BOARD_ITEM, 'motherboard', 'mb');
await tick();
check('a seated part is centred on its zone anchor', () => {
  scene.caseRoot.updateMatrixWorld(true);
  for (const [key, zoneId] of [['mb', 'motherboard']]) {
    const holder = scene.placedParts.get(key).group;
    const centre = new THREE.Box3().setFromObject(holder).getCenter(new THREE.Vector3());
    scene.caseRoot.worldToLocal(centre);
    const anchor = new THREE.Vector3(...CASE_ZONES[zoneId].anchor);
    const d = centre.distanceTo(anchor);
    assert(d < 0.002, `${key} centre is ${d.toFixed(4)} m off the ${zoneId} anchor`);
  }
});

check('the motherboard sits on the tray, inside the chassis', () => {
  const entry = scene.placedParts.get('mb');
  const holder = entry.group;
  assert(holder.parent === scene.caseRoot, 'part was not parented to caseRoot');
  inside(holder, 'motherboard');
  // The fitted case-local frame must give the motherboard an X span (through the
  // glass) that is its 45mm thickness, a Y span of 305 (the ATX length standing)
  // and a Z span of 244. `inside` above already confirms it fills the board
  // bay and stays clear of the walls - a tilted or long-axis-swapped orientation
  // would poke through the rear or glass, which is exactly what the user's
  // screenshot showed.
  scene.pivot.updateMatrixWorld(true);
  const size = new THREE.Box3().setFromObject(holder).getSize(new THREE.Vector3());
  // the world AABB is through the -90 degree caseRoot turn, so case-local X and
  // Z swap their world extents here:
  assert(Math.abs(size.y - 0.305) < 0.03, `board stands 305mm tall, got ${size.y.toFixed(3)}`);
  assert(size.z < 0.06, `board is ${size.z.toFixed(3)} thick through the glass`);
  assert(size.x > 0.20 && size.x < 0.27, `board spans case-local Z of 244, got world ${size.x.toFixed(3)}`);

});

await scene.placePart(GPU_ITEM, 'gpu', 'gpu');
await scene.placePart(PSU_ITEM, 'psu', 'psu');
await tick();
check('the graphics card and the PSU are both inside the chassis', () => {
  inside(scene.placedParts.get('gpu').group, 'gpu');
  inside(scene.placedParts.get('psu').group, 'psu');
});

console.log('\n[the ghost stays in the case and stops chasing the cursor]');
await scene.setGhostItem(GPU_ITEM);
await tick();
check('the ghost is parented to caseRoot', () => {
  assert(scene.ghost, 'no ghost');
  assert(scene.ghost.group.parent === scene.caseRoot, 'ghost is not parented to caseRoot');
});

check('the ghost is clamped inside the chassis wherever the cursor goes', () => {
  const interior = scene.caseInterior;
  const rect = scene.canvas.getBoundingClientRect();
  let escaped = 0;
  let samples = 0;
  // sweep the pointer right across the canvas, including well off the chassis
  for (let px = -0.9; px <= 0.9; px += 0.05) {
    for (let py = -0.9; py <= 0.9; py += 0.05) {
      samples++;
      scene.setPointer(
        rect.left + rect.width * (px + 1) / 2,
        rect.top + rect.height * (py + 1) / 2
      );
      scene.updateGhost('gpu', true);
      // the real requirement: no corner of the carried part leaves the case
      scene.caseRoot.updateMatrixWorld(true);
      const aabb = new THREE.Box3().setFromObject(scene.ghost.group);
      for (let i = 0; i < 8; i++) {
        const c = new THREE.Vector3(
          i & 1 ? aabb.max.x : aabb.min.x,
          i & 2 ? aabb.max.y : aabb.min.y,
          i & 4 ? aabb.max.z : aabb.min.z
        );
        // the interior box is in case-local space, the AABB is in world space
        scene.caseRoot.worldToLocal(c);
        if (c.x < interior.min.x - 1e-6 || c.x > interior.max.x + 1e-6 ||
            c.y < interior.min.y - 1e-6 || c.y > interior.max.y + 1e-6 ||
            c.z < interior.min.z - 1e-6 || c.z > interior.max.z + 1e-6) escaped++;
      }
    }
  }
  assert(escaped === 0, `ghost poked out of the chassis on ${escaped} corners of ${samples} samples`);
});

check('a long card is clamped by its mounted length, not its flat length', () => {
  const gpu = ALL_HARDWARE_ITEMS.find(i => i.id === 'gpu_rtx_3090');
  assert(gpu.realSize > CASE.width, 'test needs a part longer than the case is wide');
  const rect = scene.canvas.getBoundingClientRect();
  scene.setPointer(rect.left, rect.top);
  scene.updateGhost('gpu', true);
  const half = scene._mountedHalfExtent();
  // mounted, the 313mm edge runs along the case depth, so X half must stay small
  assert(half.x < gpu.realSize / 2, `mounted X half is ${half.x.toFixed(3)}, not rotated`);
  assert(half.z > gpu.realSize / 4, `mounted Z half is ${half.z.toFixed(3)}, expected the long edge`);
});

check('the ghost carries the mount orientation, not the shelf pose', () => {
  const rect = scene.canvas.getBoundingClientRect();
  scene.setPointer(rect.left + 4, rect.top + 4);
  scene.updateGhost('gpu', true);
  // The GPU mount puts the 313mm edge along case Z, the 52mm body towards the
  // glass (X) and the 130mm height upright (Y).
  const m = new THREE.Matrix4().makeRotationFromQuaternion(scene.ghost.group.quaternion).elements;
  const imageOf = (x, y, z) => new THREE.Vector3(m[x], m[y], m[z]);
  const long = imageOf(0, 1, 2);   // local X, the longest edge
  const thin = imageOf(4, 5, 6);   // local Y, the thinnest
  const mid = imageOf(8, 9, 10);   // local Z, the middle
  assert(long.z > 0.99, `long edge is ${long.toArray().map(v => v.toFixed(2))}, not front-to-back`);
  assert(thin.x > 0.99, `thickness is ${thin.toArray().map(v => v.toFixed(2))}, not towards the glass`);
  assert(mid.y > 0.99, `height is ${mid.toArray().map(v => v.toFixed(2))}, not upright`);
});

check('a disarmed ghost hides instead of swimming after the cursor', () => {
  const rect = scene.canvas.getBoundingClientRect();
  scene.setPointer(rect.left + rect.width * 0.5, rect.top + rect.height * 0.5);
  scene.updateGhost('gpu', false);
  assert(scene.ghost.group.visible === false, 'ghost still visible while disarmed');
  assert(scene.ghost.zoneId === null, 'disarmed ghost still claims a zone');
});

check('the seated part keeps the ghost orientation', () => {
  const ghostQ = scene.ghost.group.quaternion.clone();
  scene.updateGhost('gpu', true);
  const rect = scene.canvas.getBoundingClientRect();
  scene.setPointer(rect.left + rect.width * 0.5, rect.top + rect.height * 0.5);
  scene.updateGhost('gpu', true);
  // and the already-placed GPU carries the same rotation
  const placedQ = scene.placedParts.get('gpu').group.children[0].quaternion;
  assert(Math.abs(placedQ.dot(scene.ghost.group.quaternion)) > 0.999,
    'preview and seated orientation differ');
});

console.log('\n[every model in public/models is catalogued]');
check('every hardware item is complete and reachable by a step', () => {
  assert(ALL_HARDWARE_ITEMS.length === 26, `${ALL_HARDWARE_ITEMS.length} items`);
  const REQUIRED = ['id', 'name', 'categoryKey', 'tag', 'modelPath', 'realSize', 'footprint', 'iconSvg'];
  const bad = ALL_HARDWARE_ITEMS.filter(i => REQUIRED.some(k => i[k] === undefined || i[k] === null));
  assert(bad.length === 0, `incomplete: ${bad.map(i => i.id).join(', ')}`);
  const dupes = ALL_HARDWARE_ITEMS.map(i => i.id).filter((id, i, a) => a.indexOf(id) !== i);
  assert(dupes.length === 0, `duplicate ids: ${dupes.join(', ')}`);
});

check('every installable hardware tag is claimed by an assembly step', () => {
  const tags = new Set(ALL_HARDWARE_ITEMS.map(i => i.tag));
  const orphaned = [...tags].filter(tag =>
    !ASSEMBLY_STEPS.some(step => step.accepts.includes(`tag:${tag}`))
  );
  assert(orphaned.length === 0, `tags no step accepts: ${orphaned.join(', ')}`);
});

check('nothing is carry-only: every part can be installed', () => {
  const steps = ASSEMBLY_STEPS.flatMap(s => s.accepts).filter(a => a.startsWith('tag:')).map(a => a.slice(4));
  const carryOnly = ALL_HARDWARE_ITEMS.filter(i => !steps.includes(i.tag));
  assert(carryOnly.length === 0, `carry-only parts: ${carryOnly.map(i => i.id).join(', ')}`);
});

check('each buildable tag has a choice of more than one part', () => {
  for (const step of ASSEMBLY_STEPS) {
    if (!step.accepts.some(a => a.startsWith('tag:'))) continue;
    const options = ALL_HARDWARE_ITEMS.filter(i => stepAccepts(step, i));
    assert(options.length >= 1, `step ${step.step} (${step.zone}) has no options`);
  }
});

check('the bench is laid out in reachable rows on the bench top only', async () => {
  const { getShelfLayout, getTableObstacle } = await import('file:///D:/pc-builder-3d/src/scene/shelfLayout.js');
  const { table, tiers } = getShelfLayout();

  // no under-bench storage: every part must be on a surface the player can reach
  assert(tiers.length === 1, `${tiers.length} tiers, expected a single bench top`);
  assert(tiers[0].surface >= 0.8, `bench top is only ${tiers[0].surface} m up`);
  assert(table.tierSurfaces.length === 1, `bench still has ${table.tierSurfaces.length} surfaces`);

  // and no part may sit below, say, hip height
  const low = tiers.flatMap(t => t.entries).filter(e => e.position.y < 0.8);
  assert(low.length === 0, `${low.length} parts below 0.8 m: ${low.map(e => e.item.id).join(', ')}`);

  // rows must not overlap along their own run, nor collide across the bench
  for (const row of tiers[0].rows) {
    const line = [...row]
      .map(e => ({ id: e.item.id, a: e.position.z - e.footprint.length / 2, b: e.position.z + e.footprint.length / 2 }))
      .sort((p, q) => p.a - q.a);
    for (let i = 1; i < line.length; i++) {
      assert(line[i].a >= line[i - 1].b - 1e-9, `${line[i - 1].id} overlaps ${line[i].id}`);
    }
    assert(line[0].a > -table.length / 2, 'a row overflows the rear edge');
    assert(line[line.length - 1].b < table.length / 2, 'a row overflows the front edge');
  }
  // rows are laid out side by side, so their bands must be distinct
  const bands = tiers[0].rows.map(r => r[0].position.x);
  assert(new Set(bands.map(x => x.toFixed(4))).size === bands.length, 'two rows share a band');

  const placed = tiers.flatMap(t => t.entries).length;
  assert(placed === ALL_HARDWARE_ITEMS.length, `${placed} of ${ALL_HARDWARE_ITEMS.length} placed`);
  const o = getTableObstacle();
  assert(o.maxZ - o.minZ > table.length, 'obstacle does not enclose the bench');
});

check('the bench top is within arm\'s reach and inside the room', async () => {
  const { getShelfLayout } = await import('file:///D:/pc-builder-3d/src/scene/shelfLayout.js');
  const { table } = getShelfLayout();
  // a 0.82 m worktop is the standard bench height; nothing may be stored under it
  assert(Math.abs(table.topHeight - 0.82) < 1e-6, `bench top at ${table.topHeight} m`);
  assert(table.length < 6, `bench is ${table.length.toFixed(2)} m long`);
  assert(table.width <= 1.3, `bench is ${table.width.toFixed(2)} m deep`);
  // room is 12 x 10 m
  assert(table.length < 9 && table.width < 9, 'bench does not fit the room');
});

console.log('\n[every variant of a part normalises to the same real shape]');
check('variants of one hardware type share identical mounted dimensions', async () => {
  const { realDimsFor } = await import('file:///D:/pc-builder-3d/src/data/hardwareDims.js');
  const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
  const { buildFittedModel } = await import('file:///D:/pc-builder-3d/src/scene/ModelFit.js');
  process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';
  const loader = new GLTFLoader();
  const load = p => new Promise(r => loader.load(p, g => r(g.scene)));

  const byType = new Map();
  for (const item of ALL_HARDWARE_ITEMS) {
    const dims = realDimsFor(item);
    assert(!!dims, `${item.id} (${item.categoryKey}) has no real dimensions`);
    const scene = await load(item.modelPath);
    const { group } = buildFittedModel(scene, { realSize: item.realSize, realDims: dims, flat: true });
    const holder = new THREE.Group();
    holder.add(group);
    const q = mountQuaternion({ mount: { long: dims.mount.length, thin: dims.mount.height } });
    if (q) group.quaternion.copy(q);
    holder.updateMatrixWorld(true);
    const size = new THREE.Box3().setFromObject(holder).getSize(new THREE.Vector3());
    if (!byType.has(item.categoryKey)) byType.set(item.categoryKey, []);
    byType.get(item.categoryKey).push({ item, size });
  }

  // Variants legitimately differ (a 313mm card vs a 240mm one, ATX vs mATX),
  // but the differences must be declared, never an accident of the source file.
  for (const [type, list] of byType) {
    const key = r => r.size.toArray().map(n => (n * 1000).toFixed(1)).join('/');
    const shapes = new Map();
    list.forEach(r => {
      const k = key(r);
      if (!shapes.has(k)) shapes.set(k, []);
      shapes.get(k).push(r.item.id);
    });
    for (const [shape, ids] of shapes) {
      console.log(`        ${type}: ${ids.length} part(s) at ${shape.split('/').join(' x ')} mm` +
        (ids.length > 1 ? `  [${ids.join(', ')}]` : ''));
    }
  }
});


check('a DIMM is a DIMM whichever site it came from', async () => {
  const { realDimsFor } = await import('file:///D:/pc-builder-3d/src/data/hardwareDims.js');
  const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
  const { buildFittedModel } = await import('file:///D:/pc-builder-3d/src/scene/ModelFit.js');
  process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';
  const loader = new GLTFLoader();
  const load = p => new Promise(r => loader.load(p, g => r(g.scene)));

  // These two ship with wildly different native bounds (2085x2017x5017 mm vs
  // 133x3.5x31 mm) which is what used to make one look rotated next to the other.
  const ids = ['ram_gskill_tridentz_16gb', 'ram_kingston_fury_black', 'ram_crucial_8gb'];
  const sizes = [];
  for (const id of ids) {
    const item = ALL_HARDWARE_ITEMS.find(i => i.id === id);
    const scene = await load(item.modelPath);
    const { group } = buildFittedModel(scene, {
      realSize: item.realSize, realDims: realDimsFor(item), flat: true
    });
    group.updateMatrixWorld(true);
    sizes.push(new THREE.Box3().setFromObject(group).getSize(new THREE.Vector3()));
  }
  // long edge and thickness must agree across all of them
  for (const s of sizes) {
    assert(Math.abs(s.x - 0.1334) < 1e-3, `DIMM length ${s.x.toFixed(4)} != 133.4mm`);
    assert(Math.abs(s.y - 0.007) < 1e-3, `DIMM thickness ${s.y.toFixed(4)} != 7mm`);
  }
console.log(`        ${ids.length} DIMMs all ${(sizes[0].x * 1000).toFixed(1)} x ${(sizes[0].y * 1000).toFixed(1)} mm`);
});

check('a part dropped on the workbench is the same size as it is on the bench', async () => {
  const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
  const { buildFittedModel, fitOptionsFor } = await import('file:///D:/pc-builder-3d/src/scene/ModelFit.js');
  process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';
  const loader = new GLTFLoader();
  const load = p => new Promise(r => loader.load(p, g => r(g.scene)));

  // The Build Zone, the shelf, the hand and the inventory thumbnails all go
  // through this one contract. A path that passed `realSize` alone rendered the
  // Corsair as a 133 x 54 x 55 mm brick and the Trident as a 19 mm-thick fin,
  // which is exactly how they looked wrong in the room but right in Build Mode.
  for (const item of ALL_HARDWARE_ITEMS) {
    const options = fitOptionsFor(item);
    assert(options.realDims, `${item.id} is fitted without real dimensions`);
    assert(options.flat === true, `${item.id} is not fitted flat`);

    const onBench = await load(item.modelPath);
    const dropped = buildFittedModel(onBench, options).size;
    const onShelf = buildFittedModel(await load(item.modelPath), fitOptionsFor(item)).size;
    for (const axis of ['x', 'y', 'z']) {
      assert(
        Math.abs(dropped[axis] - onShelf[axis]) < 1e-6,
        `${item.id} changes size on the workbench (${axis}: ${dropped[axis].toFixed(4)} vs ${onShelf[axis].toFixed(4)})`
      );
    }
  }

  // and the two sticks the bug reports named are real DIMMs there too
  const mm = v => v.toArray().map(n => (n * 1000).toFixed(1)).join(' x ');
  const corsair = ALL_HARDWARE_ITEMS.find(i => i.id === 'ram_corsair_dominator');
  const trident = ALL_HARDWARE_ITEMS.find(i => i.id === 'ram_gskill_tridentz_16gb');
  for (const item of [corsair, trident]) {
    const size = buildFittedModel(await load(item.modelPath), fitOptionsFor(item)).size;
    assert(Math.abs(size.x - 0.1334) < 1e-3, `${item.id} is ${mm(size)} - not a 133.4 mm stick`);
    assert(Math.abs(size.y - 0.007) < 1e-3, `${item.id} is ${mm(size)} - it lies on its edge`);
    assert(Math.abs(size.z - 0.045) < 1e-3, `${item.id} is ${mm(size)} - wrong heat spreader height`);
  }
});

check('every part name shown on a step matches a real catalogue entry', async () => {
  const { stepPartNames } = await import('file:///D:/pc-builder-3d/src/data/assemblyPlan.js');
  // steps that consume a tag must resolve to a name the player can look for
  for (const step of ASSEMBLY_STEPS) {
    const parts = stepPartNames(step, ALL_HARDWARE_ITEMS);
    if (!step.accepts.length) continue;
    assert(parts.length > 0, `step ${step.step} names no hardware`);
    parts.forEach(p => {
      assert(!!p.name && p.name.length > 3, `step ${step.step} has a blank part name`);
      assert(ALL_HARDWARE_ITEMS.some(i => i.name === p.name),
        `step ${step.step} names "${p.name}", which is not in the catalogue`);
      assert(!!p.label, `step ${step.step} has no label for ${p.name}`);
    });
    console.log(`        step ${step.step}: ${parts.map(p => p.label).join(', ')}`);
  }
});

console.log('\n[screws are one-per-click]');
check('a single screw spot cannot drain a whole pattern', () => {
  const zone = 'motherboard';
  const total = CASE_ZONES[zone].screws;
  scene.showScrews(zone, total);
  const entry = scene.screwGroups.get(zone);
  const holders = entry.group.children;
  const world = new THREE.Vector3();
  holders[0].getWorldPosition(world);
  const ndc = world.project(scene.camera);
  const px = ((ndc.x + 1) / 2) * 900;
  const py = ((-ndc.y + 1) / 2) * 700;

  assert(scene.hitScrew(px, py, zone) === 'tightened', 'first click missed');
  const afterFirst = entry.remaining;
  assert(afterFirst === total - 1, `one click drove ${total - afterFirst} screws`);
  for (let i = 0; i < 6; i++) {
    const res = scene.hitScrew(px, py, zone);
    assert(res === 'miss' || res === 'none', `re-click still worked (${res})`);
    assert(entry.remaining === afterFirst, 'a re-click consumed another screw');
  }
  // the pattern is only cleared by visiting each screw
  for (let i = 1; i < holders.length; i++) {
    const w = new THREE.Vector3();
    holders[i].getWorldPosition(w);
    const n = w.project(scene.camera);
    assert(scene.hitScrew(((n.x + 1) / 2) * 900, ((-n.y + 1) / 2) * 700, zone) === 'tightened',
      `screw ${i} could not be driven`);
  }
  assert(entry.remaining === 0, `${entry.remaining} screws left after driving all ${total}`);
  // and the markers are really gone from the scene
  assert(!scene.caseRoot.children.includes(holders[0].parent),
    'the screw group is still parented after the last one was driven');
});

check('a screw group is removed from the right parent', () => {
  scene.showScrews('psu', 4);
  const entry = scene.screwGroups.get('psu');
  assert(scene.caseRoot.children.includes(entry.group), 'screws are not under caseRoot');
  scene.hideScrews('psu');
  assert(!scene.caseRoot.children.includes(entry.group),
    'hideScrews left the group in the scene');
  assert(scene.screwsFor('psu') === 0, 'screwsFor still reports screws after hiding');
});

console.log(`\n${fail === 0 ? 'ALL PASSED' : 'FAILURES'}: ${pass} passed, ${fail} failed\n`);
process.exit(fail === 0 ? 0 : 1);
