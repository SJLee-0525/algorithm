const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, M] = input[0].trim().split(' ').map(Number);
    
    const paper = [
        Array(M + 2).fill(0),
        ...input.slice(1, N + 1).map((l) => [0, ...l.trim().split(' ').map(Number), 0]),
        Array(M + 2).fill(0),
    ];
    
    let res = 0;
    const DI = [0, 1, 0, -1], DJ = [1, 0, -1, 0];

    function cal (i, j) {
        let ret = 2;

        for (let k = 0; k < 4; k++) {
            const ni = i + DI[k], nj = j + DJ[k];

            if (paper[i][j] > paper[ni][nj]) ret += paper[i][j] - paper[ni][nj];
        };

        return ret;
    };

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= M; j++) res += cal(i, j);
    };

    console.log(res);
};

solution(input);