//lesson 22 Ví dụ về vòng lặp For Loop
for (let i = 0; i < 10; i++) {
    console.log(">> i = ", i);
}

let i1 = 0;
for (; i1 < 10; i1++) {
    console.log(i1);
}

for (let i = 0; ; i++) {
    console.log(i);
    if (i > 9) break; // cần có if/break để không khiến vòng lặp chạy vô hạn
}

let i = 0;
for (; ;) {
    console.log(i);
    i++;
    if (i > 9) break;
}

//lesson 21 Ví dụ về switch case
const age: number = 19;
switch (age) {
    case 20:
    case 19:
        console.log('Đã đi làm')
        break;
    case 12:
        console.log('Đang là sinh viên')
        break;
    default:
        console.log('Không hợp lệ')
}

// lesson 20: Vi du ve If Else
let name123: string = '';
if (name123) {
    console.log('bạn đã đủ tuổi để xem phim')
} else {
    console.log('bạn khong du tuổi để xem phim')
}

let discount: number;
let itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5; // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount
} else if (itemCount > 10 && itemCount <= 15) {
    discount = 20;
} else {
    discount = 15; // 15%
}
console.log(`Ban co ${discount}% ma giam gia. `);