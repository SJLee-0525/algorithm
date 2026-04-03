const fs = require('fs');
const res = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number).reduce((a, c) => a += c, 0);

if (res <= 21) console.log(1);
else console.log(0);