const solution = (input) => {
    let res = 0;

    const N = input[0];

    const plus = [];
    const zero = [];
    const minus = [];

    for (let n = 1; n < N + 1; n++) {
        if (input[n] > 1) plus.push(input[n]);
        else if (input[n] < 0) minus.push(input[n]);
        else if (input[n] === 0) zero.push(input[n]);
        else res += 1;
    }

    plus.sort((a, b) => b - a);
    minus.sort((a, b) => a - b);

    let temp = 0;

    for (const p of plus) {
        if (temp === 0) temp = p;
        else {
            temp *= p;
            res += temp;
            temp = 0;
        }
    }

    if (temp > 0) {
        res += temp;
        temp = 0;
    }

    for (const m of minus) {
        if (temp === 0) temp = m;
        else {
            temp *= m;
            res += temp;
            temp = 0;
        }
    }

    if (temp < 0) {
        if (zero.length > 0) temp = 0;
    }

    res += temp;

    console.log(res);
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

solution(input);