import { readFileSync, writeFileSync } from 'node:fs';

const swaps = [
  ['D:/pc-builder-3d/PROJECT_CONTEXT.md', [
    ['Hình học kệ sắt + bố cục xếp linh kiện (tự kéo dài kệ khi cần)',
     'Hình học bàn gỗ + bố cục xếp linh kiện thành hàng (tự kéo dài khi cần)'],
    ['Bố trí linh kiện vật lý 3D trên kệ sắt bên phải phòng',
     'Bố trí linh kiện vật lý 3D trên bàn gỗ, tải dần theo lô']
  ]],
  ['D:/pc-builder-3d/index.html', [
    ['Hãy nhặt linh kiện từ kệ sắt rồi bỏ vào túi',
     'Hãy nhặt linh kiện từ bàn rồi bỏ vào túi']
  ]],
  ['D:/pc-builder-3d/README.md', [
    ['Nhặt linh kiện từ kệ sắt', 'Nhặt linh kiện từ bàn linh kiện'],
    ['Cất lên kệ sắt', 'Cất lại lên bàn']
  ]],
  ['D:/pc-builder-3d/src/ui/BuildModeUI.js', [
    ['hãy nhặt từ kệ sắt và bỏ vào túi', 'hãy nhặt từ bàn linh kiện và bỏ vào túi']
  ]]
];

for (const [file, pairs] of swaps) {
  let text = readFileSync(file, 'utf8');
  const hits = [];
  for (const [from, to] of pairs) {
    if (!text.includes(from)) { console.log(`  MISS ${file.split('/').pop()}: ${from}`); continue; }
    text = text.split(from).join(to);
    hits.push(from);
  }
  writeFileSync(file, text);
  console.log(`${file.split('/').pop()}: ${hits.length}/${pairs.length} updated`);
}
