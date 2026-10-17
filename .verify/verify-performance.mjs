import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');

process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';

const nativeSetTimeout = globalThis.setTimeout;
globalThis.requestAnimationFrame = () => 1;
globalThis.cancelAnimationFrame = () => {};
globalThis.setTimeout = (fn) => nativeSetTimeout(fn, 0);
globalThis.clearTimeout = id => clearTimeout(id);
globalThis.devicePixelRatio = 1;
globalThis.performance ??= { now: () => Date.now() };

// A DOM stub that counts writes, so the tests can prove the HUD is only touched
// when a value really changes. textContent needs a real accessor, otherwise a
// plain property assignment cannot be observed.
const writes = { text: 0, display: 0, classToggle: 0 };
const makeEl = (id = '') => {
  let text = '';
  const el = {
    id, width: 1280, height: 720, clientWidth: 360, clientHeight: 360,
    style: new Proxy({}, {
      set(t, k, v) { if (k === 'display') writes.display++; t[k] = v; return true; }
    }),
    dataset: {}, innerHTML: '', children: [], className: '',
    get textContent() { return text; },
    set textContent(v) { writes.text++; text = v; },
    classList: {
      _s: new Set(),
      add(...c) { c.forEach(x => this._s.add(x)); },
      remove(...c) { c.forEach(x => this._s.delete(x)); },
      toggle(c, on) {
        writes.classToggle++;
        if (on === undefined) { this._s.has(c) ? this._s.delete(c) : this._s.add(c); }
        else { on ? this._s.add(c) : this._s.delete(c); }
      },
      contains(c) { return this._s.has(c); }
    },
    getContext: () => new Proxy({}, { get: () => () => {} }),
    addEventListener() {}, appendChild(c) { this.children.push(c); },
    remove() {}, removeChild() {}, setAttribute() {},
    querySelector: (sel) => (sel === '.prompt-text' ? promptText : null)
  };
  return el;
};
const promptText = makeEl('prompt-text');
const registry = new Map();
globalThis.document = {
  createElement: makeEl,
  getElementById: id => { if (!registry.has(id)) registry.set(id, makeEl(id)); return registry.get(id); },
  addEventListener() {}, removeEventListener() {}, querySelector: () => null,
  body: makeEl('body')
};
globalThis.window = {
  addEventListener() {}, removeEventListener() {},
  innerWidth: 1280, innerHeight: 720, devicePixelRatio: 1
};
globalThis.navigator ??= { userAgent: 'node' };

const THREE = await import('three');
const { Game } = await import('file:///D:/pc-builder-3d/src/core/Game.js');
const { PlayerControls } = await import('file:///D:/pc-builder-3d/src/controls/PlayerControls.js');
const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');

console.log('\n[everything on the bench can be reached by the crosshair]');

let pass = 0, fail = 0;
const check = async (name, fn) => {
  try { await fn(); console.log(`  PASS  ${name}`); pass++; }
  catch (e) { console.log(`  FAIL  ${name}\n          ${e.message}`); fail++; }
};
const assert = (cond, msg) => { if (!cond) throw new Error(msg); };
const waitFor = async pred => {
  for (let i = 0; i < 3000; i++) {
    if (pred()) return true;
    await new Promise(r => nativeSetTimeout(r, 1));
  }
  return false;
};

const game = new Game();
game.clock.getDelta = () => 0.016;
game.clock.getElapsedTime = () => 1;
const loaded = await waitFor(() => game.shelf.stream.loaded >= game.shelf.stream.total);
assert(loaded, 'the bench never finished loading');

await check('the raycast list is not empty once the bench is full', () => {
  const targets = game.getRaycastTargets();
  assert(targets.length > 0, `the crosshair had ${targets.length} things to aim at`);
});

await check('every item on the bench is in the raycast list', () => {
  const targets = new Set(game.getRaycastTargets());
  const missing = game.shelf.interactables.filter(o => o.userData?.itemId && !targets.has(o));
  assert(missing.length === 0,
    `${missing.length} of ${game.shelf.interactables.length} bench items are unreachable: ` +
    missing.slice(0, 5).map(o => o.userData.itemId).join(', '));
});

await check('the raycast list holds the real models, not the discarded placeholders', () => {
  const targets = game.getRaycastTargets();
  const stale = targets.filter(o => o.userData?.isPlaceholder);
  assert(stale.length === 0, `${stale.length} stale placeholders are still aimable`);
  const detached = targets.filter(o => o.userData?.isPlaceholder && !o.parent);
  assert(detached.length === 0, `${detached.length} detached placeholders are still aimable`);
});

