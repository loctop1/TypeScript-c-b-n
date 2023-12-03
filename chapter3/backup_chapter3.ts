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

//lesson 37 ví dụ về Inheritance

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
// person.birthDate = new Date(1991, 12, 25); // Compile error

//lesson 34 Ví dụ về Access Modifiers ...

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



//lesson 31 Ví dụ về Rest Parameters

/**Rest parameters là một tính năng trong TypeScript (cũng như trong JavaScript) giúp định nghĩa hàm với một số lượng tham số 
 * không xác định trước đó. Trong TypeScript, rest parameter được ký hiệu bằng dấu ba chấm (...) theo sau của một tên tham số, và 
 * nó sẽ biến đổi các tham số sau nó thành một mảng. Rest parameter chỉ được đặt cuối cùng trong danh sách tham số của hàm. */
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60

// Ví dụ 2
function multiply(n: number, ...m: number[]) {
    let a = m.map((x) => {
        console.log("check x = ", x)
        return n * x
    });
    return m.map((x) => n * x);
}
//'test31' gets value[10, 20, 30, 40]
const test31 = multiply(15, 1, 2, 3, 4);
console.log('>>> check test31 = ', test31)

//Ví dụ 3
function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}
console.log(Greet("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"
console.log(Greet("Hello"));// returns "Hello !"
/**Trong hàm Greet, greeting là một tham số bắt buộc, còn names là một mảng rest parameter. Khi bạn gọi hàm Greet, bạn có thể 
 * truyền vào bất kỳ số lượng tên nào và chúng sẽ được đưa vào mảng names. Trong trường hợp của bạn, Greet("Hello", "Steve", 
 * "Bill") sẽ gán "Hello" cho greeting và ["Steve", "Bill"] cho names.
 * Greet("Hello"), là một cách sử dụng khi không có tên nào được truyền vào. Trong trường hợp này, mảng names sẽ rỗng, và kết quả 
 * sẽ là "Hello !". */

//lesson 30 Ví dụ về Default Parameters

/**Default Parameters trong TypeScript là một tính năng cho phép bạn đặt giá trị mặc định cho một hoặc 
 * nhiều tham số của hàm. Khi bạn gọi hàm và không truyền giá trị cho tham số đó, giá trị mặc định sẽ 
 * được sử dụng. */
let sum8 = (x: number, y: number, z = false) => {
    if (z === false) {
        return x + y;
    }
    if (z)
        return x - y;
}
/**Ở đây, tham số z có giá trị mặc định là false. Khi bạn gọi sum8(1, 2), giá trị của z sẽ là false vì 
 * bạn không truyền giá trị nào cho tham số này. Trong trường hợp này, hàm sẽ thực hiện phần xử lý tính
 * tổng của x và y.
 * Khi bạn gọi sum8(1, 2, true), giá trị của z sẽ là true do bạn đã truyền giá trị cho tham số này. 
 * Trong trường hợp này, hàm sẽ thực hiện phần xử lý tính hiệu của x và y. */
console.log(">>> check sum8 = ", sum8(1, 2), sum8(1, 2, true))


//lesson 29 Ví dụ về Optional Parameters

/**Optional Parameters trong TypeScript là một tính năng cho phép bạn định nghĩa các tham số của một 
 * hàm mà không yêu cầu bắt buộc truyền giá trị cho chúng khi gọi hàm. Trong TypeScript, bạn có thể 
 * đặt dấu hỏi (?) sau tên tham số để chỉ định rằng tham số đó là tùy chọn. */
const sum6 = (x: number, y: number, z?: number) => {
    if (z) return x + y + z;
    return x + y;
}
/**Trong hàm sum6, tham số z được đặt là tùy chọn bằng cách sử dụng z?: number. Điều này có nghĩa là 
 * bạn có thể gọi hàm sum6 mà không cần truyền giá trị cho z. Nếu bạn không truyền giá trị cho z, thì 
 * tham số đó sẽ nhận giá trị mặc định là undefined. Trong phần thân của hàm, bạn kiểm tra xem z có 
 * giá trị không (if (z)) để quyết định xem có tính z vào kết quả hay không. */
console.log(">>> check sum6 = ", sum6(2, 5), sum6(1, 2, 3))

//lesson 28 Ví dụ về Function Type

/**Trong TypeScript, Function Type là một loại kiểu dữ liệu đặc biệt được sử dụng để định nghĩa kiểu 
 * dữ liệu cho các hàm. Function Type định nghĩa cụ thể các loại tham số đầu vào và kiểu dữ liệu của 
 * giá trị trả về từ hàm. Điều này giúp kiểm soát kiểu dữ liệu của các hàm trong quá trình phát triển 
 * ứng dụng TypeScript, giúp phát hiện lỗi và cung cấp tính linh hoạt. */
const sum3 = (x: number, y: number): number => {
    return x + y;
}
/**Hàm sum3 là một ví dụ của Function Type được định nghĩa bằng cách sử dụng cú pháp của arrow function.
 * Nó có hai tham số kiểu số (x và y) và kiểu giá trị trả về là số (number). */

function sum4(x: number, y: number): number {
    return x + y;
}
/**Hàm sum4 là một ví dụ khác, được định nghĩa bằng cách sử dụng cú pháp thông thường của function 
 * declaration. Nó cũng có hai tham số kiểu số và kiểu giá trị trả về là số.*/

console.log(">>> check sum3 = ", sum3(1, 10))

let a = 10;
a = sum3(1, 10)

//lesson 27 Ví dụ về Function
function sum(a: number, b: number) {
    return a + b
}

//anonymous function
const sum2 = (a: number, b: number) => {
    return a + b
}

console.log('>>> check sum: ', sum2(6, 9))

// lesson 26 Ví dụ về Continue

/**Trong TypeScript (và JavaScript), continue là một từ khóa được sử dụng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển đến lần lặp tiếp theo.*/
for (let index = 0; index < 9; index++) {
    // if index is odd, skip it
    if (index % 2 === 1)
        continue;
    // the following code will be skipped for odd numbers
    console.log(index);
}

let index = -1;
while (index < 9) {
    index = index + 1;
    if (index % 2)
        continue;
    console.log(index);
}

let index2 = 9;
let count = 0;
do {
    index2 += 1;
    if (index2 % 2)
        continue;
    count += 1;
} while (index2 < 99);
console.log(count); // 45
/**Trong ví dụ này, vòng lặp sẽ tiếp tục lặp qua các giá trị của index2 từ 10 đến 99. Nếu index2 là số lẻ, nó sẽ sử dụng continue để bỏ qua các bước tiếp theo 
 * trong vòng lặp và chuyển đến lần lặp mới. Nếu index2 là số chẵn, count sẽ được tăng lên 1. Kết quả cuối cùng in ra giá trị của count sẽ là 45, vì có 45 số chẵn 
 * từ 10 đến 98 trong khoảng giá trị của index2.*/

//lesson 25
//1. Sử dụng TypeScript break để kết thúc vòng lặp
let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];
for (let i = 0; i < products.length; i++) {
    if (products[i].price == 900)
        break;
    console.log(products[i]);
}

//2. Sử dụng break bên trong switch...case
let products2 = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];
let discount2 = 0;
let product = products[1];
switch (product.name) {
    case 'phone':
        discount2 = 5;
        break;
    case 'tablet':
        discount2 = 10;
    // break;
    case 'laptop':
        discount2 = 15;
    // break;
    default:
        discount2 = 100;
}
console.log(`There is a ${discount2}% on ${product.name}.`);

