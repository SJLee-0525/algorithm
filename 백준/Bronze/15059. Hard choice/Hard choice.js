const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" ").map(Number));

const solution = (input) => {
  let ret = 0;

  for (let i = 0; i < 3; i++) {
    if (input[0][i] < input[1][i]) ret += input[1][i] - input[0][i];
  }

  return ret;
};

console.log(solution(input));