await check('the list follows a part that is hidden and shown again', () => {
  const item = ALL_HARDWARE_ITEMS.find(i => i.id === 'gpu_rtx_3090');
  game.shelf.hideItem(item.id);
  let targets = new Set(game.getRaycastTargets());
  // hidden by visibility, so it stays in the list but must not be hoverable
  assert(targets.size > 0, 'the list emptied when a part was hidden');
  game.shelf.showItem(item.id);
  targets = new Set(game.getRaycastTargets());
  assert(targets.size > 0, 'the list emptied when a part came back');
});

await check('the list follows a part being dropped somewhere and put away again', async () => {
  const item = ALL_HARDWARE_ITEMS.find(i => i.id === 'ram_gskill_tridentz_16gb');
  const before = game.getRaycastTargets().length;
  game.placedItems.placeItemAt(item, new THREE.Vector3(0, 1.0, 0.5));
  // placeItemAt streams the GLB, so the wrapper joins the list only once the
  // file has parsed
  await waitFor(() => game.placedItems.placedItems.has(item.id));
  const during = game.getRaycastTargets();
  assert(during.length === before + 1,
    `a dropped part did not join the list: ${before} -> ${during.length}`);
  assert(during.includes(game.placedItems.placedItems.get(item.id)),
    'the dropped part is not the object in the list');
  game.placedItems.removeItem(item.id);
  assert(game.getRaycastTargets().length === before,
    'the list did not shrink back after the part was put away');
});

await check('the list is rebuilt every frame, not cached against a length', () => {
  // ShelfHardware._swapIn() removes a placeholder and pushes the real model in
  // one step, so the length never changes. A cache keyed on length would keep
  // serving the discarded placeholders and nothing on the bench would be
  // pickable. Prove the list tracks an in-place edit of equal length.
  const marker = new THREE.Group();
  marker.userData = { itemId: 'probe', itemName: 'probe' };
  const list = game.shelf.interactables;
  const before = list.length;
  list[0] = marker;                       // same length, different object
  assert(game.getRaycastTargets().includes(marker), 'the list did not notice a swapped entry');
  list[0] = list[0] === marker ? list[1] : list[0];
  list.length = before;
  assert(game.getRaycastTargets().length === game.shelf.interactables.length +
    game.placedItems.interactables.length + game.room.interactables.length + game.room.surfaces.length,
    'the combined list is not the sum of its sources');
});

await check('a part can actually be picked up and put back', () => {
  const gpu = ALL_HARDWARE_ITEMS.find(i => i.id === 'gpu_rtx_3090');
  const wrapper = game.shelf.interactables.find(o => o.userData?.itemId === gpu.id);
  assert(!!wrapper, 'the GPU is not on the bench');

  game.controls.isLocked = true;
  game.camera.position.set(0, 1.65, 1.8);
  game.camera.updateMatrixWorld(true);
  game.controls.update(0.016, game.getRaycastTargets());

  const aimAt = obj => {
    obj.updateMatrixWorld(true);
    const centre = new THREE.Box3().setFromObject(obj).getCenter(new THREE.Vector3());
    const from = game.camera.position;
    const dx = centre.x - from.x;
    const dz = centre.z - from.z;
    const flat = Math.hypot(dx, dz) || 1e-6;
    game.controls.yaw = Math.atan2(-dx / flat, -dz / flat);
    game.controls.pitch = Math.asin((centre.y - from.y) / (Math.hypot(flat, centre.y - from.y) || 1e-6));
    game.camera.quaternion.setFromEuler(
      new THREE.Euler(game.controls.pitch, game.controls.yaw, 0, 'YXZ'));
    game.controls.markRaycastDirty();
    game.controls.update(0.016, game.getRaycastTargets());
  };

  // `_place` tags every child mesh with the item's id, so the crosshair resolves
  // to a child of the wrapper rather than the wrapper itself. What matters is
  // that it resolves to the right item.
  aimAt(wrapper);
  assert(game.controls.hoveredObject?.userData?.itemId === gpu.id,
    `the crosshair found ${game.controls.hoveredObject?.userData?.itemId || 'nothing'}, not the GPU`);

  game.handleWorldInteract(game.controls.hoveredObject, game.controls.lastRaycastHit);
  const held = game.heldItemManager.getHeldItem();
  assert(held?.id === gpu.id, `picked up ${held?.id || 'nothing'}`);
  assert(wrapper.visible === false, 'the part stayed visible on the bench while held');

  // Put it back on the bench and confirm the whole round trip closes: the part
  // must be visible again, back in the raycast list, and hoverable once more.
  game.heldItemManager.clearHeldItem();
  game.shelf.showItem(gpu.id);
  assert(wrapper.visible === true, 'the part did not come back to the bench');
  assert(game.getRaycastTargets().includes(wrapper), 'the returned part left the raycast list');
  aimAt(wrapper);
  assert(game.controls.hoveredObject?.userData?.itemId === gpu.id,
    `the returned part is not hoverable: ${game.controls.hoveredObject?.userData?.itemId || 'nothing'}`);
});

