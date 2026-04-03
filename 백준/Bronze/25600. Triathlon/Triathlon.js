const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const N = Number(input[0].trim());
  let maxScore = -1;

  for (let n = 1; n <= N; n++) {
    const [a, d, g] = input[n].trim().split(" ").map(Number);
    let score = a * (d + g);

    if (a === d + g) score *= 2;

    if (maxScore < score) maxScore = score;
  }

  console.log(maxScore);
};

solution(input);
