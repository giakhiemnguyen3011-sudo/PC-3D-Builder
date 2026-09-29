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
    │   ├── hardware.js            # Cơ sở dữ liệu linh kiện (specs wiki, realSize, footprint, shelfTier, SVG icons)
    │   └── assemblyPlan.js        # Kế hoạch 12 bước lắp ráp (vị trí, linh kiện, hành động bắt buộc)
    │
    ├── scene\
    │   ├── Room.js                # Căn phòng xưởng, bàn gỗ trung tâm, kệ sắt, màn hình 27" có canvas BIOS/OS, placeholder thùng máy
    │   ├── caseLayout.js          # Số đo thật của thùng ATX + CASE_ZONES (vị trí lắp, pattern ốc) - nguồn sự thật duy nhất
    │   ├── shelfLayout.js         # Hình học kệ sắt + bố cục xếp linh kiện (tự kéo dài kệ khi cần)
    │   ├── ModelFit.js            # Quy đổi model về kích cước thực (mét) + tự xoay cho linh kiện nằm ngang & thẳng
    │   ├── BuildScene.js          # Build Zone tương tác: thùng x-ray 50%, vùng highlight, model theo con trỏ, ốc, cáp
    │   ├── ItemThumbnails.js      # Nướng ảnh PNG model 3D cho danh sách linh kiện
    │   ├── ShelfHardware.js       # Bố trí linh kiện vật lý 3D trên kệ sắt bên phải phòng
    │   ├── PlacedItemManager.js   # Quản lý các vật phẩm bị thả/đặt ra bàn, sàn, kệ (nhặt lại được)
    │   └── ItemPreviewScene.js    # Khung nhìn 3D phụ trong Inventory, tự canh giữa + khung vừa khung
    │
    ├── ui\
    │   ├── InventoryUI.js         # Giao diện kho đồ 24 ô vuông, xem wiki specs, xem trước model 3D
    │   └── BuildModeUI.js         # Build Mode: điều phối 12 bước, danh sách linh kiện, ghim ốc/cáp, tiến trình POST
    │
    └── core\
        └── Game.js                # Bộ điều phối trung tâm tích hợp Scene, Render Loop, Collision, Event Dispatching
