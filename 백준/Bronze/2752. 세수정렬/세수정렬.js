const fs = require("fs");
console.log(
  fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
    .join(" "),
);
