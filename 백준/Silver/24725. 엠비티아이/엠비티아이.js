const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const ELEM = {
    'E': 1,
    'I': 1,
    'N': 2,
    'S': 2,
    'F': 3,
    'T': 3,
    'P': 4,
    'J': 4,
};

const DI = [-1, -1, 0, 1, 1, 1, 0, -1];
const DJ = [0, 1, 1, 1, 0, -1, -1, -1];

const solution = (input) => {
    const [N, M] = input[0].trim().split(' ').map(Number);
    const board = input.slice(1, N + 1).map((l) => l.trim().split(''));

    let res = 0;

    function checkMbti(ci, cj, ck, depth) {
        if (depth === 4) {
            res++;
            return;
        };

        const ni = ci + DI[ck], nj = cj + DJ[ck];
        if (0 <= ni && ni < N && 0 <= nj && nj < M && ELEM[board[ni][nj]] === ++depth) {
            checkMbti(ni, nj, ck, depth);
        };
    };

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (ELEM[board[i][j]] !== 1) continue;

            for (let k = 0; k < 8; k++) {
                checkMbti(i, j, k, 1);
            };
        };
    };

    console.log(res);
};

solution(input);