const fs = require("fs");
const [A, B, C, D, E] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

console.log(Math.min(A, B, C) + Math.min(D, E) - 50);
