const fs = require("fs");
const [A, B, C, D, E, F] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const topA = [A, B, C, D]
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, c) => (a += c), 0);
const tobB = Math.max(E, F);

console.log(topA + tobB);
