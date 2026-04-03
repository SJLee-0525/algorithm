const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const solution = ([A, B]) => {
    console.log( A * 1000 + B * 10000 )
};

solution(input)