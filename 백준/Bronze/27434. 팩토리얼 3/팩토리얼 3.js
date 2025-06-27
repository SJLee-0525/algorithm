const multiplyRange= (lo, hi) => {
    if (lo > hi) return 1n;
    if (lo === hi) return BigInt(lo);
    if (hi - lo === 1) return BigInt(lo) * BigInt(hi);

    const mid = Math.floor((lo + hi) / 2);
    return multiplyRange(lo, mid) * multiplyRange(mid + 1, hi);
}

const solution = (n) => {
    if (n === 0 || n === 1) return 1n;

    return multiplyRange(2, n);
}

const fs = require('fs');
const input = Number(fs.readFileSync('dev/stdin').toString().trim());

const res = solution(input);
process.stdout.write(res.toString());