const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    if (N < 4) console.log(1);
    else {
        const dp = [1n, 1n, 1n, ...Array(N - 3)];

        for (let n = 3; n < N; n++) dp[n] = dp[n - 1] + dp[n - 3];

        console.log(dp[N - 1].toString());
    }
}

solution(N);