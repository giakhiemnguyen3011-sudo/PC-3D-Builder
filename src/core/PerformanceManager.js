import * as THREE from 'three';

/**
 * Keeps the frame rate up by trading drawing-buffer resolution for speed.
 *
 * The room is cheap to draw - a couple of hundred meshes and well under ten
 * thousand triangles - so on anything but a discrete GPU the cost is almost
 * entirely fill rate: every pixel of the main pass runs the lighting, the shadow
 * lookup and the tone map, and that total scales with the square of the pixel
 * ratio. Dropping from 2x to 1x therefore removes three quarters of the
 * fragment work, which is far more effective than thinning out geometry that was
 * never the bottleneck.
 *
 * Rather than guessing a fixed ratio, this measures the real frame time and
 * moves the scale a step at a time. It reacts quickly when frames are too slow
 * (a stutter the player can see) and only recovers slowly once there is
 * headroom, so the resolution does not visibly pump back and forth.
 */
export class PerformanceManager {
  /**
   * @param {THREE.WebGLRenderer} renderer
   * @param {THREE.PerspectiveCamera} camera
   * @param {object}  [options]
   * @param {number}  [options.minScale]      lowest scale worth drawing at
   * @param {number}  [options.targetFps]     aim just above this
   * @param {number}  [options.recoverFps]    only climb back up past this
   * @param {number}  [options.intervalMs]    how often to reconsider
   */
  constructor(renderer, camera, options = {}) {
    this.renderer = renderer;
    this.camera = camera;

    this.maxScale = Math.min(window.devicePixelRatio || 1, 2);
    this.minScale = options.minScale ?? 0.5;
    this.targetFps = options.targetFps ?? 45;
    this.recoverFps = options.recoverFps ?? 58;
    this.intervalMs = options.intervalMs ?? 600;
    // Drop fast, climb slow: a visible stutter is worth fixing immediately, but
    // a resolution that recovers as eagerly as it drops would oscillate.
    this.downStep = 0.82;
    this.upStep = 1.08;

    this.scale = this.maxScale;
    this.frameMs = 1000 / 60;
    this.fps = 60;
    this.samples = 0;
    this.lastChangeAt = 0;
    this.lastFrameAt = 0;
    this.strikes = 0;
    this.enabled = true;

    this.applyScale();
  }

  /** Sets the drawing-buffer scale and resizes the buffer to match. */
  applyScale() {
    this.renderer.setPixelRatio(this.scale);
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
  }

  /**
   * Feeds one frame's duration in. `now` is the frame timestamp; the first call
   * only establishes a baseline, because there is no previous frame to measure
   * against yet.
   */
  sample(now) {
    if (this.lastFrameAt === 0) {
      this.lastFrameAt = now;
      return;
    }
    // A tab that was hidden, or a long stall such as a model parsing, would
    // otherwise read as one enormous frame and collapse the resolution to the
    // floor. Anything slower than a quarter second is not a rendering cost.
    const ms = now - this.lastFrameAt;
    this.lastFrameAt = now;
    if (ms <= 0 || ms > 250) return;

    // Exponential average, so one slow frame cannot swing the decision on its own
    this.frameMs += (ms - this.frameMs) * 0.12;
    this.fps = 1000 / this.frameMs;
    this.samples++;

    if (!this.enabled || this.samples < 20) return;
    if (now - this.lastChangeAt < this.intervalMs) return;

    if (this.frameMs > 1000 / this.targetFps) {
      this.strikes++;
      if (this.strikes >= 2 && this.scale > this.minScale) {
        this.setScale(this.scale * this.downStep);
        this.strikes = 0;
      }
    } else if (this.frameMs < 1000 / this.recoverFps) {
      this.strikes = 0;
      if (this.scale < this.maxScale) this.setScale(this.scale * this.upStep);
    } else {
      this.strikes = 0;
    }
  }

  setScale(next) {
    let clamped = Math.max(this.minScale, Math.min(this.maxScale, next));
    const atLimit = clamped >= this.maxScale || clamped <= this.minScale;
    if (atLimit) clamped = clamped >= this.maxScale ? this.maxScale : this.minScale;
    // Ignore changes too small to move the buffer by a whole pixel, so a long
    // slow climb does not resample the framebuffer on every step. Reaching a
    // limit is exempt: a multiplicative climb only ever lands *near* the cap,
    // so without this the scale would sit a hair under the display's native
    // ratio for the rest of the session.
    if (!atLimit && Math.abs(clamped - this.scale) < 0.02) return;
    this.scale = clamped;
    this.lastChangeAt = performance.now();
    this.samples = 0;
    this.applyScale();
  }

  /** Puts resolution back to the display's native ratio. */
  reset() {
    this.scale = this.maxScale;
    this.strikes = 0;
    this.samples = 0;
    this.applyScale();
  }
}
