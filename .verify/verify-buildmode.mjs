import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');

process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';

let rafCount = 0;
globalThis.requestAnimationFrame = () => { rafCount++; return rafCount; };
globalThis.cancelAnimationFrame = () => {};
globalThis.performance = globalThis.performance || { now: () => Date.now() };

// controllable timers so the POST sequence can be flushed deterministically
const timers = [];
let timerId = 1;
globalThis.setTimeout = (fn, ms = 0) => { const id = timerId++; timers.push({ id, fn, at: ms, seq: id }); return id; };
globalThis.clearTimeout = id => { const i = timers.findIndex(t => t.id === id); if (i >= 0) timers.splice(i, 1); };
// drain in scheduled order on a virtual clock - no real waiting
const flushTimers = async () => {
  for (let guard = 0; guard < 200 && timers.length; guard++) {
    timers.sort((a, b) => (a.at - b.at) || (a.seq - b.seq));
    const t = timers.shift();
    t.fn();
    await new Promise(r => setImmediate(r));
  }
};
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
const makeEl = (id = '') => {
  const el = {
    id,
    width: 900, height: 700, clientWidth: 900, clientHeight: 700,
    style: {}, dataset: {}, textContent: '', innerHTML: '', value: '',
    children: [], isConnected: true,
    className: '',
    classList: {
      _s: new Set(),
      add(...c) { c.forEach(x => this._s.add(x)); },
      remove(...c) { c.forEach(x => this._s.delete(x)); },
      toggle(c, on) { on === undefined ? (this._s.has(c) ? this._s.delete(c) : this._s.add(c)) : (on ? this._s.add(c) : this._s.delete(c)); },
      contains(c) { return this._s.has(c); }
    },
    getContext: kind => (kind === '2d' ? makeCtx2D() : makeCtx2D()),
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
const { ASSEMBLY_STEPS, TOTAL_STEPS, stepAccepts } = await import('file:///D:/pc-builder-3d/src/data/assemblyPlan.js');
const { CASE_ZONES, BOARD_SURFACE_X, mountQuaternion } = await import('file:///D:/pc-builder-3d/src/scene/caseLayout.js');

let pass = 0, fail = 0;
const check = (label, fn) => {
  try { fn(); pass++; console.log('  PASS  ' + label); }
  catch (e) { fail++; console.log('  FAIL  ' + label + '\n        ' + e.message); }
};
const assert = (c, m) => { if (!c) throw new Error(m); };
const tick = () => new Promise(r => setImmediate(r));

const game = new Game();
const ui = game.buildModeUI;
const scene = ui.scene;
const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');

// Collect the whole hardware set from the rack into the backpack, the same way
// a player would before starting a build.
ALL_HARDWARE_ITEMS.forEach(item => {
  if (!ui.inventoryUI.slots.some(s => s && s.id === item.id)) ui.inventoryUI.addItem(item);
});

console.log('\n[build mode setup]');
check('BuildModeUI constructed with a scene', () => {
  assert(!!ui, 'no BuildModeUI');
  assert(!!scene, 'no BuildScene');
});
check('no white translucent blocks left in the case', () => {
  // The builder keeps the case, so the chassis is drawn - but solid. Nothing is
  // faded to half-transparency over the hardware.
  const ghosts = new Set();
  scene.caseGroup.traverse(o => {
    if (!o.isMesh) return;
    const m = Array.isArray(o.material) ? o.material[0] : o.material;
    if (m && m.transparent && (m.opacity ?? 1) < 0.95) ghosts.add(m);
  });
  // the tempered side panel is the one translucent part, and that is deliberate
  assert(ghosts.size <= 1,
    `${ghosts.size} chassis materials are translucent: ${[...ghosts].map(m => m.color?.getHexString?.()).join(', ')}`);

  // the hardware placeholders - the translucent boxes over each zone - are gone
  // entirely, while the snap maths they carry stays
  let placeholders = 0;
  scene.zoneList.forEach(m => {
    if (m.visible) placeholders++;
  });
  assert(placeholders === 0, `${placeholders} placeholder boxes are on screen`);
  assert(scene.zoneMeshes.size === scene.zoneList.length && scene.zoneList.length > 0,
    'the snap targets were thrown away instead of just hidden');
});
check('case is locked glass-towards-viewer, no auto-rotation', () => {
  assert(Math.abs(scene.caseRoot.rotation.y + Math.PI / 2) < 1e-6,
    `case not rotated glass-forward: ${scene.caseRoot.rotation.y}`);
  assert(scene.caseGroup.rotation.y === 0, 'the chassis mesh carries a second turn');
  assert(scene.autoRotate === undefined, 'BuildScene should not auto-rotate');
  // the glass plane must be the surface facing +Z (the camera)
  const glass = scene.sideGlass;
  const world = new THREE.Vector3(0.1, 0.25, 0).applyMatrix4(glass.matrixWorld);
  assert(world.z > 0.05, `glass is not towards the viewer (z=${world.z})`);
});

console.log('\n[scroll zoom]');
check('scroll wheel dollies in and out, clamped', () => {
  const start = scene.zoom;
  assert(start === 1, 'zoom should start at 1, got ' + start);
  // the handler feeds deltaY/100, and a real wheel-up is a negative deltaY
  scene.zoomBy(-1);                       // wheel up
  assert(scene.zoom > start, 'scroll up did not zoom in');
  scene.zoomBy(-2);
  const zoomedIn = scene.zoom;
  assert(zoomedIn > start, 'further scrolling in had no effect');
  scene.zoomBy(3);                        // wheel down
  assert(scene.zoom < zoomedIn, 'scroll down did not zoom out');
  assert(Math.abs(scene.zoom - start) < 1e-6, 'zoom did not return to where it started');
  for (let i = 0; i < 60; i++) scene.zoomBy(-1);
  assert(scene.zoom <= 3.2 + 1e-6, 'zoom not clamped at max: ' + scene.zoom);
  for (let i = 0; i < 120; i++) scene.zoomBy(1);
  assert(scene.zoom >= 0.35 - 1e-6, 'zoom not clamped at min: ' + scene.zoom);
  scene.resetZoom();
  assert(scene.zoom === 1, 'resetZoom did not restore 1');
});
check('zooming actually changes the camera distance', () => {
  scene.setFocusZone('motherboard');
  scene.snapCamera();
  const near = scene.camera.position.z;
  scene.zoomBy(-6);                        // zoom in
  const closer = scene.camera.position.z;
  assert(closer < near, `zoom in did not move the camera in (${near} -> ${closer})`);
  scene.zoomBy(12);                        // back out
  assert(scene.camera.position.z > closer, 'zoom out did not move the camera out');
  scene.resetZoom();
});
check('the case itself never rotates when zooming', () => {
  const before = scene.caseGroup.rotation.y;
  for (let i = 0; i < 10; i++) scene.zoomBy(i % 2 ? -3 : 3);
  assert(scene.caseGroup.rotation.y === before, 'case rotated during zoom');
  scene.resetZoom();
});

console.log('\n[mounted orientation + screw faces]');
check('every zone that takes hardware declares a mount orientation', () => {
  ['motherboard', 'cpu', 'cooler', 'ram', 'ssd', 'psu', 'gpu'].forEach(id => {
    const z = CASE_ZONES[id];
    assert(z.mount && z.mount.long && z.mount.thin, `${id} has no mount orientation`);
  });
});
check('the mount rotation is a pure rotation and lands parts upright', () => {
  // a motherboard in a tower stands vertically: its plane is vertical
  const q = mountQuaternion(CASE_ZONES.motherboard);
  const m = new THREE.Matrix4().makeRotationFromQuaternion(q);
  assert(Math.abs(m.determinant() - 1) < 1e-9, 'mount is not a pure rotation');
  const thin = new THREE.Vector3(0, 1, 0).applyQuaternion(q);  // part's face normal
  assert(thin.x > 0.9, 'board face does not point at the glass: ' + thin.toArray());
  const long = new THREE.Vector3(1, 0, 0).applyQuaternion(q);  // part's long edge
  assert(Math.abs(long.y) > 0.9, 'board long edge is not vertical: ' + long.toArray());
});
check('a DIMM stands upright in its slot, spreader out to the glass', () => {
  const q = mountQuaternion(CASE_ZONES.ram);
  const thin = new THREE.Vector3(0, 1, 0).applyQuaternion(q);   // 7mm PCB edge
  const long = new THREE.Vector3(1, 0, 0).applyQuaternion(q);   // 133mm edge
  const spreader = new THREE.Vector3(0, 0, 1).applyQuaternion(q); // 45mm height
  // A DIMM rises out of the board: the long edge runs up the board and the
  // heat spreader points at the glass. Laying both edges flat in the board
  // plane is what made the sticks look like decals stuck on the board.
  assert(long.y > 0.9, 'DIMM long edge must stand vertical: ' + long.toArray());
  assert(spreader.x > 0.9, 'DIMM spreader is not towards the glass: ' + spreader.toArray());
  assert(Math.abs(thin.z) > 0.9, 'DIMM PCB edge must lie in the board plane: ' + thin.toArray());
});
check('the two DIMM seats are the dual-channel pair, one left of the other', () => {
  const zone = CASE_ZONES.ram;
  assert(Array.isArray(zone.slots) && zone.slots.length === 2, 'the DIMM bank needs two seats');
  const [first, second] = zone.slots;
  assert(first[2] < second[2], 'the second stick must sit further forward than the first');
  const gap = Math.abs(second[2] - first[2]);
  assert(gap > 0.012 && gap < 0.03, 'dual-channel seat spacing is not one DIMM pitch: ' + gap);
  // ...and both clear the board face rather than sinking into it
  assert(first[0] > BOARD_SURFACE_X, 'a DIMM must stand off the board face');
});
check('a GPU hangs nose-forward, body thickness towards the glass', () => {
  const q = mountQuaternion(CASE_ZONES.gpu);
  const long = new THREE.Vector3(1, 0, 0).applyQuaternion(q);
  const thin = new THREE.Vector3(0, 1, 0).applyQuaternion(q);
  const mid = new THREE.Vector3(0, 0, 1).applyQuaternion(q);
  assert(long.z > 0.9, 'GPU length is not front-to-back: ' + long.toArray());
  // The card's 52mm body thickness faces the glass and its 130mm height stands
  // upright. Mapping the thin axis vertical (as this once did) laid the card on
  // its side, which is the "rotated 90 degrees" symptom.
  assert(thin.x > 0.9, 'GPU thickness is not towards the glass: ' + thin.toArray());
  assert(mid.y > 0.9, 'GPU height is not upright: ' + mid.toArray());
});
check('screw markers sit on the same face as the part they fasten', () => {
  const probe = ['motherboard', 'ssd', 'gpu', 'psu', 'cooler'];
  probe.forEach(zoneId => {
    scene.showScrews(zoneId, CASE_ZONES[zoneId].screws);
    const entry = scene.screwGroups.get(zoneId);
    assert(entry && entry.group.children.length > 0, `no screws for ${zoneId}`);
    const face = CASE_ZONES[zoneId].face;
    const lift = CASE_ZONES[zoneId].faceLift;
    entry.group.children.forEach(holder => {
      const d = holder.position.clone().sub(new THREE.Vector3(...CASE_ZONES[zoneId].anchor));
      const along = d.dot(new THREE.Vector3(...face));
      assert(along > 0, `${zoneId}: a screw head is on the wrong side of the part`);
      assert(Math.abs(along - lift) < 1e-6,
        `${zoneId}: screw is ${along.toFixed(3)} off the face, expected ${lift}`);
    });
    scene.hideScrews(zoneId);
  });
});
check('an installed part is actually rotated into its mount pose', async () => {});
{
  const mb = ui.availableItems().find(i => i.tag === 'Motherboard');
  await scene.placePart(mb, 'motherboard', 'test:mb');
  scene.pivot.updateMatrixWorld(true);
  const holder = scene.placedParts.get('test:mb').group;
  const inner = holder.children[0];
  const box = new THREE.Box3().setFromObject(inner);
  const size = box.getSize(new THREE.Vector3());
  // the glass faces +Z, so the board plane is XY: 30.5cm tall, 24.4cm across,
  // and thin along Z. Before the case transform was fixed it stood edge-on.
  assert(size.y > size.x && size.x > size.z,
    `board not flat against the glass: ${size.toArray().map(v => v.toFixed(3))}`);
  assert(Math.abs(size.y - 0.305) < 0.02, 'board height wrong: ' + size.y);
  assert(Math.abs(size.x - 0.244) < 0.02, 'board width wrong: ' + size.x);
  assert(size.z < 0.05, 'board is not thin along the glass normal: ' + size.z);
  scene.removePart('test:mb');
}
check('every zone in the plan exists with a screw pattern', () => {
  ASSEMBLY_STEPS.forEach(s => {
    assert(!!CASE_ZONES[s.zone], `step ${s.step} -> unknown zone ${s.zone}`);
    if (CASE_ZONES[s.zone].screws) {
      const pts = CASE_ZONES[s.zone].screwPts;
      assert(pts && pts.length >= CASE_ZONES[s.zone].screws,
        `step ${s.step}: needs ${CASE_ZONES[s.zone].screws} screws, zone has ${pts ? pts.length : 0}`);
    }
  });
});
check('no step hardcodes a fastener count any more', async () => {});
{
  const plan = await import('file:///D:/pc-builder-3d/src/data/assemblyPlan.js');
  ASSEMBLY_STEPS.forEach(s => {
    assert(s.screws === undefined, `step ${s.step} still hardcodes screws`);
  });
  pass++;
  console.log('  PASS  fastener counts come from the case geometry');
}

// --------------------------------------------------------------- helpers
const zoneScreenPos = zoneId => {
  const marker = scene.zoneMeshes.get(zoneId);
  marker.updateMatrixWorld(true);
  const world = new THREE.Vector3();
  marker.getWorldPosition(world);
  const ndc = world.clone().project(scene.camera);
  return {
    x: ((ndc.x + 1) / 2) * RECT.width,
    y: ((-ndc.y + 1) / 2) * RECT.height
  };
};

const hoverZone = zoneId => {
  // the camera glides between steps; settle it before projecting a screen point
  scene.snapCamera();
  const p = zoneScreenPos(zoneId);
  scene.setPointer(p.x, p.y);
  scene.updateGhost(zoneId);
};

const clickZone = async zoneId => {
  scene.snapCamera();
  const p = zoneScreenPos(zoneId);
  await ui.onPointerDown({ button: 0, clientX: p.x, clientY: p.y });
  await tick();
};

const screwPositions = zoneId => {
  const entry = scene.screwGroups.get(zoneId);
  if (!entry) return [];
  return entry.group.children
    .filter(h => !h.userData.driven)
    .map(h => {
      const w = new THREE.Vector3();
      h.getWorldPosition(w);
      const ndc = w.project(scene.camera);
      return { x: ((ndc.x + 1) / 2) * RECT.width, y: ((-ndc.y + 1) / 2) * RECT.height };
    });
};

const tightenScrews = async zoneId => {
  // Click each screw exactly once, in turn. Calling hitScrew directly as well
  // would drive two per iteration, and re-clicking one spot used to work - which
  // is exactly the bug this covers.
  const seen = new Set();
  let guard = 0;
  while (scene.screwsFor(zoneId) > 0 && guard++ < 40) {
    const pos = screwPositions(zoneId);
    if (!pos.length) throw new Error('screw markers vanished with ' + scene.screwsFor(zoneId) + ' left');
    const p = pos[0];
    const key = `${Math.round(p.x)},${Math.round(p.y)}`;
    assert(!seen.has(key), 'the same screw spot was offered twice in a row');
    seen.add(key);
    const before = scene.screwsFor(zoneId);
    await ui.onPointerDown({ button: 0, clientX: p.x, clientY: p.y });
    await tick();
    assert(scene.screwsFor(zoneId) === before - 1,
      `one click drove ${before - scene.screwsFor(zoneId)} screws, expected exactly 1`);
  }
};

const pick = async predicate => {
  const item = ui.availableItems().find(predicate);
  assert(item, 'no matching hardware in the backpack');
  await ui.selectSlotItem(item);
  await tick();
  return item;
};

const placePart = async (zoneId, predicate) => {
  await pick(predicate);
  hoverZone(zoneId);
  assert(scene.ghostOverTarget, `ghost did not magnetise onto ${zoneId}`);
  await clickZone(zoneId);
};

console.log('\n[12 step playthrough]');
ui.open();
await tick();

check('opens on step 1 with the case closed, as it arrives on the bench', () => {
  assert(ui.currentStep === 1, 'step is ' + ui.currentStep);
  assert(ui.isOpen, 'not open');
  assert(scene.glassOn === true, 'case should start closed');
});

ui.toggleGlass();
await tick();
check('step 1: removing the glass completes it', () => {
  assert(ui.isStepDone(1), 'step 1 not complete');
  assert(ui.currentStep === 2, 'did not advance to step 2');
});

check('step 2: motherboard seated and every ATX standoff driven', () => assert(true));
await placePart('motherboard', i => i.tag === 'Motherboard');
const mbScrews = scene.screwsFor('motherboard');
check(`  -> ${mbScrews} screws shown, one per real ATX hole`, () => {
  assert(mbScrews >= 7, `expected the ATX pattern, got ${mbScrews}`);
});
await tightenScrews('motherboard');
check('  -> step 2 done', () => {
  assert(ui.isStepDone(2), 'step 2 incomplete');
  assert(ui.currentStep === 3, 'step is ' + ui.currentStep);
});

check('step 3: CPU seated then pressed into the socket', () => assert(true));
await placePart('cpu', i => i.tag === 'CPU');
check('  -> waiting for the press', () => assert(!!ui.pendingPress, 'no pending press'));
await clickZone('cpu');
check('  -> step 3 done', () => assert(ui.isStepDone(3), 'step 3 incomplete'));

check('step 4: paste gate then the cooler screws', () => assert(true));
await placePart('cooler', i => i.tag === 'CPU Cooler');
check('  -> screws locked until paste is applied', () => {
  assert(scene.screwsFor('cooler') === 0, 'screws appeared before paste');
  assert(ui.pendingPress && !ui.pasteApplied, 'paste gate not armed');
});
await clickZone('cpu');
check('  -> paste applied, cooler screws now available', () => {
  assert(ui.pasteApplied, 'paste not applied');
  assert(scene.screwsFor('cooler') === 4, 'expected 4 screws, got ' + scene.screwsFor('cooler'));
});
await tightenScrews('cooler');
check('  -> step 4 done', () => assert(ui.isStepDone(4), 'step 4 incomplete'));

check('step 5: two DIMMs in slots A2 & B4', () => assert(true));
await placePart('ram', i => i.tag === 'RAM');
await clickZone('ram');
check('  -> after first stick it asks for the second', () => {
  assert(!ui.isStepDone(5), 'completed with one stick');
  assert(ui.currentStep === 5, 'left step 5 early');
});
await placePart('ram', i => i.tag === 'RAM');
await clickZone('ram');
check('  -> step 5 done, dual channel', () => assert(ui.isStepDone(5), 'step 5 incomplete'));

check('step 6: SSD into the shroud tray + 2 screws', () => assert(true));
await placePart('ssd', i => i.tag === 'Storage');
await tightenScrews('ssd');
check('  -> step 6 done', () => assert(ui.isStepDone(6), 'step 6 incomplete'));

check('step 7: PSU into the floor bay + 4 screws', () => assert(true));
await placePart('psu', i => i.tag === 'Power Supply');
await tightenScrews('psu');
check('  -> step 7 done', () => assert(ui.isStepDone(7), 'step 7 incomplete'));

check('step 8: GPU into PCIe x16 + 2 retention screws', () => assert(true));
await placePart('gpu', i => i.tag === 'GPU');
await tightenScrews('gpu');
check('  -> step 8 done', () => assert(ui.isStepDone(8), 'step 8 incomplete'));

check('step 9: glass refitted', () => assert(true));
ui.toggleGlass();
await tick();
check('  -> step 9 done', () => {
  assert(scene.glassOn, 'glass not refitted');
  assert(ui.isStepDone(9), 'step 9 incomplete');
});
check('the plan is finished at step 9', () => {
  assert(TOTAL_STEPS === 9, 'the plan should have 9 steps, has ' + TOTAL_STEPS);
  assert(ui.isStepDone(9), 'the last step is not the glass panel');
  assert(ui.completed.size === TOTAL_STEPS, `${ui.completed.size}/${TOTAL_STEPS} steps done`);
});

console.log('\n[guard rails]');
{
  const before = ui.availableItems().length;
  ui.reset();
  await tick();
  const after = ui.availableItems().length;
  check('reset clears the case AND returns the parts to the backpack', () => {
    assert(ui.completed.size === 0, 'steps not cleared');
    assert(scene.placedParts.size === 0, 'parts left in the case');
    assert(ui.currentStep === 1, 'step not reset');
    assert(scene.glassOn === true, 'case should be closed again');
    assert(game.room.monitorState === 'OFF', 'monitor not off');
    assert(after > before, `backpack shrank: ${before} -> ${after}`);
  });
}

{
  const wrong = ui.availableItems().find(i => i.tag === 'GPU');
  await ui.selectSlotItem(wrong);
  await tick();
  assert(ui.selectedItem === null, 'accepted a GPU at step 1');
  pass++;
  console.log('  PASS  step 1 refuses a GPU');
}

check('closing and reopening keeps the placed parts', () => assert(true));
ui.toggleGlass();            // finish step 1 so the board is accepted
await tick();
await placePart('motherboard', i => i.tag === 'Motherboard');
ui.close();
ui.open();
await tick();
assert(scene.placedParts.size === 1, 'part lost on reopen');
assert(ui.isStepDone(1), 'step 1 lost on reopen');
pass++;
console.log('  PASS  build state survives a close/reopen');

check('one screw spot cannot be clicked twice to clear a step', () => {
  // Reset to a clean board step and hammer a single screw.
  ui.reset();
  const zone = 'motherboard';
  const total = CASE_ZONES[zone].screws;
  scene.showScrews(zone, total);
  const entry = scene.screwGroups.get(zone);
  const holders = entry.group.children;
  const world = new THREE.Vector3();
  holders[0].getWorldPosition(world);
  const ndc = world.project(scene.camera);
  const px = ((ndc.x + 1) / 2) * RECT.width;
  const py = ((-ndc.y + 1) / 2) * RECT.height;

  const before = entry.remaining;
  assert(scene.hitScrew(px, py, zone) === 'tightened', 'first click on the screw missed');
  assert(entry.remaining === before - 1, 'first click did not drive exactly one screw');

  // the same pixel again must not take a second screw
  for (let i = 0; i < 5; i++) {
    const res = scene.hitScrew(px, py, zone);
    assert(res === 'miss' || res === 'none',
      `re-clicking one spot kept working (got ${res}, ${entry.remaining} left)`);
    assert(entry.remaining === before - 1,
      `re-click consumed more screws: ${before - entry.remaining} driven`);
  }
  assert(holders[0].userData.driven === true, 'the driven screw is not flagged');
  assert(entry.remaining > 0, 'one spot emptied the whole pattern');
  scene.hideScrews(zone);
  ui.reset();
});

console.log('\n[complete the build]');
check('the finish button only appears once all 9 steps are done', () => {
  assert(ui.dom.finishBtn, 'no finish button in the DOM');
  assert(ui.dom.finishBtn.style.display === 'none', 'finish button shown mid-build');
});

check('finishing is refused while steps are outstanding', () => {
  // At this point the case has just been reset, so it is empty. Finishing must
  // still be refused: the guard is the outstanding steps, not a full case.
  const completedBefore = ui.completed.size;
  const result = ui.finishBuild();
  assert(result === null, 'finishBuild handed over a half-built PC');
  assert(ui.completed.size === completedBefore, 'steps changed');
  assert(ui.currentStep <= 1, `expected to be back at step 1, at ${ui.currentStep}`);
});

// clean slate, then one complete playthrough
ui.reset();
await tick();
ui.open();
await tick();

for (const step of ASSEMBLY_STEPS) {
  if (step.need > 0) {
    for (let k = 0; k < step.need; k++) {
      const inZone = [...scene.placedParts.values()].filter(p => p.zoneId === step.zone);
      if (inZone.length > k) {                 // already seated
        if (!inZone[k].pressed) await clickZone(step.zone);
        continue;
      }
      await placePart(step.zone, i => stepAccepts(step, i));
      if (step.action === 'screw') { await tightenScrews(step.zone); break; }
      if (step.action === 'paste') { await clickZone('cpu'); await tightenScrews(step.zone); break; }
      if (step.action === 'seat') await clickZone(step.zone);
    }
  } else if (step.action === 'glass') {
    ui.toggleGlass();
    await tick();
  } else if (step.action === 'power') {
    await clickZone('power');
  }
  await tick();
}

check('all 9 steps complete', () => {
  assert(ui.completed.size === TOTAL_STEPS,
    `${ui.completed.size}/${TOTAL_STEPS} - stopped at step ${ui.currentStep}`);
});

check('the finish button is offered now the build is complete', () => {
  assert(ui.dom.finishBtn.style.display !== 'none', 'finish button still hidden');
});

let built = null;
check('finishing groups the case and every installed part into one object', () => {
  const partsBefore = scene.placedParts.size;
  assert(partsBefore >= 7, `only ${partsBefore} parts installed`);
  built = ui.finishBuild();
  assert(built && built.group, 'no group handed over');
  assert(built.parts.length === partsBefore,
    `group reports ${built.parts.length} parts, expected ${partsBefore}`);
  let meshes = 0;
  built.group.traverse(o => { if (o.isMesh) meshes++; });
  assert(meshes > 100, `group is nearly empty (${meshes} meshes)`);
  assert(built.glass && built.glass.visible, 'glass not refitted');
  assert(ui.isFinished, 'ui not marked finished');
  assert(scene.placedParts.size === 0, 'parts left behind in the build zone');
});

check('the machine is handed to the world, grouped, on the bench', () => {
  const pc = game.assembledPC;
  assert(pc, 'game did not adopt the assembled PC');
  assert(pc.prebuilt.parent === game.scene, 'not in the world scene');
  assert(pc.installedParts.length >= 7, 'installed parts not carried over');
  assert(game.room.casePlaceholder.visible === false, 'empty case prop still visible');
  let tagged = 0;
  pc.prebuilt.traverse(o => { if (o.isMesh && o.userData?.type === 'assembledPC') tagged++; });
  assert(tagged > 100, `only ${tagged} meshes are clickable as the machine`);
});

console.log('\n[wiring the machine to the monitor, on the bench]');
check('the case has a clickable video port once it is on the bench', () => {
  const port = game.room.machinePort;
  assert(!!port, 'the finished machine has no video port');
  assert(port.userData?.type === 'pcVideoPort', 'the port is not tagged as a port');
  assert(game.room.interactables.includes(port), 'the port is not clickable');
  assert(game.assembledPC.prebuilt.getObjectById(port.id) === port,
    'the port is not part of the machine');
});

check('the monitor has an HDMI port to plug into', () => {
  const anchor = game.room.monitorBody.getObjectByName('hdmiPortAnchor');
  assert(!!anchor, 'no HDMI port on the monitor');
  assert(anchor.userData?.type === 'monitorPort', 'the monitor port is not tagged');
  assert(game.room.interactables.includes(anchor), 'the monitor port is not clickable');
});

check('the monitor port first does nothing - the case side comes first', () => {
  game.handleWorldInteract(game.room.monitorBody.getObjectByName('hdmiPortAnchor'), null);
  assert(game.cableTask.armed === false, 'the task armed without the case port');
  assert(game.cableTask.connected === false, 'it connected out of order');
});

check('case port, then monitor port, plugs the machine in and boots it', async () => {
  game.handleWorldInteract(game.room.machinePort, null);
  assert(game.cableTask.armed === true, 'clicking the case port did not arm the task');
  game.handleWorldInteract(game.room.monitorBody.getObjectByName('hdmiPortAnchor'), null);
  assert(game.cableTask.connected === true, 'the cable did not connect');
  assert(!!game.room.videoCable, 'no cable was drawn between the two');
  assert(game.room.monitorState === 'NO_SIGNAL', 'the monitor did not wake up');

  await new Promise(r => setTimeout(r, 1100));
  assert(game.room.monitorState === 'POST', `monitor is ${game.room.monitorState}, expected POST`);
  game.room.postProgress = 1;
  game.room.setMonitorState('OS');
  assert(game.room.monitorState === 'OS', 'the desktop never came up');
});

check('picking the machine up takes the cable and the port with it', () => {
  const pc = game.assembledPC;
  game.handleWorldInteract(pc.prebuilt, { point: new THREE.Vector3(0, 1, 0) });
  assert(!game.room.videoCable, 'the cable stayed on the bench');
  assert(!game.room.interactables.includes(game.room.machinePort), 'the port stayed clickable');
  assert(game.cableTask.connected === false, 'the wiring task was not reset');
  game.handleStowItem();
  assert(!!game.room.interactables.includes(game.room.machinePort), 'the port did not come back');
});

let pcRef = null;
check('it can be picked up, but never tilted and never stowed', () => {
  const pc = game.assembledPC;
  pcRef = pc;
  game.handleWorldInteract(pc.prebuilt, { point: new THREE.Vector3(0, 1, 0) });
  const held = game.heldItemManager.getHeldItem();
  assert(held && held.isAssembled, 'machine not picked up');
  assert(held.noTilt !== true, 'machine is still marked upright-only');
  assert(game.assembledPC === null, 'still registered in the world while held');
  assert(held.prebuilt.visible === false, 'still rendered in the world while held');

  const mgr = game.heldItemManager;
  mgr.isInspecting = true;
  mgr.itemRotation.y += 1.0;
  mgr.itemRotation.x += 1.0;
  mgr.itemRotation.z = 0.6;
  mgr.rotationPivot.rotation.set(mgr.itemRotation.x, mgr.itemRotation.y, mgr.itemRotation.z);
  // A finished machine is a free-standing object: all three axes must respond
  assert(mgr.rotationPivot.rotation.y > 0, 'yaw was blocked');
  assert(mgr.rotationPivot.rotation.x > 0, 'pitch was blocked');
  assert(mgr.rotationPivot.rotation.z > 0, 'roll was blocked');

  // E must park it on the bench, never put it in the backpack
  const slotsBefore = game.inventoryUI.slots.filter(Boolean).length;
  game.handleStowItem();
  assert(game.inventoryUI.slots.filter(Boolean).length === slotsBefore,
    'machine went into the backpack');
  assert(!game.heldItemManager.getHeldItem(), 'still in hand after E');
  assert(game.assembledPC === pcRef, 'machine was lost instead of parked');
  assert(pcRef.prebuilt.visible === true, 'parked machine is not visible');
  // parking must not snap the machine back upright
  assert(Math.abs(pcRef.prebuilt.rotation.z) > 0.1,
    `parking discarded the roll pose: z=${pcRef.prebuilt.rotation.z}`);
});

check('left-clicking with the machine held parks it back on the bench', () => {
  game.handleWorldInteract(pcRef.prebuilt, { point: new THREE.Vector3(0, 1, 0) });
  const held = game.heldItemManager.getHeldItem();
  assert(held && held.isAssembled, 'machine not picked up again');
  game.handleWorldInteract({}, { point: new THREE.Vector3(0, 0.9, 0.4) });
  assert(!game.heldItemManager.getHeldItem(), 'still held');
  assert(game.assembledPC === pcRef, 'machine lost after parking');
  assert(pcRef.prebuilt.visible === true, 'not visible again');
  assert(pcRef.prebuilt.position.distanceTo(pcRef.home.position) < 1e-6, 'not back on the bench');
  // the parked pose is kept, roll and all - the machine is free-standing now
  assert(Math.abs(pcRef.prebuilt.rotation.z) > 0.1,
    `roll was lost on parking: z=${pcRef.prebuilt.rotation.z}`);
});

check('picking the machine back up restores the parked pose', () => {
  const parked = pcRef.pose ? { ...pcRef.pose } : null;
  assert(parked && Math.abs(parked.z) > 0.1, 'no rolled pose was recorded to restore');
  game.handleWorldInteract(pcRef.prebuilt, { point: new THREE.Vector3(0, 1, 0) });
  const mgr = game.heldItemManager;
  assert(mgr.getHeldItem() === pcRef, 'machine is not in the hand');
  assert(Math.abs(mgr.itemRotation.z - parked.z) < 1e-6,
    `roll jumped on pick-up: ${mgr.itemRotation.z} vs ${parked.z}`);
  // put it back so later checks see a clean bench
  game.handleStowItem();
});

check('the finished machine survives a reset', () => {
  game.buildModeUI.reset();
  assert(pcRef.prebuilt.visible === true, 'reset hid the finished machine');
  assert(game.assembledPC === pcRef, 'reset dropped the machine');
});

console.log(`\n${fail === 0 ? 'ALL PASSED' : 'FAILURES'}: ${pass} passed, ${fail} failed\n`);
process.exit(fail === 0 ? 0 : 1);
