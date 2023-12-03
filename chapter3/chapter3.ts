//lesson 36 Ví dụ về Getters và Setters

/**Trong TypeScript, getters và setters là cách để kiểm soát quyền truy cập và thực hiện các hành động tùy chỉnh khi đọc và ghi giá trị của thuộc tính trong một 
 * lớp.
 * Getter là một phương thức được sử dụng để lấy giá trị của một thuộc tính. Đối với một thuộc tính có getter, bạn sử dụng cú pháp giống như khi truy cập một 
 * thuộc tính thông thường. Điều này giúp ẩn đi triển khai thực tế của thuộc tính và cho phép bạn thực hiện xử lý hoặc tính toán trước khi trả về giá trị.
 * Setter là một phương thức được sử dụng để thiết lập giá trị của một thuộc tính. Đối với một thuộc tính có setter, bạn có thể gán giá trị mới cho nó giống như 
 * khi gán giá trị cho một thuộc tính thông thường. Nhưng trong trường hợp setter, phương thức được gọi và bạn có thể thực hiện các kiểm tra hoặc xử lý trước khi 
 * gán giá trị. */
class Person2 {
    public _age: number;
    public firstName: string;
    public lastName: string;

    constructor(_age: number, firstName: string, lastName: string) {
        this._age = _age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //getter
    getAge() {
        return this._age
    }
    //setter
    set age(age2: number) {
        if (age2 < 0 || age2 > 150) {
            throw Error('Tuổi ko hợp lệ!')
        }
        this._age = age2
    }
}
let person2 = new Person2(25, 'Nguyễn Tuấn Lộc', 'LộcTop1');
let checkAge = person2.age; //getter
person2.age = 150; //setter
console.log(">>> check age: ", person2) //getter

// person2.age = 26;