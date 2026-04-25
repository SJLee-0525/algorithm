const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const a = input[0].split(" ").map(Number);
const c = input[1].split(" ").map(Number);
const b = [
  c[0] - a[2],
  Math.floor(c[1] / a[1]),
  c[2] - a[0],
];

console.log(b.join(" "));