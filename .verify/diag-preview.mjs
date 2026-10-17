import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');
process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';

globalThis.requestAnimationFrame = () => 0;
globalThis.setTimeout = () => 0;
const makeEl = (w = 348, h = 220) => ({
  width: w, height: h, clientWidth: w, clientHeight: h, style: {}, dataset: {},
  classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
  getContext: () => new Proxy({}, { get: () => () => {} }),
  addEventListener() {}, appendChild() {}, remove() {}
});
globalThis.document = { createElement: () => makeEl(), getElementById: () => makeEl(), addEventListener() {}, body: makeEl() };
globalThis.window = { addEventListener() {}, innerWidth: 1280, innerHeight: 720 };
globalThis.navigator ??= { userAgent: 'node' };

const THREE = await import('three');
const { ItemPreviewScene } = await import('file:///D:/pc-builder-3d/src/scene/ItemPreviewScene.js');
const { HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');
const settle = () => new Promise(r => setImmediate(r));

// The real panel: 380px column - 2*16px padding = 348 wide, 220 tall
const canvas = makeEl(348, 220);
const preview = new ItemPreviewScene(canvas);
console.log('after ctor : aspect=%s canvas=%dx%d camPos=%s',
  preview.camera.aspect, canvas.width, canvas.height,
  preview.camera.position.toArray().join(','));

for (const item of [HARDWARE_ITEMS[0], HARDWARE_ITEMS[8], HARDWARE_ITEMS[1]]) {
  preview.loadItemModel(item.modelPath);
  await settle();
  preview.render();
  preview.render();
  preview.render();

  const m = preview.currentModel;
  m.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(m);
  const size = box.getSize(new THREE.Vector3());
  const centre = box.getCenter(new THREE.Vector3());

  // project the 8 corners into NDC
  let minX = 9, maxX = -9, minY = 9, maxY = -9;
  for (let i = 0; i < 8; i++) {
    const v = new THREE.Vector3(
      i & 1 ? box.max.x : box.min.x,
      i & 2 ? box.max.y : box.min.y,
      i & 4 ? box.max.z : box.min.z
    ).project(preview.camera);
    minX = Math.min(minX, v.x); maxX = Math.max(maxX, v.x);
    minY = Math.min(minY, v.y); maxY = Math.max(maxY, v.y);
  }
  console.log(
    '\n%s\n  aspect=%s canvas=%dx%d',
    item.name, preview.camera.aspect, canvas.width, canvas.height
  );
  console.log('  size(m)  %s', size.toArray().map(v => v.toFixed(3)).join(' x '));
  console.log('  centre   %s', centre.toArray().map(v => v.toFixed(4)).join(', '));
  console.log('  NDC x    %s .. %s   (mid %s)', minX.toFixed(3), maxX.toFixed(3), ((minX + maxX) / 2).toFixed(3));
  console.log('  NDC y    %s .. %s   (mid %s)', minY.toFixed(3), maxY.toFixed(3), ((minY + maxY) / 2).toFixed(3));
  console.log('  fill     w=%s%% h=%s%% of viewport', ((maxX - minX) / 2 * 100).toFixed(1), ((maxY - minY) / 2 * 100).toFixed(1));
  console.log('  px on screen  w=%s h=%s  (of %dx%d)',
    ((maxX - minX) / 2 * canvas.clientWidth).toFixed(0), ((maxY - minY) / 2 * canvas.clientHeight).toFixed(0),
    canvas.clientWidth, canvas.clientHeight);
}
