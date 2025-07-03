const fs = require('fs');
const input = Number(fs.readFileSync('dev/stdin').toString().trim());

const solution = (N) => {
    if (N < 5 && N % 2 === 1) return -1;

    let ret = 0;

    if ((N % 5) % 2 === 0) {
        ret += Math.floor(N / 5);
        N = N % 5;
    } else {
        ret += (Math.floor(N / 5) - 1);
        N = N % 5 + 5;
    }
    ret += N / 2;
    
    return ret;
}

console.log(
    solution(input)
);