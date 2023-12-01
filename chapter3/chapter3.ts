//lesson 31 Ví dụ về Rest Parameters

/**Rest parameters là một tính năng trong TypeScript (cũng như trong JavaScript) giúp định nghĩa hàm với một số lượng tham số 
 * không xác định trước đó. Trong TypeScript, rest parameter được ký hiệu bằng dấu ba chấm (...) theo sau của một tên tham số, và 
 * nó sẽ biến đổi các tham số sau nó thành một mảng. Rest parameter chỉ được đặt cuối cùng trong danh sách tham số của hàm. */
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60

// Ví dụ 2
function multiply(n: number, ...m: number[]) {
    let a = m.map((x) => {
        console.log("check x = ", x)
        return n * x
    });
    return m.map((x) => n * x);
}
//'test31' gets value[10, 20, 30, 40]
const test31 = multiply(15, 1, 2, 3, 4);
console.log('>>> check test31 = ', test31)

//Ví dụ 3
function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}
console.log(Greet("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"
console.log(Greet("Hello"));// returns "Hello !"
/**Trong hàm Greet, greeting là một tham số bắt buộc, còn names là một mảng rest parameter. Khi bạn gọi hàm Greet, bạn có thể 
 * truyền vào bất kỳ số lượng tên nào và chúng sẽ được đưa vào mảng names. Trong trường hợp của bạn, Greet("Hello", "Steve", 
 * "Bill") sẽ gán "Hello" cho greeting và ["Steve", "Bill"] cho names.
 * Greet("Hello"), là một cách sử dụng khi không có tên nào được truyền vào. Trong trường hợp này, mảng names sẽ rỗng, và kết quả 
 * sẽ là "Hello !". */