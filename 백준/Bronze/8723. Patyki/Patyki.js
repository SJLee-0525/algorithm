const fs = require("fs");
const [A, B, C] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

if (A === B && B === C) console.log(2);
else if (A ** 2 + B ** 2 === C ** 2) console.log(1);
else console.log(0);
