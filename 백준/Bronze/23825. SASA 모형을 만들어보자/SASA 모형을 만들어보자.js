const fs = require('fs');
const [S, A] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(
    Math.floor( Math.min(S, A) / 2 ) 
);