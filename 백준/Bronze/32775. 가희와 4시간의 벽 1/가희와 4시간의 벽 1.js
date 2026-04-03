const fs = require('fs');
const [S, F] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(S <= F ? 'high speed rail' : 'flight');