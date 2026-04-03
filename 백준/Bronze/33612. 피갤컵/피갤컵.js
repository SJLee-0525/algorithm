const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const solution = (N) => {
  const baseYear = 2024;
  const baseMonth = 8;

  const add = (N - 1) * 7;

  const totalMonth = baseMonth - 1 + add;

  const year = baseYear + Math.floor(totalMonth / 12);
  const month = (totalMonth % 12) + 1;

  console.log(year, month);
};

solution(N);
