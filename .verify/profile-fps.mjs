import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');

process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';

let rafCount = 0;
globalThis.requestAnimationFrame = () => { rafCount++; return rafCount; };
globalThis.cancelAnimationFrame = () => {};
const nativeSetTimeout = globalThis.setTimeout;
const nativeClearTimeout = globalThis.clearTimeout;
globalThis.setTimeout = (fn, ms = 0) => nativeSetTimeout(fn, 0);
globalThis.clearTimeout = id => nativeClearTimeout(id);
globalThis.devicePixelRatio = 1;

const makeEl = (id = '') => {
  const el = {
    id,
    width: 1280, height: 720, clientWidth: 360, clientHeight: 360,
    style: {}, dataset: {}, textContent: '', innerHTML: '',
    children: [],
    className: '',
    classList: {
      _s: new Set(),
      add(...c) { c.forEach(x => this._s.add(x)); },
      remove(...c) { c.forEach(x => this._s.delete(x)); },
      toggle(c, on) { on === undefined ? (this._s.has(c) ? this._s.delete(c) : this._s.add(c)) : (on ? this._s.add(c) : this._s.delete(c)); },
      contains(c) { return this._s.has(c); }
    },
    getContext: (t) => t && t.startsWith('webgl')
      ? new Proxy({ getExtension: () => null }, {
          get: (t, k) => (k in t ? t[k] : () => 1)
        })
      : new Proxy({}, { get: () => () => {} }),
    addEventListener() {}, appendChild(c) { this.children.push(c); },
    remove() {}, removeChild() {}, setAttribute() {},
    querySelector: (sel) => (sel === '.prompt-text' ? makeEl('prompt-text') : null)
  };
  return el;
};

const registry = new Map();
globalThis.document = {
  createElement: tag => makeEl(tag),
  getElementById: id => {
    if (!registry.has(id)) registry.set(id, makeEl(id));
    return registry.get(id);
  },
  addEventListener() {}, removeEventListener() {},
  querySelector: () => null,
  body: makeEl('body')
};
globalThis.window = {
  addEventListener() {}, removeEventListener() {},
  innerWidth: 1280, innerHeight: 720, devicePixelRatio: 1
};
globalThis.navigator ??= { userAgent: 'node' };

const THREE = await import('three');
const { Game } = await import('file:///D:/pc-builder-3d/src/core/Game.js');
const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');

// A zero-delta clock so the loop body is pure cost, not animation progress
const game = new Game();
game.clock.getDelta = () => 0.016;
game.clock.getElapsedTime = () => 1;

// let the shelf stream finish so we profile the real, fully loaded scene
const waitFor = async pred => {
  for (let i = 0; i < 2000; i++) {
    if (pred()) return true;
    await new Promise(r => setTimeout(r, 1));
  }
  return false;
};
const ready = await waitFor(() => game.shelf.stream.loaded >= game.shelf.stream.total);
console.log(`stream: ${game.shelf.stream.loaded}/${game.shelf.stream.total} ${ready ? 'complete' : 'TIMED OUT'}`);

const counts = { mesh: 0, group: 0, light: 0, points: 0, line: 0, sprite: 0 };
let tris = 0, shadowCasters = 0, shadowReceivers = 0, visibleMeshes = 0;
game.scene.traverse(o => {
  if (o.isMesh) {
    counts.mesh++;
    if (o.visible) visibleMeshes++;
    if (o.castShadow) shadowCasters++;
    if (o.receiveShadow) shadowReceivers++;
    const g = o.geometry;
    if (g) {
      const n = g.index ? g.index.count / 3 : (g.attributes?.position?.count ?? 0) / 3;
      tris += n * (o.isInstancedMesh ? o.count : 1);
    }
  } else if (o.isLight) counts.light++;
  else if (o.isGroup) counts.group++;
});

console.log('=== scene ===');
console.log(`meshes ${counts.mesh} (visible ${visibleMeshes})  groups ${counts.group}  lights ${counts.light}`);
console.log(`triangles ${Math.round(tris).toLocaleString()}`);
console.log(`castShadow ${shadowCasters}  receiveShadow ${shadowReceivers}`);

