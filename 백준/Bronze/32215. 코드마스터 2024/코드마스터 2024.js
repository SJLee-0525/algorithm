const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const solution = (input) => {
    const [N, M, K] = input;

    let res = M * K;
    if (N > K) res += M;

    console.log(res);
};

solution(input);