const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    const res = [];

    for (let n = N; n > 0; n--) res.push(' '.repeat(N - n) + '*'.repeat((n - 1) * 2 + 1));

    console.log(res.join('\n'));
}

solution(N);