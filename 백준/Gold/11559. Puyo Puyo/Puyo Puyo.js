const DI = [0, 1, 0, -1];
const DJ = [1, 0, -1, 0];

const solution = (input) => {
    const PUYO = input.map((l) => l.split(''))

    let cnt = 0;
    while (findTarget(PUYO)) cnt++;

    console.log(cnt);
    
    return;
}

const findTarget = (PUYO) => {
    const TARGETS = [];
    const CHECKED = Array.from({ length: 12 }, () => Array(6).fill(false));

    for (let i = 11; i > -1; i--) {
        let isEmpty = true;

        for (let j = 0; j < 6; j++) {
            if (PUYO[i][j] !== '.') {
                isEmpty = false;

                if (!CHECKED[i][j]) {
                    bfs(i, j, PUYO, CHECKED, TARGETS);
                }
            }
        }

        if (isEmpty) break;
    }

    if (TARGETS.length >= 4) {
        bomb(PUYO, TARGETS);
        return true;
    }

    return false;
}

const bfs = (si, sj, PUYO, CHECKED, TARGETS) => {
    CHECKED[si][sj] = true;

    const temp = [[si, sj]];

    const queue = [[si, sj]];
    let q = 0;

    while (q < queue.length) {
        const [ci, cj] = queue[q++];

        for (let k = 0; k < 4; k++) {
            const ni = ci + DI[k], nj = cj + DJ[k];

            if (0 <= ni && ni < 12 && 0 <= nj && nj < 6 && PUYO[ni][nj] === PUYO[si][sj] && !CHECKED[ni][nj]) {
                CHECKED[ni][nj] = true;
                queue.push([ni, nj]);
                temp.push([ni, nj]);
            }
        }
    }

    if (temp.length >= 4) TARGETS.push(...temp);

    return;
}

const bomb = (PUYO, TARGETS) => {
    for (const [ti, tj] of TARGETS) PUYO[ti][tj] = '.';

    for (let j = 0; j < 6; j++) {
        const BLOCKS = [];

        for (let i = 11; i > -1; i--) {
            if (PUYO[i][j] !== '.') BLOCKS.push(PUYO[i][j]);
        }

        for (let bi = 0; bi < BLOCKS.length; bi++) PUYO[11 - bi][j] = BLOCKS[bi];
        for (let ei = BLOCKS.length; ei < 12; ei++) PUYO[11 - ei][j] = '.';
    }

    return;
}

// ------------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);