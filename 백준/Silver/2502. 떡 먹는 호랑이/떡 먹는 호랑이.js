const fs = require('fs');
const [D, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const solution = (D, K) => {
    const fibo = Array(D).fill(0);
    fibo[1] = 1;
    fibo[2] = 1;
    if (D > 2) for (let d = 3; d < D; d++) fibo[d] = fibo[d - 2] + fibo[d - 1];

    const maxB = Math.floor(K / fibo[D - 1]);

    let resA, resB;

    for (let tempB = maxB; tempB > 0; tempB--) {
        if ((K - (tempB * fibo[D - 1])) % fibo[D - 2] === 0) {
            resA = (K - (tempB * fibo[D - 1])) / fibo[D - 2];
            if (resA < 1) continue;
            resB = tempB;
            break
        }
    }

    console.log([resA, resB].join('\n'));
}

solution(D, K);