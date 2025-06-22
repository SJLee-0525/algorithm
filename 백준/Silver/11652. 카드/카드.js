const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const CARDS = new Map();

for (let i = 1; i <= N; i++) {
    const card = input[i];
    CARDS.set(card, (CARDS.get(card) || 0) + 1);
}

const result = [...CARDS.entries()].sort((a, b) => {
    const countA = a[1];
    const countB = b[1];
    if (countA !== countB) {
        return countB - countA; 
    }

    const bigA = BigInt(a[0]);
    const bigB = BigInt(b[0]);
    return bigA < bigB ? -1 : bigA > bigB ? 1 : 0; 
});

console.log(result[0][0]);
