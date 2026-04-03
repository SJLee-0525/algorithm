const fs = require('fs');
const [T, V] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(T * V);