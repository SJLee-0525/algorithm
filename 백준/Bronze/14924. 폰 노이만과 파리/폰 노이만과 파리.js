const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const solution = ([S, T, D]) => {
  console.log(Math.floor(D / (S * 2)) * T);
};

solution(input);
