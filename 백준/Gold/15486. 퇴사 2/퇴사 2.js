const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0]);

    const PAY = input.slice(1, N + 1).map((l) => l.split(' ').map(Number));
    const DP = Array(N + 1).fill(0);

    for (let day = N - 1; day > -1; day--) {
        if (day + PAY[day][0] > N) DP[day] = DP[day + 1];
        else DP[day] = Math.max(DP[day + PAY[day][0]] + PAY[day][1], DP[day + 1]);
    }

    console.log(DP[0]);
}

solution(input);