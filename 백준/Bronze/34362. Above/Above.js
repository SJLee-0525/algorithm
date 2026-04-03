const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = (input) => {
    const N = Number(input);

    console.log(N - 0.3);
};

solution(input);