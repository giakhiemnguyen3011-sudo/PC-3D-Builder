// Re-exports the real three.js but swaps WebGLRenderer for a no-op, so
// ItemPreviewScene can be constructed in Node.
import * as real from 'file:///D:/pc-builder-3d/node_modules/three/build/three.module.js';

export * from 'file:///D:/pc-builder-3d/node_modules/three/build/three.module.js';

export let renderCalls = 0;

export class WebGLRenderer {
  constructor() {
    this.domElement = { toDataURL: () => 'data:image/png;base64,stub' };
    this.shadowMap = { enabled: false, type: 0 };
    this.toneMapping = 0;
    this.toneMappingExposure = 1;
    this.capabilities = { isWebGL2: true, getMaxAnisotropy: () => 16 };
  }
  setSize() {}
  setPixelRatio() {}
  setClearColor() {}
  setClearAlpha() {}
  setRenderTarget() {}
  getContext() { return {}; }
  getPixelRatio() { return 1; }
  render() { renderCalls++; }
  dispose() {}
  forceContextLoss() {}
}

export class PC3 {
  static get isWebGL2() { return true; }
}

void real;
