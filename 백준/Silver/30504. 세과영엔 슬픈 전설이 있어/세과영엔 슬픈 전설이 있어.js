const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0]);

    const needs = input[1].split(' ').map((e, i) => [Number(e), i]).sort((a, b) => a[0] - b[0]);
    const bags = input[2].split(' ').map(Number).sort((a, b) => a - b);

    const ret = Array(N).fill(0);

    for (let i = 0; i < N; i++) {
        if (needs[i][0] > bags[i]) return -1;

        ret[needs[i][1]] = bags[i];
    }

    return ret.join(' ');
}

console.log(
    solution(input)
);