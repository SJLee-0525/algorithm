const fs = require("fs");
const [A, B, C] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

console.log(`The 1-3-sum is ${91 + A + C + B * 3}`);
