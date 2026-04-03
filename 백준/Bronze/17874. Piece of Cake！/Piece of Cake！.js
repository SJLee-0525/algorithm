const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = ([N, H, V]) => {
  console.log(Math.max(N - H, H) * Math.max(N - V, V) * 4);
};

solution(input);
