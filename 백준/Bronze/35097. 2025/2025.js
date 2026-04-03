const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    let res = Array();
    
    for (const line of input) {
        const n = BigInt(line.trim());
        if (n === 0n) break;
    
        const sum = n * (n + 1n) / 2n;
        const total = sum * sum;
    
        res.push(total.toString());
    };
    
    console.log(res.join('\n'));
};

solution(input);