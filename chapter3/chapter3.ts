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