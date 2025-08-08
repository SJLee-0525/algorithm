const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, J, S, H, K] = input[0].split(' ').map(Number);
    const arr = input.slice(1, 4).map((e) => e.split(''));

    const line = Array(3).fill(0);

    for (let l = 0; l < N; l++) {
        if (arr[0][l] === 'v') line[0]++;
        else if (arr[1][l] === '^') line[2]++;
        else if (arr[2][l] === '^') line[1]++;
    }

    line[0] -= S;

    let currentJump = J - line[1];
    line[1] -= J;

    if (currentJump > 1) line[2] -= Math.floor(currentJump / 2);

    const damage = line.reduce((a, c) => c > 0 ? a += c * K : a, 0)
    const res = H - damage;

    if (res <= 0) console.log(-1);
    else console.log(res);
}

solution(input);