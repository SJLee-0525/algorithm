const solution = ([N, ...arr]) => {
    const res = [];

    for (const K of arr) {    
        const results = [];

        res.push(findSequence(K) ? 'Gazua' : 'GoHanGang');
    }

    console.log(res.join('\n'));
}

const findSequence = (K) => {
    for (let k = 2; k * (k - 1) / 2 < K; k++) {
        const temp = K - (k * (k - 1)) / 2;

        if (temp % k === 0) return true;
    }

    return false;
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

solution(input);