```

---

## 4. KÍCH THƯỚC THỰC TẾ & BỐ CỤC KỆ LINH KIỆN (REAL-WORLD SIZING & RACK LAYOUT)

Do các model xuất từ phần mềm 3D (Blender/Maya/3ds Max/Sketchfab) có đơn vị và hướng đặt khác nhau (có model nằm sấp, có model đứng, có model lệch), hệ thống **không dùng `baseRotation` thủ công nữa**. Thay vào đó:

- **`realSize`** (mét) trong `hardware.js`: cạnh dài nhất thực tế của linh kiện. Mọi mesh được scale sao cho bounding box lớn nhất khớp đúng con số này → CPU thật sự nhỏ hơn bo mạch chủ, GPU dài hơn ổ cứng.
- **`footprint: { length, depth }`** (mét): diện tích chỗ để trên kệ. `length` chạy dọc theo kệ, `depth` chạy ngang kệ. Dùng để tính khoảng cách và kéo dài kệ.
- **`shelfTier`**: tầng hiển thị. `0` = mặt bàn (0.82 m), `1` = kệ giữa (0.575 m), `2` = kệ dưới (0.315 m). Linh kiện to (bo mạch, card, case) để ở tầng 0 cho dễ với tay; linh kiện nhỏ để tầng 2.
- **`ALL_HARDWARE_ITEMS`** = `HARDWARE_ITEMS` + `HARDWARE_VARIANTS`. Toàn bộ 33 model trong `public/models` (trừ 3 file `Decorative_model`) đã được đưa vào danh mục: 35 linh kiện. 12 bước lắp ráp nhận linh kiện theo **`tag`** chứ không theo `id`, nên các biến thể mới dùng được ngay mà không phải sửa `assemblyPlan.js`. Riêng nhóm `Case` là **carry-only**: bạn có thể cầm và xem, nhưng không bước nào lắp case vào case.
- **`hardwareCategories.js`**: tách riêng để `hardware.js` và `hardwareVariants.js` cùng dùng mà không import vòng.
- **`ModelFit.js`** (`buildFittedModel` + `computeFlatAlignment`): tự động
  1. đo bounding box gốc của model,
  2. chọn trục **mỏng nhất làm trục dọc** → linh kiện luôn *nằm ngang*, không bao giờ đứng bằng mũi,
  3. chọn trục **dài nhất làm trục X** → cạnh dài nằm song song với kệ,
  4. chọn phép hoán trục **ít xoay nhất** (kèm ưu tiên giữ mặt "ngửa lên") để model vốn đã nằm phẳng không bị lật,
  5. scale về `realSize`, canh giữa theo X/Z và đặt sát mặt kệ (minY = 0).
- **`shelfLayout.js`** (`getShelfLayout`, `getTableObstacle`): tính ra hình học bàn và vị trí từng linh kiện — chia đều theo 3 tầng, giới hạn khe hở tối đa (`maxGap` 0.05 m), canh giữa, và **tự kéo dài bàn** nếu tổng chiều dài vượt quá. Kết quả được `Room.js` (dựng bàn + 2 kệ dưới theo `tierSurfaces`), `ShelfHardware.js` (đặt linh kiện) và `PlayerControls.js` (va chạm) dùng chung.

Kích thước thực tế đang dùng:

| Linh kiện | `realSize` | Ghi chú |
| :--- | :--- | :--- |
| Bo mạch chủ ATX | 0.305 m | 305 × 244 mm |
| CPU AMD Ryzen 5 3600 | 0.04 m | IHS 40 mm |
| CPU Intel i7-9700K | 0.0375 m | LGA1151 37.5 mm |
| Tản khí Cooler Master Hyper 212 | 0.154 m | 154 × 120 × 94 mm |
| RAM G.SKILL Trident Z RGB | 0.1334 m | DIMM 133.35 mm |
| RAM Corsair Dominator Platinum | 0.1334 m | DIMM 133.35 mm |
| SSD Samsung 860 EVO 2.5" | 0.1 m | 100 × 70 × 7 mm |
| Nguồn Aerocool MasterWatt 650W | 0.15 m | ATX 150 × 140 × 86 mm |
| Card đồ họa RTX 3090 FE | 0.313 m | 313 mm dài |
| Card đồ họa RX 480 | 0.24 m | 240 mm dài |

### 4.1. Placeholder thùng máy tính (Build Mode)
`createComputerCase3DGroup()` trong `Room.js` dựng thùng ATX mid-tower rỗng bằng hình khối thủ tục với kích thước vỏ thật **21 × 48 × 45 cm**. Toàn bộ số đo nằm trong **`caseLayout.js`** (nguồn sự thật duy nhất) nên vật thể trong phòng và Build Zone không bao giờ lệch nhau:
- Khung thép + tấm đáy, nắp trên **đục lỗ thật** cho quạt 140 mm bằng `ShapeGeometry`, tấm sau **đục lỗ** khoét tròn quạt xả 120 mm, cửa sổ I/O, 7 khe PCIe và khoang nguồn.
- Mặt trước: khung viền + tấm lưới đục lỗ `alphaTest` nhìn thấy 2 quạt hút 140 mm bên trong.
- **Khay bo mạch đặt lùi** (x = −50 mm) để có ~147 mm độ giãn cho tản khí tháp, để lại khe luồn cáp ~42 mm phía sau — đúng tỉ lệ thùng máy thật. Khay bị khuyết ở góc trên-sau để chừa chỗ cho quạt xả, nên chân ốc thực tế còn **8/9**.
- Tấm che nguồn (PSU shroud) kích thước **144 × 359 × 95 mm**, đủ chứa nguồn ATX 140 × 150 × 86 mm.
- **Nắp kính cường lực** (tên `sideGlass`) + 4 núm vặn đi kèm để tháo ra thành một khối.
- `{ xray: true }` biến toàn bộ vỏ thùng thành **trong suốt 50 %** (`transparent`, `depthWrite: false`) cho chế độ Build.

#### 4.2. Một phép biến đổi duy nhất cho toàn bộ thùng (`caseRoot`)

Thùng được xoay **−90° quanh Y** để mặt kính hướng về camera. Phép xoay đó nằm trên **`BuildScene.caseRoot`**, và **mọi** thứ đặt bên trong thùng đều là con của `caseRoot`:

```
pivot
└── caseRoot      ← rotation.y = -90°, position.y = -CASE.feet   (phép biến đổi DUY NHẤT)
    ├── caseGroup (thùng, giữ transform gốc case-local)
    ├── zoneMeshes, screwGroups, cableGroup   (case-local)
    ├── placedParts                            (case-local)
    └── ghost                                  (case-local)
