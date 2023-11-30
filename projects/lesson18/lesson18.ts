// Vi du ve Union Type
function addNumberOrString(a: number | string | boolean, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } if
        (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log('>>> check number: ', addNumberOrString(true, 'Loc'))

/**Trong TypeScript, kiểu Union là một kỹ thuật cho phép bạn biểu diễn một giá trị có thể thuộc về một 
 * trong nhiều kiểu khác nhau. Cú pháp của kiểu Union sử dụng dấu pipe | để kết hợp các kiểu khác nhau.
 * Kiểu Union thường được sử dụng khi một biến hoặc tham số có thể nhận giá trị của nhiều kiểu khác nhau. 
 * Nó giúp tăng tính linh hoạt của mã và làm cho mã nguồn trở nên mạnh mẽ hơn trong việc xử lý các trường 
 * hợp đa dạng.*/