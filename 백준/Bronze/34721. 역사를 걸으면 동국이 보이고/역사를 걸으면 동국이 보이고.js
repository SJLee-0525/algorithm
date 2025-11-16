const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const res = Array();

for (let n = 0; n < N; n++) res.push('I love DGU');

console.log(res.join('\n'));