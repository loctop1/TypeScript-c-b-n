//lesson33 Ví dụ về Classes

/**Trong TypeScript, khái niệm "Classes" là một phần quan trọng của hệ thống hướng đối tượng, giúp bạn tổ chức mã nguồn của mình theo cách dễ hiểu và dễ bảo trì. 
 * Một class trong TypeScript là một mô hình để tạo ra các đối tượng (instances) có các thuộc tính (properties) và phương thức (methods) liên quan. */
class Person {
    ssn: string;
    firstName: string;
    lastName: string;
    /**Khai báo các thuộc tính của class Person. */

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    /**Hàm khởi tạo (constructor) của class, được gọi khi một đối tượng mới của class được tạo. Hàm này thực hiện việc khởi tạo giá trị cho các thuộc tính của đối 
     * tượng. */
    getFullName(): string {
        return `Call Method: ${this.firstName} ${this.lastName}`;
    }
    /**Phương thức của class, trả về một chuỗi kết hợp của firstName và lastName. */
}

let loctop1 = new Person("123", "Nguyễn Tuấn Lộc", " và LộcTop1")
/**Tạo một đối tượng mới của class Person và truyền các tham số vào hàm khởi tạo để khởi tạo giá trị của các thuộc tính. */
console.log(">>> check classes: ", loctop1.getFullName())
/**Gọi phương thức getFullName của đối tượng loctop1 và in kết quả ra console. */