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