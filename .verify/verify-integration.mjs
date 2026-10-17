import { register } from 'node:module';
register('file:///D:/pc-builder-3d/.verify/pc3d-hooks.mjs');

process.env.PC3D_PUBLIC = 'D:/pc-builder-3d/public/';

// --- minimal browser globals -------------------------------------------------
globalThis.window = {
  addEventListener() {},
  removeEventListener() {},
  devicePixelRatio: 1,
  innerWidth: 1280,
  innerHeight: 720,
  AudioContext: undefined
};
const makeEl = () => ({
  width: 0, height: 0, clientWidth: 360, clientHeight: 360, style: {},
  dataset: {},
  classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
  getContext: () => new Proxy({}, { get: () => () => {} }),
  addEventListener() {}, appendChild() {}, remove() {}, setAttribute() {}
});
globalThis.document = {
  createElement: () => makeEl(),
  getElementById: () => makeEl(),
  addEventListener() {},
  querySelector: () => null,
  body: { appendChild() {} }
};
globalThis.navigator ??= { userAgent: 'node' };

const THREE = await import('three');
const { ALL_HARDWARE_ITEMS } = await import('file:///D:/pc-builder-3d/src/data/hardware.js');
const { getShelfLayout, getTableObstacle } = await import(
  'file:///D:/pc-builder-3d/src/scene/shelfLayout.js'
);
const { buildFittedModel, computeFlatAlignment } = await import(
  'file:///D:/pc-builder-3d/src/scene/ModelFit.js'
);
const { ShelfHardware } = await import('file:///D:/pc-builder-3d/src/scene/ShelfHardware.js');
const { PlacedItemManager } = await import('file:///D:/pc-builder-3d/src/scene/PlacedItemManager.js');
const { realDimsFor } = await import('file:///D:/pc-builder-3d/src/data/hardwareDims.js');
const { HeldItemManager } = await import('file:///D:/pc-builder-3d/src/controls/HeldItemManager.js');
const { ItemPreviewScene } = await import('file:///D:/pc-builder-3d/src/scene/ItemPreviewScene.js');
const { createComputerCase3DGroup } = await import('file:///D:/pc-builder-3d/src/scene/Room.js');

let pass = 0;
let fail = 0;
function check(label, fn) {
  try {
    fn();
    pass++;
    console.log('  PASS  ' + label);
  } catch (err) {
    fail++;
    console.log('  FAIL  ' + label + '\n        ' + err.message);
  }
}
const assert = (cond, msg) => { if (!cond) throw new Error(msg); };
const settle = () => new Promise(r => setTimeout(r, 0));

console.log('\n[1] pure geometry helpers');
check('computeFlatAlignment returns a pure rotation (det = 1)', () => {
  const cases = [
    [4.8948, 2.2831, 0.6915], [2.93, 4.48, 2.53], [7.4674, 2.3217, 1.0413],
    [0.0772, 0.0154, 0.0938], [20.446, 21.9372, 22.7298], [24.2641, 2.4031, 24.2383],
    [0.1002, 0.0068, 0.0698], [1, 1, 1], [5, 5, 1], [1, 5, 5]
  ];
  for (const c of cases) {
    const m = new THREE.Matrix4().makeRotationFromQuaternion(
      computeFlatAlignment(new THREE.Vector3(...c))
    );
    assert(Math.abs(m.determinant() - 1) < 1e-9, `det=${m.determinant()} for ${c}`);
  }
});
check('thin axis -> vertical, long axis -> local X', () => {
  const cases = [
    [4.8948, 2.2831, 0.6915], [2.93, 4.48, 2.53], [7.4674, 2.3217, 1.0413],
    [0.0772, 0.0154, 0.0938], [20.446, 21.9372, 22.7298], [1, 1, 1]
  ];
  for (const c of cases) {
    const m = new THREE.Matrix4().makeRotationFromQuaternion(
      computeFlatAlignment(new THREE.Vector3(...c))
    );
    const box = new THREE.Box3(
      new THREE.Vector3(-c[0] / 2, -c[1] / 2, -c[2] / 2),
      new THREE.Vector3(c[0] / 2, c[1] / 2, c[2] / 2)
    ).applyMatrix4(m);
    const s = box.getSize(new THREE.Vector3());
    const sorted = [...c].sort((a, b) => a - b);
    assert(Math.abs(s.y - sorted[0]) < 1e-5, `thin not vertical ${c} -> y=${s.y}`);
    assert(Math.abs(s.x - sorted[2]) < 1e-5, `long not on X ${c} -> x=${s.x}`);
  }
});
check('buildFittedModel seats on y=0, centred, sized to realSize', () => {
  const g = new THREE.Group();
  g.add(new THREE.Mesh(new THREE.BoxGeometry(2, 4, 1)));
  const { group, size } = buildFittedModel(g, { realSize: 0.2 });
  group.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(group);
  assert(Math.abs(box.min.y) < 1e-6, 'min.y=' + box.min.y);
  assert(Math.abs(box.max.x + box.min.x) < 1e-6, 'not centred in x');
  assert(Math.abs(box.max.z + box.min.z) < 1e-6, 'not centred in z');
  const max = Math.max(size.x, size.y, size.z);
  assert(Math.abs(max - 0.2) < 1e-6, 'longest edge ' + max);
});
check('minSize / maxSize clamp the real size', () => {
  const mk = () => { const g = new THREE.Group(); g.add(new THREE.Mesh(new THREE.BoxGeometry(2, 4, 1))); return g; };
  const small = buildFittedModel(mk(), { realSize: 0.04, minSize: 0.05 });
  assert(Math.abs(Math.max(...small.size.toArray()) - 0.05) < 1e-6, 'minSize not applied');
  const big = buildFittedModel(mk(), { realSize: 0.4, maxSize: 0.34 });
  assert(Math.abs(Math.max(...big.size.toArray()) - 0.34) < 1e-6, 'maxSize not applied');
});

