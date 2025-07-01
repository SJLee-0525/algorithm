const solution = (input) => {
    const N = Number(input[0]);

    const dists = [...input[1].split(' ').map(BigInt), 0n];
    for (let n = 0; n < N - 2; n++) dists[n + 1] += dists[n];

    const prices = input[2].split(' ').map(BigInt);
    const temp = dists.map((dist) => dist * prices[0]);    

    for (let i = 1; i < N; i++) {
        const tempCost = temp[i - 1] + (dists[i] - dists[i - 1]) * prices[i];

        if (temp[i] > tempCost) {
            change(dists, temp, i, prices[i], N);
        }
    }

    console.log(temp[N - 2].toString());
}

const change = (dists, temp, s, c, N) => {
    for (let i = s; i < N - 1; i++) {
        temp[i] = temp[s - 1] + (dists[i] - dists[s - 1]) * c;
    }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);