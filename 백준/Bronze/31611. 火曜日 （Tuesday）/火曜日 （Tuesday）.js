const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

if (N % 7 === 2) console.log(1);
else console.log(0);