const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const N = Number(input);

    if (N <= 2) return 1;

    let res = 1;
    let cur = 1, left = 1, right = 1;
    const std = Math.floor(N / 2) + 1

    while (right <= std) {
        if (cur === N) res++;

        if (cur < N) cur += ++right;
        else cur -= left++;
    }

    return res;
}

console.log( solution(input) );
