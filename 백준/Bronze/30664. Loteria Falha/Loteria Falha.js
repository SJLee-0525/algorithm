const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let res = [];

for (const line of input) {
    if (!line) continue; 
    if (line === '0') break;

    const n = BigInt(line);

    if (n % 42n === 0n) res.push('PREMIADO');
    else res.push('TENTE NOVAMENTE');
}

console.log(res.join('\n'));
