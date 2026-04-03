const fs = require('fs');
const [W, H] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log( ((W * H) / 2).toFixed(1) );