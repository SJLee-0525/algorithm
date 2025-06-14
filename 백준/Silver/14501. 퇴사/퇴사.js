const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const TASK = input.slice(1, input.length).map((e) => e.split(' ').map(Number));

const DP = Array(N + 1).fill(0);

for (let i = N - 1; i > -1; i--) {
    if (i + TASK[i][0] > N) {
        DP[i] = DP[i + 1]
    } else {
        DP[i] = Math.max(DP[i + 1], TASK[i][1] + DP[i + TASK[i][0]]);
    }
}

console.log(DP[0])