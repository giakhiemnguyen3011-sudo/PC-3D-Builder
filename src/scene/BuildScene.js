import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { buildFittedModel } from './ModelFit.js';
import { createComputerCase3DGroup } from './Room.js';
import { CASE, CASE_REF, CASE_ZONES, CASE_BOUNDS, mountQuaternion } from './caseLayout.js';

const ZONE_TINT = {
  active: 0x38bdf8,
  locked: 0x22c55e,
  hint: 0xfbbf24
};

const GLASS_X = CASE_REF.xGlassOuter - CASE.glass / 2;
const GLASS_SLIDE = 0.26;
const ZOOM_MIN = 0.35;
const ZOOM_MAX = 3.2;

/**
 * Interactive "Build Zone": a 50% x-ray case with snap zones, a ghost part that
 * tracks the cursor, fastener targets and per-step camera framing.
 *
 * The case is locked glass-side-to-camera on purpose - a builder works from one
 * fixed side of the chassis, and a spinning prop makes precise placement hard.
 * The camera still glides between zones, which is how you "zoom in" on a 4 cm CPU
 * without ever rotating the model.
 */
export class BuildScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.disposed = false;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.01, 100);
    this.camera.position.set(0, 0, 1.2);

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    this.loader = new GLTFLoader();
    this.modelCache = new Map();

    this.raycaster = new THREE.Raycaster();
    this.pointerNdc = new THREE.Vector2();
    this.pointerInside = false;
    this.pointerPlane = new THREE.Plane();

    this.caseGroup = null;
    this.sideGlass = null;
    this.glassOn = true;
    this.glassT = 1;
    this.glassGoal = 1;

    this.zoneMeshes = new Map();
    this.zoneList = [];
    this.screwGroups = new Map();
    this.placedParts = new Map();
    this.ghost = null;
    this.activeZone = null;
    this.lockedZone = null;
    this.powered = false;
    this._lastFocusZone = null;
    this.zoom = 1;
    this.screwHolders = [];   // tracked, so we never traverse the scene per frame
    this.cableHolders = [];

    this.pivot = new THREE.Group();
    this.scene.add(this.pivot);

    // caseRoot owns the ONE transform that turns the chassis so its glass side
    // faces the viewer. Everything placed inside the case is authored in plain
    // case-local coordinates and parented here, so a zone anchor in caseLayout.js
    // always means the same point in the room, the case mesh and the part.
    this.caseRoot = new THREE.Group();
    this.caseRoot.rotation.y = -Math.PI / 2;
    this.caseRoot.position.set(0, -CASE.feet, 0);
    this.pivot.add(this.caseRoot);

    this.cameraGoal = new THREE.Vector3();
    this.lookGoal = new THREE.Vector3();
    this.cameraMoving = false;

    this._v1 = new THREE.Vector3();
    this._v2 = new THREE.Vector3();
    this._half = new THREE.Vector3();
    this._centre = new THREE.Vector3();
    this._hit = new THREE.Vector3();
    this._screwAxis = { x: new THREE.Vector3(1, 0, 0), y: new THREE.Vector3(0, 1, 0) };

    this.setupLights();
    this.buildCase();
  }

  // ------------------------------------------------------------- lighting
  setupLights() {
    this.scene.add(new THREE.AmbientLight(0xf1f5f9, 0.75));

    const key = new THREE.DirectionalLight(0xffffff, 1.9);
    key.position.set(1.4, 2.4, 2.6);
    this.scene.add(key);

    const fill = new THREE.DirectionalLight(0x7dd3fc, 1.0);
    fill.position.set(-2.4, 0.6, 1.2);
    this.scene.add(fill);

    const rim = new THREE.DirectionalLight(0xa855f7, 0.9);
    rim.position.set(0.4, 1.6, -2.4);
    this.scene.add(rim);

    // Glows once the machine is powered on
    this.powerLight = new THREE.PointLight(0x38bdf8, 0, 0.6);
    this.powerLight.position.set(...CASE_ZONES.power.anchor);
    this.caseRoot.add(this.powerLight);
  }

  // ----------------------------------------------------------------- case
  buildCase() {
    const built = createComputerCase3DGroup({ xray: true });
    this.caseGroup = built.caseGroup;
    this.sideGlass = built.sideGlass;

    // Glass side towards the viewer, and no auto-rotation. The turn lives on
    // caseRoot, so the chassis itself keeps its authored case-local transform.
    this.caseGroup.position.set(0, 0, 0);
    this.caseGroup.quaternion.identity();
    this.caseGroup.scale.set(1, 1, 1);
    this.caseRoot.add(this.caseGroup);
    this.pivot.updateMatrixWorld(true);
    this.caseGroup.traverse(child => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });

    this.buildZoneMarkers();
    this.setGlass(true, true);
    this.focusCase();
    this.snapCamera();
  }

  buildZoneMarkers() {
    const geo = new THREE.BoxGeometry(1, 1, 1);
    Object.entries(CASE_ZONES).forEach(([id, zone]) => {
      const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
        color: ZONE_TINT.hint,
        transparent: true,
        opacity: 0,
        depthWrite: false
      }));
      mesh.position.set(...zone.anchor);
      mesh.scale.set(
        Math.max(zone.size[0], 0.022),
        Math.max(zone.size[1], 0.022),
        Math.max(zone.size[2], 0.022)
      );
      mesh.visible = false;
      mesh.renderOrder = 5;
      mesh.userData.zoneId = id;
      this.caseRoot.add(mesh);
      this.zoneMeshes.set(id, mesh);
      this.zoneList.push(mesh);
    });
  }

  // ---------------------------------------------------------- glass panel
  setGlass(on, instant = false) {
    this.glassOn = on;
    this.glassGoal = on ? 1 : 0;
    if (instant) {
      this.glassT = this.glassGoal;
      this.applyGlass();
    }
  }

  applyGlass() {
    if (!this.sideGlass) return;
    this.sideGlass.visible = this.glassT > 0.02;
    this.sideGlass.position.x = GLASS_X + (1 - this.glassT) * GLASS_SLIDE;
  }

  // --------------------------------------------------------- camera moves
  focusCase() {
    this._lastFocusZone = null;
    this.frameBox(
      new THREE.Box3(new THREE.Vector3(...CASE_BOUNDS.min), new THREE.Vector3(...CASE_BOUNDS.max)),
      1.18
    );
  }

  /** Close in on one zone so a 4cm CPU is actually workable. */
  focusZone(zoneId) {
    const zone = CASE_ZONES[zoneId];
    if (!zone) return this.focusCase();
    this._lastFocusZone = zoneId;

    const pad = 0.05;
    const half = new THREE.Vector3(
      Math.max(zone.size[0], 0.03) / 2 + pad,
      Math.max(zone.size[1], 0.03) / 2 + pad,
      Math.max(zone.size[2], 0.03) / 2 + pad
    );
    const centre = new THREE.Vector3(...zone.anchor);
    this.frameBox(
      new THREE.Box3(centre.clone().sub(half), centre.clone().add(half)),
      1.35
    );
  }

  setFocusZone(zoneId) {
    if (zoneId) this.focusZone(zoneId);
    else this.focusCase();
  }

  /**
   * Fit a case-local box to the viewport, then glide the camera there.
   * The chassis is turned -90 degrees about Y to face the glass at you, so a
   * case-local box has to be carried into pivot space before it means anything
   * to the camera - otherwise the frame is fitted to the wrong axis.
   */
  frameBox(box, margin) {
    this.caseRoot.updateMatrixWorld(true);
    const world = new THREE.Box3();
    for (let i = 0; i < 8; i++) {
      world.expandByPoint(this._v1.set(
        i & 1 ? box.max.x : box.min.x,
        i & 2 ? box.max.y : box.min.y,
        i & 4 ? box.max.z : box.min.z
      ).applyMatrix4(this.caseRoot.matrixWorld));
    }

    const size = world.getSize(new THREE.Vector3());
    const centre = world.getCenter(new THREE.Vector3());
    const tanV = Math.tan(THREE.MathUtils.degToRad(this.camera.fov) / 2);
    const tanH = tanV * Math.max(this.camera.aspect, 0.2);
    const dist =
      (Math.max(size.y / 2 / tanV, size.x / 2 / tanH) * margin + size.z / 2) / this.zoom;

    this.lookGoal.copy(centre);
    this.cameraGoal.set(centre.x, centre.y, centre.z + dist);
    this.cameraMoving = true;
  }

  /**
   * Scroll wheel dollies the camera in and out. The model never rotates, so this
   * is the only way to change your viewpoint inside the Build Zone.
   */
  zoomBy(notches) {
    const next = THREE.MathUtils.clamp(
      this.zoom * Math.pow(1.15, -notches),
      ZOOM_MIN,
      ZOOM_MAX
    );
    if (Math.abs(next - this.zoom) < 1e-4) return this.zoom;
    this.zoom = next;
    this._refocus();
    return this.zoom;
  }

  resetZoom() {
    this.zoom = 1;
    this._refocus();
  }

  _refocus() {
    if (this._lastFocusZone) this.focusZone(this._lastFocusZone);
    else this.focusCase();
    this.snapCamera();
  }

  snapCamera() {
    this.camera.position.copy(this.cameraGoal);
    this.camera.lookAt(this.lookGoal);
    this.cameraMoving = false;
  }

  // -------------------------------------------------------------- pointer
  setPointer(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return false;
    this.pointerNdc.set(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1
    );
    this.pointerInside =
      clientX >= rect.left && clientX <= rect.right &&
      clientY >= rect.top && clientY <= rect.bottom;
    return this.pointerInside;
  }

  clearPointer() {
    this.pointerInside = false;
  }

  /** Cursor position in case-local space, on the plane the camera looks at. */
  pointerWorld() {
    this.raycaster.setFromCamera(this.pointerNdc, this.camera);
    const normal = this._v2.set(0, 0, 1).applyQuaternion(this.camera.quaternion).negate();
    this.pointerPlane.setFromNormalAndCoplanarPoint(normal, this.lookGoal);
    if (!this.raycaster.ray.intersectPlane(this.pointerPlane, this._hit)) return null;
    this.caseRoot.updateMatrixWorld(true);
    return this.caseRoot.worldToLocal(this._hit.clone());
  }

  /**
   * Screen-space containment test for a zone. Resolution independent and far
   * more forgiving than a 3D distance test, which matters when the target is a
   * 40mm CPU socket filling a fraction of the canvas.
   */
  isOverZone(zoneId, extraPx = 24) {
    const zone = CASE_ZONES[zoneId];
    const marker = this.zoneMeshes.get(zoneId);
    if (!zone || !marker || !this.pointerInside) return false;

    this.pivot.updateMatrixWorld(true);
    marker.updateMatrixWorld(true);

    const rect = this.canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return false;

    const toPx = v => {
      const ndc = v.clone().project(this.camera);
      return [((ndc.x + 1) / 2) * rect.width, ((-ndc.y + 1) / 2) * rect.height, ndc.z];
    };

    const centre = new THREE.Vector3();
    marker.getWorldPosition(centre);
    const [cx, cy, cz] = toPx(centre);
    if (!Number.isFinite(cx) || !Number.isFinite(cy) || cz > 1) return false;

    const cursorX = ((this.pointerNdc.x + 1) / 2) * rect.width;
    const cursorY = ((-this.pointerNdc.y + 1) / 2) * rect.height;

    const half = new THREE.Vector3(
      Math.max(zone.size[0], 0.03) / 2,
      Math.max(zone.size[1], 0.03) / 2,
      Math.max(zone.size[2], 0.03) / 2
    );
    let radX = 0;
    let radY = 0;
    for (let i = 0; i < 8; i++) {
      const [ex, ey] = toPx(this._v1.set(
        centre.x + (i & 1 ? half.x : -half.x),
        centre.y + (i & 2 ? half.y : -half.y),
        centre.z + (i & 4 ? half.z : -half.z)
      ));
      radX = Math.max(radX, Math.abs(ex - cx));
      radY = Math.max(radY, Math.abs(ey - cy));
    }
    radX = Math.max(radX, 12);
    radY = Math.max(radY, 12);

    return (
      Math.abs(cursorX - cx) <= radX + extraPx &&
      Math.abs(cursorY - cy) <= radY + extraPx
    );
  }

  // ----------------------------------------------------------------- ghost
  /**
   * The interior of the chassis in case-local space. The ghost is clamped into
   * this box (minus the part's own half-extent) so a carried part can never drift
   * out through the panels while the cursor roams the canvas.
   */
  get caseInterior() {
    if (!this._interior) {
      const pad = CASE.sheet + 0.004;
      this._interior = new THREE.Box3(
        new THREE.Vector3(-CASE.width / 2 + pad, pad, -CASE.depth / 2 + pad),
        new THREE.Vector3(CASE.width / 2 - pad, CASE.feet + CASE.height - pad, CASE.depth / 2 - pad)
      );
    }
    return this._interior;
  }

  setGhostItem(item) {
    this.clearGhost();
    if (!item) return Promise.resolve(false);
    return this._loadFitted(item).then(fitted => {
      if (!fitted || this.disposed) return false;
      const holder = new THREE.Group();
      holder.add(fitted);
      holder.visible = false;
      this.caseRoot.add(holder);

      // Bounds and the centre offset are measured per zone in _applyGhostMount,
      // once the mount turn is known.
      this.ghost = {
        item,
        group: holder,
        zoneId: null,
        mountZone: null,
        bounds: null,
        centreOffset: new THREE.Vector3(),
        half: new THREE.Vector3()
      };
      return true;
    });
  }

  clearGhost() {
    if (this.ghost) {
      this.caseRoot.remove(this.ghost.group);
      this.ghost = null;
    }
    if (this.activeZone) this.setZoneState(this.activeZone, 'active');
  }

  get ghostOverTarget() {
    return !!(this.ghost && this.ghost.zoneId);
  }

  /**
   * Puts the ghost in its mount orientation for `zoneId` and measures where the
   * part's centre and extents land in case-local space. Cached per zone so a
   * pointer move never walks the model's bounding box.
   */
  _applyGhostMount(zoneId, zone) {
    const ghost = this.ghost;
    if (ghost.mountZone === zoneId) return;

    const mount = mountQuaternion(zone);
    if (mount) ghost.group.quaternion.copy(mount);
    ghost.group.position.set(0, 0, 0);
    ghost.group.updateMatrixWorld(true);

    // A bounding box comes out in world space, and the chassis is turned -90
    // degrees, so the corners are mapped back into the holder's parent frame -
    // the same frame the zone anchor and the clamp live in.
    const world = new THREE.Box3().setFromObject(ghost.group);
    const toCase = new THREE.Matrix4().copy(ghost.group.parent.matrixWorld).invert();
    const box = new THREE.Box3();
    for (let i = 0; i < 8; i++) {
      box.expandByPoint(this._v1.set(
        i & 1 ? world.max.x : world.min.x,
        i & 2 ? world.max.y : world.min.y,
        i & 4 ? world.max.z : world.min.z
      ).applyMatrix4(toCase));
    }
    ghost.bounds = box;
    ghost.centreOffset.copy(box.getCenter(this._centre));
    ghost.half.copy(box.getSize(this._half)).multiplyScalar(0.5);
    ghost.mountZone = zoneId;
  }

  /**
   * Ghost tracks the cursor, magnetised onto the target zone when close.
   *
   * `armed` is false for steps the cursor is not carrying a part through -
   * tightening fasteners, spreading paste, pressing a part down, clicking a cable
   * or the power button. Without it the part would swim around the canvas during
   * those clicks, which is what made it look like it had escaped the case.
   */
  updateGhost(zoneId, armed = true) {
    if (!this.ghost) return;
    if (!armed || !zoneId || !this.pointerInside) {
      this.ghost.group.visible = false;
      this.ghost.zoneId = null;
      return;
    }
    const point = this.pointerWorld();
    if (!point) return;

    const zone = CASE_ZONES[zoneId];
    const snap = this.isOverZone(zoneId);
    this.ghost.group.visible = true;

    // Orient the preview exactly as it will be seated, so the player reads the
    // part the right way up from whatever camera angle they are at. The offset
    // between the part's own origin and its centre is measured once per zone,
    // not per pointer move.
    this._applyGhostMount(zoneId, zone);

    if (snap) {
      this.ghost.group.position.set(...zone.anchor).sub(this.ghost.centreOffset);
      this.ghost.zoneId = zoneId;
      this.setZoneState(zoneId, 'active');
    } else {
      this.ghost.group.position.copy(point);
      // slight pull so the player feels the magnet without it teleporting
      this.ghost.group.position.lerp(this._v1.fromArray(zone.anchor), 0.16);
      this.ghost.zoneId = null;
      this.setZoneState(zoneId, 'hint');
    }

    this.clampGhostInside();
  }

  /**
   * Keeps the whole carried part within the chassis walls.
   *
   * buildFittedModel rests the part on y = 0 and only centres it in x/z, so the
   * part is not symmetric about the holder's origin and a plain half-extent
   * clamp pushes it out through the roof. This uses the real rotated offset of
   * the local bounding box instead.
   */
  clampGhostInside() {
    if (!this.ghost) return;
    const box = this.caseInterior;
    const { centre, half } = this._mountedExtents();
    const p = this.ghost.group.position;

    // A part that cannot fit at any orientation is centred rather than shoved
    // through a wall, which is what a naive clamp would do.
    const axis = (v, lo, hi) => (lo > hi ? (lo + hi) / 2 : THREE.MathUtils.clamp(v, lo, hi));
    p.x = axis(p.x, box.min.x - centre.x + half.x, box.max.x - centre.x - half.x);
    p.y = axis(p.y, box.min.y - centre.y + half.y, box.max.y - centre.y - half.y);
    p.z = axis(p.z, box.min.z - centre.z + half.z, box.max.z - centre.z - half.z);
  }

  /**
   * The part occupies [position + centre - half, position + centre + half].
   *
   * `bounds` is measured with the holder already in its mount orientation, so
   * this is a straight read: no further rotation of the extents is needed.
   */
  _mountedExtents() {
    const g = this.ghost;
    return { centre: g?.centreOffset || this._centre.set(0, 0, 0), half: g?.half || this._half.set(0, 0, 0) };
  }

  /**
   * Centres a mounted part on `anchor`.
   *
   * buildFittedModel bakes an offset into the root's own position (it rests the
   * part on y = 0 and centres it in x/z), and the mount turn rotates that
   * offset, so working it out from the box algebra is easy to get wrong.
   * Measuring the mounted holder is exact instead.
   *
   * The holder must already carry its mount rotation and be at the origin.
   */
  _centreOnAnchor(holder, anchor) {
    holder.position.set(0, 0, 0);
    holder.updateMatrixWorld(true);
    const centre = new THREE.Box3().setFromObject(holder).getCenter(new THREE.Vector3());
    holder.position.set(...anchor).sub(centre);
  }

  /** Half extent of the carried part along the case axes, after its mount turn. */
  _mountedHalfExtent() {
    return this._mountedExtents().half;
  }

  // ----------------------------------------------------------------- zones
  setZoneState(zoneId, state) {
    Object.entries(this.zoneMeshes).forEach(([id, mesh]) => {
      const locked = this.lockedZone === id;
      const isThis = id === zoneId;
      mesh.material.color.setHex(
        locked ? ZONE_TINT.locked : isThis ? ZONE_TINT[state] : 0xffffff
      );
      mesh.visible = locked || isThis;
    });
  }

  clearZoneStates() {
    this.zoneMeshes.forEach(mesh => {
      mesh.visible = false;
      mesh.material.opacity = 0;
    });
  }

  // --------------------------------------------------------------- screws
  /**
   * Fastener markers around a zone. They always sit on the same face the part is
   * bolted through, so what you see through the glass matches the real part.
   */
  showScrews(zoneId, count) {
    this.hideScrews();
    const zone = CASE_ZONES[zoneId];
    if (!zone || !count) return;

    const face = zone.face || [1, 0, 0];
    const lift = zone.faceLift ?? 0.008;
    const vertical = Math.abs(face[1]) > 0.5;   // screwed in from above
    const rearward = face[2] < -0.5;           // screwed in from the back

    const group = new THREE.Group();
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24, emissive: 0x7a5200, emissiveIntensity: 1.3,
      roughness: 0.35, metalness: 0.85
    });
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24, transparent: true, opacity: 0.65, depthWrite: false
    });
    const headGeo = new THREE.CylinderGeometry(0.008, 0.007, 0.005, 14);
    const ringGeo = new THREE.TorusGeometry(0.014, 0.0022, 8, 22);

    const points = (zone.screwPts || this._gridPoints(zone, count)).slice(0, count);
    points.forEach(([a, b]) => {
      const pos = [...zone.anchor];
      if (vertical) {
        // [along the rack, across]
        pos[1] += lift;
        pos[2] += a;
        pos[0] += b;
      } else if (rearward) {
        // [across, up]
        pos[2] -= lift;
        pos[0] += a;
        pos[1] += b;
      } else {
        // [up, along the rack]
        pos[0] += face[0] * lift;
        pos[1] += a;
        pos[2] += b;
      }

      const holder = new THREE.Group();
      const head = new THREE.Mesh(headGeo, headMat);
      const halo = new THREE.Mesh(ringGeo, haloMat);
      if (vertical) {
        halo.rotation.x = Math.PI / 2;
        halo.position.y = 0.0008;
      } else if (rearward) {
        head.rotation.x = Math.PI / 2;
        halo.position.z = -0.0008;
      } else {
        head.rotation.z = Math.PI / 2;
        halo.rotation.y = Math.PI / 2;
        halo.position.x = 0.0008 * Math.sign(face[0] || 1);
      }
      holder.add(head, halo);
      holder.position.set(...pos);

      holder.userData.screwAxis = vertical ? this._screwAxis.y : this._screwAxis.x;
      group.add(holder);
      this.screwHolders.push(holder);
    });

    this.caseRoot.add(group);
    this.screwGroups.set(zoneId, { group, remaining: Math.min(count, points.length), total: count });
  }

  /** Fallback when a zone has no authored fastener pattern. */
  _gridPoints(zone, count) {
    const pts = [];
    const cols = Math.ceil(Math.sqrt(count));
    for (let i = 0; i < count; i++) {
      const c = i % cols;
      const r = Math.floor(i / cols);
      const rows = Math.ceil(count / cols);
      pts.push([
        rows === 1 ? 0 : (r / (rows - 1) - 0.5) * zone.size[1] * 0.7,
        cols === 1 ? 0 : (c / (cols - 1) - 0.5) * zone.size[2] * 0.7
      ]);
    }
    return pts;
  }

  hideScrews(zoneId) {
    const keys = zoneId ? [zoneId] : [...this.screwGroups.keys()];
    keys.forEach(key => {
      const entry = this.screwGroups.get(key);
      if (entry) this.pivot.remove(entry.group);
      this.screwGroups.delete(key);
    });
    this.screwHolders = [];
  }

  get screwsRemaining() {
    let total = 0;
    this.screwGroups.forEach(e => { total += e.remaining; });
    return total;
  }

  screwsFor(zoneId) {
    const entry = this.screwGroups.get(zoneId);
    return entry ? entry.remaining : 0;
  }

  /**
   * Drive the fastener under the cursor.
   * @returns 'tightened' | 'miss' | 'none'
   */
  hitScrew(clientX, clientY, zoneId) {
    const entry = this.screwGroups.get(zoneId);
    if (!entry || entry.remaining === 0) return 'none';

    const rect = this.canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return 'miss';
    const cx = clientX - rect.left;
    const cy = clientY - rect.top;

    let best = null;
    let bestDist = Infinity;
    entry.group.children.forEach(holder => {
      const world = new THREE.Vector3();
      holder.getWorldPosition(world);
      const ndc = world.project(this.camera);
      if (ndc.z > 1) return;
      const sx = ((ndc.x + 1) / 2) * rect.width;
      const sy = ((-ndc.y + 1) / 2) * rect.height;
      const d = Math.hypot(sx - cx, sy - cy);
      if (d < bestDist) { bestDist = d; best = holder; }
    });
    if (!best) return 'none';

    // The last screw gets a generous radius so finishing never feels fiddly
    const radius = entry.remaining === 1 ? 90 : 36;
    if (bestDist > radius) return 'miss';

    best.userData.driving = 0.0001;
    entry.remaining--;
    if (entry.remaining === 0) this.hideScrews(zoneId);
    return 'tightened';
  }

  // ---------------------------------------------------------- cable ports
  /**
   * Step 9 has no part to drag, so the connectors themselves become the targets.
   * They are drawn as orange headers and click one by one.
   */
  showCableTargets(targets, zoneId) {
    this.hideCableTargets();
    const zone = CASE_ZONES[zoneId];
    if (!zone || !targets.length) return;

    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xf97316, emissive: 0x7c2d12, emissiveIntensity: 1.5,
      roughness: 0.4, metalness: 0.3
    });
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xfb923c, transparent: true, opacity: 0.45, depthWrite: false
    });
    const bodyGeo = new THREE.BoxGeometry(0.014, 0.011, 0.022);
    const ringGeo = new THREE.TorusGeometry(0.015, 0.0018, 6, 20);

    targets.forEach(target => {
      const holder = new THREE.Group();
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      const ring = new THREE.Mesh(ringGeo, haloMat);
      ring.rotation.y = Math.PI / 2;
      holder.add(body, ring);
      holder.position.set(
        zone.anchor[0] + target.offset[0],
        zone.anchor[1] + target.offset[1],
        zone.anchor[2] + target.offset[2]
      );
      holder.userData.cableId = target.id;
      group.add(holder);
      this.cableHolders.push(holder);
    });

    this.caseRoot.add(group);
    this.cableGroup = group;
  }

  markCableDone(cableId) {
    if (!this.cableGroup) return;
    this.cableGroup.children.forEach(holder => {
      if (holder.userData.cableId !== cableId) return;
      holder.userData.done = true;
      holder.children.forEach(child => {
        if (child.material && child.material.color) {
          child.material.color.setHex(0x22c55e);
          if (child.material.emissive) child.material.emissive.setHex(0x14532d);
        }
      });
    });
  }

  hideCableTargets() {
    if (this.cableGroup) this.caseRoot.remove(this.cableGroup);
    this.cableGroup = null;
    this.cableHolders = [];
  }

  // -------------------------------------------------------------- placing
  /**
   * Seat a part for good. It is rotated into the zone's mount orientation so it
   * reads correctly from the glass pane, not lying flat like it does on a shelf.
   */
  placePart(item, zoneId, partKey) {
    const zone = CASE_ZONES[zoneId];
    if (!zone) return Promise.resolve(false);
    return this._loadFitted(item).then(fitted => {
      if (!fitted || this.disposed) return false;
      fitted.traverse(c => { if (c.isMesh) { c.castShadow = false; c.receiveShadow = false; } });
      const mount = mountQuaternion(zone);
      if (mount) fitted.quaternion.copy(mount);

      const holder = new THREE.Group();
      holder.add(fitted);
      this._centreOnAnchor(holder, zone.anchor);
      this.caseRoot.add(holder);

      this.placedParts.set(partKey, { item, zoneId, group: holder });
      this.lockedZone = zoneId;
      this.setZoneState(zoneId, 'locked');
      return true;
    });
  }

  _loadFitted(item) {
    return new Promise(resolve => {
      const attach = gltf => {
        const { group } = buildFittedModel(gltf.scene, {
          realSize: item.realSize,
          flat: true
        });
        resolve(group);
      };
      if (this.modelCache.has(item.modelPath)) {
        attach({ scene: this.modelCache.get(item.modelPath).clone() });
      } else {
        this.loader.load(item.modelPath, gltf => {
          this.modelCache.set(item.modelPath, gltf.scene);
          attach(gltf);
        }, undefined, err => {
          console.warn(`Build zone could not load ${item.name}:`, err);
          resolve(null);
        });
      }
    });
  }

  hasPart(partKey) {
    return this.placedParts.has(partKey);
  }

  partAt(zoneId) {
    for (const [key, entry] of this.placedParts) {
      if (entry.zoneId === zoneId) return key;
    }
    return null;
  }

  removePart(partKey) {
    const entry = this.placedParts.get(partKey);
    if (!entry) return false;
    this.pivot.remove(entry.group);
    this.placedParts.delete(partKey);
    if (this.lockedZone === entry.zoneId) this.lockedZone = null;
    return true;
  }

  clearParts() {
    [...this.placedParts.keys()].forEach(key => this.removePart(key));
  }

  flashZone(zoneId) {
    const marker = this.zoneMeshes.get(zoneId);
    if (marker) marker.userData.flash = 0.55;
  }

  setPower(on) {
    this.powered = on;
    if (!on) this.powerLight.intensity = 0;
  }

  // ---------------------------------------------------------------- frame

  resize() {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    if (!width || !height) return;
    const bufferW = Math.floor(width * this.pixelRatio);
    const bufferH = Math.floor(height * this.pixelRatio);
    if (this.canvas.width !== bufferW || this.canvas.height !== bufferH) {
      this.renderer.setSize(width, height, false);
    }
    const aspect = width / height;
    if (Math.abs(aspect - this.camera.aspect) > 1e-6) {
      this.camera.aspect = aspect;
      this.camera.updateProjectionMatrix();
      if (!this.cameraMoving) this._refocus();
    }
  }

  setFocusZone(zoneId) {
    if (zoneId) this.focusZone(zoneId);
    else this.focusCase();
  }

  /**
   * Per-frame work is deliberately allocation free. Zone markers, fastener
   * handles and cable handles are tracked in plain arrays, so animating a
   * handful of screws never walks the 120+ case meshes twice a frame.
   */
  update(delta, now) {
    this.resize();

    if (Math.abs(this.glassT - this.glassGoal) > 0.001) {
      this.glassT += (this.glassGoal - this.glassT) * Math.min(1, delta * 6);
      this.applyGlass();
    }

    if (this.cameraMoving) {
      const k = Math.min(1, delta * 5.5);
      this.camera.position.lerp(this.cameraGoal, k);
      if (this.camera.position.distanceTo(this.cameraGoal) < 0.004) this.snapCamera();
      else this.camera.lookAt(this.lookGoal);
    }

    // Fasteners spin in, then sink flush
    for (let i = 0; i < this.screwHolders.length; i++) {
      const obj = this.screwHolders[i];
      const data = obj.userData;
      if (data.driving === undefined || data.driving >= 1) continue;
      data.driving = Math.min(1, data.driving + delta * 4.5);
      if (data.screwAxis) obj.rotateOnAxis(data.screwAxis, delta * 30);
      obj.scale.setScalar(1 - data.driving * 0.2);
      if (data.driving >= 1) {
        delete data.driving;
        obj.scale.setScalar(1);
      }
    }

    // Zone highlight pulse, plus a bright flash on a successful placement
    const pulse = 0.5 + 0.5 * Math.sin(now * 0.005);
    for (let i = 0; i < this.zoneList.length; i++) {
      const marker = this.zoneList[i];
      if (!marker.visible) continue;
      let base = marker.userData.zoneId === this.lockedZone ? 0.26 : 0.18;
      if (marker.userData.zoneId === this.activeZone) base = 0.2 + pulse * 0.1;
      if (marker.userData.flash > 0) {
        marker.userData.flash = Math.max(0, marker.userData.flash - delta);
        base = Math.max(base, 0.55);
      }
      marker.material.opacity = base;
    }

    if (this.powered) {
      this.powerLight.intensity = 1.1 + Math.sin(now * 0.004) * 0.3;
    }

    // Unplugged cable headers pulse so they read as the thing to click
    for (let i = 0; i < this.cableHolders.length; i++) {
      const holder = this.cableHolders[i];
      if (holder.userData.done) continue;
      holder.children[1]?.scale.setScalar(1 + Math.sin(now * 0.006 + i) * 0.12);
    }

    this.renderer.render(this.scene, this.camera);
  }

  /**
   * Finish the build: bolt the glass back on, then hand the whole assembled
   * machine over as one group so the player can carry it around the room.
   */
  finalize() {
    this.hideScrews();
    this.hideCableTargets();
    this.clearZoneStates();
    this.clearGhost();
    this.setGlass(true, true);
    this.setPower(true);

    this.caseRoot.updateMatrixWorld(true);

    // The finished machine keeps caseRoot's turn, so it walks into the room at
    // the same orientation the builder saw through the glass.
    const assembled = new THREE.Group();
    assembled.name = 'assembledPC';
    assembled.position.copy(this.caseRoot.position);
    assembled.quaternion.copy(this.caseRoot.quaternion);
    assembled.scale.copy(this.caseRoot.scale);

    const caseClone = this.caseGroup.clone(true);
    caseClone.position.copy(this.caseGroup.position);
    caseClone.quaternion.copy(this.caseGroup.quaternion);
    caseClone.scale.copy(this.caseGroup.scale);
    caseClone.traverse(o => {
      if (!o.isMesh) return;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach(m => {
        if (!m) return;
        // a finished chassis is a real object again, not a ghost
        if (m.opacity >= 0.9) { m.transparent = false; m.depthWrite = true; }
      });
      o.castShadow = true;
      o.receiveShadow = true;
    });
    caseClone.name = 'assembledCase';
    assembled.add(caseClone);

    const parts = [];
    this.placedParts.forEach((entry, key) => {
      const holder = entry.group.clone(true);
      holder.position.copy(entry.group.position);
      holder.quaternion.copy(entry.group.quaternion);
      holder.scale.copy(entry.group.scale);
      holder.name = 'installedPart';
      assembled.add(holder);
      parts.push({ key, item: entry.item, zoneId: entry.zoneId });
      this.caseRoot.remove(entry.group);
    });

    this.placedParts.clear();
    this.lockedZone = null;

    const glass = caseClone.getObjectByName('sideGlass') || null;
    return { group: assembled, parts, glass };
  }

  dispose() {
    this.disposed = true;
    this.clearGhost();
    this.clearParts();
    this.hideScrews();
    this.hideCableTargets();
    if (this.caseRoot) this.pivot.remove(this.caseRoot);

    this.modelCache.clear();
    this.renderer.dispose();
    if (this.renderer.forceContextLoss) this.renderer.forceContextLoss();
  }
}
