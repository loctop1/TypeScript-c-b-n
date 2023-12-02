//lesson 32 Ví dụ về Function Overloading

/**Trong TypeScript, khái niệm overloading (nạp chồng) liên quan đến khả năng định nghĩa nhiều hình thức khác nhau của một hàm hoặc phương thức với cùng một tên 
 * nhưng với các loại tham số khác nhau. Sử dụng dạng overloading giúp bạn mô tả rõ ràng hơn cách sử dụng của phương thức trong các tình huống khác nhau. Khi bạn 
 * gọi phương thức với hoặc không có tham số hoặc với một tham số, TypeScript sẽ xác định cách thức chính xác của phương thức để gọi dựa trên số và kiểu tham số 
 * bạn chọn. */
function addNumbers(a: number, b: number): number {
    return a + b;
}
function addStrings(a: string, b: string): string {
    return a + b;
}

//2 functions làm nhiệm vụ tương tự nhau => có thể gồm thành 1 với union type
function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}

//OverLoading
function addNew(a: number, b: number): number;

function addNew(a: string, b: string): string;

function addNew(a: any, b: any) {
    return a + b;
};

console.log(">>> check add new: ", addNew(6, 9), addNew('Nguyễn Tuấn Lộc', ' và Lộc top 1'))

//Ví dụ 2
class Counter {
    private current: number = 0;
    /**Đây là thuộc tính private của lớp Counter, được sử dụng để theo dõi giá trị hiện tại của đối tượng. */
    count(): number;
    /** Phương thức không nhận tham số và trả về một số nguyên. */
    count(target: number): number[];
    /**Phương thức này nhận một tham số kiểu số (target) và trả về một mảng các số nguyên từ this.current đến target. */
    count(target?: number): number | number[] {
        /**Đây là phần thân của phương thức count, nó kết hợp cả hai hình thức trên. Nếu có tham số được truyền vào, nó tạo và trả về mảng các số, ngược lại tăng 
         * giá trị của this.current và trả về giá trị mới. */
        if (target) {
            let values: number[] = [];
            /**Tạo một mảng để lưu trữ các số từ this.current đến target. */
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            /**Dùng vòng lặp để thêm các số từ this.current đến target vào mảng values. */
            return values;
            /**Trả về mảng các số nếu có tham số được truyền vào. */
        }
        return ++this.current;
        /**Nếu không có tham số, tăng giá trị của this.current và trả về giá trị mới. */
    }
}
let counter111 = new Counter(); //Tạo một đối tượng của lớp Counter.
console.log(counter111.count()); // return a number
/**TypeScript sẽ hiểu rằng đây là gọi hình thức đầu tiên và trả về một số nguyên. */
console.log(counter111.count(20)); // return an array
/**TypeScript sẽ hiểu rằng đây là gọi hình thức thứ hai và trả về một mảng các số nguyên từ 1 đến 20. */

