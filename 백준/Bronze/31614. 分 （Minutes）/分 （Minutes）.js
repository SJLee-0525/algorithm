const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const solution = ([H, M]) => {
    console.log(H * 60 + M);
}

solution(input);