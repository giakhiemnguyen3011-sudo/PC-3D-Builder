import * as THREE from 'three';
import { getShelfLayout } from './shelfLayout.js';
import {
  CASE, CASE_REF, CASE_SHEET as T, CASE_GLASS as GT, CASE_WIDTH as W,
  CASE_HEIGHT as H, CASE_DEPTH as D,
  BOARD, TRAY, SHROUD, REAR, ROOF, trayRects, ATX_STANDOFFS
} from './caseLayout.js';

export class Room {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.colliders = [];
    this.surfaces = [];
    this.interactables = [];
    this.monitorTexture = null;
    this.monitorCanvas = null;
    this.monitorContext = null;
    this.monitorScreenMesh = null;
    this.monitorState = 'OFF'; // 'OFF', 'NO_SIGNAL', 'POST', 'OS'
    this.postProgress = 0;
    this.rgbTime = 0;

    this.createRoom();
    this.createWorkbench();
    this.createPartsTable();
    this.createComputerCasePlaceholder();
    this.createMonitor();
    this.createPeripherals();
    this.createDecorations();

    this.scene.add(this.group);
  }

  createRoom() {
    // Room dimensions: 12m wide, 10m deep, 4.2m high
    const roomWidth = 12;
    const roomDepth = 10;
    const roomHeight = 4.2;

    // Floor texture: Clean light oak wood planks / modern concrete
    const floorCanvas = document.createElement('canvas');
    floorCanvas.width = 512;
    floorCanvas.height = 512;
    const fCtx = floorCanvas.getContext('2d');
    fCtx.fillStyle = '#e5e0d8';
    fCtx.fillRect(0, 0, 512, 512);
    // Subtle wood planks
    fCtx.strokeStyle = '#d0cac0';
    fCtx.lineWidth = 3;
    for (let y = 0; y <= 512; y += 64) {
      fCtx.beginPath();
      fCtx.moveTo(0, y);
      fCtx.lineTo(512, y);
      fCtx.stroke();
    }
    for (let y = 0; y < 512; y += 64) {
      const offset = (y / 64) % 2 === 0 ? 0 : 128;
      for (let x = offset; x <= 512; x += 256) {
        fCtx.beginPath();
        fCtx.moveTo(x, y);
        fCtx.lineTo(x, y + 64);
        fCtx.stroke();
      }
    }
    const floorTex = new THREE.CanvasTexture(floorCanvas);
    floorTex.wrapS = THREE.RepeatWrapping;
    floorTex.wrapT = THREE.RepeatWrapping;
    floorTex.repeat.set(6, 5);

    const floorMat = new THREE.MeshStandardMaterial({
      map: floorTex,
      roughness: 0.45,
      metalness: 0.05
    });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(roomWidth, roomDepth), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    // Tagged so dropped hardware can tell "on the floor" from "on a bench"
    floor.userData = { isFloor: true };
    this.group.add(floor);
    this.surfaces.push(floor);

    // Ceiling
    const ceilMat = new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.9 });
    const ceil = new THREE.Mesh(new THREE.PlaneGeometry(roomWidth, roomDepth), ceilMat);
    ceil.rotation.x = Math.PI / 2;
    ceil.position.y = roomHeight;
    this.group.add(ceil);

    // Walls
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xf4f3f0, roughness: 0.8 });
    const accentWallMat = new THREE.MeshStandardMaterial({ color: 0xe8e6e1, roughness: 0.7 });

    // Back Wall (Z = -roomDepth / 2)
    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(roomWidth, roomHeight), accentWallMat);
    backWall.position.set(0, roomHeight / 2, -roomDepth / 2);
    backWall.receiveShadow = true;
    this.group.add(backWall);

    // Front Wall (Z = roomDepth / 2)
    const frontWall = new THREE.Mesh(new THREE.PlaneGeometry(roomWidth, roomHeight), wallMat);
    frontWall.rotation.y = Math.PI;
    frontWall.position.set(0, roomHeight / 2, roomDepth / 2);
    this.group.add(frontWall);

    // Left Wall with large window
    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(roomDepth, roomHeight), wallMat);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-roomWidth / 2, roomHeight / 2, 0);
    this.group.add(leftWall);

    // Window frame on left wall
    const windowFrameMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.3 });
    const winOuter = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.4, 5.0), windowFrameMat);
    winOuter.position.set(-roomWidth / 2 + 0.05, 2.2, 0);
    this.group.add(winOuter);

    // Window Glass with sky glow
    const winGlassMat = new THREE.MeshBasicMaterial({
      color: 0xddf0ff,
      transparent: true,
      opacity: 0.85
    });
    const winGlass = new THREE.Mesh(new THREE.BoxGeometry(0.05, 2.2, 4.8), winGlassMat);
    winGlass.position.set(-roomWidth / 2 + 0.05, 2.2, 0);
    this.group.add(winGlass);

    // Right Wall (next to iron rack)
    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(roomDepth, roomHeight), wallMat);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(roomWidth / 2, roomHeight / 2, 0);
    rightWall.receiveShadow = true;
    this.group.add(rightWall);

    // Baseboards around walls
    const baseboardMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    const bbBack = new THREE.Mesh(new THREE.BoxGeometry(roomWidth, 0.15, 0.04), baseboardMat);
    bbBack.position.set(0, 0.075, -roomDepth / 2 + 0.02);
    this.group.add(bbBack);
  }

  createWorkbench() {
    // Workbench in center: 2.6m wide, 1.2m deep, 0.82m high
    const tableWidth = 2.6;
    const tableDepth = 1.2;
    const tableHeight = 0.82;
    const topThickness = 0.06;

    // Rich dark oak wooden tabletop texture
    const woodCanvas = document.createElement('canvas');
    woodCanvas.width = 512;
    woodCanvas.height = 512;
    const wCtx = woodCanvas.getContext('2d');
    wCtx.fillStyle = '#6b4724'; // Warm oak tone
    wCtx.fillRect(0, 0, 512, 512);
    // Subtle wood grain stripes
    for (let i = 0; i < 50; i++) {
      const y = Math.random() * 512;
      wCtx.strokeStyle = Math.random() > 0.5 ? '#553617' : '#7d542d';
      wCtx.lineWidth = 2 + Math.random() * 4;
      wCtx.beginPath();
      wCtx.moveTo(0, y);
      wCtx.bezierCurveTo(150, y + (Math.random() - 0.5) * 20, 350, y + (Math.random() - 0.5) * 20, 512, y);
      wCtx.stroke();
    }
    const woodTex = new THREE.CanvasTexture(woodCanvas);
    woodTex.wrapS = THREE.RepeatWrapping;
    woodTex.wrapT = THREE.RepeatWrapping;
    woodTex.repeat.set(2, 1);

    const tableTopMat = new THREE.MeshStandardMaterial({
      map: woodTex,
      roughness: 0.35,
      metalness: 0.05
    });

    const tableTop = new THREE.Mesh(
      new THREE.BoxGeometry(tableWidth, topThickness, tableDepth),
      tableTopMat
    );
    tableTop.position.set(0, tableHeight - topThickness / 2, 0);
    tableTop.castShadow = true;
    tableTop.receiveShadow = true;
    this.group.add(tableTop);
    this.surfaces.push(tableTop);

    // Sturdy matte black steel legs
    const legMat = new THREE.MeshStandardMaterial({
      color: 0x1f2226,
      roughness: 0.4,
      metalness: 0.8
    });

    const legRadius = 0.04;
    const legH = tableHeight - topThickness;
    const legPositions = [
      [-tableWidth / 2 + 0.1, legH / 2, -tableDepth / 2 + 0.1],
      [tableWidth / 2 - 0.1, legH / 2, -tableDepth / 2 + 0.1],
      [-tableWidth / 2 + 0.1, legH / 2, tableDepth / 2 - 0.1],
      [tableWidth / 2 - 0.1, legH / 2, tableDepth / 2 - 0.1]
    ];

    legPositions.forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, legH, 0.08), legMat);
      leg.position.set(x, y, z);
      leg.castShadow = true;
      leg.receiveShadow = true;
      this.group.add(leg);
    });

    // Crossbar support
    const crossbar = new THREE.Mesh(new THREE.BoxGeometry(tableWidth - 0.2, 0.05, 0.05), legMat);
    crossbar.position.set(0, 0.25, -tableDepth / 2 + 0.1);
    this.group.add(crossbar);

    // Add table to collision system
    this.colliders.push({
      minX: -tableWidth / 2 - 0.2,
      maxX: tableWidth / 2 + 0.2,
      minZ: -tableDepth / 2 - 0.2,
      maxZ: tableDepth / 2 + 0.2
    });

    // Antistatic assembly desk pad on table (center-left for assembling)
    const padMat = new THREE.MeshStandardMaterial({
      color: 0x1a2130,
      roughness: 0.6,
      metalness: 0.1
    });
    const pad = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.005, 0.8), padMat);
    pad.position.set(-0.25, tableHeight + 0.003, 0);
    pad.receiveShadow = true;
    this.group.add(pad);
    this.surfaces.push(pad);

    // Decorative grid on antistatic pad
    const padBorderMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
    const padBorder = new THREE.Mesh(new THREE.BoxGeometry(1.38, 0.006, 0.01), padBorderMat);
    padBorder.position.set(-0.25, tableHeight + 0.004, -0.39);
    this.group.add(padBorder);
  }


  /**
   * Long white wooden parts table that carries every piece of hardware.
   * Replaces the old dark steel rack: painted-white timber top, a lower shelf and
   * a stretcher, with the tier surfaces driven by the shared layout spec.
   */
  createPartsTable() {
    const { table } = getShelfLayout();
    const tx = table.x;
    const tz = table.z;
    const width = table.width;
    const length = table.length;
    const legSize = table.legSize;

    // White-painted timber with a faint wood grain showing through
    const grainCanvas = document.createElement('canvas');
    grainCanvas.width = 256;
    grainCanvas.height = 256;
    const gCtx = grainCanvas.getContext('2d');
    gCtx.fillStyle = '#f4f1ea';
    gCtx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 70; i++) {
      const y = Math.random() * 256;
      gCtx.strokeStyle = `rgba(190, 182, 168, ${0.10 + Math.random() * 0.22})`;
      gCtx.lineWidth = 1 + Math.random() * 2.5;
      gCtx.beginPath();
      gCtx.moveTo(0, y);
      gCtx.bezierCurveTo(70, y + (Math.random() - 0.5) * 8, 180, y + (Math.random() - 0.5) * 8, 256, y);
      gCtx.stroke();
    }
    const grainTex = new THREE.CanvasTexture(grainCanvas);
    grainTex.wrapS = THREE.RepeatWrapping;
    grainTex.wrapT = THREE.RepeatWrapping;
    grainTex.repeat.set(2, Math.max(2, Math.round(length * 1.4)));

    const topMat = new THREE.MeshStandardMaterial({
      map: grainTex, color: 0xffffff, roughness: 0.42, metalness: 0.03
    });
    const legMat = new THREE.MeshStandardMaterial({
      color: 0xe9e5dc, roughness: 0.55, metalness: 0.04
    });
    const trimMat = new THREE.MeshStandardMaterial({
      color: 0xd6d1c6, roughness: 0.6, metalness: 0.05
    });

    // ---- table top (tier 0 surface) ----
    const top = new THREE.Mesh(
      new THREE.BoxGeometry(width, table.topThickness, length),
      topMat
    );
    top.position.set(tx, table.topHeight - table.topThickness / 2, tz);
    top.castShadow = true;
    top.receiveShadow = true;
    this.group.add(top);
    this.surfaces.push(top);

    // Soft rounded front edge so it reads as furniture, not a steel rack
    const edge = new THREE.Mesh(
      new THREE.BoxGeometry(0.02, table.topThickness + 0.008, length),
      trimMat
    );
    edge.position.set(tx - width / 2 - 0.008, table.topHeight - table.topThickness / 2 - 0.002, tz);
    edge.castShadow = true;
    this.group.add(edge);

    // ---- lower shelf (tier 1 surface) ----
    const shelf = new THREE.Mesh(
      new THREE.BoxGeometry(width - 0.06, table.shelfThickness, length - 0.1),
      topMat
    );
    shelf.position.set(tx, table.shelfHeight, tz);
    shelf.castShadow = true;
    shelf.receiveShadow = true;
    this.group.add(shelf);
    this.surfaces.push(shelf);

    // ---- legs ----
    const legH = table.height - table.topThickness;
    const legGeo = new THREE.BoxGeometry(legSize, legH, legSize);
    const legInset = 0.09;
    [
      [-1, -1], [1, -1], [-1, 1], [1, 1]
    ].forEach(([sx, sz]) => {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(
        tx + sx * (width / 2 - legInset),
        legH / 2,
        tz + sz * (length / 2 - legInset)
      );
      leg.castShadow = true;
      leg.receiveShadow = true;
      this.group.add(leg);
    });

    // Mid leg pairs so a 2m+ table does not sag
    [-1, 1].forEach(sz => {
      const leg = new THREE.Mesh(
        new THREE.BoxGeometry(legSize, table.shelfHeight - table.shelfThickness, legSize),
        legMat
      );
      leg.position.set(tx, (table.shelfHeight - table.shelfThickness) / 2, tz + sz * (length / 2 - legInset));
      leg.castShadow = true;
      this.group.add(leg);
    });

    // ---- aprons / stretchers ----
    const apronMat = trimMat;
    [-1, 1].forEach(sz => {
      const apron = new THREE.Mesh(
        new THREE.BoxGeometry(width - legInset * 2, 0.07, 0.025),
        apronMat
      );
      apron.position.set(tx, table.topHeight - table.topThickness - 0.05, tz + sz * (length / 2 - legInset));
      apron.castShadow = true;
      this.group.add(apron);
    });
    [-1, 1].forEach(sx => {
      const rail = new THREE.Mesh(
        new THREE.BoxGeometry(0.025, 0.05, length - legInset * 2),
        apronMat
      );
      rail.position.set(tx + sx * (width / 2 - legInset), table.shelfHeight - 0.05, tz);
      rail.castShadow = true;
      this.group.add(rail);
    });

    // ---- small engraved plaque on the front edge ----
    const plaqueCanvas = document.createElement('canvas');
    plaqueCanvas.width = 1024;
    plaqueCanvas.height = 128;
    const pCtx = plaqueCanvas.getContext('2d');
    pCtx.fillStyle = '#e8e3d8';
    pCtx.fillRect(0, 0, 1024, 128);
    pCtx.strokeStyle = '#9aa4b2';
    pCtx.lineWidth = 4;
    pCtx.strokeRect(6, 6, 1012, 116);
    pCtx.font = 'bold 52px "Segoe UI", sans-serif';
    pCtx.fillStyle = '#475569';
    pCtx.textAlign = 'center';
    pCtx.textBaseline = 'middle';
    pCtx.fillText('B� LINH KI?N PH?N C?NG', 512, 66);
    const plaqueTex = new THREE.CanvasTexture(plaqueCanvas);
    const plaque = new THREE.Mesh(
      new THREE.PlaneGeometry(1.15, 0.144),
      new THREE.MeshStandardMaterial({ map: plaqueTex, roughness: 0.5 })
    );
    plaque.position.set(tx - width / 2 - 0.019, table.topHeight - 0.12, tz);
    plaque.rotation.y = -Math.PI / 2;
    this.group.add(plaque);

    // ---- collider ----
    this.colliders.push({
      minX: tx - width / 2 - 0.2,
      maxX: tx + width / 2 + 0.2,
      minZ: tz - length / 2 - 0.2,
      maxZ: tz + length / 2 + 0.2
    });
  }

  createMonitor() {
    // Monitor positioned on the right side of the desk
    const monX = 0.75;
    const monY = 0.82; // Table surface
    const monZ = -0.2;

    const bezelMat = new THREE.MeshStandardMaterial({ color: 0x111317, roughness: 0.3, metalness: 0.8 });

    const standBase = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.015, 0.24), bezelMat);
    standBase.position.set(monX, monY + 0.01, monZ);
    standBase.receiveShadow = true;
    this.group.add(standBase);

    const standArm = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.35, 0.05), bezelMat);
    standArm.position.set(monX, monY + 0.18, monZ - 0.06);
    standArm.rotation.x = -0.1;
    this.group.add(standArm);

    // Monitor Body (27" 16:9 monitor: ~62cm wide, ~36cm high)
    const monW = 0.68;
    const monH = 0.40;
    const monBody = new THREE.Mesh(new THREE.BoxGeometry(monW, monH, 0.03), bezelMat);
    monBody.position.set(monX, monY + 0.34, monZ);
    monBody.rotation.y = -0.25; // angled slightly towards player
    this.group.add(monBody);

    this.monitorCanvas = document.createElement('canvas');
    this.monitorCanvas.width = 1024;
    this.monitorCanvas.height = 576;
    this.monitorContext = this.monitorCanvas.getContext('2d');
    this.monitorTexture = new THREE.CanvasTexture(this.monitorCanvas);
    this.monitorTexture.minFilter = THREE.LinearFilter;

    this.renderMonitorScreen();

    const screenMat = new THREE.MeshBasicMaterial({ map: this.monitorTexture });

    this.monitorScreenMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(monW - 0.02, monH - 0.02),
      screenMat
    );
    this.monitorScreenMesh.position.set(0, 0, 0.016);
    monBody.add(this.monitorScreenMesh);

    monBody.userData = { type: 'monitor' };
    this.interactables.push(monBody);
  }

  createPeripherals() {
    const pY = 0.82; // Table top

    const kbMat = new THREE.MeshStandardMaterial({ color: 0x1e2229, roughness: 0.5 });
    const kb = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.02, 0.15), kbMat);
    kb.position.set(0.45, pY + 0.01, 0.22);
    kb.rotation.y = -0.15;
    this.group.add(kb);

    const rgbKbMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const rgbKb = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.005, 0.01), rgbKbMat);
    rgbKb.position.set(0.45, pY + 0.022, 0.29);
    rgbKb.rotation.y = -0.15;
    this.group.add(rgbKb);

    const mouseMat = new THREE.MeshStandardMaterial({ color: 0x22262e, roughness: 0.4 });
    const mouse = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.03, 0.12), mouseMat);
    mouse.position.set(0.82, pY + 0.015, 0.2);
    mouse.rotation.y = -0.1;
    this.group.add(mouse);

    const toolMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.3, metalness: 0.7 });
    const screwdriver = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.2), toolMat);
    screwdriver.rotation.z = Math.PI / 2;
    screwdriver.position.set(-0.95, pY + 0.015, 0.25);
    this.group.add(screwdriver);

    const pasteMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.3 });
    const pasteTube = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.12), pasteMat);
    pasteTube.rotation.z = Math.PI / 2;
    pasteTube.rotation.y = 0.4;
    pasteTube.position.set(-0.92, pY + 0.01, 0.1);
    this.group.add(pasteTube);
  }

  createComputerCasePlaceholder() {
    const { caseGroup, interactables } = createComputerCase3DGroup();
    caseGroup.position.set(-0.25, 0.825, -0.05);
    // Angled so the open tempered-glass side and the front panel both face the
    // default player position, keeping the empty interior readable.
    caseGroup.rotation.y = -Math.PI / 4;
    caseGroup.name = 'benchCasePlaceholder';

    interactables.forEach(mesh => {
      mesh.userData = { type: 'computerCase', isCasePlaceholder: true };
    });

    this.group.add(caseGroup);
    this.casePlaceholder = caseGroup;
    this.interactables.push(...interactables);
  }

  createDecorations() {
    const makePoster = (title, subtitle, color, x, y) => {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 512;
      pCanvas.height = 720;
      const ctx = pCanvas.getContext('2d');
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, 512, 720);
      ctx.strokeStyle = color;
      ctx.lineWidth = 12;
      ctx.strokeRect(16, 16, 480, 688);
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 720; i += 40) {
        ctx.beginPath();
        ctx.moveTo(30, i);
        ctx.lineTo(480, i);
        ctx.stroke();
      }
      ctx.fillStyle = color;
      ctx.font = 'bold 52px "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(title, 256, 320);
      ctx.font = '28px "Segoe UI", sans-serif';
      ctx.fillStyle = '#cbd5e1';
      ctx.fillText(subtitle, 256, 380);

      const pTex = new THREE.CanvasTexture(pCanvas);
      const poster = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 1.7),
        new THREE.MeshStandardMaterial({ map: pTex, roughness: 0.4 })
      );
      poster.position.set(x, y, -4.95);
      this.group.add(poster);
    };

    makePoster('PC MASTER RACE', 'BUILD � OPTIMIZE � GAME', '#38bdf8', -2.8, 2.5);
    makePoster('STAY COOL', 'HIGH AIRFLOW & LOW TEMPS', '#a855f7', 0, 2.5);

    const lightFixtMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
    const ledMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let x = -3; x <= 3; x += 3) {
      const fixture = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.08, 4.0), lightFixtMat);
      fixture.position.set(x, 4.16, 0);
      this.group.add(fixture);

      const led = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.01, 3.8), ledMat);
      led.position.set(x, 4.11, 0);
      this.group.add(led);
    }
  }

  setMonitorState(state) {
    this.monitorState = state;
    this.renderMonitorScreen();
  }

  renderMonitorScreen() {
    const ctx = this.monitorContext;
    if (!ctx) return;
    const w = this.monitorCanvas.width;
    const h = this.monitorCanvas.height;

    ctx.clearRect(0, 0, w, h);

    if (this.monitorState === 'OFF') {
      ctx.fillStyle = '#05070a';
      ctx.fillRect(0, 0, w, h);
    } else if (this.monitorState === 'NO_SIGNAL') {
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 44px "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('NO SIGNAL', w / 2, h / 2 - 30);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '26px "Segoe UI", sans-serif';
      ctx.fillText('Vui l�ng k?t n?i c�p DisplayPort / HDMI t? Card d? h?a', w / 2, h / 2 + 30);
    } else if (this.monitorState === 'POST') {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 32px monospace';
      ctx.textAlign = 'left';
      ctx.fillText('AMERICAN MEGATRENDS / PC BUILDER BIOS v3.80', 50, 70);

      ctx.fillStyle = '#f8fafc';
      ctx.font = '22px monospace';
      ctx.fillText('Main Processor : AMD Ryzen 5 3600 6-Core Processor @ 3.60GHz', 50, 140);
      ctx.fillText('Memory Testing : 16384KB OK (Dual-Channel DDR4 3200MHz)', 50, 180);
      ctx.fillText('Primary Storage: Samsung SSD 860 EVO 500GB (SATA 6Gb/s)', 50, 220);
      ctx.fillText('Display Adapter: NVIDIA GeForce RTX 3090 (24576MB VRAM)', 50, 260);
      ctx.fillText('Power Supply   : 650W ATX Power Good Signal Detected [OK]', 50, 300);

      ctx.fillStyle = '#22c55e';
      ctx.font = 'bold 26px monospace';
      ctx.fillText('>>> POWER-ON SELF-TEST COMPLETED SUCCESSFULLY!', 50, 380);
      ctx.fillText('>>> BOOTING SYSTEM...', 50, 420);

      ctx.fillStyle = '#1e293b';
      ctx.fillRect(50, 480, w - 100, 24);
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(50, 480, (w - 100) * Math.min(1, this.postProgress), 24);
    } else if (this.monitorState === 'OS') {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#0f172a');
      grad.addColorStop(0.5, '#1e1b4b');
      grad.addColorStop(1, '#0284c7');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      for (let x = 0; x < w; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 46px "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('?? CH�C M?NG B?N �� L?P R�P TH�NH C�NG!', w / 2, 130);

      ctx.fillStyle = '#38bdf8';
      ctx.font = '26px "Segoe UI", sans-serif';
      ctx.fillText('PC BUILDER OS � H? TH?NG HO?T �?NG HO�N H?O', w / 2, 180);

      ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.roundRect(140, 220, w - 280, 260, 16);
      ctx.fill();
      ctx.stroke();

      ctx.font = '22px "Segoe UI", sans-serif';
      ctx.textAlign = 'left';
      ctx.fillStyle = '#e2e8f0';

      const lines = [
        '? CPU : AMD Ryzen 5 3600 (6 Cores / 12 Threads) - Nhi?t d?: 38�C [M�t m?]',
        '?? GPU : NVIDIA GeForce RTX 3090 24GB GDDR6X - Driver v551.86 Ready',
        '?? RAM : 16GB Dual-Channel G.SKILL Trident Z RGB @ 3200MHz',
        '?? SSD : Samsung 860 EVO 500GB - T?c d? d?c: 550 MB/s',
        '?? COOL: T?n nhi?t Cooler Master ho?t d?ng �m �i, RGB d?ng b? Aura Sync',
        '?? PSU : Ngu?n MasterWatt 650W Bronze c?p d�ng di?n c?c k? ?n d?nh'
      ];

      lines.forEach((line, idx) => {
        ctx.fillText(line, 170, 270 + idx * 34);
      });

      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
      ctx.fillRect(0, h - 50, w, 50);
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 20px "Segoe UI", sans-serif';
      ctx.fillText('?? PC Builder Menu', 30, h - 18);
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('100% Ready � All Components Verified', w - 380, h - 18);
    }

    this.monitorTexture.needsUpdate = true;
  }

  update(delta) {
    if (this.monitorState === 'POST') {
      this.postProgress += delta * 0.4;
      this.renderMonitorScreen();
      if (this.postProgress >= 1.0) {
        this.setMonitorState('OS');
      }
    }
  }

  /** Hides the empty case prop once the player has a real built machine. */
  hideCasePlaceholder() {
    if (this.casePlaceholder) this.casePlaceholder.visible = false;
  }

  /** Y of the workshop table top, where a dropped floor-level part returns to. */
  get partsTableSurfaceY() {
    return getShelfLayout().table.topHeight;
  }
}

