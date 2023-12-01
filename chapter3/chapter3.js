//lesson 29 Ví dụ về Optional Parameters
let sum5 = (x, y, z) => { //z chính là Optional Parameters
    console.log(">>> check z = ", z)
    if (z) {
        return x + y + z;
    }
    return x + y;
}
console.log(">>> check sum5 = ", sum5(1, 2), sum5(1, 2, 3))
