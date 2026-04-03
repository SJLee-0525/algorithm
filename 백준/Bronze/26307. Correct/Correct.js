let fs = require("fs");
const [H, M] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log((H - 9) * 60 + (M - 0));
