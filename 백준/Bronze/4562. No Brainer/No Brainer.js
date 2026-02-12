const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const res = Array();
  const N = Number(input[0].trim());

  for (let n = 1; n <= N; n++) {
    const [X, Y] = input[n].split(" ").map(Number);

    if (X >= Y) res.push("MMM BRAINS");
    else res.push("NO BRAINS");
  }

  console.log(res.join("\n"));
};

solution(input);
