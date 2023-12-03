//lesson 40 Ví dụ về Interfaces

/**Trong TypeScript, interface là một cách để định nghĩa các hợp đồng (contracts) cho các đối tượng. Interface mô tả các thành phần công cộng của một đối tượng, 
 * bao gồm các thuộc tính và phương thức mà đối tượng đó phải có. Điều này giúp kiểm tra kiểu và đảm bảo rằng các đối tượng tuân thủ theo các nguyên tắc được định 
 * nghĩa.
 * Interfaces có thể còn được sử dụng để mô tả hình dạng của đối tượng (object shape) mà không cần sử dụng một lớp cụ thể. Bạn cũng có thể sử dụng interfaces để 
 * mở rộng các đối tượng đã tồn tại. */
interface IPerson {
    readonly firstName: string;
    lastName?: string;
    address: string;
}

function getFullName(person: IPerson) {
    return `${person.firstName} ${person.lastName}`;
}
let person3 = {
    firstName: 'Eric',
    lastName: 'Hoi Dan IT',
    address: 'ha noi'
};
console.log(getFullName(person3)); // Eric Hoi Dan IT