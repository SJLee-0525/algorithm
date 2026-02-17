const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const info = {
    C: 0,
    S: 0,
    I: 0,
    A: 0,
  };

  input[1]
    .trim()
    .split(" ")
    .forEach((t) => {
      info[t]++;
    });

  console.log(info[input[2].trim()]);
};

solution(input);
