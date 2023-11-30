// Vi du ve Type Aliases
type locType = number | string | object | boolean
function addNumberOrString1(a: locType, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } if
        (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log('>>> check number: ', addNumberOrString1('Tuan', 'Loc'))

/**Kiểu Aliases (còn được gọi là Type Aliases) trong TypeScript là cách để tạo ra một tên mới cho một kiểu 
 * dữ liệu có sẵn hoặc tự định nghĩa. Điều này giúp làm cho mã nguồn trở nên dễ đọc hơn và giảm lặp lại 
 * khi bạn muốn sử dụng lại một kiểu dữ liệu phức tạp nhiều lần. */