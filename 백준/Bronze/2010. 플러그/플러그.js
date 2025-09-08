const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const solution = (input) => {
    let res = input.slice(1, input.length).reduce((acc, plug) => acc += plug, 1);
    
    console.log(res - input[0]);
}

solution(input);