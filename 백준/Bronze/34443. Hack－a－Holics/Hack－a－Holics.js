const fs = require('fs');
const [A, _, C] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(A * C);