const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0]);
    const towers = input[1].split(' ').map(Number);

    let res = Math.max(towers[0], towers[N - 1]);
    for (let t = 1; t < N - 1; t++) {
        const temp = towers[t] + Math.min(towers[t - 1], towers[t + 1]);

        if (res < temp) res = temp;
    }

    console.log(res);
}

solution(input);