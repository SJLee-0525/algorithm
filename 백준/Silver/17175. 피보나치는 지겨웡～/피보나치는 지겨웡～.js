const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());;

const solution = (N) => {
    const dp = Array(N + 1);
    dp[0] = 1;
    if (N > 0) dp[1] = 1;
    if (N > 1) dp[2] = 3;
    if (N > 2) dp[3] = 5;

    const diff = Array(N + 1);
    diff[0] = 1;
    if (N > 0) diff[1] = 1;
    if (N > 1) diff[2] = 2;
    if (N > 2) diff[3] = 2;

    if (N > 3) {
        for (let i = 4; i < N + 1; i++) {
            diff[i] = (diff[i - 1] + diff[i - 2]) % 1000000007;
            dp[i] = (dp[i - 1] + diff[i]) % 1000000007;
        }
    }

    console.log(dp[N]);
}

solution(N);