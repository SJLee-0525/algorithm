const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const solution = ([A, B, C]) => {
  if ((A === 1 && B === 0 && C === 0) || (A === 0 && B === 1 && C === 1)) return "A";
  else if ((B === 1 && A === 0 && C === 0) || (B === 0 && A === 1 && C === 1)) return "B";
  else if ((C === 1 && A === 0 && B === 0) || (C === 0 && A === 1 && B === 1)) return "C";
  return "*";
};

console.log(solution(input));
