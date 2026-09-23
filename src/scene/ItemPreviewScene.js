import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class ItemPreviewScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    this.camera.position.set(0, 0.3, 1.8);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(canvas.clientWidth || 360, canvas.clientHeight || 360);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    this.loader = new GLTFLoader();
    this.currentModel = null;
    this.modelCache = new Map();
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.autoRotate = true;

    this.setupLighting();
    this.setupControls();
  }

  setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(2, 4, 3);
    this.scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    rimLight.position.set(-2, -1, -2);
    this.scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xa855f7, 0.8);
    fillLight.position.set(-2, 2, 2);
    this.scene.add(fillLight);
  }

  setupControls() {
    this.canvas.addEventListener('mousedown', e => {
      this.isDragging = true;
      this.autoRotate = false;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', e => {
      if (!this.isDragging || !this.currentModel) return;
      const deltaX = e.clientX - this.previousMousePosition.x;
      const deltaY = e.clientY - this.previousMousePosition.y;

      this.currentModel.rotation.y += deltaX * 0.01;
      this.currentModel.rotation.x += deltaY * 0.01;

      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch support
    this.canvas.addEventListener('touchstart', e => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.autoRotate = false;
        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    });

    window.addEventListener('touchmove', e => {
      if (!this.isDragging || !this.currentModel || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
      const deltaY = e.touches[0].clientY - this.previousMousePosition.y;
      this.currentModel.rotation.y += deltaX * 0.01;
      this.currentModel.rotation.x += deltaY * 0.01;
      this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });
  }

  loadItemModel(modelPath, baseRotation = null) {
    if (this.currentModel) {
      this.scene.remove(this.currentModel);
      this.currentModel = null;
    }

    if (this.modelCache.has(modelPath)) {
      const cloned = this.modelCache.get(modelPath).clone();
      this.setModel(cloned, baseRotation);
      return;
    }

    this.loader.load(modelPath, gltf => {
      const model = gltf.scene;
      this.modelCache.set(modelPath, model.clone());
      this.setModel(model, baseRotation);
    });
  }

  setModel(model, baseRotation = null) {
    // Normalize and center model
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    const targetSize = 1.0;
    const scale = targetSize / (maxDim || 1);
    model.scale.set(scale, scale, scale);

    // Center pivot
    model.position.x = -center.x * scale;
    model.position.y = -center.y * scale;
    model.position.z = -center.z * scale;

    const baseWrapper = new THREE.Group();
    baseWrapper.add(model);

    if (baseRotation) {
      baseWrapper.rotation.set(
        baseRotation.x || 0,
        baseRotation.y || 0,
        baseRotation.z || 0
      );
    }

    // Wrap in outer pivot group for clean rotation
    const pivot = new THREE.Group();
    pivot.add(baseWrapper);
    pivot.position.set(0, 0, 0);

    this.currentModel = pivot;
    this.scene.add(this.currentModel);
    this.autoRotate = true;
  }

  resize() {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    if (width && height && (this.canvas.width !== width || this.canvas.height !== height)) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height, false);
    }
  }

  render() {
    this.resize();
    if (this.currentModel && this.autoRotate && !this.isDragging) {
      this.currentModel.rotation.y += 0.008;
    }
    this.renderer.render(this.scene, this.camera);
  }
}
