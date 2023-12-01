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
