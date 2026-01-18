const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [_, __, N] = input[0].split(' ').map(Number);

    let move = 0;
    let [cx, cy] = input[1].split(' ').map(Number);

    for (let i = 2; i <= N; i++) {
        const [x, y] = input[i].split(' ').map(Number);
        
        const dx = x - cx, dy = y - cy;

        if (dx * dy >= 0) move += Math.max(Math.abs(dx), Math.abs(dy));
        else move += Math.abs(dx) + Math.abs(dy);

        cx = x, cy = y;
    };

    console.log(move);
};

solution(input);
