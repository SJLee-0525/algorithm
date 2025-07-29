const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    const dp = Array(N + 1);

    dp[0] = 1;
    dp[1] = 1;

    for (let d = 2; d < N + 1; d++) dp[d] = (dp[d - 2] + dp[d - 1]) % 15746;
    
    console.log(dp[N]);
}

solution(N);