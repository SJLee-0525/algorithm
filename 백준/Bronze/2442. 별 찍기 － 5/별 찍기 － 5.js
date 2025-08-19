const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    const res = [];

    for (let n = 0; n < N; n++) res.push(' '.repeat(N - n - 1) + '*'.repeat(n * 2 + 1));

    console.log(res.join('\n'));
}

solution(N);