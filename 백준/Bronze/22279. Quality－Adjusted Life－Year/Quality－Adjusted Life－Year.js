const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const N = Number(input[0].trim());
  let res = 0;

  for (let n = 1; n <= N; n++) {
    const [A, B] = input[n].trim().split(" ").map(Number);
    res += A * B;
  }

  console.log(res.toFixed(3));
};

solution(input);