/**
 * Procedural empty ATX mid-tower used as the build-mode placeholder.
 * All dimensions come from `caseLayout.js` so the bench prop and the interactive
 * Build Zone can never drift apart.
 *
 * @param {object}  [options]
 * @param {boolean} [options.xray] 50% shell opacity for the transparent build view
 */
export function createComputerCase3DGroup(options = {}) {
  const { xray = false } = options;
  const caseGroup = new THREE.Group();

  const {
    yFloor, yTop, zRear, zFront, xGlassOuter, xGlassInner, xPlainInner
  } = CASE_REF;
  const FEET = CASE.feet;

  const boardZ0 = BOARD.z0;
  const boardLength = BOARD.z1 - BOARD.z0;
  const boardTop = BOARD.top;

  const trayX = TRAY.x;
  const trayT = TRAY.thickness;
  const trayFace = TRAY.face;
  const trayZ0 = TRAY.z0;
  const trayZ1 = TRAY.z1;
  const trayY0 = TRAY.y0;
  const trayY1 = TRAY.y1;
  const cutSize = TRAY.cutSize;
  const cutY = TRAY.cutY;
  const cutZ = TRAY.cutZ;
  const cutY0 = TRAY.cutY0;
  const cutY1 = TRAY.cutY1;
  const cutZ0 = TRAY.cutZ0;
  const cutZ1 = TRAY.cutZ1;

  const shroudTop = SHROUD.top;
  const shroudHeight = shroudTop - yFloor;
  const shroudWidth = SHROUD.width;
  const shroudDepth = SHROUD.depth;
  const shroudMidZ = SHROUD.midZ;
  const shroudMidX = SHROUD.midX;

  const rearFanX = REAR.fan.x;
  const rearFanY = REAR.fan.y;
  const rearFanR = REAR.fan.r;
  const ioY = REAR.io.y;
  const slotX = REAR.slots.x;
  const slotTop = REAR.slots.top;
  const slotPitch = REAR.slots.pitch;
  const slotSpan = REAR.slots.span;
  const slotY = REAR.slots.y;
  const psuBayX = REAR.psu.x;
  const psuBayW = REAR.psu.w;
  const psuBayH = REAR.psu.h;
  const psuY = REAR.psu.y;
  const rearPlane = REAR.plane;
  const rearHalfW = REAR.halfW;
  const rearHalfH = REAR.halfH;
  const rearCentreY = REAR.centreY;
  const rearLocalY = REAR.toLocalY;

  const roofFanX = ROOF.fan.x;
  const roofFanZ = ROOF.fan.z;
  const roofFanR = ROOF.fan.r;

  // ---------------------------------------------------------- materials
  const shell = (params) => {
    const mat = new THREE.MeshStandardMaterial(params);
    if (xray) {
      // X-ray shell: blended over the opaque interior, never occluding it
      mat.transparent = true;
      mat.opacity = 0.5;
      mat.depthWrite = false;
    }
    return mat;
  };

  const steel = shell({ color: 0x171b22, roughness: 0.42, metalness: 0.88 });
  const steelTwoSided = shell({ color: 0x171b22, roughness: 0.42, metalness: 0.88 });
  steelTwoSided.side = THREE.DoubleSide;
  const steelInner = shell({ color: 0x1e232c, roughness: 0.55, metalness: 0.72 });
  const trim = shell({ color: 0x2b323d, roughness: 0.3, metalness: 0.9 });
  const dark = shell({ color: 0x0a0c10, roughness: 0.95, metalness: 0.1 });
  const rubber = shell({ color: 0x0c0e12, roughness: 1, metalness: 0 });
  const accent = shell({
    color: 0x38bdf8, emissive: 0x0d5f80, emissiveIntensity: 1.5, roughness: 0.4
  });
  const glassMat = shell({
    color: 0x9fd8ff,
    transparent: true,
    opacity: xray ? 0.22 : 0.14,
    roughness: 0.03,
    metalness: 0.35,
    side: THREE.DoubleSide,
    depthWrite: false
  });

  // Perforated grille: punched holes via alphaTest, so no sort order issues
  const createGrilleMaterial = (repeatX, repeatY) => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = '#fff';
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const ox = (row % 2) * 4;
        ctx.beginPath();
        ctx.arc(col * 8 + ox, row * 8, 2.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeatX, repeatY);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x1c222b,
      alphaMap: tex,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
      roughness: 0.6,
      metalness: 0.55
    });
    if (xray) {
      mat.transparent = true;
      mat.opacity = 0.5;
      mat.depthWrite = false;
    }
    return mat;
  };

  const interactables = [];

  const add = (geometry, material, position, options = {}) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(position[0], position[1], position[2]);
    if (options.rotation) mesh.rotation.set(options.rotation[0], options.rotation[1], options.rotation[2]);
    mesh.castShadow = options.cast !== false;
    mesh.receiveShadow = true;
    if (options.name) mesh.name = options.name;
    if (options.interactive) interactables.push(mesh);
    caseGroup.add(mesh);
    return mesh;
  };

  /** Punched sheet: outline rectangle in local XY plus round/rect holes. */
  const createPanel = (halfW, halfH, holes) => {
    const shape = new THREE.Shape();
    shape.moveTo(-halfW, -halfH);
    shape.lineTo(halfW, -halfH);
    shape.lineTo(halfW, halfH);
    shape.lineTo(-halfW, halfH);
    shape.closePath();
    holes.forEach(({ x, y, w, h, r }) => {
      const hole = new THREE.Path();
      if (r !== undefined) {
        hole.absarc(x, y, r, 0, Math.PI * 2, true);
      } else {
        hole.moveTo(x - w / 2, y - h / 2);
        hole.lineTo(x + w / 2, y - h / 2);
        hole.lineTo(x + w / 2, y + h / 2);
        hole.lineTo(x - w / 2, y + h / 2);
        hole.closePath();
      }
      shape.holes.push(hole);
    });
    return new THREE.ShapeGeometry(shape, 26);
  };

  /** Fan, axis along +Z. `rotation.x = -PI/2` turns it into a roof fan. */
  const createFan = (radius, thickness, blades = 7) => {
    const fan = new THREE.Group();

    const ring = new THREE.Mesh(new THREE.TorusGeometry(radius - 0.007, 0.007, 8, 28), trim);
    ring.castShadow = true;
    fan.add(ring);

    const back = new THREE.Mesh(
      new THREE.CircleGeometry(radius - 0.008, 28),
      shell({ color: 0x0d1015, roughness: 0.8, side: THREE.DoubleSide })
    );
    back.position.z = -thickness / 2;
    fan.add(back);

    const hub = new THREE.Mesh(
      new THREE.CylinderGeometry(0.017, 0.017, thickness * 0.7, 14),
      shell({ color: 0x0a0c10, roughness: 0.95, metalness: 0.1 })
    );
    hub.rotation.x = Math.PI / 2;
    fan.add(hub);

    const bladeMat = shell({
      color: 0x1b2028, roughness: 0.5, metalness: 0.6, side: THREE.DoubleSide
    });
    for (let i = 0; i < blades; i++) {
      const angle = (i / blades) * Math.PI * 2;
      const blade = new THREE.Mesh(
        new THREE.BoxGeometry(radius * 0.46, 0.0015, thickness * 0.55),
        bladeMat
      );
      blade.position.set(Math.cos(angle) * radius * 0.5, Math.sin(angle) * radius * 0.5, 0);
      blade.rotation.z = angle + 0.5;
      fan.add(blade);
    }
    return fan;
  };

  // ============================================================== feet
  [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sz]) => {
    add(
      new THREE.CylinderGeometry(0.017, 0.02, FEET, 14),
      rubber,
      [sx * (W / 2 - 0.026), FEET / 2, sz * (D / 2 - 0.033)],
      { cast: false }
    );
  });

  // ======================================================== floor pan
  add(new THREE.BoxGeometry(W, T, D), steel, [0, yFloor - T / 2, 0], {
    interactive: true,
    name: 'caseBottom'
  });
  add(
    new THREE.PlaneGeometry(W - 0.04, 0.16),
    createGrilleMaterial(7, 4),
    [shroudMidX, yFloor - T / 2 - 0.0005, psuY - 0.06],
    { rotation: [Math.PI / 2, 0, 0], cast: false }
  );

  // ==================================================== roof / top panel
  add(
    createPanel((W - 0.004) / 2, (D - 0.004) / 2, [
      { x: roofFanX, y: roofFanZ, r: roofFanR }
    ]),
    steelTwoSided,
    [0, yTop - T / 2, 0],
    { rotation: [Math.PI / 2, 0, 0], interactive: true, name: 'caseTop' }
  );
  add(
    new THREE.CircleGeometry(roofFanR - 0.006, 30),
    createGrilleMaterial(7, 7),
    [roofFanX, yTop - T / 2 - 0.0008, roofFanZ],
    { rotation: [-Math.PI / 2, 0, 0], cast: false }
  );
  add(
    new THREE.TorusGeometry(roofFanR, 0.004, 8, 30),
    trim,
    [roofFanX, yTop - T / 2, roofFanZ],
    { rotation: [Math.PI / 2, 0, 0], cast: false }
  );
  const roofFan = createFan(roofFanR - 0.004, 0.025);
  roofFan.rotation.x = -Math.PI / 2;
  roofFan.position.set(roofFanX, yTop - T - 0.014, roofFanZ);
  caseGroup.add(roofFan);

  add(
    new THREE.PlaneGeometry(W - 0.05, 0.085),
    createGrilleMaterial(8, 3),
    [0, yTop + 0.0006, -0.16],
    { rotation: [-Math.PI / 2, 0, 0], cast: false }
  );

  // Front I/O cluster on the roof
  add(new THREE.BoxGeometry(0.075, 0.002, 0.032), trim, [0, yTop + 0.001, zFront - 0.05]);
  add(
    new THREE.CylinderGeometry(0.007, 0.007, 0.004, 16),
    accent,
    [ROOF.io.x, yTop + 0.003, ROOF.io.z],
    { cast: false }
  );
  add(
    new THREE.CylinderGeometry(0.003, 0.003, 0.004, 12),
    dark,
    [ROOF.io.x - 0.011, yTop + 0.003, ROOF.io.z],
    { cast: false }
  );
  add(
    new THREE.CylinderGeometry(0.0035, 0.0035, 0.004, 12),
    dark,
    [ROOF.io.x + 0.025, yTop + 0.003, ROOF.io.z],
    { cast: false }
  );
  [-0.012, 0.012].forEach(dx => {
    add(
      new THREE.BoxGeometry(0.013, 0.004, 0.008),
      dark,
      [dx, yTop + 0.003, zFront - 0.05],
      { cast: false }
    );
  });

  // ======================================================== front panel
  const frontZ = zFront - 0.007;
  const border = 0.02;
  const frontFrameParts = [
    [W - 0.004, border, 0, FEET + H - border / 2],
    [W - 0.004, border, 0, FEET + border / 2],
    [border, H - 0.004 - 2 * border, -(W - 0.004) / 2 + border / 2, FEET + H / 2],
    [border, H - 0.004 - 2 * border, (W - 0.004) / 2 - border / 2, FEET + H / 2]
  ];
  let frontPanel = null;
  frontFrameParts.forEach(([w, h, x, y]) => {
    const mesh = add(new THREE.BoxGeometry(w, h, 0.014), steel, [x, y, frontZ], {
      interactive: true,
      name: 'frontPanel'
    });
    if (!frontPanel) frontPanel = mesh;
  });
  add(
    new THREE.PlaneGeometry(W - 0.004 - 2 * border, H - 0.004 - 2 * border),
    createGrilleMaterial(9, 22),
    [0, FEET + H / 2, frontZ + 0.001],
    { rotation: [0, Math.PI, 0], cast: false }
  );
  add(
    new THREE.BoxGeometry(W - 0.06, 0.005, 0.002),
    accent,
    [0, FEET + border / 2, zFront - 0.001],
    { cast: false }
  );
  add(
    new THREE.BoxGeometry(0.05, 0.008, 0.002),
    trim,
    [0, FEET + H - border / 2, zFront - 0.001],
    { cast: false }
  );

  [0.135, 0.275].forEach(fy => {
    const fan = createFan(0.07, 0.025);
    fan.position.set(0, fy, zFront - 0.03);
    caseGroup.add(fan);
  });
  add(
    new THREE.BoxGeometry(W - 0.02, 0.32, T),
    steelInner,
    [0, 0.205, zFront - 0.048],
    { cast: false }
  );

  // ======================================================== rear panel
  add(
    createPanel(rearHalfW, rearHalfH, [
      { x: rearFanX, y: rearLocalY(rearFanY), r: rearFanR },
      { x: 0, y: rearLocalY(ioY), w: 0.159, h: 0.042 },
      { x: slotX, y: rearLocalY(slotY), w: 0.122, h: slotSpan },
      { x: psuBayX, y: rearLocalY(psuY), w: psuBayW, h: psuBayH }
    ]),
    steelTwoSided,
    [0, rearCentreY, rearPlane],
    { interactive: true, name: 'caseRear' }
  );

  add(
    new THREE.CylinderGeometry(rearFanR - 0.001, rearFanR - 0.007, 0.026, 26, 1, true),
    shell({ color: 0x0d1015, roughness: 0.8, metalness: 0.4, side: THREE.DoubleSide }),
    [rearFanX, rearFanY, zRear + T + 0.013],
    { rotation: [Math.PI / 2, 0, 0], cast: false }
  );
  add(
    new THREE.TorusGeometry(rearFanR, 0.004, 8, 28),
    trim,
    [rearFanX, rearFanY, rearPlane],
    { cast: false }
  );
  add(
    new THREE.CircleGeometry(rearFanR - 0.005, 26),
    createGrilleMaterial(6, 6),
    [rearFanX, rearFanY, rearPlane - 0.001],
    { cast: false }
  );
  const rearFan = createFan(rearFanR - 0.007, 0.02);
  rearFan.rotation.y = Math.PI;
  rearFan.position.set(rearFanX, rearFanY, zRear + T + 0.02);
  caseGroup.add(rearFan);

  add(
    new THREE.BoxGeometry(0.122, slotSpan, 0.004),
    dark,
    [slotX, slotY, rearPlane + 0.006],
    { cast: false }
  );
  for (let i = 0; i < 7; i++) {
    add(
      new THREE.BoxGeometry(0.12, 0.0175, 0.002),
      i === 0 ? trim : steelInner,
      [slotX, slotTop - 0.00875 - i * slotPitch, rearPlane],
      { cast: false }
    );
  }

  add(
    new THREE.BoxGeometry(0.159, 0.042, 0.005),
    dark,
    [0, ioY, rearPlane + 0.006],
    { cast: false }
  );
  [
    [-0.056, 0x1d4ed8], [-0.042, 0x1d4ed8], [-0.026, 0x334155], [0.018, 0x334155], [0.038, 0x334155]
  ].forEach(([dx, color]) => {
    add(
      new THREE.BoxGeometry(0.012, 0.007, 0.008),
      shell({ color, roughness: 0.4, metalness: 0.6 }),
      [dx, ioY + 0.004, rearPlane + 0.012],
      { cast: false }
    );
  });
  [0.058, 0.068].forEach(dx => {
    add(
      new THREE.CylinderGeometry(0.003, 0.003, 0.008, 10),
      dark,
      [dx, ioY + 0.004, rearPlane + 0.012],
      { rotation: [Math.PI / 2, 0, 0], cast: false }
    );
  });

  add(
    new THREE.BoxGeometry(psuBayW, psuBayH, 0.006),
    dark,
    [psuBayX, psuY, rearPlane + 0.006],
    { cast: false }
  );
  add(
    new THREE.PlaneGeometry(psuBayW - 0.004, psuBayH - 0.004),
    createGrilleMaterial(9, 5),
    [psuBayX, psuY, rearPlane + 0.0028],
    { cast: false }
  );
  add(
    new THREE.CylinderGeometry(0.008, 0.008, 0.008, 14),
    dark,
    [psuBayX - 0.045, psuY + 0.02, rearPlane + 0.002],
    { rotation: [Math.PI / 2, 0, 0], cast: false }
  );
  add(
    new THREE.BoxGeometry(0.02, 0.012, 0.008),
    dark,
    [psuBayX - 0.045, psuY - 0.026, rearPlane + 0.002],
    { cast: false }
  );

  // =================================================== motherboard tray
  const trayRectsList = trayRects();
  const trayHas = (y, z) =>
    trayRectsList.some(([y0, y1, z0, z1]) => y >= y0 && y <= y1 && z >= z0 && z <= z1);

  trayRectsList.forEach(([y0, y1, z0, z1]) => {
    add(
      new THREE.BoxGeometry(trayT, y1 - y0, z1 - z0),
      steelInner,
      [trayX, (y0 + y1) / 2, (z0 + z1) / 2],
      { interactive: true, name: 'motherboardTray' }
    );
  });

  add(
    new THREE.BoxGeometry(0.03, trayY1 - trayY0, T),
    steel,
    [trayX - 0.012, (trayY0 + trayY1) / 2, trayZ1 - T / 2],
    { cast: false }
  );
  [0.16, 0.26, 0.36].forEach(y => {
    add(
      new THREE.BoxGeometry(0.006, 0.014, T + 0.001),
      dark,
      [trayFace + 0.003, y, trayZ1 - T / 2],
      { cast: false }
    );
  });

  let standoffCount = 0;
  ATX_STANDOFFS.forEach(({ y, z }) => {
    if (!trayHas(y, z)) return;
    standoffCount++;
    add(
      new THREE.CylinderGeometry(0.0035, 0.0035, 0.006, 8),
      trim,
      [trayFace + 0.003, y, z],
      { rotation: [0, 0, Math.PI / 2], cast: false }
    );
  });

  [
    [trayY0 + 0.04, cutZ1 - 0.02],
    [trayY1 - 0.06, cutZ1 - 0.02]
  ].forEach(([gy, gz]) => {
    add(
      new THREE.TorusGeometry(0.012, 0.0035, 6, 16),
      rubber,
      [trayFace + 0.002, gy, gz],
      { rotation: [0, Math.PI / 2, 0], cast: false }
    );
  });

  // ========================================================== PSU shroud
  add(
    new THREE.BoxGeometry(shroudWidth, shroudHeight, shroudDepth),
    steel,
    [shroudMidX, yFloor + shroudHeight / 2, shroudMidZ],
    { interactive: true, name: 'psuShroud' }
  );
  add(
    new THREE.PlaneGeometry(shroudWidth - 0.03, shroudDepth - 0.06),
    createGrilleMaterial(7, 9),
    [shroudMidX, shroudTop + 0.0006, shroudMidZ],
    { rotation: [-Math.PI / 2, 0, 0], cast: false }
  );
  add(
    new THREE.BoxGeometry(0.102, 0.006, 0.072),
    trim,
    [-0.01, shroudTop + 0.003, 0.05],
    { cast: false }
  );
  [-0.03, 0.03].forEach(dx => {
    [-0.012, 0.012].forEach(dz => {
      add(
        new THREE.CylinderGeometry(0.0028, 0.0028, 0.004, 8),
        dark,
        [-0.01 + dx, shroudTop + 0.007, 0.05 + dz],
        { cast: false }
      );
    });
  });

  // ================================================== plain steel side
  add(
    new THREE.BoxGeometry(T, H - 0.008, D - 0.008),
    steel,
    [-W / 2 + T / 2, FEET + H / 2, 0],
    { interactive: true, name: 'caseSide' }
  );

  // ============================================ tempered glass side panel
  const sideGlass = new THREE.Mesh(
    new THREE.BoxGeometry(GT, H - 0.012, D - 0.012),
    glassMat
  );
  sideGlass.name = 'sideGlass';
  sideGlass.position.set(xGlassOuter - GT / 2, FEET + H / 2, 0);
  sideGlass.castShadow = false;
  sideGlass.receiveShadow = false;
  caseGroup.add(sideGlass);
  interactables.push(sideGlass);

  [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([sy, sz]) => {
    const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.012, 10), trim);
    screw.rotation.z = Math.PI / 2;
    screw.position.set(
      GT / 2,
      sy * ((H - 0.012) / 2 - 0.026),
      sz * ((D - 0.012) / 2 - 0.026)
    );
    sideGlass.add(screw);
  });

  const chassis = interactables.find(mesh => mesh.name === 'motherboardTray');

  const metrics = {
    shell: { width: W, height: H + FEET, depth: D },
    coolerClearance: xGlassInner - trayFace,
    cableChannel: trayX - trayT / 2 - xPlainInner,
    boardBottomToShroud: BOARD.bottom - shroudTop,
    standoffs: standoffCount,
    trayNotch: { from: TRAY.rearTop, to: TRAY.rearTopStrip },
    rearFan: { x: rearFanX, y: rearFanY, radius: rearFanR },
    roofFan: { z: roofFanZ, radius: roofFanR },
    psuChamber: { width: shroudWidth, depth: shroudDepth, height: shroudHeight }
  };

  return { caseGroup, sideGlass, chassis, frontPanel, interactables, metrics };
}