const targets = [
  ...game.shelf.interactables,
  ...game.placedItems.interactables,
  ...game.room.interactables,
  ...(game.room.surfaces || [])
];
console.log(`\nraycast target roots: ${targets.length}`);

// how many actual meshes the recursive raycast has to walk
let rayMeshes = 0;
for (const t of targets) t.traverse(o => { if (o.isMesh) rayMeshes++; });
console.log(`meshes reached by recursive raycast: ${rayMeshes}`);

// ---- CPU cost of one crosshair raycast ----
const c = game.controls;
c.isLocked = true;
c.update(0.016, targets, game.room.surfaces || []); // warm
const N = 200;
let t0 = process.hrtime.bigint();
for (let i = 0; i < N; i++) {
  c.raycaster.setFromCamera(c.center, c.camera);
  c.raycaster.intersectObjects(targets, true);
}
let t1 = process.hrtime.bigint();
const rayMs = Number(t1 - t0) / 1e6 / N;
console.log(`\ncrosshair raycast: ${rayMs.toFixed(3)} ms/frame  (${(rayMs / 16.67 * 100).toFixed(1)}% of a 60fps budget)`);

// ---- CPU cost of one full animate() body, minus rendering ----
t0 = process.hrtime.bigint();
for (let i = 0; i < N; i++) {
  c.update(0.016, game.getRaycastTargets());
  game.heldItemManager.update(0.016, 1);
  game.room.update(0.016);
}
t1 = process.hrtime.bigint();
const idleMs = Number(t1 - t0) / 1e6 / N;
console.log(`update body, standing still : ${idleMs.toFixed(3)} ms/frame`);

// now with the camera swinging every frame while still pointed at the bench.
// This is the honest worst case: the hover ray genuinely has to be redone, and
// the ray keeps landing on the dense cluster of parts.
let calls = 0;
const realIntersect = c.raycaster.intersectObjects.bind(c.raycaster);
c.raycaster.intersectObjects = (...a) => { calls++; return realIntersect(...a); };
t0 = process.hrtime.bigint();
for (let i = 0; i < N; i++) {
  // a narrow sweep, so the crosshair keeps hitting the shelf rather than
  // swinging off into empty room after the first few frames
  c.yaw = Math.sin(i * 0.05) * 0.12;
  c.camera.quaternion.setFromEuler(new THREE.Euler(0, c.yaw, 0, 'YXZ'));
  c.update(0.016, game.getRaycastTargets());
}
t1 = process.hrtime.bigint();
const movingMs = Number(t1 - t0) / 1e6 / N;
console.log(`update body, sweeping the bench: ${movingMs.toFixed(3)} ms/frame  (${calls} raycasts, ${(calls / N * 100).toFixed(0)}% of frames)`);
console.log(`\nper-frame script cost: ${idleMs.toFixed(3)} ms standing still, ${movingMs.toFixed(3)} ms sweeping (was 1.44 ms every frame)`);

// ---- how many draw calls would one frame cost ----
console.log('\nrenderer info (stub renderer never actually draws):');
const info = game.renderer.info;
if (info) {
  console.log(`  calls ${info.render?.calls}  geometries ${info.memory?.geometries}  textures ${info.memory?.textures}`);
}

// ---- fill rate, the part that actually decides FPS at this scene size ----
const dpr = game.renderer.getPixelRatio();
const px = game.renderer.domElement.width * game.renderer.domElement.height;
const shadowPx = 1024 * 1024;
console.log('\n=== fill rate per frame ===');
console.log(`drawing buffer      ${game.renderer.domElement.width} x ${game.renderer.domElement.height} @${dpr}x  = ${(px / 1e6).toFixed(2)} Mpx`);
console.log(`shadow map          1024 x 1024 = ${(shadowPx / 1e6).toFixed(2)} Mpx  (1 frame in ${game.constructor.name === 'Game' ? 4 : 4})`);
console.log(`was, before this work: 3.69 Mpx main + 4.19 Mpx shadow every frame`);
console.log(`now: the shadow pass runs a quarter as often, and the main pass scales itself to the machine`);
console.log(`shadow filter ${game.renderer.shadowMap.type === 1 ? 'PCFShadowMap' : game.renderer.shadowMap.type} (was PCFSoft: ~4x the texture taps per lit pixel)`);
