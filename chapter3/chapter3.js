//lesson 30 Ví dụ về Default Parameters
let sum7 = (x, y, z = false) => {
    if (z === false) {
        return x + y;
    }
    if (z)
        return x - y;
}
console.log(">>> check sum7 = ", sum7(1, 2), sum7(1, 2, 6))

//lesson 29 Ví dụ về Optional Parameters
let sum5 = (x, y, z) => { //z chính là Optional Parameters
    console.log(">>> check z = ", z)
    if (z) {
        return x + y + z;
    }
    return x + y;
}
console.log(">>> check sum5 = ", sum5(1, 2), sum5(1, 2, 3))
