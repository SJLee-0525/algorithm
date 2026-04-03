const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [R, C] = input[0].trim().split(' ').map(Number);
    const [_, __, pR, pC] = input[1].trim().split(' ').map(Number);

    const room = input.slice(2, R + 2).map((l) => l.trim().split(''));
    
    let cnt = 0
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (room[r][c] === 'P') cnt++;
        };
    };

    if (cnt === (pR * pC)) console.log(0);
    else console.log(1);
};

solution(input);