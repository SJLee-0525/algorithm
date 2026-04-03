const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const solution = (input) => {
    const res = Array();
    const T = input[0];

    for (let t = 1; t <= T; t++) {
        if (Math.sqrt(input[t]) % 1 === 0) res.push(1);
        else res.push(0);
    };

    console.log(res.join('\n'));
};

solution(input);
