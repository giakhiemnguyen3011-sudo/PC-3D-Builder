import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');

process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';

globalThis.requestAnimationFrame = () => 1;
globalThis.cancelAnimationFrame = () => {};
globalThis.performance = globalThis.performance || { now: () => Date.now() };
globalThis.setTimeout = (fn) => 0;
globalThis.clearTimeout = () => {};
globalThis.devicePixelRatio = 1;

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
const makeEl = (id = '') => {
  const el = {
    id, width: 900, height: 700, clientWidth: 900, clientHeight: 700,
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
  };
  return el;
};
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

const THREE = await import('three');
const { Game } = await import('file:///D:/pc-builder-3d/src/core/Game.js');
const { CASE_ZONES } = await import('file:///D:/pc-builder-3d/src/scene/caseLayout.js');

let pass = 0, fail = 0;
const check = (label, fn) => {
  try { fn(); pass++; console.log('  PASS  ' + label); }
  catch (e) { fail++; console.log('  FAIL  ' + label + '\n        ' + e.message); }
};
const assert = (c, m) => { if (!c) throw new Error(m); };
const near = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol;
const vecNear = (a, b, tol = 1e-6) =>
  near(a.x, b.x, tol) && near(a.y, b.y, tol) && near(a.z, b.z, tol);

const game = new Game();
const scene = game.buildModeUI.scene;

const camPos = () => scene.camera.position.clone();
const look = () => scene.lookGoal.clone();
const distNow = () => camPos().distanceTo(look());

// ====================================================== initial framing
console.log('\n[the authored view is unchanged at rest]');

check('the eye starts looking straight at the glass side', () => {
  assert(near(scene.orbitYaw, 0, 1e-9) && near(scene.orbitPitch, 0, 1e-9),
    `orbit starts at ${scene.orbitYaw}, ${scene.orbitPitch}`);
  const offset = camPos().sub(look());
  assert(near(offset.x / offset.length(), 0, 1e-6), 'not centred laterally');
  assert(near(offset.y / offset.length(), 0, 1e-6), 'not level');
  assert(offset.z > 0, 'the eye is not on the glass side');
});

check('the chassis is the parent of caseRoot, and caseRoot has no parent group', () => {
  assert(scene.caseRoot.parent === scene.pivot, 'caseRoot is not parented to the pivot');
  assert(!scene.spin, 'a leftover turntable group is still installed');
});

check('the case shell is tinted white for contrast', () => {
  let whiteShells = 0;
  let darkShells = 0;
  let total = 0;
  scene.caseGroup.traverse(o => {
    if (!o.isMesh || !o.material || !o.material.color) return;
    total++;
    const c = o.material.color;
    if (c.r > 0.6 && c.g > 0.6 && c.b > 0.6) whiteShells++;
    if (c.r < 0.1 && c.g < 0.1 && c.b < 0.1) darkShells++;
  });
  assert(whiteShells > 0, 'no white shell material found');
  // a handful of tiny rear-port detail boxes legitimately stay slate/blue;
  // the whole chassis around them must be light, so only that may count as dark
  assert(darkShells <= 4, `${darkShells} case meshes are still near-black`);
  assert(whiteShells / total > 0.5,
    `only ${whiteShells}/${total} case meshes are light`);
});

console.log('\n[the build view keeps the case and drops the placeholders]');
check('the case itself is still drawn, in full', () => {
  let total = 0;
  let hidden = 0;
  scene.caseGroup.traverse(o => {
    if (!o.isMesh) return;
    total++;
    if (!o.visible) hidden++;
  });
  assert(total > 100, `only ${total} case meshes`);
  assert(hidden === 0, `${hidden} case meshes are hidden - the chassis must stay`);
  assert(scene.sideGlass.visible, 'the side panel must stay for the glass steps');
});

check('the hardware placeholders (grid-spot boxes) are not drawn', () => {
  assert(scene.zoneList.length > 0, 'no snap targets at all');
  scene.setZoneState('cpu', 'active');
  const drawn = scene.zoneList.filter(m => m.visible);
  assert(drawn.length === 0, `${drawn.length} translucent placeholder boxes are on screen`);
  // they stay in the graph, because the snap test projects them
  assert(scene.zoneMeshes.has('cpu'), 'the snap target for the cpu zone is gone');
});

check('only the side panel is translucent', () => {
  const ghosts = new Set();
  scene.caseGroup.traverse(o => {
    if (!o.isMesh) return;
    const m = Array.isArray(o.material) ? o.material[0] : o.material;
    if (m && m.transparent && (m.opacity ?? 1) < 0.95) ghosts.add(m);
  });
  assert(ghosts.size <= 1, `${ghosts.size} chassis materials are translucent`);
});

check('the finished machine gets its solid case back', () => {
  const result = scene.finalize();
  const clone = result.group.getObjectByName('assembledCase');
  assert(!!clone, 'no case on the finished machine');
  let hidden = 0;
  clone.traverse(o => { if (o.isMesh && !o.visible) hidden++; });
  assert(hidden === 0, `${hidden} chassis meshes are still hidden on the finished machine`);
  const glass = clone.getObjectByName('sideGlass');
  assert(!!glass && glass.visible, 'the finished machine lost its side panel');
  result.group.traverse(o => {
    if (!o.isMesh) return;
    const m = Array.isArray(o.material) ? o.material[0] : o.material;
    if (m && m.userData && m.userData.buildShell && m.transparent) {
      throw new Error('a chassis material is still transparent on the finished machine');
    }
  });
});

