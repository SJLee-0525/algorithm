const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

let c = 0;

for (let i = 1; i <= N; i++) {
  c += i ** 3;
}

console.log(c);
