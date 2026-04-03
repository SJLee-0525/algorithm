const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);
    const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

    for (let t = 1; t <= N; t++) {
        const [lx, ly, rx, ry] = input[t].trim().split(' ').map(Number);

        for (let x = lx - 1; x < rx; x++) {
            for (let y = ly - 1; y < ry; y++) {
                paper[x][y]++;
            };
        };
    };

    let res = 0;

    for (let x = 0; x < 100; x++) {
        for (let y = 0; y < 100; y++) {
            if (paper[x][y] > M) res++;        
        };
    };

    console.log(res);
};

solution(input);