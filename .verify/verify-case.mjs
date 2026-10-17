// Headless sanity check for the procedural PC case: stubs just enough DOM for
// the canvas texture helpers, then inspects the assembled bounding box.
import * as THREE from 'file:///D:/pc-builder-3d/node_modules/three/build/three.module.js';

globalThis.document = {
  createElement() {
    return {
      width: 0,
      height: 0,
      getContext() {
        return new Proxy({}, { get: () => () => {} });
      }
    };
  }
};

const { createComputerCase3DGroup } = await import(
  'file:///D:/pc-builder-3d/src/scene/Room.js'
);

const { caseGroup, sideGlass, chassis, frontPanel, interactables, metrics } = createComputerCase3DGroup();

caseGroup.updateMatrixWorld(true);
const box = new THREE.Box3().setFromObject(caseGroup);
const size = box.getSize(new THREE.Vector3());

let meshes = 0;
let triangles = 0;
const names = {};
caseGroup.traverse(o => {
  if (!o.isMesh) return;
  meshes++;
  triangles += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3;
  if (o.name) names[o.name] = (names[o.name] || 0) + 1;
});

console.log('meshes            ', meshes);
console.log('triangles         ', Math.round(triangles));
console.log('named parts       ', JSON.stringify(names));
console.log('interactables     ', interactables.length);
console.log('sideGlass found   ', !!sideGlass, sideGlass && sideGlass.name);
console.log('chassis found     ', !!chassis);
console.log('frontPanel found  ', !!frontPanel);
console.log('glass screws      ', sideGlass.children.length);
console.log(
  'case size (m)     ',
  size.toArray().map(v => v.toFixed(4)).join(' x '),
  '  (ATX mid tower target ~0.21 x 0.48 x 0.45)'
);
console.log(
  'case min          ',
  box.min.toArray().map(v => v.toFixed(4)).join(', ')
);

// Every part must stay inside the 0.21 x 0.478 x 0.45 shell (thumbscrews poke out)
const shell = new THREE.Box3(
  new THREE.Vector3(-W_(), 0, -0.225),
  new THREE.Vector3(W_(), 0.478, 0.225)
);
function W_() { return 0.105; }

let worst = null;
caseGroup.traverse(o => {
  if (!o.isMesh || o.name === 'sideGlass') return;
  o.geometry.computeBoundingBox();
  const wb = o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld);
  const over = {
    minX: -0.105 - wb.min.x,
    maxX: wb.max.x - 0.105,
    minY: -wb.min.y,
    maxY: wb.max.y - 0.478,
    minZ: -0.225 - wb.min.z,
    maxZ: wb.max.z - 0.225
  };
  const k = Object.entries(over).filter(([, v]) => v > 0.002);
  if (k.length && (!worst || k[0][1] > worst.v)) worst = { v: k[0][1], part: o.name || o.type, over: k };
});
console.log('worst protrusion  ', worst ? JSON.stringify(worst) : 'none');

// Verify the four ATX rear openings were actually punched
const rear = caseGroup.children.find(c => c.name === 'caseRear');
const pos = rear.geometry.attributes.position;
const zs = new Set();
for (let i = 0; i < pos.count; i++) zs.add(pos.getZ(i).toFixed(4));
console.log('rear panel verts  ', pos.count, 'z values', [...zs].join(','));

// ---- real-life layout clearances -----------------------------------------
console.log('\nmetrics', JSON.stringify(metrics, null, 2));

let fail = 0;
const assert = (c, m) => { if (!c) { fail++; console.log('  FAIL ' + m); } else console.log('  ok   ' + m); };

console.log('\nreal-life clearances');
assert(metrics.coolerClearance > 0.155 && metrics.coolerClearance < 0.185,
  `board-to-glass ${(metrics.coolerClearance * 1000).toFixed(0)}mm clears a mid-tower cooler`);
assert(metrics.cableChannel > 0.012 && metrics.cableChannel < 0.06,
  `cable channel behind the board ${(metrics.cableChannel * 1000).toFixed(0)}mm`);
assert(metrics.boardBottomToShroud >= -0.002,
  `board bottom sits on/above the shroud (${(metrics.boardBottomToShroud * 1000).toFixed(1)}mm)`);
assert(metrics.standoffs >= 6,
  `${metrics.standoffs}/9 ATX standoffs placed (notch removed the rest)`);

