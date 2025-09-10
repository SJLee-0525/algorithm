const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    let joi = 0, ioi = 0;

    for (let c = input.length - 1; c > 1; c--) {
        if (input[c] !== 'I' || input[c - 1] !== 'O') continue;

        if (input[c - 2] === 'J') joi++;
        else if (input[c - 2] === 'I') ioi++;
    }

    console.log(joi);
    console.log(ioi);
}

solution(input);