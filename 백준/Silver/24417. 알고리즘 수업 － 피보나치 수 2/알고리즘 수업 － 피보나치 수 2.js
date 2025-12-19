const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    const STD = 1000000007;

    const DP = Array(3);
    DP[1] = 1, DP[2] = 1;

    for (let d = 2; d < N; d++) {
        [DP[0], DP[1]] = [DP[1], DP[2]];

        DP[2] = DP[0] + DP[1];
        if (DP[2] > STD) DP[2] %= STD;
    }

    console.log(`${DP[2]} ${N - 2}`);
};

solution(N);