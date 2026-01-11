const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [S, T] = input.map((w) => w.trim());

    const tIdx = new Object();
    for (let i = 0; i < T.length; i++) tIdx[T[i]] = i + 1;

    const tCnt = Array(T.length + 1).fill(0);
    tCnt[0] = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < S.length; i++) {
        const idx = tIdx[S[i]];
        if (!idx) continue; 

        if (tCnt[idx - 1] > tCnt[idx]) tCnt[idx] += 1;
    };

    console.log(tCnt[T.length]);
};

solution(input);