// ============================================================ raycast gating
console.log('\n[the hover ray is only redone when something actually moved]');

function makeControls() {
  const camera = new THREE.PerspectiveCamera(65, 16 / 9, 0.1, 100);
  camera.position.set(0, 1.65, 1.8);
  camera.updateMatrixWorld(true);
  const c = new PlayerControls(camera, makeEl('canvas'), () => {}, () => {}, () => {});
  c.isLocked = true;

  const part = new THREE.Group();
  part.add(new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.1, 0.4), new THREE.MeshBasicMaterial()));
  part.position.set(0, 1.62, 0.8);
  part.userData = { type: 'hardware', itemId: 'gpu_rtx_3090', itemName: 'NVIDIA GeForce RTX 3090' };
  part.updateMatrixWorld(true);

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.MeshBasicMaterial());
  floor.rotation.x = -Math.PI / 2;
  floor.userData = { isFloor: true };
  floor.updateMatrixWorld(true);
  return { c, targets: [part, floor], part, floor };
}

await check('standing still does not repeat the raycast', () => {
  const { c, targets } = makeControls();
  let calls = 0;
  const real = c.raycaster.intersectObjects.bind(c.raycaster);
  c.raycaster.intersectObjects = (...a) => { calls++; return real(...a); };
  c.update(0.016, targets);
  assert(calls === 1, `expected 1 raycast, ran ${calls}`);
  for (let i = 0; i < 120; i++) c.update(0.016, targets);
  assert(calls === 1, `a still camera ran ${calls} raycasts over 120 frames`);
});

await check('turning on the spot re-tests the crosshair', () => {
  const { c, targets } = makeControls();
  let calls = 0;
  const real = c.raycaster.intersectObjects.bind(c.raycaster);
  c.raycaster.intersectObjects = (...a) => { calls++; return real(...a); };
  c.update(0.016, targets);
  assert(c.hoveredObject?.userData?.itemId === 'gpu_rtx_3090', 'did not find the part in front');
  c.yaw = 0.4;
  c.camera.quaternion.setFromEuler(new THREE.Euler(0, 0.4, 0, 'YXZ'));
  c.update(0.016, targets);
  assert(calls === 2, `a turn should re-test, ran ${calls} total`);
  assert(c.hoveredObject === null, 'should no longer be pointing at the part');
});

await check('strafing re-tests the crosshair', () => {
  const { c, targets } = makeControls();
  let calls = 0;
  const real = c.raycaster.intersectObjects.bind(c.raycaster);
  c.raycaster.intersectObjects = (...a) => { calls++; return real(...a); };
  c.update(0.016, targets);
  c.camera.position.x = 0.05;
  c.update(0.016, targets);
  assert(calls === 2, `a step should re-test, ran ${calls}`);
});

await check('a part appearing or vanishing re-tests without any camera motion', () => {
  const { c, targets, part } = makeControls();
  c.update(0.016, targets);
  const hovered = c.hoveredObject;
  part.visible = false;
  c.markRaycastDirty();
  c.update(0.016, targets);
  assert(c.hoveredObject !== hovered, 'still hovering a part that was just picked up');
});

await check('a hidden part cannot be hovered or picked up again', () => {
  // Taking a part off the bench only sets `visible = false`, and three.js still
  // raycasts invisible objects, so the crosshair has to filter them out or an
  // already-taken part stays highlighted and re-pickable while not being drawn.
  const { c, targets, part } = makeControls();
  c.update(0.016, targets);
  assert(c.hoveredObject?.userData?.itemId === 'gpu_rtx_3090', 'expected the part to be hovered first');
  part.visible = false;
  c.rayDirty = true;
  c.update(0.016, targets);
  assert(c.hoveredObject === null, `still hovering a hidden part: ${c.hoveredObject?.userData?.itemId}`);
  part.visible = true;
  c.rayDirty = true;
  c.update(0.016, targets);
  assert(c.hoveredObject?.userData?.itemId === 'gpu_rtx_3090', 'the returned part is not hoverable');
});

await check('a part hidden by an invisible ancestor is also skipped', () => {
  const { c, targets, part } = makeControls();
  const shelf = new THREE.Group();
  shelf.add(part);
  targets.length = 0;
  targets.push(shelf, ...targets.filter(t => t.isMesh));
  shelf.updateMatrixWorld(true);
  c.update(0.016, targets);
  assert(c.hoveredObject?.userData?.itemId === 'gpu_rtx_3090', 'expected the part to be hovered first');
  shelf.visible = false;
  c.rayDirty = true;
  c.update(0.016, targets);
  assert(c.hoveredObject === null, 'hovering a part whose parent is hidden');
});

