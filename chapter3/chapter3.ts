//lesson 29 Ví dụ về Optional Parameters

/**Optional Parameters trong TypeScript là một tính năng cho phép bạn định nghĩa các tham số của một 
 * hàm mà không yêu cầu bắt buộc truyền giá trị cho chúng khi gọi hàm. Trong TypeScript, bạn có thể 
 * đặt dấu hỏi (?) sau tên tham số để chỉ định rằng tham số đó là tùy chọn. */
const sum6 = (x: number, y: number, z?: number) => {
    if (z) return x + y + z;
    return x + y;
}
/**Trong hàm sum6, tham số z được đặt là tùy chọn bằng cách sử dụng z?: number. Điều này có nghĩa là 
 * bạn có thể gọi hàm sum6 mà không cần truyền giá trị cho z. Nếu bạn không truyền giá trị cho z, thì 
 * tham số đó sẽ nhận giá trị mặc định là undefined. Trong phần thân của hàm, bạn kiểm tra xem z có 
 * giá trị không (if (z)) để quyết định xem có tính z vào kết quả hay không. */
console.log(">>> check sum6 = ", sum6(2, 5), sum6(1, 2, 3))
