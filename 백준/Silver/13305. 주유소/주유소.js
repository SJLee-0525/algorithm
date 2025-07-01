const solution = (input) => {
    const N = Number(input[0]);

    const dists = [...input[1].split(' ').map(BigInt), 0n];
    const prices = input[2].split(' ').map(BigInt);

    let totalCost = 0n;
    let minPrice = prices[0];

    for (let i = 0; i < N - 1; i++) {
        totalCost += minPrice * dists[i];

        if (minPrice > prices[i + 1]) minPrice = prices[i + 1];
    }

    console.log(totalCost.toString());
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);