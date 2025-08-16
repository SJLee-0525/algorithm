const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(Number).sort((a, b) => b - a);

const solution = (input) => {
    if (input[input.length - 1] !== 0) return -1;

    const sum = input.reduce((a, c) => a += c, 0);
    if (sum % 3 !== 0) return -1;

    return input.map(String).join('');
}

console.log( solution(input) );