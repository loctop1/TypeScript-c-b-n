// Ví dụ về Void Type
const sum = (a: number, b: number): number => {
    return a + b
}

/**Trong TypeScript, kiểu void được sử dụng để chỉ ra rằng một hàm không trả về bất kỳ giá trị nào. Nó thường được sử dụng cho các 
 * hàm mà mục đích chính là thực hiện một tác vụ nhất định mà không cần trả về giá trị. */

const handleLogs = (message: string): void => {
    console.log(">>> check message: ", message)
}
/**Hàm handleLogs nhận một đối số là message có kiểu string và in ra màn hình console thông điệp cùng với một dòng kiểm tra. Kiểu trả 
 * về của hàm này được đặt là void, điều này có nghĩa là hàm này không trả về giá trị nào (hoặc trả về undefined ngầm định). */