```

Mọi `anchor` trong `caseLayout.js` viết theo **case-local**. Trước đây các vùng được gắn thẳng vào `pivot` trong khi thùng lại xoay −90°, nên **vùng lệch tối đa 30 cm** và linh kiện lắp vào nằm sát cạnh thùng thay vì nằm trong thùng. Hai hàm phải nói đúng một hệ toạ độ:

- `pointerWorld()` trả về **case-local** (dùng `caseRoot.worldToLocal`).
- `frameBox(box)` nhận box case-local rồi đưa sang pivot-space qua `caseRoot.matrixWorld` trước khi tính khung camera.

Hai điểm dễ sai khác, đã có test chặn (`verify-placement.mjs`):

- **`buildFittedModel` đặt linh kiện nằm trên `y = 0`** và chỉ canh giữa theo X/Z, đồng thời offset được bake vào `position` của chính group gốc. Nên **không** suy ra vị trí ngồi bằng đại số box → phải đo: `_centreOnAnchor()` đặt holder về gốc rồi lấy tâm `Box3` thật. Lỗi này làm card 44 mm nằm lệch 22 mm so với vị trí đã duyệt trong `caseLayout.js`.
- **Kẹp (clamp) ghost trong thùng** dùng `centre + half` của bounding box **đã gắn mount**, đo trong **case-local** (`Box3` trả về world-space, mà thùng lại xoay −90°). Offset tâm/half được đo **một lần cho mỗi zone** (`_applyGhostMount`) để không phải duyệt bounding box mỗi lần rê chuột.
- Ghost chỉ chạy theo con trỏ khi `BuildModeUI.ghostArmed` đúng: đang siết ốc, bôi keo, ấn linh kiện, cắm cáp hay bấm nguồn thì ghost **ẩn đi**, tránh bay ra ngoài thùng.

### 4.2. Hệ thống Build Mode lắp ráp 12 bước
| File | Vai trò |
| :--- | :--- |
| `scene/caseLayout.js` | Toàn bộ số đo thật + `CASE_ZONES` (vị trí, hướng mặt, pattern ốc) cho từng vị trí lắp |
| `data/assemblyPlan.js` | Kế hoạch 12 bước: `zone`, `accepts` (id hoặc `tag:`), `need`, `action` |
| `scene/BuildScene.js` | Scene Build Zone: thùng x-ray, khung highlight vị trí, model ma theo con trỏ, ốc, đầu cáp |
| `scene/ItemThumbnails.js` | Nướng ảnh PNG model 3D cho danh sách linh kiện (1 offscreen WebGL context, có cache) |
| `ui/BuildModeUI.js` | Điều phối 12 bước, render danh sách, ghim/bỏ linh kiện, tiến trình POST |

Luồng chơi: chọn linh kiện ở danh sách → rê chuột trong Build Zone (model đi theo con trỏ, tự hút vào vùng highlight) → bấm chuột trái để cắm → làm tiếp **hành động bắt buộc** của bước đó:
`glass` (tháo/lắp nắp kính) · `screw` (bấm từng đầu ốc, số ốc lấy từ hình học thùng) · `paste` (bấm vào CPU để bôi keo, mới mở được ốc tản) · `seat` (bấm lần nữa để ấn linh kiện xuống / đóng chốt) · `cable` (bấm 4 đầu cáp màu cam) · `display` · `power`.

Camera tự glide tới đúng vị trí đang làm việc nên tạm CPU 4 cm vẫn thao tác được, nhưng **thùng không bao giờ xoay** (kính hướng thẳng về người chơi). `Làm lại` trả toàn bộ linh kiện đã lắp về túi.



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
