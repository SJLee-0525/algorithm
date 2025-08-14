const DI = [1, 0, -1, 0];
const DJ = [0, 1, 0, -1];

const solution = (input) => {
    const [N, M, R] = input[0].split(' ').map(Number);
    const originalArr = input.slice(1, N + 1).map(e => e.split(' ').map(Number));
    const visited = Array.from({ length: N }, () => Array(M).fill(0));
    const newArr = Array.from({ length: N }, () => Array(M).fill(null));
    const newVisited = Array.from({ length: N }, () => Array(M).fill(false));

    const minS = Math.floor(Math.min(N, M) / 2);

    for (let s = 0; s < minS; s++) {
        if (visited[s][s]) continue;

        const len = 2 * ((N - 2 * s) + (M - 2 * s)) - 4;
        const newR = len === 0 ? 0 : R % len;

        findStart(s, s, N, M, newR, originalArr, visited, newArr, newVisited);
    }

    console.log(newArr.map(a => a.join(' ')).join('\n'));
}

const findStart = (si, sj, N, M, newR, originalArr, visited, newArr, newVisited) => {
    let ri = si, rj = sj, rk = 0;

    for (let step = 0; step < newR; step++) {
        let mi = ri + DI[rk], mj = rj + DJ[rk];
        if (mi < 0 || mi >= N || mj < 0 || mj >= M || visited[mi][mj] === 2) {
            rk = (rk + 1) % 4;
            mi = ri + DI[rk]; mj = rj + DJ[rk];
        }
        ri = mi; rj = mj;
    }

    let oi = si, oj = sj, ok = 0;
    visited[oi][oj] = 1;

    while (visited[si][sj] !== 2) {
        newArr[ri][rj] = originalArr[oi][oj];

        let mi = ri + DI[rk], mj = rj + DJ[rk];
        while (mi < 0 || mi >= N || mj < 0 || mj >= M || newVisited[mi][mj]) {
            rk = (rk + 1) % 4;
            mi = ri + DI[rk]; mj = rj + DJ[rk];
        }
        ri = mi; rj = mj;
        newVisited[ri][rj] = true;

        let omi = oi + DI[ok], omj = oj + DJ[ok];
        while (omi < 0 || omi >= N || omj < 0 || omj >= M || visited[omi][omj] === 2) {
            ok = (ok + 1) % 4;
            omi = oi + DI[ok]; omj = oj + DJ[ok];
        }
        oi = omi; oj = omj;
        visited[oi][oj] = 2;
    }
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);
