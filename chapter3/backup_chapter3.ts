//lesson 24 Ví dụ về vòng lặp Do While

/**Lặp do-while trong TypeScript tương tự như trong JavaScript. Điều này có nghĩa là khối mã trong do sẽ được thực thi ít nhất 
 * một lần, sau đó kiểm tra điều kiện trong while. Nếu điều kiện vẫn đúng, nó sẽ tiếp tục lặp. */
let counter2 = 6
do {
    console.log('Counter = ', counter2);
    if (counter2 % 2 === 1) break;
    counter2++;
} while (counter2 < 5);
/**Điều kiện kiểm tra trong while là counter2 < 5, trong khi bạn đã sử dụng break nếu counter2 % 2 === 1. Do đó, đoạn mã sẽ dừng 
 * ngay sau lần lặp đầu tiên vì counter2 là số chẵn (6). */


// lesson 23 Ví dụ về vòng lặp While Loop
let counter = 0;
while (counter < 5) {
    console.log('Counter = ', counter);
    if (counter % 2 === 1) break;
    counter++;
}

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