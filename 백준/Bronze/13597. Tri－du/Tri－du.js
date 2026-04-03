const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = ([A, B]) => {
  console.log(Math.max(A, B));
};

solution(input);
