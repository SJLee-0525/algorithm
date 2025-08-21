const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    let idx = 0;

    const [N, M] = input[idx++].split(' ').map(Number);

    const wordSet = new Set();
    for (let n = 0; n < N; n++) wordSet.add(input[idx++]);

    let cnt = 0;
    for (let m = 0; m < M; m++) if (wordSet.has(input[idx++])) cnt++;

    console.log(cnt);
}

solution(input);