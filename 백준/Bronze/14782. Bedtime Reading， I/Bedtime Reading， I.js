const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    const T = Math.sqrt(N);

    let res = 0;
    for (let t = 1; t <= T; t++) {
        if (N % t === 0) {
            res += t;
            res += N / t;
        }
    }

    console.log(res);
}

solution(N);