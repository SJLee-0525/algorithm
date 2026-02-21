const fs = require("fs");

const [K, A, B, C, D] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const maxDay = Math.max(Math.ceil(A / C), Math.ceil(B / D));
console.log(K - maxDay);
