//lesson 27 Ví dụ về Function
function sum(a: number, b: number) {
    return a + b
}

//anonymous function
const sum2 = (a: number, b: number) => {
    return a + b
}

console.log('>>> check sum: ', sum2(6, 9))

// lesson 26 Ví dụ về Continue

/**Trong TypeScript (và JavaScript), continue là một từ khóa được sử dụng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển đến lần lặp tiếp theo.*/
for (let index = 0; index < 9; index++) {
    // if index is odd, skip it
    if (index % 2 === 1)
        continue;
    // the following code will be skipped for odd numbers
    console.log(index);
}

let index = -1;
while (index < 9) {
    index = index + 1;
    if (index % 2)
        continue;
    console.log(index);
}

let index2 = 9;
let count = 0;
do {
    index2 += 1;
    if (index2 % 2)
        continue;
    count += 1;
} while (index2 < 99);
console.log(count); // 45
/**Trong ví dụ này, vòng lặp sẽ tiếp tục lặp qua các giá trị của index2 từ 10 đến 99. Nếu index2 là số lẻ, nó sẽ sử dụng continue để bỏ qua các bước tiếp theo 
 * trong vòng lặp và chuyển đến lần lặp mới. Nếu index2 là số chẵn, count sẽ được tăng lên 1. Kết quả cuối cùng in ra giá trị của count sẽ là 45, vì có 45 số chẵn 
 * từ 10 đến 98 trong khoảng giá trị của index2.*/

//lesson 25
//1. Sử dụng TypeScript break để kết thúc vòng lặp
let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];
for (let i = 0; i < products.length; i++) {
    if (products[i].price == 900)
        break;
    console.log(products[i]);
}

//2. Sử dụng break bên trong switch...case
let products2 = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];
let discount2 = 0;
let product = products[1];
switch (product.name) {
    case 'phone':
        discount2 = 5;
        break;
    case 'tablet':
        discount2 = 10;
    // break;
    case 'laptop':
        discount2 = 15;
    // break;
    default:
        discount2 = 100;
}
console.log(`There is a ${discount2}% on ${product.name}.`);

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