const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0].trim());
for (let n = 1; n <= N; n++) {
  const [A, B] = input[n].trim().split(" ");

  if (B === "2026") {
    console.log(A);
    break;
  }
}
