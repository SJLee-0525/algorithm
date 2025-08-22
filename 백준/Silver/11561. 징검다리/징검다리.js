const solution = (input) => {    
    const T = input[0];
    
    const res = [];

    for (let t = 1; t < T + 1; t++) res.push( func( BigInt(input[t]) ) );

    console.log(res.join('\n'));
}

const func = (N) => {
    let low = 0n;
    let high = 1n;

    while (high * (high + 1n) / 2n <= N) high <<= 1n;

    let ans = 0n;

    while (low <= high) {
        const mid = (low + high) >> 1n;
        const t = mid * (mid + 1n) / 2n;

        if (t <= N) {
            ans = mid;
            low = mid + 1n;
        } else {
            high = mid - 1n;
        }
    }

    return ans.toString();
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

solution(input);