# PROJECT CONTEXT: PC BUILDER 3D (TRÌNH MÔ PHỎNG LẮP RÁP MÁY TÍNH 3D)

> **File này lưu trữ toàn bộ bối cảnh, kiến trúc, thư mục, mô hình dữ liệu và cơ chế hoạt động của dự án PC Builder 3D. Được tối ưu hóa cho AI LLM (Gemini, Claude, GPT) để nắm bắt và tiếp tục phát triển.**

---

## 1. Ý TƯỞNG & MỤC TIÊU DỰ ÁN (PROJECT VISION & GOALS)

- **Mục tiêu cốt lõi**: Xây dựng một ứng dụng web 3D mô phỏng lắp ráp thùng máy tính (PC Building Simulator) tương tác thời gian thực, trực quan, thân thiện cho người mới bắt đầu làm quen với kiến trúc phần cứng máy tính.
- **Phương pháp tiếp cận**:
  - Không gian căn phòng xưởng công nghệ (Tech Workshop) 3D sáng sủa, thoáng đãng, phong cách hiện đại.
  - Góc nhìn thứ nhất (First-person perspective) với chuyển động mượt mà, hỗ trợ cơ chế Shift-Lock (khóa tâm) và tâm ngắm crosshair.
  - Hệ thống lắp ráp tuân thủ chặt chẽ **12 bước chuẩn thực tế** (chuẩn bị thùng máy, mở kính, bắt ốc chân đồng mainboard, lắp CPU đúng tam giác vàng, bôi keo tản nhiệt, gắn tản khí/AIO, cắm RAM kênh đôi, lắp SSD/M.2, gắn nguồn PSU, cắm card đồ họa PCIe x16, đi dây cáp nguồn, đóng nắp kính, cắm dây màn hình và khởi động chạy thử).
  - Kho đồ (RPG Inventory) phong cách lưới ô vuông (Square Slots Grid) có khả năng xem trước mô hình 3D xoay 360°, tra cứu thông số kỹ thuật thực tế (Wiki Specs) và phân loại linh kiện theo các Tag rõ ràng.

---

## 2. CÔNG NGHỆ & THƯ VIỆN SỬ DỤNG (TECH STACK)

| Công nghệ | Phiên bản / Vai trò | Mục đích sử dụng |
| :--- | :--- | :--- |
| **Node.js & Vite** | Vite v6.x (ES Modules) | Build tool, Bundler & Local Dev Server tốc độ cao, hỗ trợ HMR |
| **Three.js** | v0.174.x | Engine đồ họa 3D WebGL (Scene graph, Camera, PBR Materials, Lighting, ShadowMaps, GLTFLoader) |
| **Web Audio API** | Tích hợp trình duyệt | Bộ tổng hợp âm thanh thủ tục (Procedural Sound Synthesizer) không cần file ngoài (tiếng click lẫy RAM, tiếng siết ốc, còi Beep POST 880Hz, tiếng gió quạt, tiếng công tắc nguồn) |
| **Canvas Confetti** | v1.9.x | Hiệu ứng pháo hoa ăn mừng khi người dùng hoàn thành bước 12 và boot máy thành công |
| **CSS Glassmorphism** | Vanilla CSS3 | Giao diện hiện đại Cyber-tech, bo góc, bóng mờ backdrop blur, glowing neon cyan/amber accents |
| **Git & GitHub** | Version control | Quản lý mã nguồn, lưu trữ tại `https://github.com/giakhiemnguyen3011-sudo/PC-3D-Builder.git` |

---

## 3. HỆ THỐNG THƯ MỤC & TÀI NGUYÊN (DIRECTORY & ASSET STRUCTURE)

