const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const solution = ([S, D]) => {
  const A = (S + D) / 2;

  if (S < A || A % 1 !== 0) console.log("-1");
  else console.log([A, S - A].sort((a, b) => b - a).join(" "));
};

solution(input);
