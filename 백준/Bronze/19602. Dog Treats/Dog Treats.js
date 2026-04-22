const fs = require("fs");
const res = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .reduce((a, c, i) => (a += c * (i + 1)), 0);
if (res < 10) console.log("sad");
else console.log("happy");
