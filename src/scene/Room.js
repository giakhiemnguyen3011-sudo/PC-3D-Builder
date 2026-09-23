import * as THREE from 'three';

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
    this.createIronRack();
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

  createIronRack() {
    // 4-tier industrial metal shelf rack on the right side
    const rackWidth = 1.0;
    const rackDepth = 2.4;
    const rackHeight = 2.4;
    const rackX = 3.3; // Right side of the room
    const rackZ = 0;

    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x272b30,
      roughness: 0.35,
      metalness: 0.85
    });

    // 4 vertical upright posts
    const postGeo = new THREE.BoxGeometry(0.06, rackHeight, 0.06);
    const postOffsets = [
      [-rackWidth / 2, -rackDepth / 2],
      [rackWidth / 2, -rackDepth / 2],
      [-rackWidth / 2, rackDepth / 2],
      [rackWidth / 2, rackDepth / 2]
    ];

    postOffsets.forEach(([ox, oz]) => {
      const post = new THREE.Mesh(postGeo, metalMat);
      post.position.set(rackX + ox, rackHeight / 2, rackZ + oz);
      post.castShadow = true;
      this.group.add(post);
    });

    // 4 shelf tiers
    const tierHeights = [0.35, 0.85, 1.35, 1.85];
    const shelfGeo = new THREE.BoxGeometry(rackWidth + 0.04, 0.03, rackDepth + 0.04);
    const shelfMat = new THREE.MeshStandardMaterial({
      color: 0x3a4047,
      roughness: 0.5,
      metalness: 0.7
    });

    tierHeights.forEach(h => {
      const shelf = new THREE.Mesh(shelfGeo, shelfMat);
      shelf.position.set(rackX, h, rackZ);
      shelf.castShadow = true;
      shelf.receiveShadow = true;
      this.group.add(shelf);
      this.surfaces.push(shelf);

      // Shelf label bar / accent strip
      const stripMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff });
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.02, rackDepth), stripMat);
      strip.position.set(rackX - rackWidth / 2 - 0.02, h, rackZ);
      this.group.add(strip);
    });

    // Back cross braces
    const braceMat = new THREE.MeshStandardMaterial({ color: 0x1f2327, metalness: 0.8 });
    const brace = new THREE.Mesh(new THREE.BoxGeometry(0.02, 2.0, 0.02), braceMat);
    brace.rotation.x = Math.PI / 4;
    brace.position.set(rackX + rackWidth / 2, 1.2, rackZ);
    this.group.add(brace);

    // Signboard on top of rack: "HARDWARE STORAGE"
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 512;
    signCanvas.height = 128;
    const sCtx = signCanvas.getContext('2d');
    sCtx.fillStyle = '#0f172a';
    sCtx.fillRect(0, 0, 512, 128);
    sCtx.strokeStyle = '#38bdf8';
    sCtx.lineWidth = 6;
    sCtx.strokeRect(4, 4, 504, 120);
    sCtx.font = 'bold 36px "Segoe UI", sans-serif';
    sCtx.fillStyle = '#38bdf8';
    sCtx.textAlign = 'center';
    sCtx.textBaseline = 'middle';
    sCtx.fillText('KỆ LINH KIỆN PHẦN CỨNG', 256, 64);

    const signTex = new THREE.CanvasTexture(signCanvas);
    const sign = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.3, 1.4),
      new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.3 })
    );
    sign.position.set(rackX - rackWidth / 2 - 0.02, rackHeight + 0.15, rackZ);
    this.group.add(sign);

    // Rack collider
    this.colliders.push({
      minX: rackX - rackWidth / 2 - 0.2,
      maxX: rackX + rackWidth / 2 + 0.2,
      minZ: rackZ - rackDepth / 2 - 0.2,
      maxZ: rackZ + rackDepth / 2 + 0.2
    });
  }

  createMonitor() {
    // Monitor positioned on the right side of the desk
    const monX = 0.75;
    const monY = 0.82; // Table surface
    const monZ = -0.2;

    const bezelMat = new THREE.MeshStandardMaterial({ color: 0x111317, roughness: 0.3, metalness: 0.8 });

    // Stand base
    const standBase = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.015, 0.24), bezelMat);
    standBase.position.set(monX, monY + 0.01, monZ);
    standBase.receiveShadow = true;
    this.group.add(standBase);

    // Stand arm
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

    // Interactive Screen Canvas
    this.monitorCanvas = document.createElement('canvas');
    this.monitorCanvas.width = 1024;
    this.monitorCanvas.height = 576;
    this.monitorContext = this.monitorCanvas.getContext('2d');
    this.monitorTexture = new THREE.CanvasTexture(this.monitorCanvas);
    this.monitorTexture.minFilter = THREE.LinearFilter;

    this.renderMonitorScreen();

    const screenMat = new THREE.MeshBasicMaterial({
      map: this.monitorTexture
    });

    this.monitorScreenMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(monW - 0.02, monH - 0.02),
      screenMat
    );
    // Position on front face of monitor body
    this.monitorScreenMesh.position.set(0, 0, 0.016);
    monBody.add(this.monitorScreenMesh);

    // Register monitor as interactable
    monBody.userData = { type: 'monitor' };
    this.interactables.push(monBody);
  }

  createPeripherals() {
    const pY = 0.82; // Table top

    // Mechanical Keyboard
    const kbMat = new THREE.MeshStandardMaterial({ color: 0x1e2229, roughness: 0.5 });
    const kb = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.02, 0.15), kbMat);
    kb.position.set(0.45, pY + 0.01, 0.22);
    kb.rotation.y = -0.15;
    this.group.add(kb);

    // RGB glow bar on keyboard
    const rgbKbMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const rgbKb = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.005, 0.01), rgbKbMat);
    rgbKb.position.set(0.45, pY + 0.022, 0.29);
    rgbKb.rotation.y = -0.15;
    this.group.add(rgbKb);

    // Gaming Mouse
    const mouseMat = new THREE.MeshStandardMaterial({ color: 0x22262e, roughness: 0.4 });
    const mouse = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.03, 0.12), mouseMat);
    mouse.position.set(0.82, pY + 0.015, 0.2);
    mouse.rotation.y = -0.1;
    this.group.add(mouse);

    // Toolkit / Screwdriver set on desk
    const toolMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.3, metalness: 0.7 });
    const screwdriver = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.2), toolMat);
    screwdriver.rotation.z = Math.PI / 2;
    screwdriver.position.set(-0.95, pY + 0.015, 0.25);
    this.group.add(screwdriver);

    // Thermal Paste tube
    const pasteMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.3 });
    const pasteTube = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.12), pasteMat);
    pasteTube.rotation.z = Math.PI / 2;
    pasteTube.rotation.y = 0.4;
    pasteTube.position.set(-0.92, pY + 0.01, 0.1);
    this.group.add(pasteTube);
  }

  createDecorations() {
    // Tech Posters on the back wall
    const makePoster = (title, subtitle, color, x, y) => {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 512;
      pCanvas.height = 720;
      const ctx = pCanvas.getContext('2d');
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, 512, 720);
      // Border
      ctx.strokeStyle = color;
      ctx.lineWidth = 12;
      ctx.strokeRect(16, 16, 480, 688);
      // Cyber lines
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 720; i += 40) {
        ctx.beginPath();
        ctx.moveTo(30, i);
        ctx.lineTo(480, i);
        ctx.stroke();
      }
      // Content
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

    makePoster('PC MASTER RACE', 'BUILD • OPTIMIZE • GAME', '#38bdf8', -2.8, 2.5);
    makePoster('STAY COOL', 'HIGH AIRFLOW & LOW TEMPS', '#a855f7', 0, 2.5);

    // Ceiling Light Fixtures (modern linear LED lights)
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
      ctx.fillText('Vui lòng kết nối cáp DisplayPort / HDMI từ Card đồ họa', w / 2, h / 2 + 30);
    } else if (this.monitorState === 'POST') {
      // Classic BIOS POST screen
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

      // Loading progress bar
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(50, 480, w - 100, 24);
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(50, 480, (w - 100) * Math.min(1, this.postProgress), 24);
    } else if (this.monitorState === 'OS') {
      // Futuristic OS Desktop
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#0f172a');
      grad.addColorStop(0.5, '#1e1b4b');
      grad.addColorStop(1, '#0284c7');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Cyber grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      for (let x = 0; x < w; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Success Banner
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 46px "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🎉 CHÚC MỪNG BẠN ĐÃ LẮP RÁP THÀNH CÔNG!', w / 2, 130);

      ctx.fillStyle = '#38bdf8';
      ctx.font = '26px "Segoe UI", sans-serif';
      ctx.fillText('PC BUILDER OS • HỆ THỐNG HOẠT ĐỘNG HOÀN HẢO', w / 2, 180);

      // Specs card
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
        '⚡ CPU : AMD Ryzen 5 3600 (6 Cores / 12 Threads) - Nhiệt độ: 38°C [Mát mẻ]',
        '🎮 GPU : NVIDIA GeForce RTX 3090 24GB GDDR6X - Driver v551.86 Ready',
        '🧠 RAM : 16GB Dual-Channel G.SKILL Trident Z RGB @ 3200MHz',
        '💾 SSD : Samsung 860 EVO 500GB - Tốc độ đọc: 550 MB/s',
        '❄️ COOL: Tản nhiệt Cooler Master hoạt động êm ái, RGB đồng bộ Aura Sync',
        '🔌 PSU : Nguồn MasterWatt 650W Bronze cấp dòng điện cực kỳ ổn định'
      ];

      lines.forEach((line, idx) => {
        ctx.fillText(line, 170, 270 + idx * 34);
      });

      // Bottom taskbar
      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
      ctx.fillRect(0, h - 50, w, 50);
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 20px "Segoe UI", sans-serif';
      ctx.fillText('🔘 PC Builder Menu', 30, h - 18);
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('100% Ready • All Components Verified', w - 380, h - 18);
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
}
