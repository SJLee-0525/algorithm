const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);

const solution = (input) => {
    const res = input.slice(1, input.length).sort((a, b) => b - a).reduce((a, c, i) => {
        if (i % 3 === 2) return a;
        return a + c;
    }, 0);

    console.log(res);
};

solution(input);