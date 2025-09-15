const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const solution = (input) => {
    const [H, I, A, R, C] = input;

    console.log(
        (H * I) - (A * R * C)
    );
}

solution(input);