// ESM resolve hooks: redirect the modules that need a browser so the real
// project code can be imported and executed in Node.
const THREE_URL = 'file:///D:/pc-builder-3d/node_modules/three/build/three.module.js';
const THREE_STUB = 'file:///D:/pc-builder-3d/.verify/three-stub.mjs';
const LOADER_STUB = 'file:///D:/pc-builder-3d/.verify/three-stub-loader.mjs';

export async function resolve(specifier, context, nextResolve) {
  if (specifier === 'three') {
    return { url: THREE_STUB, shortCircuit: true };
  }
  if (specifier.includes('three/examples/jsm/loaders/GLTFLoader.js')) {
    return { url: LOADER_STUB, shortCircuit: true };
  }
  if (specifier.endsWith('style.css')) {
    return { url: 'data:text/javascript,export default {}', shortCircuit: true };
  }
  void THREE_URL;
  return nextResolve(specifier, context);
}
