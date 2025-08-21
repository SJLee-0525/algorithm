const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0]);
    const SCORES = [0, ...input[1].split(' ').map(Number), 0, 0];

    const DP = [
        [0, -Infinity], 
        [SCORES[1], -Infinity],
        [SCORES[1] + SCORES[2], -Infinity],
        ...Array.from({ length: N }, () => Array(2)),
    ];

    for (let s = 3; s < N + 3; s++) {
        DP[s][0] = Math.max(DP[s - 1][0], DP[s - 1][1]) + SCORES[s];
        DP[s][1] = Math.max(DP[s - 3][0], DP[s - 3][1]) + (SCORES[s - 2] + SCORES[s - 1] + SCORES[s]) * 2;
    }

    console.log(Math.max(DP[N + 2][0], DP[N + 2][1]));
}

solution(input);