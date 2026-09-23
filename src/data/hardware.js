/**
 * Hardware Components Database
 * Contains realistic technical specifications, tags, 3D model paths, educational notes,
 * calibrated baseRotation, and crisp SVG icons for Inventory slots.
 */

export const HARDWARE_CATEGORIES = {
  ALL: 'Tất cả',
  MOTHERBOARD: 'Motherboard',
  CPU: 'CPU',
  COOLER: 'CPU Cooler',
  RAM: 'RAM',
  GPU: 'GPU',
  STORAGE: 'Storage',
  PSU: 'Power Supply',
  CASE: 'Case'
};

export const HARDWARE_ITEMS = [
  {
    id: 'mb_asus_z370',
    name: 'ASUS ROG STRIX Z370-E GAMING',
    category: HARDWARE_CATEGORIES.MOTHERBOARD,
    categoryKey: 'motherboard',
    tag: 'Motherboard',
    modelPath: '/models/Motherboard_model/rog_strix_z370-e_gaming_motherboard_3d_model.glb',
    brand: 'ASUS Republic of Gamers',
    price: '4,890,000 đ',
    shelfPosition: { x: 3.2, y: 1.87, z: -0.8 },
    scale: 0.85,
    baseRotation: { x: -Math.PI / 2, y: 0, z: 0 },
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="52" height="52" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      <rect x="14" y="14" width="16" height="16" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <rect x="18" y="18" width="8" height="8" fill="#fbbf24"/>
      <rect x="36" y="14" width="4" height="24" rx="1" fill="#38bdf8"/>
      <rect x="44" y="14" width="4" height="24" rx="1" fill="#38bdf8"/>
      <rect x="14" y="38" width="34" height="6" rx="1" fill="#22c55e"/>
      <rect x="14" y="48" width="24" height="4" rx="1" fill="#a855f7"/>
    </svg>`,
    specs: [
      { label: 'Socket', value: 'LGA 1151 (Intel Core Gen 8/9)' },
      { label: 'Chipset', value: 'Intel Z370 Express Chipset' },
      { label: 'Kích thước Form Factor', value: 'ATX (30.5 cm x 24.4 cm)' },
      { label: 'Khe RAM', value: '4x DDR4 DIMM (Tối đa 64GB, 4000MHz OC)' },
      { label: 'Khe PCIe', value: '2x PCIe 3.0 x16 SafeSlot, 4x PCIe x1' },
      { label: 'Cổng M.2 & SATA', value: '2x M.2 NVMe PCIe 3.0 x4, 6x SATA III 6Gb/s' },
      { label: 'Âm thanh', value: 'ROG SupremeFX S1220A 8-Channel HD Audio' },
      { label: 'Kết nối mạng', value: 'Intel I219-V Gigabit LAN & Wi-Fi 802.11ac' },
      { label: 'LED RGB', value: 'ASUS Aura Sync RGB Header' }
    ],
    description: 'Bo mạch chủ chuẩn Gaming cao cấp trang bị tản nhiệt VRM dày bản, tích hợp Wi-Fi AC và âm thanh SupremeFX S1220A chuyên nghiệp.',
    beginnerTip: '💡 Bo mạch chủ là nền móng kết nối tất cả linh kiện. Lắp CPU, RAM và SSD M.2 lên bo mạch chủ trước khi gắn vào thùng case để dễ thao tác nhất!',
    assemblyStep: 2,
    installedCasePartName: 'MotherBoard'
  },
  {
    id: 'cpu_ryzen_3600',
    name: 'AMD Ryzen 5 3600 Processor',
    category: HARDWARE_CATEGORIES.CPU,
    categoryKey: 'cpu',
    tag: 'CPU',
    modelPath: '/models/CPU_model/cpu_ryzen_5_3600.glb',
    brand: 'AMD',
    price: '3,290,000 đ',
    shelfPosition: { x: 3.2, y: 1.86, z: 0.1 },
    scale: 1.8,
    baseRotation: { x: -Math.PI / 2, y: 0, z: 0 },
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="44" height="44" rx="4" fill="#14532d" stroke="#4ade80" stroke-width="2"/>
      <rect x="18" y="18" width="28" height="28" rx="3" fill="#64748b" stroke="#cbd5e1" stroke-width="2"/>
      <circle cx="23" cy="23" r="2" fill="#fbbf24"/>
      <text x="32" y="35" font-size="7" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">RYZEN</text>
      <path d="M10 16h-4M10 24h-4M10 32h-4M10 40h-4M10 48h-4" stroke="#fbbf24" stroke-width="2"/>
      <path d="M54 16h4M54 24h4M54 32h4M54 40h4M54 48h4" stroke="#fbbf24" stroke-width="2"/>
    </svg>`,
    specs: [
      { label: 'Số nhân / Số luồng', value: '6 Nhân / 12 Luồng (Zen 2)' },
      { label: 'Xung nhịp cơ bản', value: '3.6 GHz (Tăng tốc tối đa 4.2 GHz)' },
      { label: 'Tiến trình chế tạo', value: 'TSMC 7nm FinFET' },
      { label: 'Bộ nhớ đệm L3', value: '32MB GameCache' },
      { label: 'Điện năng tiêu thụ (TDP)', value: '65 Watts' },
      { label: 'Chuẩn Socket', value: 'AMD Socket AM4' },
      { label: 'Phiên bản PCIe', value: 'PCIe 4.0 x16 Ready' },
      { label: 'Hỗ trợ RAM', value: 'DDR4 Dual-Channel lên tới 3200MHz' }
    ],
    description: 'Bộ vi xử lý quốc dân với hiệu năng đa nhân vượt trội, cân bằng hoàn hảo giữa chơi game eSports và làm việc đồ họa mượt mà.',
    beginnerTip: '💡 Khi lắp CPU, hãy tìm biểu tượng tam giác vàng ở góc con chip và căn trùng khớp với dấu tam giác trên socket. Nhẹ nhàng đặt xuống, tuyệt đối không dùng lực đè mạnh!',
    assemblyStep: 3,
    installedCasePartName: 'CPU'
  },
  {
    id: 'cooler_master_212',
    name: 'Cooler Master Hyper Black Edition',
    category: HARDWARE_CATEGORIES.COOLER,
    categoryKey: 'cooler',
    tag: 'CPU Cooler',
    modelPath: '/models/CPU_Cooler_model/cooler_master_cpu_cooler.glb',
    brand: 'Cooler Master',
    price: '890,000 đ',
    shelfPosition: { x: 3.2, y: 1.86, z: 0.9 },
    scale: 0.9,
    baseRotation: { x: Math.PI / 2, y: 0, z: 0 },
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="10" width="36" height="38" rx="4" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
      <circle cx="32" cy="29" r="13" stroke="#c084fc" stroke-width="2"/>
      <circle cx="32" cy="29" r="3.5" fill="#fbbf24"/>
      <path d="M32 16v8M32 34v8M19 29h8M37 29h8" stroke="#c084fc" stroke-width="2" stroke-linecap="round"/>
      <path d="M20 48v8M28 48v8M36 48v8M44 48v8" stroke="#f97316" stroke-width="2.5"/>
    </svg>`,
    specs: [
      { label: 'Dạng tản nhiệt', value: 'Tháp tản nhiệt khí (Single Tower Heatsink)' },
      { label: 'Ống dẫn nhiệt (Heatpipes)', value: '4 ống đồng Direct Contact 6mm mạ niken' },
      { label: 'Kích thước quạt', value: '120 x 120 x 25 mm Silencio FP' },
      { label: 'Tốc độ quay quạt', value: '650 - 2,000 RPM (PWM) ± 10%' },
      { label: 'Lưu lượng gió tối đa', value: '59 CFM, Áp suất khí 2.1 mmH2O' },
      { label: 'Độ ồn hoạt động', value: '8 - 30 dBA (Vận hành cực êm)' },
      { label: 'Socket tương thích', value: 'Intel LGA 1700/1200/115x & AMD AM4/AM5' }
    ],
    description: 'Giải pháp làm mát khí kinh điển với các lá tản nhiệt nhôm mạ niken tối ưu khí động học và cụm tiếp xúc 4 ống đồng nguyên chất.',
    beginnerTip: '💡 Đừng quên bôi một lượng keo tản nhiệt (cỡ hạt đậu) lên giữa nắp lưng CPU trước khi siết ốc tản nhiệt để truyền nhiệt tốt nhất!',
    assemblyStep: 4,
    installedCasePartName: 'Radiator'
  },
  {
    id: 'ram_gskill_tridentz_16gb',
    name: 'G.SKILL Trident Z RGB 16GB (2x8GB) DDR4',
    category: HARDWARE_CATEGORIES.RAM,
    categoryKey: 'ram',
    tag: 'RAM',
    modelPath: '/models/RAM_model/ram_ddr4_g.skill_trident_z_rgb.glb',
    brand: 'G.SKILL',
    price: '1,750,000 đ',
    shelfPosition: { x: 3.2, y: 1.36, z: -0.8 },
    scale: 1.4,
    baseRotation: { x: -Math.PI / 2, y: 0, z: 0 },
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="18" width="48" height="28" rx="3" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
      <rect x="10" y="20" width="44" height="6" rx="2" fill="url(#rgbGrad)"/>
      <rect x="14" y="30" width="8" height="10" fill="#334155"/>
      <rect x="26" y="30" width="8" height="10" fill="#334155"/>
      <rect x="38" y="30" width="8" height="10" fill="#334155"/>
      <path d="M12 46v4M16 46v4M20 46v4M24 46v4M36 46v4M40 46v4M44 46v4M48 46v4" stroke="#fbbf24" stroke-width="1.5"/>
      <defs>
        <linearGradient id="rgbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="50%" stop-color="#ec4899"/>
          <stop offset="100%" stop-color="#fbbf24"/>
        </linearGradient>
      </defs>
    </svg>`,
    specs: [
      { label: 'Dung lượng bộ nhớ', value: '16GB (Kit 2 thanh x 8GB)' },
      { label: 'Chuẩn RAM', value: 'DDR4 Unbuffered DIMM' },
      { label: 'Tốc độ Bus RAM', value: '3200 MHz (PC4-25600)' },
      { label: 'Độ trễ Timing (CAS)', value: 'CL16-18-18-38' },
      { label: 'Điện áp danh định', value: '1.35V' },
      { label: 'Cấu hình ép xung', value: 'Intel XMP 2.0 (Extreme Memory Profile)' },
      { label: 'Hiệu ứng ánh sáng', value: 'LED RGB Dynamic Flow 5 vùng sáng' },
      { label: 'Chất liệu tản nhiệt', value: 'Hợp kim nhôm xước hairline cao cấp' }
    ],
    description: 'Thanh RAM cao cấp hàng đầu thế giới với dải LED RGB cầu vồng sống động cùng IC được tuyển chọn kỹ lưỡng cho khả năng ép xung tối đa.',
    beginnerTip: '💡 Khi cắm 2 thanh RAM trên bo mạch chủ có 4 khe, hãy cắm vào khe 2 và khe 4 (khe DIMM A2 & B2) để kích hoạt chế độ Kênh Đôi (Dual-Channel) giúp tăng gấp đôi băng thông nhớ!',
    assemblyStep: 5,
    installedCasePartName: 'RAM'
  },
  {
    id: 'ssd_samsung_860',
    name: 'Samsung 860 EVO 500GB 2.5" SATA III',
    category: HARDWARE_CATEGORIES.STORAGE,
    categoryKey: 'storage',
    tag: 'Storage',
    modelPath: '/models/SSD_model/samsung_ssd_2.5in_-_dirty.glb',
    brand: 'Samsung',
    price: '1,450,000 đ',
    shelfPosition: { x: 3.2, y: 1.36, z: 0.1 },
    scale: 1.5,
    baseRotation: { x: -Math.PI / 2, y: 0, z: 0 },
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="10" width="40" height="44" rx="4" fill="#1e293b" stroke="#0ea5e9" stroke-width="2"/>
      <rect x="26" y="24" width="12" height="12" fill="#f97316"/>
      <text x="32" y="44" font-size="6" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">SAMSUNG</text>
      <rect x="20" y="10" width="24" height="3" fill="#fbbf24"/>
    </svg>`,
    specs: [
      { label: 'Dung lượng lưu trữ', value: '500 GB' },
      { label: 'Kích thước Form Factor', value: '2.5 inch (Độ dày 6.8 mm)' },
      { label: 'Giao tiếp kết nối', value: 'SATA III 6Gb/s' },
      { label: 'Tốc độ đọc tuần tự', value: 'Lên tới 550 MB/s' },
      { label: 'Tốc độ ghi tuần tự', value: 'Lên tới 520 MB/s' },
      { label: 'Công nghệ NAND Flash', value: 'Samsung V-NAND 3-bit MLC (3D TLC)' },
      { label: 'Bộ điều khiển Controller', value: 'Samsung MJX Controller' },
      { label: 'Độ bền ghi (TBW)', value: '300 TBW (Bảo hành 5 năm)' }
    ],
    description: 'Ổ cứng SSD thể rắn huyền thoại từ Samsung đem lại độ bền bỉ phi thường, khởi động hệ điều hành và tải ứng dụng chỉ trong chớp mắt.',
    beginnerTip: '💡 Ổ cứng SSD không có bộ phận chuyển động cơ học nên chống sốc cực tốt và hoàn toàn im lặng. Kết nối cáp dữ liệu SATA từ ổ cứng vào bo mạch chủ và cáp nguồn từ PSU!',
    assemblyStep: 6,
    installedCasePartName: 'SSD'
  },
  {
    id: 'psu_aerocool_650w',
    name: 'Aerocool MasterWatt 650W 80 Plus Bronze',
    category: HARDWARE_CATEGORIES.PSU,
    categoryKey: 'psu',
    tag: 'Power Supply',
    modelPath: '/models/PSU_model/psu_power_supply_unit.glb',
    brand: 'Cooler Master / Aerocool',
    price: '1,590,000 đ',
    shelfPosition: { x: 3.2, y: 1.36, z: 0.9 },
    scale: 1.0,
    baseRotation: { x: 0, y: 0, z: 0 },
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="12" width="44" height="40" rx="4" fill="#0f172a" stroke="#f97316" stroke-width="2"/>
      <circle cx="32" cy="32" r="14" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="32" cy="32" r="4" fill="#f97316"/>
      <rect x="14" y="16" width="6" height="4" fill="#ef4444"/>
      <path d="M46 16v12M50 16v12" stroke="#fbbf24" stroke-width="1.5"/>
    </svg>`,
    specs: [
      { label: 'Công suất thực định mức', value: '650 Watts liên tục' },
      { label: 'Chứng nhận hiệu suất', value: '80 PLUS Bronze (Hiệu suất đạt > 85%)' },
      { label: 'Dạng cáp nguồn', value: 'Semi-Modular (Cáp dẹt đen chống rối)' },
      { label: 'Quạt làm mát', value: '120mm Silent LDB Fan điều tốc tự động' },
      { label: 'Các chế độ bảo vệ', value: 'OVP, OPP, SCP, OCP, UVP, OTP' },
      { label: 'Đầu cấp nguồn (Connectors)', value: '1x 24-Pin ATX, 1x 8-Pin CPU EPS, 2x 8-Pin PCIe, 6x SATA' },
      { label: 'Đường điện 12V', value: 'Single Rail 12V 54A công suất tối đa' }
    ],
    description: 'Trái tim cấp năng lượng bền bỉ cho toàn bộ dàn máy với tụ điện thể rắn cao cấp chịu nhiệt 105°C và đường 12V Single Rail công suất cao.',
    beginnerTip: '💡 Luôn lắp nguồn với quạt hút hướng xuống lưới lọc bụi dưới đáy thùng máy để hút không khí mát từ bên ngoài phòng vào làm mát linh kiện nguồn!',
    assemblyStep: 7,
    installedCasePartName: 'PSU'
  },
  {
    id: 'gpu_rtx_3090',
    name: 'NVIDIA GeForce RTX 3090 Founders Edition',
    category: HARDWARE_CATEGORIES.GPU,
    categoryKey: 'gpu',
    tag: 'GPU',
    modelPath: '/models/GPU_model/nvidia_geforce_rtx_3090_-_gpu.glb',
    brand: 'NVIDIA',
    price: '34,900,000 đ',
    shelfPosition: { x: 3.2, y: 0.86, z: -0.4 },
    scale: 1.0,
    baseRotation: { x: 0, y: 0, z: 0 },
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="16" width="52" height="32" rx="4" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
      <circle cx="22" cy="32" r="10" stroke="#4ade80" stroke-width="2"/>
      <circle cx="22" cy="32" r="3" fill="#22c55e"/>
      <circle cx="44" cy="32" r="10" stroke="#4ade80" stroke-width="2"/>
      <circle cx="44" cy="32" r="3" fill="#22c55e"/>
      <rect x="14" y="48" width="24" height="4" fill="#fbbf24"/>
      <rect x="4" y="12" width="3" height="40" fill="#94a3b8"/>
    </svg>`,
    specs: [
      { label: 'Nhân đồ họa CUDA', value: '10,496 CUDA Cores' },
      { label: 'Bộ nhớ VRAM', value: '24 GB GDDR6X (Băng thông 936 GB/s)' },
      { label: 'Độ rộng băng thông bus', value: '384-bit' },
      { label: 'Xung nhịp Boost Clock', value: '1.70 GHz' },
      { label: 'Công nghệ AI & Ray Tracing', value: 'RT Cores Gen 2 & Tensor Cores Gen 3 (DLSS)' },
      { label: 'Công suất tiêu thụ TDP', value: '350 Watts' },
      { label: 'Nguồn phụ yêu cầu', value: '2x 8-Pin PCIe (Khuyến nghị nguồn > 750W)' },
      { label: 'Cổng xuất hình', value: '1x HDMI 2.1, 3x DisplayPort 1.4a' }
    ],
    description: 'Quái thú đồ họa (BFGPU) đỉnh cao nhất thế giới cho phép trải nghiệm game mượt mà ở độ phân giải 8K HDR và dựng hình 3D, Render video chuyên nghiệp.',
    beginnerTip: '💡 Card đồ họa rất nặng và tiêu thụ nhiều điện. Hãy lắp vào khe PCIe x16 trên cùng gần CPU nhất để đạt tốc độ tối đa, siết chặt ốc giữ ở thành case và cắm đủ nguồn 8-Pin PCIe!',
    assemblyStep: 8,
    installedCasePartName: 'RTX2080ti'
  }
];

export const ASSEMBLY_STEPS = [
  {
    step: 1,
    title: 'Mở nắp kính thùng máy tính',
    shortName: 'Mở nắp kính',
    target: 'case_glass',
    icon: 'wrench',
    instruction: 'Nhấn chuột trái vào nắp kính cường lực (Side Glass) ở mặt bên thùng máy để tháo ra, sẵn sàng cho việc lắp linh kiện.',
    tip: 'Trong thực tế, hãy vặn 4 ốc núm cao su ở 4 góc kính cẩn thận và đặt kính lên nơi êm mềm để tránh trầy xước!'
  },
  {
    step: 2,
    title: 'Lắp đặt Bo mạch chủ (Motherboard)',
    shortName: 'Lắp Bo mạch chủ',
    target: 'mb_asus_z370',
    icon: 'cpu',
    instruction: 'Lấy Bo mạch chủ ASUS ROG STRIX từ kệ sắt hoặc túi đồ (R) và đặt vào đúng vị trí ốc chân đồng (standoffs) trong case.',
    tip: 'Căn khớp mặt cổng I/O phía sau với miếng chặn main và siết các ốc vít theo thứ tự đối xứng.'
  },
  {
    step: 3,
    title: 'Lắp Bộ vi xử lý (CPU AMD Ryzen)',
    shortName: 'Lắp CPU',
    target: 'cpu_ryzen_3600',
    icon: 'zap',
    instruction: 'Mở cần gạt socket CPU, căn đúng góc tam giác vàng và đặt CPU Ryzen vào socket, sau đó gạt cần khóa ngàm lại.',
    tip: 'Không dùng sức ấn mạnh. Khi đúng chiều, chip CPU sẽ tự động trượt êm ái vào các lỗ socket.'
  },
  {
    step: 4,
    title: 'Lắp Tản nhiệt CPU (Cooler Master)',
    shortName: 'Lắp Tản nhiệt CPU',
    target: 'cooler_master_212',
    icon: 'wind',
    instruction: 'Bôi keo tản nhiệt lên lưng CPU và gắn tháp tản nhiệt Cooler Master lên socket, siết ốc đối xứng và cắm dây fan CPU.',
    tip: 'Siết ốc theo hình chữ X (chéo góc) từng vòng một để lực ép keo tản nhiệt trải đều trên bề mặt chip.'
  },
  {
    step: 5,
    title: 'Cắm thanh RAM G.SKILL Trident Z RGB',
    shortName: 'Cắm RAM',
    target: 'ram_gskill_tridentz_16gb',
    icon: 'layers',
    instruction: 'Mở lẫy 2 đầu khe RAM, căn rãnh khuyết ở chân cắm và ấn đều 2 đầu thanh RAM cho đến khi lẫy tự động gài kêu tách.',
    tip: 'Cắm vào khe DIMM 2 & 4 để chạy Dual Channel tối ưu hiệu năng băng thông.'
  },
  {
    step: 6,
    title: 'Lắp Ổ cứng thể rắn SSD Samsung',
    shortName: 'Lắp Ổ SSD',
    target: 'ssd_samsung_860',
    icon: 'hard-drive',
    instruction: 'Gắn ổ cứng SSD Samsung vào khay ổ cứng và siết ốc cố định.',
    tip: 'SSD thể rắn giúp máy tính khởi động Windows trong vòng 5 giây và mở phần mềm cực nhanh.'
  },
  {
    step: 7,
    title: 'Lắp Bộ nguồn máy tính (PSU)',
    shortName: 'Lắp Nguồn PSU',
    target: 'psu_aerocool_650w',
    icon: 'battery-charging',
    instruction: 'Đưa bộ nguồn vào khoang hộc đáy thùng case, quạt hướng xuống dưới và bắt 4 ốc ở mặt sau.',
    tip: 'Bộ nguồn đóng vai trò chuyển điện xoay chiều 220V thành các dòng điện 12V, 5V, 3.3V cho toàn bộ hệ thống.'
  },
  {
    step: 8,
    title: 'Lắp Card màn hình rời (NVIDIA RTX 3090)',
    shortName: 'Lắp Card GPU',
    target: 'gpu_rtx_3090',
    icon: 'tv',
    instruction: 'Cắm card RTX 3090 vào khe PCIe x16 đầu tiên trên mainboard, gạt lẫy khóa và siết ốc giữ vào khung case.',
    tip: 'RTX 3090 là card đồ họa đầu bảng, cần cắm đủ 2 đầu nguồn phụ 8-Pin PCIe để hoạt động ổn định.'
  },
  {
    step: 9,
    title: 'Cắm hệ thống Dây nguồn & Cáp tín hiệu',
    shortName: 'Cắm Dây cáp',
    target: 'cables_connected',
    icon: 'git-merge',
    instruction: 'Nhấn vào các đầu dây để cắm dây 24-Pin ATX Mainboard, 8-Pin CPU EPS, dây PCIe GPU và dây Power Switch.',
    tip: 'Dây cáp máy tính đều có ngàm chống cắm ngược, nếu thấy cắm vào bị cấn hãy kiểm tra lại chiều đầu cắm.'
  },
  {
    step: 10,
    title: 'Đóng nắp kính cường lực thùng máy',
    shortName: 'Đóng nắp kính',
    target: 'case_glass_close',
    icon: 'shield',
    instruction: 'Lắp lại nắp kính cường lực vào mặt bên case để bảo vệ linh kiện và hoàn thiện tính thẩm mỹ.',
    tip: 'Thùng máy kín giúp luồng gió thổi từ quạt trước ra quạt sau tạo áp suất làm mát tối ưu.'
  },
  {
    step: 11,
    title: 'Cắm Dây màn hình & Nguồn điện máy tính',
    shortName: 'Kết nối Màn hình & Điện',
    target: 'power_plug',
    icon: 'monitor',
    instruction: 'Cắm dây DisplayPort / HDMI từ card RTX 3090 lên Màn hình máy tính và cắm dây nguồn AC vào ổ điện.',
    tip: '⚠️ Lưu ý vàng cho người mới: Phải cắm dây màn hình vào Card đồ họa (GPU) ở dưới, KHÔNG cắm vào cổng trên mainboard!'
  },
  {
    step: 12,
    title: 'BẬT NGUỒN & KHỞI ĐỘNG HỆ THỐNG!',
    shortName: 'Bật nguồn & Test máy',
    target: 'power_button',
    icon: 'power',
    instruction: 'Nhấn nút Power ở mặt trên thùng máy! Chiêm ngưỡng quạt tản nhiệt quay, đèn RGB sáng rực và màn hình boot BIOS!',
    tip: 'Quy trình POST (Power-On Self Test) sẽ kiểm tra RAM, CPU, VGA. Khi tiếng beep ngắn vang lên tức là máy tính đã lắp ráp hoàn hảo!'
  }
];
