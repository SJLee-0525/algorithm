const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

const solution = ([A, B]) => {
    function euclidean(a, b) {
        if (b === 0n) return a;

        return euclidean(b, a % b);
    }

    console.log( '1'.repeat( Number(euclidean(A, B)) ) );
}

solution(input);