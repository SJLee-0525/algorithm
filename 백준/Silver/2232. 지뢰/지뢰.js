const solution = (input) => {
    const N = Number(input[0]);
    const mines = [0, ...input.slice(1, N + 1).map(Number), 0];

    const res = [];
    for (let n = 1; n < N + 1; n++) {
        if (mines[n - 1] <= mines[n] && mines[n] >= mines[n + 1]) res.push(n);
    }

    console.log(res.join('\n'));
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);