//lesson 24 Ví dụ về vòng lặp Do While

/**Lặp do-while trong TypeScript tương tự như trong JavaScript. Điều này có nghĩa là khối mã trong do sẽ được thực thi ít nhất 
 * một lần, sau đó kiểm tra điều kiện trong while. Nếu điều kiện vẫn đúng, nó sẽ tiếp tục lặp. */
let counter2 = 6
do {
    console.log('Counter = ', counter2);
    if (counter2 % 2 === 1) break;
    counter2++;
} while (counter2 < 5);
/**Điều kiện kiểm tra trong while là counter2 < 5, trong khi bạn đã sử dụng break nếu counter2 % 2 === 1. Do đó, đoạn mã sẽ dừng 
 * ngay sau lần lặp đầu tiên vì counter2 là số chẵn (6). */


// lesson 23 Ví dụ về vòng lặp While Loop
let counter = 0;
while (counter < 5) {
    console.log('Counter = ', counter);
    if (counter % 2 === 1) break;
    counter++;
}

//lesson 22 Ví dụ về vòng lặp For Loop
for (let i = 0; i < 10; i++) {
    console.log(">> i = ", i);
}

let i1 = 0;
for (; i1 < 10; i1++) {
    console.log(i1);
}

for (let i = 0; ; i++) {
    console.log(i);
    if (i > 9) break; // cần có if/break để không khiến vòng lặp chạy vô hạn
}

let i = 0;
for (; ;) {
    console.log(i);
    i++;
    if (i > 9) break;
}

//lesson 21 Ví dụ về switch case
const age: number = 19;
switch (age) {
    case 20:
    case 19:
        console.log('Đã đi làm')
        break;
    case 12:
        console.log('Đang là sinh viên')
        break;
    default:
        console.log('Không hợp lệ')
}

// lesson 20: Vi du ve If Else
let name123: string = '';
if (name123) {
    console.log('bạn đã đủ tuổi để xem phim')
} else {
    console.log('bạn khong du tuổi để xem phim')
}

let discount: number;
let itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5; // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount
} else if (itemCount > 10 && itemCount <= 15) {
    discount = 20;
} else {
    discount = 15; // 15%
}
console.log(`Ban co ${discount}% ma giam gia. `);