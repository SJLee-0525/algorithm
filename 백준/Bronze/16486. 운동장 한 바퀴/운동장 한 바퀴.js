const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(input[0] * 2 + input[1] * 2 * 3.141592);