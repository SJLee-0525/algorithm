const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const endSecond =
    input[0]
      .trim()
      .split(" ")
      .reduce((a, c, i) => (a += Number(c) * 60 ** (2 - i)), 0) + Number(input[1].trim());

  console.log(Math.floor(endSecond / 3600) % 24, Math.floor(endSecond / 60) % 60, endSecond % 60);
};

solution(input);
