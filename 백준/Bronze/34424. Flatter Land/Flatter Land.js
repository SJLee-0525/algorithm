const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log((N - 1) * M);