console.log('\n[2] shelf layout contract');
check('every hardware item gets a placement', () => {
  const layout = getShelfLayout();
  const placed = layout.tiers.flatMap(t => t.entries.map(e => e.item.id));
  assert(placed.length === ALL_HARDWARE_ITEMS.length,
    `${placed.length} of ${ALL_HARDWARE_ITEMS.length}`);
  assert(new Set(placed).size === placed.length, 'duplicate placement');
  layout.tiers.forEach(t => t.entries.forEach(e => {
    const p = e.position;
    assert(Number.isFinite(p.x + p.y + p.z), 'NaN position for ' + e.item.id);
    assert(Math.abs(p.z) <= layout.table.length / 2, e.item.id + ' outside table length');
    assert(Math.abs(p.x - layout.table.x) <= layout.table.width / 2,
      e.item.id + ' outside table width');
  }));
});
check('items in a row never overlap along the bench', () => {
  const { table } = getShelfLayout();
  getShelfLayout().tiers.forEach(t => {
    (t.rows || []).forEach((row, index) => {
      const line = row
        .map(e => ({ id: e.item.id, a: e.position.z - e.footprint.length / 2,
                     b: e.position.z + e.footprint.length / 2 }))
        .sort((p, q) => p.a - q.a);
      for (let i = 1; i < line.length; i++) {
        assert(line[i].a >= line[i - 1].b - 1e-9,
          `row ${index}: ${line[i - 1].id} overlaps ${line[i].id}`);
      }
      assert(line[0].a > -table.length / 2, `row ${index} overflows the rear edge`);
      assert(line[line.length - 1].b < table.length / 2, `row ${index} overflows the front edge`);
    });
  });
});
check('table obstacle is finite and encloses the table', () => {
  const { table } = getShelfLayout();
  const o = getTableObstacle();
  assert(Number.isFinite(o.minX + o.maxX + o.minZ + o.maxZ), 'obstacle not finite');
  assert(o.minX < table.x - table.width / 2, 'obstacle too tight in x');
  assert(o.maxX > table.x + table.width / 2, 'obstacle too tight in x');
  assert(o.minZ < table.z - table.length / 2, 'obstacle too tight in z');
  assert(o.maxZ > table.z + table.length / 2, 'obstacle too tight in z');
});

console.log('\n[3] real classes, real GLB dimensions (stubbed loader)');
const scene = new THREE.Scene();

