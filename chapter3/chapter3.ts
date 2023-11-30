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