```
D:\pc-builder-3d\
├── index.html                     # Entry HTML chứa Canvas 3D, Crosshair, HUD và Modal Inventory
├── package.json                   # Cấu hình dependency (three, canvas-confetti, vite)
├── vite.config.js                 # Cấu hình máy chủ Vite
├── start.bat                      # Script double-click mở nhanh máy chủ và trình duyệt
├── PROJECT_CONTEXT.md             # File ngữ cảnh toàn diện cho AI & Developers
├── README.md                      # Hướng dẫn sử dụng cho người chơi
│
├── public\
│   └── models\                    # Thư mục chứa các mô hình 3D (.glb) linh kiện chuẩn của dự án
│       ├── Completed_Computer_Case_Model\
│       │   ├── dream_computer_setup.glb  # Model case chính modular 28 nodes (Case, Motherboard, CPU, GPU, RAM...)
│       │   └── low_poly_office_computer_case.glb
│       ├── Motherboard_model\
│       │   ├── rog_strix_z370-e_gaming_motherboard_3d_model.glb
│       │   └── motherboard_am4.glb
│       ├── CPU_model\
│       │   ├── cpu_ryzen_5_3600.glb
│       │   └── free_intel_cpu.glb
│       ├── CPU_Cooler_model\
│       │   ├── cooler_master_cpu_cooler.glb
│       │   └── cpu_cooler.glb
│       ├── RAM_model\
│       │   ├── ram_ddr4_g.skill_trident_z_rgb.glb
│       │   └── corsair_dominator_rgb_ram.glb
│       ├── GPU_model\
│       │   ├── nvidia_geforce_rtx_3090_-_gpu.glb
│       │   └── gold_graphics_card.glb
│       ├── SSD_model\
│       │   ├── samsung_ssd_2.5in_-_dirty.glb
│       │   └── ssd_solid_state_drive.glb
│       └── PSU_model\
│           └── psu_power_supply_unit.glb
│
└── src\
    ├── main.js                    # Entry point khởi tạo Game engine và audio unlock
    ├── style.css                  # Toàn bộ CSS (HUD, Crosshair, Slot Grid, Detail panel, Toasts)
    │
    ├── audio\
    │   └── SoundEffects.js        # Synthesizer âm thanh Web Audio (click, drop, snap, screw, post beep, fan hum)
    │
    ├── controls\
    │   ├── PlayerControls.js      # Di chuyển WASD/Mũi tên, Shift-Lock, Mouse Look, Look-Lock, Raycasting
    │   └── HeldItemManager.js     # Quản lý vật phẩm cầm trên tay (First-person hand), RMB hold inspect 360°
    │
    ├── data\
    │   └── hardware.js            # Cơ sở dữ liệu linh kiện (specs wiki, baseRotation calibration, SVG icons, steps)
    │
    ├── scene\
    │   ├── Room.js                # Căn phòng xưởng, bàn gỗ trung tâm, kệ sắt, màn hình máy tính 27" có canvas BIOS/OS
    │   ├── CaseAssembly.js        # Thùng máy modular dream_computer_setup, snap zones, quạt quay, đèn RGB động
    │   ├── ShelfHardware.js       # Bố trí linh kiện vật lý 3D trên kệ sắt bên phải phòng
    │   ├── PlacedItemManager.js   # Quản lý các vật phẩm bị thả/đặt ra bàn, sàn, kệ (nhặt lại được)
    │   └── ItemPreviewScene.js    # Khung nhìn 3D phụ độc lập trong Inventory cho phép xoay xem linh kiện 360°
    │
    ├── ui\
    │   ├── InventoryUI.js         # Giao diện kho đồ 24 ô vuông, chọn/bỏ chọn, hiển thị wiki specs, phím E vứt đồ
    │   └── AssemblyGuideUI.js     # Bảng theo dõi tiến độ 12 bước lắp ráp, checklist, mẹo thực tế và pháo hoa
    │
    └── core\
        └── Game.js                # Bộ điều phối trung tâm tích hợp Scene, Render Loop, Collision, Event Dispatching
```

---

## 4. DANH SÁCH LINH KIỆN & CÂN CHỈNH GÓC XOAY (HARDWARE & BASE ROTATION)

Do một số model xuất từ phần mềm 3D (Blender/Maya/3ds Max) bị dựng đứng hoặc nằm nghiêng, hệ thống áp dụng `baseRotation` trong `hardware.js` để tự động cân bằng:

1. **Bo mạch chủ**: `ASUS ROG STRIX Z370-E GAMING`
   - `tag`: `Motherboard`
   - `baseRotation`: `{ x: -Math.PI / 2, y: 0, z: 0 }` (Lót nằm phẳng, khe cắm & VRM hướng lên trên)
2. **Bộ vi xử lý**: `AMD Ryzen 5 3600 (6 Cores / 12 Threads, 3.6 - 4.2GHz, 32MB Cache, TDP 65W)`
   - `tag`: `CPU`
   - `baseRotation`: `{ x: -Math.PI / 2, y: 0, z: 0 }` (Nắp tản nhiệt kim loại hướng lên, chân socket úp xuống)
3. **Tản nhiệt CPU**: `Cooler Master Hyper Black Edition (Tháp tản khí 4 ống đồng, quạt 120mm PWM)`
   - `tag`: `CPU Cooler`
   - `baseRotation`: `{ x: Math.PI / 2, y: 0, z: 0 }` (Đứng thẳng trên chân đế)
4. **Bộ nhớ RAM**: `G.SKILL Trident Z RGB 16GB (2x8GB) DDR4 3200MHz CL16`
   - `tag`: `RAM`
   - `baseRotation`: `{ x: -Math.PI / 2, y: 0, z: 0 }`
5. **Ổ cứng thể rắn**: `Samsung 860 EVO 500GB 2.5" SATA III 6Gb/s`
   - `tag`: `Storage`
   - `baseRotation`: `{ x: -Math.PI / 2, y: 0, z: 0 }` (Nằm phẳng, logo Samsung ở trên)
6. **Bộ nguồn**: `Aerocool / MasterWatt 650W 80 PLUS Bronze (Semi-Modular)`
   - `tag`: `Power Supply`
   - `baseRotation`: `{ x: 0, y: 0, z: 0 }`
