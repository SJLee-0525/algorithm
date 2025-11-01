const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

console.log( Math.floor(N / 5) );