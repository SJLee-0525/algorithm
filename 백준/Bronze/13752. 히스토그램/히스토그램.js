const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const res = [];
for (let n = 1; n <= input[0]; n++) {
  res.push("=".repeat(input[n]));
}
console.log(res.join("\n"));
