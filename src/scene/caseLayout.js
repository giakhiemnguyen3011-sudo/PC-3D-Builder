import * as THREE from 'three';

/**
 * Single source of truth for the procedural ATX mid-tower.
 *
 * Every number here is a real chassis measurement, so the 3D placeholder in the
 * room and the interactive Build Zone stay in sync and a real part dropped into
 * a zone lands where it would land on a bench.
 *
 * Axes:  +X = tempered glass side   -X = plain steel side
 *        +Y = up                    -Y = down
 *        +Z = front panel           -Z = rear panel
 */

// ------------------------------------------------------------------ shell
export const CASE = {
  width: 0.21,   // X
  height: 0.46,  // Y (body only, feet excluded)
  depth: 0.45,   // Z
  feet: 0.018,
  sheet: 0.009,  // steel thickness
  glass: 0.004
};

const { width: W, height: H, depth: D, feet: FEET, sheet: T, glass: GT } = CASE;

export const CASE_REF = {
  yFloor: FEET + T,
  yTop: FEET + H,
  zRear: -D / 2,
  zFront: D / 2,
  xGlassOuter: W / 2,
  xGlassInner: W / 2 - GT,
  xPlainInner: -W / 2 + T
};

// ------------------------------------------------------------ motherboard
// ATX: 244mm across the case depth, 305mm tall, rear I/O at the top rear.
const boardZ0 = CASE_REF.zRear + 0.03;
const boardLength = 0.244;
const boardHeight = 0.305;
const boardTop = CASE_REF.yTop - 0.05;

export const BOARD = {
  z0: boardZ0,
  z1: boardZ0 + boardLength,
  top: boardTop,
  bottom: boardTop - boardHeight,
  get centreY() { return (this.top + this.bottom) / 2; },
  get centreZ() { return (this.z0 + this.z1) / 2; }
};

// -------------------------------------------------------------------- tray
// The tray sits far enough behind the glass for a ~150mm tower cooler, which
// leaves the slim cable channel every real case has behind the board.
export const TRAY = {
  x: -0.05,
  thickness: 0.008,
  get face() { return this.x + this.thickness / 2; },   // board mounting face
  get back() { return this.x - this.thickness / 2; },
  z0: BOARD.z0 - 0.007,
  z1: BOARD.z1 + 0.012,
  y0: 0.122,
  y1: CASE_REF.yTop - 0.012,
  // top-rear notch that gives the 120mm rear exhaust fan its clearance
  rearTop: 0.36,
  rearTopStrip: 0.46,
  // CPU cooler cut-out, centred on the socket
  cutSize: 0.078,
  cutY: boardTop - 0.05,
  cutZ: boardZ0 + 0.115,
  get cutY0() { return this.cutY - this.cutSize / 2; },
  get cutY1() { return this.cutY + this.cutSize / 2; },
  get cutZ0() { return this.cutZ - this.cutSize / 2; },
  get cutZ1() { return this.cutZ + this.cutSize / 2; }
};

// ------------------------------------------------------------ PSU shroud
// Chamber sized for a real ATX unit: 140 wide x 150 deep x 86 tall.
export const SHROUD = {
  top: 0.122,
  x0: CASE_REF.xPlainInner,
  x1: 0.048,
  z0: CASE_REF.zRear + 0.006,
  z1: 0.14,
  get depth() { return this.z1 - this.z0; },
  get width() { return this.x1 - this.x0; },
  get midZ() { return (this.z0 + this.z1) / 2; },
  get midX() { return (this.x0 + this.x1) / 2; }
};

// ------------------------------------------------------------ rear panel
export const REAR = {
  plane: CASE_REF.zRear + T / 2,
  centreY: FEET + H / 2,
  halfW: (W - 0.004) / 2,
  halfH: (H - 0.008) / 2,
  fan: { x: -0.012, y: 0.409, r: 0.057 },
  io: { y: 0.326, w: 0.159, h: 0.042 },
  slots: { x: -0.012, top: 0.2865, pitch: 0.0203, span: 0.145, w: 0.122 },
  psu: { x: -0.024, w: 0.14, h: 0.086, y: CASE_REF.yFloor + 0.043 }
};
REAR.slots.y = REAR.slots.top - REAR.slots.span / 2;
REAR.toLocalY = worldY => worldY - REAR.centreY;

// ------------------------------------------------------------------- roof
export const ROOF = {
  fan: { x: 0, z: 0.045, r: 0.07 },
  io: { x: -0.02, z: CASE_REF.zFront - 0.05 }
};

