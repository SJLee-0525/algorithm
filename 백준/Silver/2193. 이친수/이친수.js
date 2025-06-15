const fs = require('fs');
const N = Number(fs.readFileSync('dev/stdin').toString().trim());

const DP = Array(N + 1).fill(0n);

DP[1] = 1n;

if (DP.length > 1) {
    for (let i = 2; i < DP.length; i++) {
        DP[i] = DP[i - 2] + DP[i - 1];
    }
}

console.log(DP[N].toString())