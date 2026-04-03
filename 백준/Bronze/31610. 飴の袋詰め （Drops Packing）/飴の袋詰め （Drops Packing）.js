const fs = require('fs');
const [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(A * B + C);