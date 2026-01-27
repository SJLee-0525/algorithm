const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const solution = (problems) => {
  console.log(
    problems.reduce((a, c) => {
      if (c % 2 === 1) return a + 1;
      return a;
    }, 0),
  );
};

solution(input.slice(1, input.length));
