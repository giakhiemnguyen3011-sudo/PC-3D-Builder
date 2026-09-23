/**
 * Hardware Components Database
 * Contains realistic technical specifications, tags, 3D model paths, educational notes,
 * and calibrated baseRotation to correct non-flat / tilted model exports.
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
    // Calibrated baseRotation: FBX export was standing up facing Z; rotate -90 deg around X to lay flat with ports/VRM facing up
    baseRotation: { x: -Math.PI / 2, y: 0, z: 0 },
    specs: [
      { label: 'Socket', value: 'LGA 1151 (Intel Gen 8/9)' },
      { label: 'Chipset', value: 'Intel Z370 Express' },
      { label: 'Kích thước', value: 'ATX (30.5 cm x 24.4 cm)' },
      { label: 'Khe RAM', value: '4x DDR4 DIMM (Max 64GB, 4000MHz OC)' },
      { label: 'Khe PCIe', value: '2x PCIe 3.0 x16 SafeSlot, 4x PCIe x1' },
      { label: 'Lưu trữ', value: '2x M.2 NVMe PCIe x4, 6x SATA III 6Gb/s' },
      { label: 'LED RGB', value: 'Aura Sync RGB Lighting' }
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
    // Calibrated baseRotation: Collada export had thin Z axis; rotate -90 deg around X to lay flat with heat spreader facing up
    baseRotation: { x: -Math.PI / 2, y: 0, z: 0 },
    specs: [
      { label: 'Số nhân / Luồng', value: '6 Cores / 12 Threads' },
      { label: 'Xung cơ bản', value: '3.6 GHz (Boost 4.2 GHz)' },
      { label: 'Kiến trúc', value: 'Zen 2 (7nm FinFET TSMC)' },
      { label: 'Bộ nhớ đệm', value: '32MB GameCache L3' },
      { label: 'Điện năng (TDP)', value: '65 Watts' },
      { label: 'Socket tương thích', value: 'AM4 / LGA Adapter' },
      { label: 'Hỗ trợ PCIe', value: 'PCIe 4.0 x16' }
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
    // Calibrated baseRotation: Model was tilted on its side; rotate +90 deg around X to stand upright on heatpipes
    baseRotation: { x: Math.PI / 2, y: 0, z: 0 },
    specs: [
      { label: 'Dạng tản nhiệt', value: 'Tháp tản nhiệt khí (Single Tower)' },
      { label: 'Ống dẫn nhiệt', value: '4 ống đồng Direct Contact 6mm' },
      { label: 'Kích thước quạt', value: '120 x 120 x 25 mm Silencio FP' },
      { label: 'Tốc độ quay', value: '650 - 2,000 RPM (PWM) ± 10%' },
      { label: 'Lưu lượng gió', value: '59 CFM max, Áp suất 2.1 mmH2O' },
      { label: 'Độ ồn tối đa', value: '8 - 30 dBA (Siêu êm)' },
      { label: 'Tương thích', value: 'Intel LGA 1700/1200/115x, AMD AM4/AM5' }
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
    // Calibrated baseRotation: FBX export stood vertically; rotate -90 deg around X so light bar is on top or stands upright
    baseRotation: { x: -Math.PI / 2, y: 0, z: 0 },
    specs: [
      { label: 'Dung lượng kit', value: '16GB (2 thanh x 8GB)' },
      { label: 'Chuẩn RAM', value: 'DDR4 Unbuffered DIMM' },
      { label: 'Tốc độ Bus', value: '3200 MHz (PC4-25600)' },
      { label: 'Độ trễ (Timing)', value: 'CL16-18-18-38' },
      { label: 'Điện áp định mức', value: '1.35V (Intel XMP 2.0 Ready)' },
      { label: 'Đèn LED', value: 'RGB Dynamic Flow 5 vùng sáng' },
      { label: 'Tản nhiệt', value: 'Nhôm xước hairline cao cấp' }
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
    // Calibrated baseRotation: FBX export was rotated sideways; rotate -90 deg around X so label is facing up
    baseRotation: { x: -Math.PI / 2, y: 0, z: 0 },
    specs: [
      { label: 'Dung lượng', value: '500 GB' },
      { label: 'Kích thước chuẩn', value: '2.5 inch (7mm mỏng nhẹ)' },
      { label: 'Giao tiếp', value: 'SATA III 6Gb/s (tương thích SATA II)' },
      { label: 'Tốc độ đọc tuần tự', value: 'Lên tới 550 MB/s' },
      { label: 'Tốc độ ghi tuần tự', value: 'Lên tới 520 MB/s' },
      { label: 'Công nghệ chip nhớ', value: 'Samsung V-NAND 3-bit MLC (TLC)' },
      { label: 'Độ bền (TBW)', value: '300 TBW (Bảo hành 5 năm)' }
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
    specs: [
      { label: 'Công suất thực', value: '650 Watts liên tục' },
      { label: 'Chứng nhận hiệu suất', value: '80 PLUS Bronze (Hiệu suất > 85%)' },
      { label: 'Hệ thống cáp', value: 'Semi-Modular (Bọc lưới đen gọn gàng)' },
      { label: 'Kích thước quạt', value: '120mm LDB Fan điều tốc tự động' },
      { label: 'Mạch bảo vệ', value: 'OVP, OPP, SCP, OCP, UVP, OTP' },
      { label: 'Đầu nối cấp nguồn', value: '1x 24-Pin ATX, 1x 8-Pin EPS CPU, 2x 8-Pin PCIe, 6x SATA' },
      { label: 'Chuẩn nguồn', value: 'ATX 12V v2.4' }
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
    specs: [
      { label: 'Nhân đồ họa', value: '10,496 CUDA Cores' },
      { label: 'Bộ nhớ VRAM', value: '24 GB GDDR6X (Cực khủng)' },
      { label: 'Băng thông bộ nhớ', value: '384-bit (936 GB/s)' },
      { label: 'Xung Boost', value: '1.70 GHz' },
      { label: 'Công nghệ AI & RT', value: 'Ray Tracing Gen 2 & Tensor Cores Gen 3' },
      { label: 'Công suất tiêu thụ', value: '350 Watts (Cần 2 đầu 8-Pin PCIe)' },
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
