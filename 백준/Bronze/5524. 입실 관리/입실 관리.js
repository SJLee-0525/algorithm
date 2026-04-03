const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(
  input
    .slice(1, input.length)
    .map((l) => l.toLowerCase())
    .join("\n"),
);
