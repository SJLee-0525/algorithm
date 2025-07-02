const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);

    const LIGHTS = Array(N + 1).fill(false);
    const res = [];

    for (let m = 1; m < M + 1; m++) {
        const [o, s, e] = input[m].split(' ').map(Number);

        if (o === 0) {
            for (let c = s; c < e + 1; c++) LIGHTS[c] = !LIGHTS[c];
        } else {
            let cnt = 0;
            for (let c = s; c < e + 1; c++) if (LIGHTS[c]) cnt++;
            res.push(cnt);
        }
    }

    console.log(res.join('\n'));
}

solution(input);