/** Tray panels, in case-local [yMin, yMax, zMin, zMax]. Voids: CPU cut-out + fan notch. */
export function trayRects() {
  return [
    [TRAY.y0, TRAY.rearTop, TRAY.z0, TRAY.cutZ0],
    [TRAY.rearTopStrip, TRAY.y1, TRAY.z0, TRAY.cutZ0],
    [TRAY.y0, TRAY.cutY0, TRAY.cutZ0, TRAY.cutZ1],
    [TRAY.cutY1, TRAY.y1, TRAY.cutZ0, TRAY.cutZ1],
    [TRAY.y0, TRAY.y1, TRAY.cutZ1, TRAY.z1]
  ];
}

export function trayHas(y, z) {
  return trayRects().some(
    ([y0, y1, z0, z1]) => y >= y0 && y <= y1 && z >= z0 && z <= z1
  );
}

/** The nine ATX mounting-hole positions, case-local. */
export const ATX_STANDOFFS = [
  [0.011, 0.006], [0.011, 0.075], [0.011, 0.144],
  [0.101, 0.006], [0.101, 0.144],
  [0.191, 0.006], [0.191, 0.075], [0.191, 0.144],
  [0.101, 0.222]
].map(([u, v]) => ({ y: boardTop - v, z: boardZ0 + u }));

/** Standoffs that actually exist: the top-rear one falls inside the fan notch. */
export const ATX_STANDOFFS_ACTIVE = ATX_STANDOFFS.filter(s => trayHas(s.y, s.z));

/**
 * Build Zone snap anchors, in case-local space.
 *  anchor     = where a correctly seated part sits
 *  size       = the zone footprint, used for the highlight box and screen-space snap
 *  mount      = how the part is oriented once installed:
 *                 long - where the part's longest edge points
 *                 thin - where the part's thinnest axis (its visible face) points
 *               Chosen so a builder looking through the glass pane can read
 *               every part at a glance.
 *  face       - which way fasteners come in, and therefore where screw heads sit
 *  faceLift   - how far the fastener heads stand proud of that face
 *  screws     = how many fasteners lock the part down
 *  screwPts   = authored offsets, read as:
 *                 face +/-X : [a, b] = (up, along the rack)
 *                 face +Y   : [a, b] = (along the rack, across)
 *                 face -Z   : [a, b] = (across, up)
 *               so fasteners land where a real builder would put them, on the
 *               same side as the part's own mounting face.
 */
const boardCentreY = (boardTop + (boardTop - boardHeight)) / 2;
const boardCentreZ = boardZ0 + boardLength / 2;

