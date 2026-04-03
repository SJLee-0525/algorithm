const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const P = input[0].trim().split(" ").map(Number);
  const [x, _, __] = input[1].trim().split(" ").map(Number);

  for (let i = 0; i < 4; i++) {
    if (P[i] === x) return i + 1;
  }

  return 0;
};

console.log(solution(input));
