const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.trim().split(" ").map(Number));

const solution = (input) => {
  const res = Array();

  for (let i = 0; i < input.length; i++) {
    const [x, y] = input[i];

    if (x > 0 && y > 0) res.push("Q1");
    else if (x < 0 && y > 1) res.push("Q2");
    else if (x < 0 && y < 0) res.push("Q3");
    else if (x > 0 && y < 0) res.push("Q4");
    else res.push("AXIS");
  }

  console.log(res.join("\n"));
};

solution(input);
