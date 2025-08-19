const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    const res = [];

    for (let n = 1; n < N + 1; n++) res.push('*'.repeat(n) + ' '.repeat(N - n) + ' '.repeat(N - n) + '*'.repeat(n));
    for (let n = N - 1; n > 0; n--) res.push('*'.repeat(n) + ' '.repeat(N - n) + ' '.repeat(N - n) + '*'.repeat(n));

    console.log(res.join('\n'));
}

solution(N);