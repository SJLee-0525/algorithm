const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

for (let n = 1; n < N + 1; n++) console.log(`Hello World, Judge ${n}!`)