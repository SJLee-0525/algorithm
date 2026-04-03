const fs = require("fs");
const totalSecond = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .reduce((a, c) => {
    return (a += Number(c.trim()));
  }, 0);

console.log(`${Math.floor(totalSecond / 60)}\n${totalSecond % 60}`);
