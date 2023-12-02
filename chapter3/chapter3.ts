//lesson 35 Ví dụ về Readonly

/**Trong TypeScript, readonly là một từ khóa được sử dụng để đánh dấu một thành viên của một đối tượng (object) hoặc một phần tử trong một mảng là chỉ đọc. Khi 
 * một biến hoặc thuộc tính được đánh dấu là readonly, nó chỉ có thể được gán giá trị một lần và không thể thay đổi giá trị sau khi đã được gán. */
class Person1 {
    readonly birthDate: Date;
    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}
let person = new Person1(new Date(1990, 12, 25));
person.birthDate = new Date(1991, 12, 25); // Compile error