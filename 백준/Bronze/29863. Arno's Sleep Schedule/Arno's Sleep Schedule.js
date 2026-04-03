const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let start;
if (N >= 20) start = 24 - N;
else start = -N;

console.log(M + start);