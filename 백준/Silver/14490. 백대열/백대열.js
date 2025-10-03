const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(':').map(Number);

const solution = ([N, M]) => {
    function euclidean(a, b) {
        if (b === 0) return a;

        return euclidean(b, a % b);
    };

    const GCD = euclidean(N, M);

    console.log(`${N / GCD}:${M / GCD}`);
};

solution(input);