const fs = require('fs');
const N = Number(fs.readFileSync('dev/stdin').toString().trim());

let a = 0;
let c = 0;

for (let n = 1; n < N + 1; n++) {
  a += n;
  c += n * n * n;
}

const b = a * a;

console.log(a);
console.log(b);
console.log(c);