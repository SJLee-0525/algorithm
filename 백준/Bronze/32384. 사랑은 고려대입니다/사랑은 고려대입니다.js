const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let res = '';
for (let n = 0; n < N; n++) res += 'LoveisKoreaUniversity ';
console.log(res);