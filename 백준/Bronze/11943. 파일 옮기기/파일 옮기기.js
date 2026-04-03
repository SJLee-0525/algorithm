const fs = require("fs");
const [[A, B], [C, D]] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" ").map(Number));

console.log(Math.min(A + D, B + C));
