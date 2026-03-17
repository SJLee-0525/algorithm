const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const res = [];
  const N = Number(input[0].trim());

  for (let n = 1; n <= N; n++) {
    res.push(input[n * 2].split(" ").reduce((a, c) => (a += Number(c)), 0));
  }

  console.log(res.join("\n"));
};

solution(input);
