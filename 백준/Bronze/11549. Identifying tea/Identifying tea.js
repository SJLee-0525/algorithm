const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const ans = Number(input[0].trim());
const cnt = input[1]
  .trim()
  .split(" ")
  .reduce((a, c) => {
    if (Number(c) === ans) return a + 1;
    return a;
  }, 0);

console.log(cnt);
