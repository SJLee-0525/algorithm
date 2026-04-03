const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const res = input[1].trim().split(' ').map(Number).reduce((a, c) => a + c, 0);
    
    if (res < 0) console.log('Left');
    else if (res > 0) console.log('Right');
    else console.log('Stay');
};

solution(input);