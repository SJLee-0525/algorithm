const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => Number(l.trim()));

const solution = (input) => {
  let total = input[0];
  for (let i = 1; i < 10; i++) total -= input[i];
  console.log(total);
};

solution(input);
