const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const res = Array();
  const N = Number(input[0].trim());

  for (let n = 1; n <= N; n++) {
    const [X, Y] = input[n].trim().split(" ").map(Number);
    res.push(Math.floor((X * Y) / 2));
  }

  console.log(res.join("\n"));
};

solution(input);
