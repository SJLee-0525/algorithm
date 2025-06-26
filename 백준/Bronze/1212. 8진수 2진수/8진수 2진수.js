const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim();

let res = '';
for (let i = 0; i < input.length; i++) {
    let num = Number(input[i]);

    if (num > 3) {
        num -= 4;
        res += '1';
    } else res += '0';

    if (num > 1) {
        num -= 2;
        res += '1';
    } else res += '0';

    if (num > 0) {
        res += '1';
    } else res += '0';
}

let p = 0;
while (res[p] === '0') p++;
res = res.slice(p, res.length);

console.log(res.length === 0 ? '0' : res);