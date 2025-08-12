const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, M, K] = input[0].split(' ').map(Number);

    const pos = Array(4).fill(false);

    for (let k = 1; k < K + 1; k++) {
        const [x, y] = input[k].split(' ').map(Number);

        if (x % 2 === 0 && y % 2 === 0) pos[0] = true;
        else if (x % 2 === 1 && y % 2 === 0) pos[1] = true;
        else if (x % 2 === 0 && y % 2 === 1) pos[2] = true;
        else pos[3] = true;
    }

    for (const p of pos) if (!p) return 'NO';

    return 'YES';
}


console.log( solution(input) );