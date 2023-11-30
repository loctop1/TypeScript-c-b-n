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