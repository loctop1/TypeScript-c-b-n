//lesson 34 Ví dụ về Access Modifiers

/**Access modifiers trong TypeScript là các từ khóa đặt trước các thành phần của một lớp (class) để quy định mức độ truy cập của chúng từ các phạm vi khác nhau. 
 * TypeScript hỗ trợ ba access modifiers chính: public, private, và protected.
 * Public (public): Các thành phần có access modifier public có thể truy cập từ bất kỳ nơi nào, không có sự hạn chế.
 * Private (private): Các thành phần có access modifier private chỉ có thể truy cập bên trong cùng một lớp. Không thể truy cập từ bên ngoài lớp.
 * Protected (protected): Các thành phần có access modifier protected giống như private, nhưng cũng có thể được truy cập từ các lớp con.*/

//Ví dụ 1: Public và private
class Employee {
    public empCode: string;
    private empName: string;
    constructor(empCode: string, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }
}
let emp = new Employee(' abc', ' cde');
// emp.empCode = "123";
// emp.empName = "Nguyễn Tuấn Lộc";

console.log(">>> check emp: ", emp)

//Ví dụ 2: Protected
class Employee1 {
    public empName: string;
    public empCode: string;
    constructor(name: string, code: string) {
        this.empName = name;
        this.empCode = code;
    }
}

class SalesEmployee extends Employee1 {
    private department: string;
    constructor(name: string, code: string, department: string) {
        super(name, code);
        this.department = department;
    }
}
let emp1 = new SalesEmployee("John Smith", "123", "Sales");
emp1.empCode; //Compiler Error
console.log(">>> check emp1: ", emp1)