await check('releasing the pointer clears the hover and the prompt', () => {
  const { c, targets } = makeControls();
  c.update(0.016, targets);
  assert(c.hud.prompt.style.display === 'flex', 'prompt should be showing');
  c.isLocked = false;
  c.update(0.016, targets);
  assert(c.hoveredObject === null, 'hover survived the pointer unlock');
  assert(c.lastRaycastHit === null, 'raycast hit survived the pointer unlock');
  assert(c.hud.prompt.style.display === 'none', 'prompt should be hidden');
});

// ============================================================ HUD writes
console.log('\n[the HUD is not rewritten when nothing changed]');

await check('an unchanged prompt is written to the DOM once, not every frame', () => {
  const { c, targets } = makeControls();
  writes.text = 0;
  c.update(0.016, targets);
  assert(writes.text === 1, `first hover should write once, wrote ${writes.text}`);
  for (let i = 0; i < 60; i++) { c.rayDirty = true; c.update(0.016, targets); }
  assert(writes.text === 1, `prompt text was rewritten ${writes.text} times over 60 frames`);
});

await check('the prompt disappears when the crosshair leaves everything', () => {
  const { c, targets } = makeControls();
  c.update(0.016, targets);
  assert(c.hud.prompt.style.display === 'flex', 'expected the prompt to show');
  c.yaw = 1.2;
  c.camera.quaternion.setFromEuler(new THREE.Euler(0, 1.2, 0, 'YXZ'));
  c.rayDirty = true;
  c.update(0.016, targets);
  assert(c.hud.prompt.style.display === 'none', 'the prompt stayed up with nothing hovered');
});

await check('every interactable still produces its own prompt', () => {
  const { c } = makeControls();
  const cases = [
    [{ type: 'hardware', itemId: 'psu_650w', itemName: 'Aerocool MasterWatt 650W' }, 'Nhặt Aerocool MasterWatt 650W'],
    [{ type: 'glass_side' }, 'Nắp kính'],
    [{ type: 'power_button' }, 'BẬT NGUỒN'],
    [{ type: 'cables' }, 'Cắm Dây nguồn'],
    [{ snapType: 'motherboard' }, 'Lắp ráp: MOTHERBOARD'],
    [{ type: 'computerCase' }, 'Mở Menu Thùng Máy'],
    [{ type: 'monitor' }, 'Cắm cáp màn hình']
  ];
  for (const [userData, expected] of cases) {
    const text = c.promptTextFor(userData);
    assert(!!text, `${JSON.stringify(userData)} produced no prompt`);
    assert(text.includes(expected), `"${text}" does not mention "${expected}"`);
  }
  assert(c.promptTextFor({}) === null, 'an untagged object should not get a prompt');
  assert(c.promptTextFor({ type: 'unknown_thing' }) === null, 'an unknown type should not get a prompt');
});

// ============================================================ image quality
console.log('\n[image quality settings are untouched]');

await check('the drawing buffer uses the display ratio, unscaled', () => {
  assert(game.renderer.getPixelRatio() === 1,
    `expected the fixed pixel ratio of 1 in this harness, got ${game.renderer.getPixelRatio()}`);
  assert(game.perf === undefined, 'an adaptive resolution controller is still installed');
  assert(game.updatePerfReadout === undefined, 'the resolution readout is still wired up');
});

await check('shadows keep the full 2048 map and the soft filter', () => {
  let sun = null;
  game.scene.traverse(o => { if (o.isDirectionalLight && o.castShadow) sun = o; });
  assert(!!sun, 'no shadow-casting light found');
  assert(sun.shadow.mapSize.width === 2048 && sun.shadow.mapSize.height === 2048,
    `shadow map is ${sun.shadow.mapSize.width}, not 2048`);
  assert(game.renderer.shadowMap.type === THREE.PCFSoftShadowMap,
    `shadow filter is ${game.renderer.shadowMap.type}, not PCFSoft`);
});

await check('the monitor POST animation still redraws every frame', () => {
  game.room.monitorState = 'POST';
  game.room.postProgress = 0;
  let redraws = 0;
  const real = game.room.renderMonitorScreen.bind(game.room);
  game.room.renderMonitorScreen = () => { redraws++; };
  for (let i = 0; i < 30; i++) game.room.update(1 / 60);
  game.room.renderMonitorScreen = real;
  game.room.monitorState = 'OFF';
  assert(redraws >= 28, `POST redrew only ${redraws} times in 30 frames`);
});

console.log(`\n${fail === 0 ? 'ALL PASSED' : 'FAILURES'}: ${pass} passed, ${fail} failed\n`);
process.exit(fail === 0 ? 0 : 1);
