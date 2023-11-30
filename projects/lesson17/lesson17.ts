// Ví dụ về Data Type - never

/**Trong TypeScript, never là một kiểu dữ liệu mà một hàm sẽ trả về nếu nó không bao giờ hoàn thành một 
 * cách bình thường. Điều này có nghĩa là hàm sẽ không bao giờ trả về một giá trị hoặc kết thúc bình 
 * thường; thay vào đó, nó có thể ném một exception, gọi một hàm không bao giờ trả về, hoặc có thể có một 
 * vòng lặp vô hạn. */

function handleException(errorMessage: string): never {
    throw Error(errorMessage)
}
/**hàm handleException trả về kiểu never bởi vì nó luôn ném một exception thông qua câu lệnh throw. Khi 
 * một exception được ném, chương trình dừng lại và không bao giờ tiếp tục thực hiện bình thường, nên 
 * kiểu của hàm là never. */

function runInfinity(): void {
    // while (true) {
    //     console.log("Running...")
    // }
}

// handleException('Check Error');

let a = handleException('Check Error');
console.log(">>> check a = ", a)

