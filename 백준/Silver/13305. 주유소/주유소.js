const solution = (input) => {
    const N = Number(input[0]);

    const dists = [...input[1].split(' ').map(BigInt), 0n];
    const prices = input[2].split(' ').map(BigInt);
    
    for (let i = N - 2; i > 0; i--) dists[i - 1] += dists[i];

    let temp = dists.map((elem, i) => elem * prices[i]);

    for (let c = N - 2; c > -1; c--) {
        const tempCost = temp[c + 1] + (dists[c] - dists[c + 1]) * prices[c];

        if (temp[c] > tempCost) temp[c] = tempCost;
    }

    console.log(temp[0].toString());
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);