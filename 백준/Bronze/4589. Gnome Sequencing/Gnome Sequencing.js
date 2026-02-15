const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const res = Array();
  const N = Number(input[0].trim());

  for (let n = 1; n <= N; n++) {
    const [A, B, C] = input[n].trim().split(" ").map(Number);

    if ((A < B && B < C) || (A > B && B > C)) res.push("Ordered");
    else res.push("Unordered");
  }

  console.log("Gnomes:\n" + res.join("\n"));
};

solution(input);
