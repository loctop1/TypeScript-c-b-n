//lesson 38 Ví dụ về Static Methods and Properties

/**Static methods và static properties là những thành phần của một lớp (class) không được gắn liền với các đối tượng của lớp đó, mà thay vào đó liên quan đến 
 * chính lớp. Điều này có nghĩa là chúng có thể được truy cập mà không cần tạo một đối tượng của lớp đó.
 * Static properties là các thuộc tính thuộc về lớp chứ không phải đối tượng cụ thể của lớp. Để định nghĩa một static property trong TypeScript, bạn sử dụng từ 
 * khóa static trước tên thuộc tính.
 * Static methods là các phương thức thuộc về lớp và không phụ thuộc vào bất kỳ đối tượng cụ thể nào của lớp đó. Để định nghĩa một static method trong TypeScript, 
 * bạn cũng sử dụng từ khóa static. */
class Circle {
    static pi: number = 3.14;
    public test: number = 69;
    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}

let t = new Circle();
console.log(">>> check  pi = ", Circle.calculateArea(10))