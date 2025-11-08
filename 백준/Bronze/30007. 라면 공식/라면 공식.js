const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());
    const res = new Array();
    
    for (let n = 1; n <= N; n++) {
        const [A, B, X] = input[n].trim().split(' ').map(Number);
        res.push( A * (X - 1) + B );
    };
    
    console.log( res.join('\n') );
};

solution(input);