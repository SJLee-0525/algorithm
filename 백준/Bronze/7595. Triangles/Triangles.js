const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const res = [];

for (let i = 0; i < input.length - 1; i++) {
  const N = input[i];
  for (let n = 1; n <= N; n++) {
    res.push("*".repeat(n));
  }
}

console.log(res.join("\n"));
