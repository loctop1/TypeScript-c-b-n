// Ví dụ về Type Enum
enum API_STATUS {
    PENDING = "PENDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED"//PROMISE
}
/**Công dụng của enum thường là giúp tăng tính đọc và hiểu mã nguồn, đồng thời giảm thiểu các lỗi do việc 
 * sử dụng các giá trị không hợp lệ. Trong trường hợp của bạn, enum API_STATUS có thể được sử dụng để biểu 
 * diễn trạng thái của một API call hoặc một loại hứa hẹn (promise) trong một ứng dụng. */

let a3 = API_STATUS.PENDING;
let a4 = API_STATUS.FULFILLED;
// Frontend: giúp đồng bộ hóa cú pháp
console.log('>>> a3 = ', a3, "a4 = ", a4);
