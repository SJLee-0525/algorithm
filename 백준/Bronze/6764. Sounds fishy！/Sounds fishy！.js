const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const solution = ([a, b, c, d]) => {
  if (a < b && b < c && c < d) return "Fish Rising";
  else if (a > b && b > c && c > d) return "Fish Diving";
  else if (a === b && b === c && c === d) return "Fish At Constant Depth";
  else return "No Fish";
};

console.log(solution(input));
