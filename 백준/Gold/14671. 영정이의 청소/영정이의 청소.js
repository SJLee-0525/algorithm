const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [_, __, K] = input[0].split(' ').map(Number);

    let cnt = 0;
    const pos = Array(4).fill(false);

    for (let k = 1; k < K + 1; k++) {
        const [x, y] = input[k].split(' ').map(Number);

        if (!pos[0] && x % 2 === 0 && y % 2 === 0) {
            pos[0] = true;
            cnt++;
        } else if (!pos[1] && x % 2 === 1 && y % 2 === 0) {
            pos[1] = true;
            cnt++;
        } else if (!pos[2] && x % 2 === 0 && y % 2 === 1) {
            pos[2] = true
            cnt++
        } else if (!pos[3] && x % 2 === 1 && y % 2 === 1) {
            pos[3] = true;
            cnt++;
        }

        if (cnt === 4) return 'YES';
    }

    return 'NO';
}

console.log( solution(input) );