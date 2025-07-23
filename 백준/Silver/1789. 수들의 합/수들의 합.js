const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    let cur = 0, piv = 1;
    while (cur < N + 1) cur += piv++;

    console.log( cur === N ? piv - 3 : piv - 2 );
}

solution(N);