import { readFileSync, writeFileSync } from 'node:fs';

const p = 'D:/pc-builder-3d/PROJECT_CONTEXT.md';
const before = readFileSync(p, 'utf8');

const swaps = [
  ['trên kệ sắt hoặc trên bàn/sàn', 'trên bàn linh kiện hoặc trên bàn/sàn'],
  ['bề mặt bàn, kệ hoặc sàn', 'bề mặt bàn hoặc sàn'],
  ['bề mặt bàn/kệ hoặc socket thùng máy', 'bề mặt bàn hoặc socket thùng máy'],
  ['bàn gỗ trung tâm, kệ sắt, màn hình', 'bàn gỗ trung tâm, màn hình'],
  ['Hình học kệ + bố cục xếp linh kiện', 'Hình học bàn + bố cục xếp linh kiện thành hàng'],
  ['trên kệ sắt bàn phía phòng', 'trên bàn gỗ (có placeholder tải dần)'],
  ['bỏ/thả ra bàn, sàn, kệ', 'bỏ/thả ra bàn hoặc sàn'],
  ['đặt sát mặt kệ (minY = 0)', 'đặt sát mặt bàn (minY = 0)'],
  ['cạnh dài nằm song song với kệ', 'cạnh dài nằm song song với bàn']
];

let changed = 0;
let out = before;
for (const [from, to] of swaps) {
  if (out.includes(from)) {
    out = out.split(from).join(to);
    changed++;
  } else {
    console.log(`not found: ${from}`);
  }
}

writeFileSync(p, out);
console.log(`applied ${changed}/${swaps.length} swaps`);

const leftovers = ['kệ sắt', 'bàn/kệ', 'bàn, kệ'].filter(s => out.includes(s));
console.log('leftover rack wording:', leftovers.length ? leftovers.join(', ') : 'none');
console.log('lines:', out.split('\n').length);
