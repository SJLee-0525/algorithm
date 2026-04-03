const fs = require("fs");

console.log(
  Math.max(
    ...fs
      .readFileSync("/dev/stdin")
      .toString()
      .trim()
      .split("\n")
      .map((l) =>
        l
          .trim()
          .split(" ")
          .reduce((a, c) => (a += Number(c)), 0),
      ),
  ),
);
