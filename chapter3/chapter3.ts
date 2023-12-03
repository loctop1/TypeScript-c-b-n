//lesson 37 Inheritance

/**Inheritance (Kế thừa) là một khái niệm trong lập trình hướng đối tượng (OOP) cho phép một lớp (class) mới có thể sử dụng (kế thừa) các thuộc tính và phương 
 * thức của một lớp hiện có (lớp cha hay lớp cơ sở). Trong TypeScript, bạn sử dụng từ khóa extends để kế thừa từ một lớp khác. */
class Person3 {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
//để kế thừa 1 class, chúng ta sử dụng keyword extends
class Employee2 extends Person3 {
    private jobTitle;
    constructor(
        firstName: string,
        lastName: string,
        jobTitle: string) {
        // call the constructor of the Person class:
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    //overwrite
    describe(): string {
        return (`${super.describe()} - Nguyễn Tuấn Lộc`)
    }
}
//let employee = new Employee('John', 'Doe', 'Front-end Developer');
//Employee kết thừa lại person => dùng đc method của parent
let employee = new Employee2('Hoi Dan IT', 'Eric', 'Web Developer');
console.log(">>> check FullName: ", employee.getFullName());
console.log(">>> check describe: ", employee.describe());