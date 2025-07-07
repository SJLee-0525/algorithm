const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, D] = input[0].split(' ').map(Number);
    const childs = input[1].split(' ').map(Number);

    const counts = Array(N + 1).fill(0);
    childs.forEach((child) => {counts[child]++});

    let res = 0;
    for (let c = 0; c < N; c++) {
        if (D < counts[c]) {
            res += Math.ceil((counts[c] - D) / (D - 1));
        }
    }

    console.log(res);
}

solution(input);