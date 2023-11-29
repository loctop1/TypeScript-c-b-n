let skills: (string | number)[] = ['Lộc Top 1', 25]
skills.push('coding')
skills.push(69)

// Ví dụ về Tuple Type: dataType/size/order
let skills2: [string, number] = ['Lộc Top 1', 25]

let skills3: [boolean, string?, number?];
/**Dấu ? là để lược bỏ đi kiểu dữ liệu */
skills3 = [true, 'LộcTop2', 21]
console.log('>>> check skills3: ', skills3)