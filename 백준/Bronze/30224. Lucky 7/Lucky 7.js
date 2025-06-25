const fs = require('fs');
const N = fs.readFileSync('dev/stdin').toString().trim();

const intN = Number(N);
let isDiv = false;
if (intN % 7 === 0) isDiv = true;

const arrN = N.split('');
let hasSeven = false;
for (let a = 0; a < arrN.length; a++) {
    if (arrN[a] === '7') hasSeven = true;
}

let res = null;
if (!isDiv && !hasSeven) {
    res = 0;
} else if (isDiv && !hasSeven) {
    res = 1;
} else if (!isDiv && hasSeven) {
    res = 2;
} else {
    res = 3;
}

console.log(res);


