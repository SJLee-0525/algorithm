const cal = (num) => {
  if (num % 2 === 0) return `${num} is even`;
  return `${num} is odd`;
};

const fs = require("fs");
const res = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((n) => cal(n));

console.log(res.join("\n"));
