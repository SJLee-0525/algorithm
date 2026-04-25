const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const solution = ([A, B]) => {
  const M = (B - A) / 400;
  const res = 1 / (1 + 10 ** M);
  console.log(res);
};

solution(input);