// rear fan must not intersect the tray notch. The disc only crosses the tray
// along a chord, so use the chord at the tray's X range rather than the sphere.
{
  const fanY0 = metrics.rearFan.y - metrics.rearFan.radius;
  const fanY1 = metrics.rearFan.y + metrics.rearFan.radius;
  const tray = caseGroup.children.filter(c => c.name === 'motherboardTray');
  let clash = null;
  for (const panel of tray) {
    const box = new THREE.Box3().setFromObject(panel);
    if (box.min.z >= -0.19) continue;              // fan body does not reach here
    // chord half-height of the disc at this panel's farthest x from the hub
    const dx = Math.max(Math.abs(box.min.x - metrics.rearFan.x),
                        Math.abs(box.max.x - metrics.rearFan.x));
    const half = Math.sqrt(Math.max(0, metrics.rearFan.radius ** 2 - dx ** 2));
    const low = metrics.rearFan.y - half;
    const high = metrics.rearFan.y + half;
    // genuine overlap only if the panel's y span crosses the disc's chord
    if (box.max.y > low && box.min.y < high) {
      clash = { box, low, high };
      break;
    }
  }
  assert(!clash,
    clash
      ? `rear fan disc spans y=${clash.low.toFixed(4)}..${clash.high.toFixed(4)} but the tray occupies y=${clash.box.min.y.toFixed(4)}..${clash.box.max.y.toFixed(4)}`
      : 'rear exhaust fan clears the motherboard tray');
}

// roof fan must not intersect the front I/O cluster or the tray
{
  const roofFanZ0 = metrics.roofFan.z - metrics.roofFan.radius;
  const roofFanZ1 = metrics.roofFan.z + metrics.roofFan.radius;
  assert(roofFanZ1 < 0.155, `roof fan clears the front I/O (ends at ${(roofFanZ1 * 1000).toFixed(0)}mm)`);
  assert(roofFanZ0 > -0.03, 'roof fan clears the rear vent strip');
}

// the shroud chamber must actually hold a 140 x 150 x 86 mm ATX power supply
{
  const s = metrics.psuChamber;
  assert(s.width >= 0.14, `PSU chamber is ${(s.width * 1000).toFixed(0)}mm wide (need 140)`);
  assert(s.depth >= 0.15, `PSU chamber is ${(s.depth * 1000).toFixed(0)}mm deep (need 150)`);
  assert(s.height >= 0.086, `PSU chamber is ${(s.height * 1000).toFixed(0)}mm tall (need 86)`);
  assert(s.width <= 0.16, 'PSU chamber is wider than a real ATX unit allows');
}

// every real opening must be a real hole (area check on both punched panels)
{
  const area = mesh => {
    const p = mesh.geometry.attributes.position;
    const i = mesh.geometry.index;
    const n = i ? i.count : p.count;
    let a = 0;
    const v0 = new THREE.Vector3(), v1 = new THREE.Vector3(), v2 = new THREE.Vector3();
    const e1 = new THREE.Vector3(), e2 = new THREE.Vector3();
    for (let k = 0; k < n; k += 3) {
      v0.fromBufferAttribute(p, i ? i.getX(k) : k);
      v1.fromBufferAttribute(p, i ? i.getX(k + 1) : k + 1);
      v2.fromBufferAttribute(p, i ? i.getX(k + 2) : k + 2);
      e1.subVectors(v1, v0); e2.subVectors(v2, v0);
      a += e1.cross(e2).length() / 2;
    }
    return a;
  };
  const roof = caseGroup.children.find(c => c.name === 'caseTop');
  const roofArea = 0.206 * 0.446 - Math.PI * metrics.roofFan.radius ** 2;
  assert(Math.abs(area(roof) - roofArea) < 0.0006,
    `roof panel punched for a 140mm fan (${area(roof).toFixed(5)} vs ${roofArea.toFixed(5)} m2)`);
  const rearArea = 0.206 * 0.452
    - (Math.PI * metrics.rearFan.radius ** 2 + 0.159 * 0.042
      + 0.122 * 0.145 + 0.14 * 0.086);
  assert(Math.abs(area(rear) - rearArea) < 0.0006,
    `rear panel punched for fan + I/O + 7 slots + PSU (${area(rear).toFixed(5)} vs ${rearArea.toFixed(5)} m2)`);
}

console.log(fail === 0 ? '\ncase layout OK' : `\n${fail} LAYOUT FAILURE(S)`);
process.exit(fail === 0 ? 0 : 1);
