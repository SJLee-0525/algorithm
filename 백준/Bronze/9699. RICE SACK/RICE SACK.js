const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.trim());

const solution = ([N, ...arr]) => {
  const res = Array();
  N = Number(N);

  for (let n = 0; n < N; n++) {
    res.push(`Case #${n + 1}: ${Math.max(...arr[n].split(" ").map(Number))}`);
  }

  console.log(res.join("\n"));
};

solution(input);
