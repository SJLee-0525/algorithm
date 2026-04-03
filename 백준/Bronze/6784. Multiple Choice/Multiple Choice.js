const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  let ans = 0;
  const N = Number(input[0].trim());

  for (let s = 1; s <= N; s++) {
    if (input[s].trim() === input[s + N].trim()) ans++;
  }

  return ans;
};

console.log(solution(input));