7. **Card đồ họa**: `NVIDIA GeForce RTX 3090 Founders Edition 24GB GDDR6X`
   - `tag`: `GPU`
   - `baseRotation`: `{ x: 0, y: 0, z: 0 }`

---

## 5. CƠ CHẾ ĐIỀU KHIỂN & TƯƠNG TÁC (CONTROL MECHANICS)

### 5.1. Di chuyển & Góc nhìn
- **W / A / S / D hoặc 4 phím mũi tên**: Di chuyển đa hướng theo vector không gian thực của góc nhìn camera.
  - `A`: Di chuyển sang Trái (`-right`).
  - `D`: Di chuyển sang Phải (`+right`).
  - `W`: Di chuyển Tới (`+forward`).
  - `S`: Di chuyển Lùi (`-forward`).
- **Phím Shift**: Bật/Tắt Shift-Lock (khóa/mở con trỏ chuột). Mặc định là bật khi tải trang.
- **Tâm ngắm (Crosshair)**: Hiển thị liên tục ở giữa màn hình. Khi rê trúng vật thể có thể nhặt, bề mặt bàn/kệ hoặc socket thùng máy, tâm ngắm chuyển màu cyan rực rỡ và phóng to nhẹ.

### 5.2. Nhặt, Cầm và Thả đồ (LMB & RMB)
- **Chuột trái (LMB)**:
  - Khi tay trống: Nhấp vào vật thể trên kệ sắt hoặc trên bàn/sàn để nhặt lên tay.
  - Khi đang cầm vật thể:
    - Nếu nhắm vào vị trí lắp ráp trên thùng máy: Lắp ráp vào case.
    - Nếu nhắm vào bề mặt bàn, kệ hoặc sàn: Đặt/thả vật phẩm nằm ngay ngắn tại điểm nhắm của crosshair.
- **Giữ Chuột phải (RMB)**:
  - Tạm thời **khóa khả năng quay góc nhìn camera** của nhân vật (`isLookLocked = true`).
  - Đưa vật thể đang cầm mượt mà ra **chính giữa màn hình**.
  - Rê chuột để xoay vật thể 360° quanh trục Pitch/Yaw để quan sát chi tiết chân pin, khe cắm, tem nhãn.
  - Thả chuột phải: Mở khóa góc nhìn camera và đưa vật thể về vị trí cầm tay mặc định góc dưới bên phải.

### 5.3. Cất vào túi và Kho đồ RPG (Phím E & R)
- **Phím E khi đang cầm vật thể ngoài không gian**:
  - Ngay lập tức cất vật thể đang cầm vào ô trống đầu tiên trong Inventory.
- **Phím R**:
  - Mở/Đóng giao diện Kho đồ RPG (nền mờ `backdrop-filter: blur(20px)`).
  - Trình bày dạng **Dải ô vuông trống (24 ô)**:
    - Ô trống: Hiển thị viền nét đứt và dấu `+`.
    - Ô có đồ: Hiển thị hình ảnh minh họa SVG của linh kiện, tên và tag loại phần cứng.
  - **Nhấp chuột trái vào ô có đồ**:
    - Chọn ô đó (viền sáng neon).
    - Cột bên phải mở ra bảng chi tiết: Khung 3D tương tác xoay 360°, Tag phần cứng, Thông số kỹ thuật từ Wiki, Mẹo thực tế.
  - **Nhấp chuột trái lần nữa vào ô đang chọn**:
    - Bỏ chọn (Deselect), đóng bảng chi tiết.
  - **Nhấn phím E khi đang chọn một ô**:
    - Vứt linh kiện từ ô đó ra thế giới 3D theo hướng tâm ngắm crosshair.
    - Ô đó trở thành ô trống.

---

## 6. QUY TRÌNH 12 BƯỚC LẮP RÁP (ASSEMBLY SEQUENCE)
1. Tháo nắp kính cường lực thùng case (`GlassSide`).
2. Lắp Bo mạch chủ ASUS ROG STRIX vào chân ốc đồng.
3. Lắp CPU AMD Ryzen vào socket AM4 đúng tam giác vàng.
4. Bôi keo tản nhiệt và lắp Tháp tản nhiệt khí Cooler Master.
5. Cắm thanh RAM G.SKILL Trident Z RGB vào khe Dual-Channel.
6. Lắp ổ cứng thể rắn SSD Samsung 860 EVO.
7. Lắp bộ nguồn PSU vào hộc đáy thùng máy.
8. Lắp Card đồ họa NVIDIA RTX 3090 vào khe PCIe x16.
9. Cắm hệ thống dây nguồn 24-Pin, 8-Pin CPU, PCIe và cáp công tắc.
10. Đóng nắp kính cường lực bảo vệ thùng máy.
11. Cắm cáp màn hình DisplayPort vào Card đồ họa & cắm dây nguồn AC.
12. **Bật nút nguồn (Power On)**: Hệ thống quạt quay, đèn RGB đổi màu, còi beep POST vang lên, màn hình khởi động BIOS POST và nạp PC Builder OS thành công kèm pháo hoa chúc mừng.
