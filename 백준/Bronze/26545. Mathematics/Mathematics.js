let fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const res = input.reduce((prev, curr) => {
  return prev + curr;
});

console.log(res - input[0]);
