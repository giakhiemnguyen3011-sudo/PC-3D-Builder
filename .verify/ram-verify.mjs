import { register } from "node:module";
register("file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs");
process.env.PC3D_PUBLIC = "D:/pc-builder-3d/public/";
globalThis.requestAnimationFrame = () => 1;
globalThis.performance = globalThis.performance || { now: () => Date.now() };
globalThis.window = globalThis;
globalThis.addEventListener = () => {};
globalThis.removeEventListener = () => {};
globalThis.AudioContext = class {
  createGain() { return { gain: { value: 1, setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() {} }; }
  createBufferSource() { return { connect() {}, start() {}, buffer: { duration: 1 } }; }
  createOscillator() {
    const p = { value: 0, setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} };
    return { frequency: p, type: '', connect() {}, start() {}, stop() {} };
  }
  createBuffer(ch, len) { return { getChannelData: () => new Float32Array(len), duration: 1 }; }
  get destination() { return {}; }
  get sampleRate() { return 48000; }
  get currentTime() { return 0; }
};
globalThis.webkitAudioContext = globalThis.AudioContext;

const THREE = await import('file:///D:/pc-builder-3d/node_modules/three/build/three.module.js');
const { PlacedItemManager } = await import('file:///D:/pc-builder-3d/src/scene/PlacedItemManager.js');
const { ItemPreviewScene } = await import('file:///D:/pc-builder-3d/src/scene/ItemPreviewScene.js');
const { loadModelCopy } = await import('file:///D:/pc-builder-3d/src/scene/ModelCache.js');
const { buildFittedModel, fitOptionsFor } = await import('file:///D:/pc-builder-3d/src/scene/ModelFit.js');
const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');
const { CASE_ZONES, mountQuaternion } = await import('file:///D:/pc-builder-3d/src/scene/caseLayout.js');

const mm = v => v.toArray().map(n => (n * 1000).toFixed(1)).join(' x ') + ' mm';
const ids = ['ram_corsair_dominator', 'ram_gskill_tridentz_16gb'];

// --- the real bench-drop path, through PlacedItemManager itself
const scene = new THREE.Scene();
const dropped = new PlacedItemManager(scene);
const wait = ms => new Promise(r => setTimeout(r, ms));

console.log('part                     dropped on workbench        shelf / hand / build      in the RAM slot');
for (const id of ids) {
  const item = ALL_HARDWARE_ITEMS.find(i => i.id === id);
  dropped.placeItemAt(item, new THREE.Vector3(0, 0.82, 0));
  await wait(30);
  const wrapper = dropped.placedItems.get(id);
  wrapper.updateMatrixWorld(true);
  const dropSize = new THREE.Box3().setFromObject(wrapper).getSize(new THREE.Vector3());

  const copy = await loadModelCopy(item.modelPath);
  const shelf = buildFittedModel(copy, fitOptionsFor(item)).size;

  const copy2 = await loadModelCopy(item.modelPath);
  const f2 = buildFittedModel(copy2, fitOptionsFor(item));
  f2.group.quaternion.copy(mountQuaternion(CASE_ZONES.ram));
  f2.group.updateMatrixWorld(true);
  const inSlot = new THREE.Box3().setFromObject(f2.group).getSize(new THREE.Vector3());

  console.log(
    id.padEnd(24),
    mm(dropSize).padEnd(26),
    mm(shelf).padEnd(24),
    mm(inSlot)
  );
  dropped.removeItem(id);
}

// --- inventory preview keeps filling the panel but in real proportions
const canvas = { width: 320, height: 320, style: {}, addEventListener() {}, removeEventListener() {}, getContext: () => null, getBoundingClientRect: () => ({ left: 0, top: 0, right: 320, bottom: 320, width: 320, height: 320 }) };
globalThis.document = { getElementById: () => canvas, createElement: () => canvas, addEventListener() {}, removeEventListener() {} };
const preview = new ItemPreviewScene(canvas);
for (const id of ids) {
  const item = ALL_HARDWARE_ITEMS.find(i => i.id === id);
  const { realDimsFor } = await import('file:///D:/pc-builder-3d/src/data/hardwareDims.js');
  const model = await loadModelCopy(item.modelPath);
  preview.setModel(model, { realDims: realDimsFor(item) });
  preview.currentModel.updateMatrixWorld(true);
  const size = new THREE.Box3().setFromObject(preview.currentModel).getSize(new THREE.Vector3());
  console.log('preview', id.padEnd(20), mm(size), ' ratio long:thick = ' + (size.x / size.z).toFixed(1));
}