const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const MOD = 1_000_000_007n;
    const N = Number(input[0]);
    const H = input[1].split(' ').map(BigInt).sort((a, b) => (b > a ? 1 : -1));

    let pow2 = Array(N).fill(0n);
    pow2[0] = 1n;
    for (let i = 1; i < N; i++) pow2[i] = (pow2[i - 1] * 2n) % MOD;

    let ans = 0n;
    for (let i = 0; i < N; i++) {
        ans = (ans + H[i] * pow2[N - 1 - i]) % MOD;
    };

    console.log(ans.toString());
};

solution(input);