const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());
    const group = new Set();

    for (let n = 1; n <= N; n++) group.add( input[n].trim().split('').sort().join('') );
    
    console.log(group.size);
};

solution(input);