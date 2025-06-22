const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const CARDS = {};

for (let n = 1; n < N + 1; n++) {
    const card = input[n];

    if (!CARDS[card]) {
        CARDS[card] = 1;
    } else {
        CARDS[card]++;
    }
}

const res = Object.entries(CARDS).sort((a, b) => {
    const diff = b[1] - a[1];
    if (diff !== 0) return diff;

    const bigA = BigInt(a[0]);
    const bigB = BigInt(b[0]);
    return bigA < bigB ? -1 : bigA > bigB ? 1 : 0;
})

console.log(res[0][0]);