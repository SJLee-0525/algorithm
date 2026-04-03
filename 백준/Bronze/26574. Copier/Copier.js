let fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 1; i <= input[0]; i++) {
  console.log(input[i], input[i]);
}