export const CASE_ZONES = {
  glass: {
    label: 'Nắp kính cường lực',
    anchor: [CASE_REF.xGlassOuter, FEET + H / 2, 0],
    size: [0.02, H - 0.012, D - 0.012],
    mount: { long: [0, 1, 0], thin: [1, 0, 0] },
    face: [1, 0, 0],
    faceLift: 0.008,
    screws: 4,
    screwPts: [[-0.17, -0.17], [-0.17, 0.17], [0.17, -0.17], [0.17, 0.17]]
  },
  motherboard: {
    label: 'Vị trí bo mạch chủ ATX',
    anchor: [TRAY.face + 0.002, boardCentreY, boardCentreZ],
    size: [0.006, boardHeight, boardLength],
    // board stands upright in the tray, components towards the glass
    mount: { long: [0, 1, 0], thin: [1, 0, 0] },
    face: [1, 0, 0],
    faceLift: 0.014,
    // the real ATX hole pattern - one hole sits under the fan notch, so this
    // chassis genuinely fastens with 8, not 9
    screws: ATX_STANDOFFS_ACTIVE.length,
    screwPts: ATX_STANDOFFS_ACTIVE.map(s => [s.y - boardCentreY, s.z - boardCentreZ])
  },
  cpu: {
    label: 'Socket CPU',
    anchor: [TRAY.face + 0.003, TRAY.cutY, TRAY.cutZ],
    size: [0.01, 0.042, 0.042],
    // flat against the board, heatspreader facing the glass
    mount: { long: [0, 1, 0], thin: [1, 0, 0] },
    face: [1, 0, 0],
    faceLift: 0.008,
    screws: 0
  },
  cooler: {
    label: 'Tản nhiệt khí trên socket',
    anchor: [TRAY.face + 0.072, TRAY.cutY + 0.015, TRAY.cutZ],
    size: [0.14, 0.16, 0.12],
    // tower stands tall, fan turned towards the glass so it reads clearly
    mount: { long: [0, 1, 0], thin: [0, 0, 1] },
    face: [1, 0, 0],
    faceLift: 0.15,
    screws: 4,
    // spring-loaded mounting post at each corner, tightened in an X
    screwPts: [[-0.033, -0.033], [-0.033, 0.033], [0.033, -0.033], [0.033, 0.033]]
  },
  ram: {
    label: 'Khe RAM DDR4 (cắm khe 2 & 4)',
    anchor: [TRAY.face + 0.008, BOARD.bottom + 0.1, BOARD.z1 - 0.045],
    size: [0.014, 0.05, 0.132],
    // DIMM stands in its slot with the light bar towards the glass
    mount: { long: [0, 1, 0], thin: [1, 0, 0] },
    face: [1, 0, 0],
    faceLift: 0.012,
    screws: 0
  },
  ssd: {
    label: 'Khay ổ cứng 2.5" trên tấm che nguồn',
    anchor: [-0.01, SHROUD.top + 0.005, 0.05],
    size: [0.1, 0.008, 0.07],
    // 2.5" drive lies in the tray, label upwards
    mount: { long: [1, 0, 0], thin: [0, 1, 0] },
    face: [0, 1, 0],
    faceLift: 0.01,
    screws: 2,
    // both screws at the tail of the drive
    screwPts: [[0, -0.03], [0, 0.03]]
  },
  psu: {
    label: 'Hộc nguồn ATX dưới đáy',
    // a 150mm unit sits at the rear of the bay
    anchor: [SHROUD.midX, CASE_REF.yFloor + 0.043, SHROUD.z0 + 0.075],
    size: [SHROUD.width - 0.01, 0.086, 0.15],
    mount: { long: [1, 0, 0], thin: [0, 1, 0] },
    // screwed in through the shroud wall you can see through the glass
    face: [1, 0, 0],
    faceLift: 0.085,
    screws: 4,
    screwPts: [[-0.03, -0.06], [-0.03, 0.06], [0.03, -0.06], [0.03, 0.06]]
  },
  gpu: {
    label: 'Khe PCIe x16',
    // 313mm card hangs from the rear slots, so its centre sits forward of centre
    anchor: [TRAY.face + 0.062, REAR.slots.top - 0.009, BOARD.z0 + 0.157],
    size: [0.112, 0.05, 0.313],
    // card hangs nose-forward, fans down, backplate up towards the glass
    mount: { long: [0, 0, 1], thin: [0, 1, 0] },
    face: [0, 1, 0],
    faceLift: 0.032,
    screws: 2,
    // retention screws on the bracket at the rear, 120mm apart
    screwPts: [[-0.12, -0.05], [-0.12, 0.05]]
  },
  cables: {
    label: 'Dây nguồn 24-pin & 8-pin CPU',
    anchor: [TRAY.back - 0.012, BOARD.centreY, BOARD.centreZ],
    size: [0.03, 0.14, 0.12],
    face: [-1, 0, 0],
    faceLift: 0.01,
    screws: 0
  },
  display: {
    label: 'Cổng xuất hình DisplayPort',
    anchor: [-0.03, REAR.io.y, CASE_REF.zRear + 0.012],
    size: [0.05, 0.05, 0.02],
    face: [0, 0, -1],
    faceLift: 0.006,
    screws: 0
  },
  power: {
    label: 'Nút nguồn trên nắp trên',
    anchor: [ROOF.io.x, CASE_REF.yTop + 0.004, ROOF.io.z],
    size: [0.022, 0.012, 0.022],
    face: [0, 1, 0],
    faceLift: 0.004,
    screws: 0
  }
};

/** Builds the quaternion that stands a fitted part up in its mount orientation. */
export function mountQuaternion(zone) {
  const m = zone.mount;
  if (!m) return null;
  const long = new THREE.Vector3(...m.long).normalize();
  const thin = new THREE.Vector3(...m.thin).normalize();
  const spare = new THREE.Vector3().crossVectors(long, thin).normalize();

  const images = new Array(3);
  images[0] = long.clone();   // part's longest edge (local +X)
  images[1] = thin.clone();   // part's thinnest axis (local +Y)
  images[2] = spare.clone();  // part's mid axis (local +Z)

  const basis = new THREE.Matrix4().makeBasis(images[0], images[1], images[2]);
  if (basis.determinant() < 0) images[2].negate();

  return new THREE.Quaternion().setFromRotationMatrix(
    new THREE.Matrix4().makeBasis(images[0], images[1], images[2])
  );
}


/** Bounding box of the whole chassis, used to frame the camera. */
export const CASE_BOUNDS = {
  min: [-W / 2, 0, -D / 2],
  max: [W / 2, FEET + H, D / 2]
};

export { W as CASE_WIDTH, H as CASE_HEIGHT, D as CASE_DEPTH, T as CASE_SHEET, GT as CASE_GLASS };
