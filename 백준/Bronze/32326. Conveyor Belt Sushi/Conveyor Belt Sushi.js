const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const solution = (input) => {
    const red = input[0];
    const green = input[1];
    const blue = input[2];

    console.log(red * 3 + green * 4 + blue * 5);
}

solution(input);