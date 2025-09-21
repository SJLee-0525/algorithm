const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(
    input.reduce((a, c) => a + c, 0) + 3
);