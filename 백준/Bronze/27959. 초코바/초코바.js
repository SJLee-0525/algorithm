const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const solution = (N, M) => {
    if (N * 100 >= M) console.log('Yes');
    else console.log('No');
}

solution(N, M);