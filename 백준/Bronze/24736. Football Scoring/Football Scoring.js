let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = input[0].split(" ").map(Number);
const B = input[1].split(" ").map(Number);

const score = [6, 3, 2, 1, 2];

let resultA = 0;
let resultB = 0;
for (let i = 0; i < 5; i++) {
  resultA += A[i] * score[i];
  resultB += B[i] * score[i];
}

console.log(resultA, resultB);
