// Ví dụ về Any Type
let namev2: any = 'Eric'; //Không nên lạm dụng Any
/**Trong TypeScript, any là một kiểu dữ liệu đặc biệt cho biến có thể chứa bất kỳ giá trị nào. Khi bạn khai báo một biến với kiểu 
 * any, TypeScript sẽ bỏ qua kiểm tra kiểu dữ liệu cho biến đó, cho phép bạn gán bất kỳ giá trị nào mà không có thông báo lỗi từ 
 * TypeScript. */

namev2 = true;

namev2 = 96;