const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    let odd = 0, even = 0;
    
    input[1].trim().split(' ').map(Number).forEach((n) => {
        if (n % 2 === 1) odd++;
        else even++;
    });
    
    if (even > odd) console.log('Happy');
    else console.log('Sad');
};

solution(input);