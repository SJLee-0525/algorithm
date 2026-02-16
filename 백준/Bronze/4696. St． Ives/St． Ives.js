const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => Number(l.trim()));

const solution = (input) => {
  const res = Array();

  function cal(N) {
    return Math.round((1 + N + N ** 2 + N ** 3 + N ** 4) * 100) / 100;
  }
  for (let i = 0; i < input.length - 1; i++) {
    res.push(cal(input[i]).toFixed(2));
  }

  console.log(res.join("\n"));
};

solution(input);
