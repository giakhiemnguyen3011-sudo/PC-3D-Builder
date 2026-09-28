import * as THREE from 'three';

const AXES = [
  new THREE.Vector3(1, 0, 0),
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(0, 0, 1)
];

const ANGLE_EPSILON = 1e-4;

export function measureModel(object) {
  object.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(object);
  return {
    box,
    size: box.getSize(new THREE.Vector3()),
    center: box.getCenter(new THREE.Vector3())
  };
}

/**
 * Works out the rotation that turns an arbitrary authored model into a tidy
 * retail pose: thinnest native axis becomes vertical (it lies flat, never on
 * its end), longest native axis runs along local +X (the shelf length).
 * Among all valid sign permutations the smallest rotation from identity wins,
 * so models that are already lying flat keep their authored "face up" side.
 */
export function computeFlatAlignment(size) {
  const ranked = AXES
    .map((vector, index) => ({ vector, index, length: size.getComponent(index) }))
    .sort((a, b) => a.length - b.length);

  const thin = ranked[0];
  const mid = ranked[1];
  const long = ranked[2];

  let best = null;

  for (const longSign of [1, -1]) {
    for (const thinSign of [1, -1]) {
      // THREE.Matrix4.makeBasis(a, b, c) expects the *images* of the source
      // X / Y / Z axes, so slot each target direction by native axis index.
      const longDir = new THREE.Vector3(1, 0, 0).multiplyScalar(longSign);
      const thinDir = new THREE.Vector3(0, 1, 0).multiplyScalar(thinSign);
      const midDir = new THREE.Vector3().crossVectors(longDir, thinDir);

      const images = new Array(3);
      images[long.index] = longDir;
      images[thin.index] = thinDir;
      images[mid.index] = midDir;

      // An odd axis permutation flips handedness - mirror the spare axis so the
      // result is always a pure rotation.
      if (new THREE.Matrix4().makeBasis(images[0], images[1], images[2]).determinant() < 0) {
        images[mid.index] = midDir.negate();
      }

      const quaternion = new THREE.Quaternion().setFromRotationMatrix(
        new THREE.Matrix4().makeBasis(images[0], images[1], images[2])
      );
      const angle = 2 * Math.acos(Math.min(1, Math.abs(quaternion.w)));

      // Tie-break: prefer the pose that keeps the authored up-axis pointing up,
      // then forward (so a DIMM shows its light bar towards the room).
      const mappedUp = images[1];
      let facing;
      if (mappedUp.y > 0.9) facing = 0;
      else if (mappedUp.z > 0.9) facing = 1;
      else if (mappedUp.x > 0.9) facing = 2;
      else facing = 3;

      const better =
        best === null ||
        angle < best.angle - ANGLE_EPSILON ||
        (Math.abs(angle - best.angle) <= ANGLE_EPSILON && facing < best.facing);

      if (better) best = { quaternion, angle, facing };
    }
  }

  return best ? best.quaternion : new THREE.Quaternion();
}

/**
 * Normalises a GLB scene to real-world metres and returns a group whose origin
 * sits at the centre of the footprint with the item resting on y = 0.
 */
export function buildFittedModel(model, options = {}) {
  const {
    realSize = 0.15,
    minSize = 0,
    maxSize = Number.POSITIVE_INFINITY,
    flat = true
  } = options;

  const { size: nativeSize, center: nativeCenter } = measureModel(model);
  const nativeMax = Math.max(nativeSize.x, nativeSize.y, nativeSize.z) || 1;

  const target = Math.min(Math.max(realSize, minSize), maxSize);
  const scale = target / nativeMax;

  model.position.set(-nativeCenter.x, -nativeCenter.y, -nativeCenter.z);

  const scaleGroup = new THREE.Group();
  scaleGroup.scale.setScalar(scale);
  scaleGroup.add(model);

  const alignGroup = new THREE.Group();
  if (flat) alignGroup.quaternion.copy(computeFlatAlignment(nativeSize));
  alignGroup.add(scaleGroup);

  alignGroup.updateMatrixWorld(true);
  const alignedBox = new THREE.Box3().setFromObject(alignGroup);
  const alignedSize = alignedBox.getSize(new THREE.Vector3());

  const root = new THREE.Group();
  root.add(alignGroup);
  root.position.set(
    -alignedBox.min.x - alignedSize.x / 2,
    -alignedBox.min.y,
    -alignedBox.min.z - alignedSize.z / 2
  );

  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root);

  return { group: root, box, size: box.getSize(new THREE.Vector3()), scale };
}
