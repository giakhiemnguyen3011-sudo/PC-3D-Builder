import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { sounds } from '../audio/SoundEffects.js';

export class CaseAssembly {
  constructor(scene, onStepComplete) {
    this.scene = scene;
    this.onStepComplete = onStepComplete;
    this.group = new THREE.Group();
    this.caseModel = null;
    this.parts = {};
    this.fans = [];
    this.rgbLights = [];
    this.isGlassOpen = false;
    this.isPoweredOn = false;
    this.cablesConnected = false;
    this.monitorConnected = false;
    this.installedParts = new Set();
    this.highlightMesh = null;
    this.snapZones = {};
    this.interactableObjects = [];

    // Position in center-left of wooden workbench
    this.group.position.set(-0.35, 0.82, 0.05);
    this.group.rotation.y = Math.PI / 4; // 45 deg angle into case interior

    this.scene.add(this.group);
    this.createInteractiveSnapZones();
  }

  loadModel(onProgress, onLoaded) {
    const loader = new GLTFLoader();
    loader.load(
      '/models/Completed_Computer_Case_Model/dream_computer_setup.glb',
      gltf => {
        this.caseModel = gltf.scene;

        // Auto-scale to realistic ATX case dimensions (approx 48cm high, 45cm deep, 22cm wide)
        const box = new THREE.Box3().setFromObject(this.caseModel);
        const size = box.getSize(new THREE.Vector3());
        const targetHeight = 0.48;
        const scale = targetHeight / size.y;
        this.caseModel.scale.set(scale, scale, scale);

        // Center bottom to y=0
        box.setFromObject(this.caseModel);
        this.caseModel.position.y = -box.min.y;

        this.caseModel.traverse(node => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            if (node.material) {
              node.material.roughness = Math.max(0.2, node.material.roughness || 0.5);
            }
          }

          // Identify key component nodes
          const name = node.name;
          if (name) {
            this.parts[name] = node;

            // Collect fan rotors for spinning animation
            if (name.toLowerCase().includes('fan') || name.toLowerCase().includes('propeller')) {
              this.fans.push(node);
            }
          }
        });

        // Initially hide internal modular parts for empty case state
        this.resetToEmptyState();

        this.group.add(this.caseModel);

        if (onLoaded) onLoaded();
      },
      xhr => {
        if (xhr.lengthComputable && onProgress) {
          onProgress(xhr.loaded / xhr.total);
        }
      },
      error => {
        console.error('Error loading PC Case model:', error);
      }
    );
  }

  resetToEmptyState() {
    const hideList = [
      'MotherBoard',
      'CPU',
      'M2',
      'RTX2080ti',
      'Radiator',
      'RAM',
      'RAM1',
      'RAM2',
      'RAM3',
      'SSD',
      'PSU',
      'WaterCooling'
    ];

    hideList.forEach(name => {
      if (this.parts[name]) {
        this.parts[name].visible = false;
      }
    });

    // Side glass starts closed
    if (this.parts['GlassSide']) {
      this.parts['GlassSide'].visible = true;
      this.parts['GlassSide'].userData = { type: 'glass_side' };
      this.interactableObjects.push(this.parts['GlassSide']);
    }
  }

  createInteractiveSnapZones() {
    // Virtual click targets / snap zones on case
    const zoneMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });

    // Motherboard zone
    const mbZone = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.28, 0.05), zoneMat.clone());
    mbZone.position.set(0.02, 0.28, -0.05);
    mbZone.userData = { snapType: 'motherboard', step: 2 };
    this.snapZones['motherboard'] = mbZone;
    this.group.add(mbZone);
    this.interactableObjects.push(mbZone);

    // CPU zone
    const cpuZone = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.04), zoneMat.clone());
    cpuZone.position.set(0.04, 0.32, -0.02);
    cpuZone.userData = { snapType: 'cpu', step: 3 };
    this.snapZones['cpu'] = cpuZone;
    this.group.add(cpuZone);
    this.interactableObjects.push(cpuZone);

    // Cooler zone
    const coolerZone = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), zoneMat.clone());
    coolerZone.position.set(0.04, 0.32, 0.04);
    coolerZone.userData = { snapType: 'cooler', step: 4 };
    this.snapZones['cooler'] = coolerZone;
    this.group.add(coolerZone);
    this.interactableObjects.push(coolerZone);

    // RAM zone
    const ramZone = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.12, 0.04), zoneMat.clone());
    ramZone.position.set(0.11, 0.32, -0.02);
    ramZone.userData = { snapType: 'ram', step: 5 };
    this.snapZones['ram'] = ramZone;
    this.group.add(ramZone);
    this.interactableObjects.push(ramZone);

    // SSD zone
    const ssdZone = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.03), zoneMat.clone());
    ssdZone.position.set(-0.12, 0.22, 0.02);
    ssdZone.userData = { snapType: 'storage', step: 6 };
    this.snapZones['storage'] = ssdZone;
    this.group.add(ssdZone);
    this.interactableObjects.push(ssdZone);

    // PSU zone (bottom chamber)
    const psuZone = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.15), zoneMat.clone());
    psuZone.position.set(-0.08, 0.08, -0.05);
    psuZone.userData = { snapType: 'psu', step: 7 };
    this.snapZones['psu'] = psuZone;
    this.group.add(psuZone);
    this.interactableObjects.push(psuZone);

    // GPU zone (PCIe slot)
    const gpuZone = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.08), zoneMat.clone());
    gpuZone.position.set(0.02, 0.22, 0.02);
    gpuZone.userData = { snapType: 'gpu', step: 8 };
    this.snapZones['gpu'] = gpuZone;
    this.group.add(gpuZone);
    this.interactableObjects.push(gpuZone);

    // Power Button on top front of case
    const btnMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.8 });
    const pwrBtn = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.01, 16), btnMat);
    pwrBtn.position.set(0.12, 0.485, 0.15);
    pwrBtn.userData = { type: 'power_button', step: 12 };
    this.group.add(pwrBtn);
    this.interactableObjects.push(pwrBtn);
    this.pwrButtonMesh = pwrBtn;

    // Cable plug button
    const cableMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.3 });
    const cableNode = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.03, 0.03), cableMat);
    cableNode.position.set(0.14, 0.25, -0.05);
    cableNode.userData = { type: 'cables', step: 9 };
    this.group.add(cableNode);
    this.interactableObjects.push(cableNode);
    this.cableNodeMesh = cableNode;
  }

  toggleSideGlass() {
    this.isGlassOpen = !this.isGlassOpen;
    if (this.parts['GlassSide']) {
      sounds.playScrew();
      if (this.isGlassOpen) {
        // Slide / remove side glass
        this.parts['GlassSide'].position.z += 0.4;
        this.parts['GlassSide'].visible = false;
      } else {
        this.parts['GlassSide'].visible = true;
        this.parts['GlassSide'].position.z -= 0.4;
      }
    }
    return this.isGlassOpen;
  }

  installComponent(categoryKey) {
    let installedPartName = null;
    let stepNumber = null;

    switch (categoryKey) {
      case 'motherboard':
        installedPartName = 'MotherBoard';
        stepNumber = 2;
        break;
      case 'cpu':
        installedPartName = 'CPU';
        stepNumber = 3;
        break;
      case 'cooler':
        installedPartName = 'Radiator';
        stepNumber = 4;
        break;
      case 'ram':
        installedPartName = 'RAM';
        stepNumber = 5;
        // Also show extra RAM sticks
        if (this.parts['RAM1']) this.parts['RAM1'].visible = true;
        break;
      case 'storage':
        installedPartName = 'SSD';
        if (this.parts['M2']) this.parts['M2'].visible = true;
        stepNumber = 6;
        break;
      case 'psu':
        installedPartName = 'PSU';
        stepNumber = 7;
        break;
      case 'gpu':
        installedPartName = 'RTX2080ti';
        stepNumber = 8;
        break;
    }

    if (installedPartName && this.parts[installedPartName]) {
      this.parts[installedPartName].visible = true;
      this.installedParts.add(categoryKey);

      // Play authentic sound
      if (categoryKey === 'ram' || categoryKey === 'gpu') {
        sounds.playSnap();
      } else {
        sounds.playScrew();
      }

      // Hide corresponding snap zone
      if (this.snapZones[categoryKey]) {
        this.snapZones[categoryKey].visible = false;
      }

      if (this.onStepComplete) {
        this.onStepComplete(stepNumber, categoryKey);
      }

      return true;
    }
    return false;
  }

  connectCables() {
    this.cablesConnected = true;
    sounds.playSnap();
    if (this.cableNodeMesh) {
      this.cableNodeMesh.material.color.setHex(0x22c55e);
    }
    if (this.onStepComplete) {
      this.onStepComplete(9, 'cables');
    }
  }

  connectMonitorAndPower() {
    this.monitorConnected = true;
    sounds.playSnap();
    if (this.onStepComplete) {
      this.onStepComplete(11, 'monitor_power');
    }
  }

  powerOnSystem() {
    if (this.isPoweredOn) return false;
    this.isPoweredOn = true;

    // Sound: Power switch click -> POST beep -> Fan humming
    sounds.playPowerSwitch();

    setTimeout(() => {
      sounds.playPostBeep();
      sounds.startFanHum();
      sounds.playVictoryFanfare();
    }, 600);

    // RGB illumination inside case
    const psuLight = new THREE.PointLight(0x00ffff, 2.5, 1.2);
    psuLight.position.set(0, 0.25, 0);
    this.group.add(psuLight);
    this.rgbLights.push(psuLight);

    const ramLight = new THREE.PointLight(0xff00ff, 2.0, 0.8);
    ramLight.position.set(0.1, 0.32, 0);
    this.group.add(ramLight);
    this.rgbLights.push(ramLight);

    if (this.onStepComplete) {
      this.onStepComplete(12, 'power_on');
    }

    return true;
  }

  update(delta) {
    // Fan spin animation when powered on
    if (this.isPoweredOn) {
      this.fans.forEach(fan => {
        fan.rotation.z += delta * 15;
      });

      // Animated dynamic RGB lighting cycle
      this.group.position.y = 0.82; // maintain
      const t = performance.now() * 0.002;
      this.rgbLights.forEach((light, idx) => {
        const hue = (t + idx * 0.3) % 1;
        light.color.setHSL(hue, 1, 0.5);
      });
    }
  }
}
