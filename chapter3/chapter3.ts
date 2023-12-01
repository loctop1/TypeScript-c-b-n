//lesson 28 Ví dụ về Function Type

/**Trong TypeScript, Function Type là một loại kiểu dữ liệu đặc biệt được sử dụng để định nghĩa kiểu 
 * dữ liệu cho các hàm. Function Type định nghĩa cụ thể các loại tham số đầu vào và kiểu dữ liệu của 
 * giá trị trả về từ hàm. Điều này giúp kiểm soát kiểu dữ liệu của các hàm trong quá trình phát triển 
 * ứng dụng TypeScript, giúp phát hiện lỗi và cung cấp tính linh hoạt. */
const sum3 = (x: number, y: number): number => {
    return x + y;
}
/**Hàm sum3 là một ví dụ của Function Type được định nghĩa bằng cách sử dụng cú pháp của arrow function.
 * Nó có hai tham số kiểu số (x và y) và kiểu giá trị trả về là số (number). */

function sum4(x: number, y: number): number {
    return x + y;
}
/**Hàm sum4 là một ví dụ khác, được định nghĩa bằng cách sử dụng cú pháp thông thường của function 
 * declaration. Nó cũng có hai tham số kiểu số và kiểu giá trị trả về là số.*/

console.log(">>> check sum3 = ", sum3(1, 10))

let a = 10;
a = sum3(1, 10)