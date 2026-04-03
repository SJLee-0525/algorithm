const fs = require('fs');
const [X, Y] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(X * Y);