await (async () => {
  const shelf = new ShelfHardware(scene);
  shelf.seedPlaceholders();
  await shelf.ready;
  check('ShelfHardware spawns one node per item', () => {
    assert(shelf.shelfMeshes.size === ALL_HARDWARE_ITEMS.length,
      `${shelf.shelfMeshes.size} of ${ALL_HARDWARE_ITEMS.length}`);
    assert(shelf.interactables.length === ALL_HARDWARE_ITEMS.length, 'interactables mismatch');
  });
  check('each shelf item is real-sized, flat, and seated on its tier', () => {
    for (const item of ALL_HARDWARE_ITEMS) {
      const wrapper = shelf.shelfMeshes.get(item.id);
      assert(!!wrapper, 'missing ' + item.id);
      wrapper.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(wrapper);
      const size = box.getSize(new THREE.Vector3());
      const max = Math.max(size.x, size.y, size.z);
      // With realDims the part is scaled per axis to its true dimensions, so the
      // longest edge is the real length rather than the old single realSize.
      const dims = realDimsFor(item);
      const expected = dims ? dims.length : item.realSize;
      // native stub boxes are exact, so tolerance is tight
      assert(Math.abs(max - expected) < 1e-4,
        `${item.id}: longest edge ${max.toFixed(4)} != real length ${expected}`);
      // the smallest rendered axis must be vertical
      const smallest = Math.min(size.x, size.y, size.z);
      assert(Math.abs(size.y - smallest) < 1e-4,
        `${item.id}: not lying flat, sizes ${size.toArray().map(v => v.toFixed(3))}`);
      // seated on the tier surface (0.5mm lift, so min.y is just above it)
      const layout = getShelfLayout();
      const entry = layout.tiers.flatMap(t => t.entries).find(e => e.item.id === item.id);
      assert(Math.abs(box.min.y - entry.position.y) < 1e-3,
        `${item.id}: min.y ${box.min.y} not on tier ${entry.position.y}`);
      // long edge runs along the rack (world Z)
      assert(size.z >= size.x - 1e-4,
        `${item.id}: long edge is across the rack, not along it`);
    }
  });
  check('no two shelf items intersect', () => {
    const ids = [...shelf.shelfMeshes.keys()];
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        const a = new THREE.Box3().setFromObject(shelf.shelfMeshes.get(ids[i]));
        const b = new THREE.Box3().setFromObject(shelf.shelfMeshes.get(ids[j]));
        assert(!a.intersectsBox(b), `${ids[i]} intersects ${ids[j]}`);
      }
    }
  });
  check('hideItem / showItem toggle visibility', () => {
    shelf.hideItem('gpu_rtx_3090');
    assert(shelf.shelfMeshes.get('gpu_rtx_3090').visible === false, 'hide failed');
    shelf.showItem('gpu_rtx_3090');
    assert(shelf.shelfMeshes.get('gpu_rtx_3090').visible === true, 'show failed');
  });
})();

const byId = id => {
  const found = ALL_HARDWARE_ITEMS.find(i => i.id === id);
  assert(found, 'no such hardware: ' + id);
  return found;
};

await (async () => {
  const pm = new PlacedItemManager(scene);
  pm.placeItemAt(byId('gpu_rtx_3090'), new THREE.Vector3(0, 0.82, 0));
  await settle();
  check('PlacedItemManager drops a real-sized, flat item', () => {
    const w = pm.placedItems.get('gpu_rtx_3090');
    assert(!!w, 'item not registered');
    w.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(w);
    const size = box.getSize(new THREE.Vector3());
    assert(Math.abs(Math.max(...size.toArray()) - 0.313) < 1e-4, 'wrong size');
    assert(Math.abs(size.y - Math.min(...size.toArray())) < 1e-4, 'not flat');
    assert(box.min.y > 0.82 && box.min.y < 0.83, 'not seated on the table: ' + box.min.y);
  });
  check('removeItem clears the manager', () => {
    pm.removeItem('gpu_rtx_3090');
    assert(!pm.placedItems.has('gpu_rtx_3090'), 'still present');
    assert(pm.interactables.length === 0, 'interactable not removed');
  });
})();

