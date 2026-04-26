const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.trim());

const solution = ([jinho, N, ...list]) => {
  console.log(
    list.reduce((a, c) => {
      if (jinho === c) return a + 1;
      return a;
    }, 0),
  );
};

solution(input);
