const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const N = Number(input);

    if (N <= 2) return 1;

    const arr = Array.from({length: Math.floor(N / 2) + 1}, (_, i) => i + 1);

    let res = 1;
    let cur = 1, left = 0, right = 0;

    while (right < arr.length && left <= right) {
        if (cur === N) res++;

        if (cur < N) cur += arr[++right];
        else cur -= arr[left++];
    }

    return res;
}

console.log( solution(input) );
