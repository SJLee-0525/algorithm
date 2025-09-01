const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const solution = ([N, A, B]) => {
    const subway = Math.max(N, B);

    if (A < subway) console.log('Bus');
    else if (A > subway) console.log('Subway');
    else console.log('Anything');
}

solution(input);