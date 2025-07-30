const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    const fibo = Array(N + 1);
    fibo[0] = 0;
    fibo[1] = 1;

    for (let f = 2; f < N + 1; f++) fibo[f] = fibo[f - 2] + fibo[f - 1];

    console.log(fibo[N]);
}

solution(N);