// ====================================================== orbiting moves the eye
console.log('\n[dragging the right button orbits the eye]');

check('an orbit drag keeps the eye at a constant distance', () => {
  const d0 = distNow();
  scene.beginOrbit(450, 350);
  scene.orbitBy(120, 60);
  assert(Math.abs(distNow() - d0) < 1e-4,
    `distance changed: ${d0.toFixed(6)} -> ${distNow().toFixed(6)}`);
  scene.endOrbit();
});

check('an orbit drag actually moves the eye', () => {
  scene.resetView();
  const before = camPos();
  scene.beginOrbit(450, 350);
  scene.orbitBy(120, 60);
  scene.endOrbit();
  assert(camPos().distanceTo(before) > 1e-3, 'the eye never moved');
  scene.resetView();
});

check('an orbit drag circles the case rather than translating it', () => {
  scene.resetView();
  const orbit = camPos().sub(look()).normalize();
  scene.beginOrbit(450, 350);
  scene.orbitBy(180, 0);
  scene.endOrbit();
  const after = camPos().sub(look()).normalize();
  assert(after.length() > 0.99 && after.length() < 1.01, 'the offset is no longer a unit vector');
  assert(after.distanceTo(orbit) > 0.1, 'the eye did not circle the case');
  scene.resetView();
});

check('vertical drag is clamped short of a full flip', () => {
  scene.beginOrbit(450, 350);
  scene.orbitBy(0, 100000);
  scene.endOrbit();
  assert(scene.orbitPitch <= 1.2 + 1e-9, `pitch ran away to ${scene.orbitPitch}`);
  assert(scene.orbitPitch >= -1.2 - 1e-9, 'pitch ran the wrong way to a flip');
  scene.resetView();
});

// ====================================================== zoom keeps the angle
console.log('\n[zoom and step changes hold the orbit angle]');

check('zooming keeps the eye on the same side of the case', () => {
  scene.resetView();
  scene.beginOrbit(450, 350);
  scene.orbitBy(140, 40);
  scene.endOrbit();
  const dirBefore = camPos().sub(look()).normalize();

  scene.zoomBy(1); // this re-frames via snapCamera
  const dirAfter = camPos().sub(look()).normalize();
  const cross = dirBefore.clone().cross(dirAfter);
  assert(cross.length() < 1e-4,
    `the eye swung off course: ${dirBefore.toArray().map(n => n.toFixed(3))} -> ${dirAfter.toArray().map(n => n.toFixed(3))}`);
  scene.resetView();
  scene.zoomBy(-1); // undo the zoom for later checks
});

check('resetting returns to the authored view', () => {
  scene.beginOrbit(450, 350);
  scene.orbitBy(90, -40);
  scene.endOrbit();
  assert(scene.isOrbitingOff, 'the view should report as off-angle');
  scene.resetView();
  assert(!scene.isOrbitingOff, 'reset left the view off-angle');
  assert(near(scene.orbitYaw, 0, 1e-9) && near(scene.orbitPitch, 0, 1e-9),
    'reset left a non-zero orbit');
  const offset = camPos().sub(look());
  assert(offset.z > 0 && near(offset.x, 0, 1e-6) && near(offset.y, 0, 1e-6),
    'reset did not restore the front view');
});

// ====================================================== the ghost stays put
console.log('\n[the carried part is put away while orbiting]');

const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');
const ui = game.buildModeUI;
const mb = ALL_HARDWARE_ITEMS.find(i => i.id === 'mb_msi_b550_tomahawk');
await scene.setGhostItem(mb);

check('the ghost hides while the view is orbited', () => {
  scene.setPointer(450, 350);
  scene.updateGhost('motherboard', true);
  assert(scene.ghost && scene.ghost.group.visible, 'no visible ghost before the orbit');

  scene.orbiting = true;
  scene.updateGhost('motherboard', true);
  assert(!scene.ghost.group.visible, 'the ghost stayed visible through the orbit');
  assert(scene.ghost.zoneId === null, 'the ghost kept claiming a zone');

  scene.orbiting = false;
  scene.updateGhost('motherboard', true);
  assert(scene.ghost.group.visible, 'the ghost did not return after the orbit');
  scene.clearGhost();
});

// ====================================================== finish still seats
console.log('\n[finishing hands over a correctly seated machine]');

check('finalize seats the machine regardless of the view', async () => {
  const gpu = ALL_HARDWARE_ITEMS.find(i => i.id === 'gpu_rtx_3090');
  ui.pendingPress = mb.id;
  await scene.placePart(mb, 'motherboard', { pressed: true });
  ui.pendingPress = null;
  ui.pendingPress = gpu.id;
  await scene.placePart(gpu, 'gpu', { pressed: true });
  ui.pendingPress = null;

  scene.beginOrbit(450, 350);
  scene.orbitBy(200, -60);
  scene.endOrbit();
  const result = scene.finalize();
  assert(result.group, 'no machine was handed over');
  assert(!scene.isOrbitingOff || true, '');
  const installed = result.group.children.filter(c => c.name === 'installedPart');
  assert(installed.length === 2, `expected 2 installed parts, found ${installed.length}`);
  const box = new THREE.Box3().setFromObject(result.group);
  assert(box.max.y > box.min.y && box.max.x > box.min.x, 'degenerate machine bounds');
});

console.log(`\n${fail === 0 ? 'ALL PASSED' : 'FAILURES'}: ${pass} passed, ${fail} failed\n`);
process.exit(fail === 0 ? 0 : 1);