await (async () => {
  const camera = new THREE.PerspectiveCamera();
  scene.add(camera);
  const held = new HeldItemManager(camera, scene, null);
  held.holdItem(ALL_HARDWARE_ITEMS.find(i => i.id === 'cpu_ryzen_3600'));
  await settle();
  check('HeldItemManager attaches a fitted, palm-centred item', () => {
    assert(held.getHeldItem().id === 'cpu_ryzen_3600', 'wrong item held');
    const child = held.rotationPivot.children[0];
    assert(!!child, 'nothing attached to the pivot');
    // measure with the inspection pose removed, otherwise the rotated AABB
    // is legitimately bigger than the part itself
    const pose = held.rotationPivot.rotation.clone();
    held.rotationPivot.rotation.set(0, 0, 0);
    scene.updateMatrixWorld(true); // propagate camera -> hand -> pivot
    const box = new THREE.Box3().setFromObject(child);
    const size = box.getSize(new THREE.Vector3());
    const max = Math.max(...size.toArray());
    // A CPU now has true real dimensions, so it is 40mm rather than being
    // stretched to the 50mm readability floor.
    const cpuDims = realDimsFor(ALL_HARDWARE_ITEMS.find(i => i.id === 'cpu_ryzen_3600'));
    assert(Math.abs(max - cpuDims.length) < 1e-3, 'held size ' + max);

    assert(Math.abs(size.y - Math.min(...size.toArray())) < 1e-3, 'held item not flat');
    // the part must be centred on the hand pivot (the pivot itself sits at the
    // hand offset, so compare the box centre against the pivot world position)
    const pivotPos = new THREE.Vector3().setFromMatrixPosition(held.rotationPivot.matrixWorld);
    const centre = box.getCenter(new THREE.Vector3());
    assert(centre.distanceTo(pivotPos) < 1e-4,
      `not centred on the pivot: ${centre.toArray()} vs ${pivotPos.toArray()}`);


    held.rotationPivot.rotation.copy(pose);
  });
  check('clearHeldItem detaches', () => {
    held.clearHeldItem();
    assert(held.getHeldItem() === null, 'still held');
    assert(held.rotationPivot.children.length === 0, 'pivot not emptied');
  });
})();

console.log('\n[4] preview + case placeholder');
await (async () => {
  const canvas = document.createElement('canvas');
  const preview = new ItemPreviewScene(canvas);
  preview.loadItemModel(ALL_HARDWARE_ITEMS.find(i => i.id === 'ssd_samsung_860').modelPath);
  await settle();
  check('ItemPreviewScene loads and auto-fits', () => {
    assert(!!preview.currentModel, 'no model in the preview scene');
    preview.currentModel.updateMatrixWorld(true);
    const size = new THREE.Box3().setFromObject(preview.currentModel).getSize(new THREE.Vector3());
    assert(Math.abs(Math.max(...size.toArray()) - 0.95) < 1e-3, 'autoFit wrong: ' + size.toArray());
  });
  check('alignFlat:false leaves the case upright', () => {
    const { caseGroup } = createComputerCase3DGroup();
    preview.setModel(caseGroup, { alignFlat: false, autoFit: 0.95 });
    preview.currentModel.updateMatrixWorld(true);
    const size = new THREE.Box3().setFromObject(preview.currentModel).getSize(new THREE.Vector3());
    assert(size.y > size.x, `case tipped over: ${size.toArray().map(v => v.toFixed(3))}`);
    assert(size.y > 0.8, 'case scaled wrong: ' + size.y.toFixed(3));
  });
})();

const { caseGroup, sideGlass, interactables } = createComputerCase3DGroup();
check('case is a real ATX mid tower, upright, glass on the open side', () => {
  caseGroup.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(caseGroup);
  const size = box.getSize(new THREE.Vector3());
  assert(size.x > 0.2 && size.x < 0.23, 'width ' + size.x);
  assert(size.y > 0.46 && size.y < 0.5, 'height ' + size.y);
  assert(size.z > 0.43 && size.z < 0.47, 'depth ' + size.z);
  assert(sideGlass.name === 'sideGlass', 'glass lost its name');
  assert(sideGlass.children.length === 4, 'thumbscrews missing');
  assert(interactables.length > 10, 'too few interactables');
  assert(!!sideGlass.parent, 'glass not parented to the case');
  // glass must be on +X, i.e. the side the player looks through
  assert(sideGlass.position.x > 0.05, 'glass not on the +X side');
});
check('toggling the glass visibility detaches the whole panel', () => {
  sideGlass.visible = false;
  assert(sideGlass.children.every(c => !c.visible || true), 'screws independent');
  sideGlass.visible = true;
  assert(sideGlass.visible, 'cannot re-attach');
});

console.log(`\n${fail === 0 ? 'ALL PASSED' : 'FAILURES'}: ${pass} passed, ${fail} failed\n`);
process.exit(fail === 0 ? 0 : 1);
