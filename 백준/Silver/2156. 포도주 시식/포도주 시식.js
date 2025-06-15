const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

const WINES = input.slice(1, input.length);
DP = Array(WINES.length).fill(0);

DP[0] = WINES[0];

if (WINES.length > 1) {
    DP[1] = DP[0] + WINES[1];
}

if (WINES.length > 2) {
    DP[2] = Math.max(DP[1], DP[0] + WINES[2], WINES[1] + WINES[2]);
}

for (let i = 3; i < WINES.length; i++) {
    DP[i] = Math.max(DP[i - 2] + WINES[i], DP[i - 3] + WINES[i - 1] + WINES[i], DP[i - 1]);
}

console.log(DP[DP.length - 1])