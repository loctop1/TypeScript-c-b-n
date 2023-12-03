//lesson 39 Ví dụ về Abstract Classes

/**Trong TypeScript, Abstract Classes là một khái niệm quen thuộc, giúp bạn tạo ra các lớp cơ sở (base classes) cho các lớp con (derived classes). Một abstract 
 * class không thể được khởi tạo trực tiếp; thay vào đó, nó được sử dụng để định nghĩa các thuộc tính và phương thức chung cho các lớp con của nó.
 * Abstract classes giúp bạn xây dựng các kiểu cơ bản (base types) và đảm bảo rằng các lớp con phải cung cấp triển khai cho các phương thức quan trọng. */

abstract class Employee3 {
    constructor(private firstName: string, private lastName: string) {
    }
    abstract getSalary(): number; //abstract method
    //normal method

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}

class FullTimeEmployee extends Employee3 {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName); //dùng super để kế thừa lại cha
    }
    // cần viết method này, vì nó được khai báo abstract ở trên
    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends Employee3 {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}

const test1 = new Contractor("lộc", "Top 1", 1000, 1);
console.log(">>> test 1 : ", test1.getSalary());