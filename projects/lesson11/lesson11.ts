// Ví dụ về Object Type
let person: object;

let mine3 = { name: 'Lộc Top 1' }

person = { name: 'Lộc' };
// person = 'Lộc'

let pro = {
    name: 'Lộc', //string
    age: 25 //age
}

let pro2: {
    name: string,
    age: number
} = {
    name: "loctop1",
    age: 25
};
console.log('>> check pro2 ', pro2)