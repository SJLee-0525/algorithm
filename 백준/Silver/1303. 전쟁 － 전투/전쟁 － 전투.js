const DI = [1, 0, -1, 0];
const DJ = [0, 1, 0, -1];


const solution = (input) => {
    const [M, N] = input[0].split(' ').map(Number);

    const arr = [
        Array(M + 2).fill('E'), 
        ...input.slice(1, N + 1).map((l) => ['E', ...l.split(''), 'E']), 
        Array(M + 2).fill('E')
    ];
    const visited = Array.from(
        { length: N + 2 }, 
        () => Array(M + 2).fill(false)
    );

    const res = { 'W': 0, 'B': 0 };
    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < M + 1; j++) {
            if (visited[i][j]) continue;

            res[arr[i][j]] += dfs(i, j, arr[i][j], arr, visited);
        }
    }
    console.log(Object.values(res).join(' '));
}

const dfs = (si, sj, team, arr, visited) => {
    visited[si][sj] = true;

    stack = [];

    let i = si, j = sj;
    let cnt = 1;

    while (true) {
        let check = false;

        for (let k = 0; k < 4; k++) {
            const mi = i + DI[k], mj = j + DJ[k];

            if (arr[mi][mj] === team && !visited[mi][mj]) {
                check = true;
                stack.push([i, j]);
                i = mi, j = mj;
                visited[i][j] = true;
                cnt++;
                break;
            }
        }

        if (!check) {
            if (stack.length > 0) {
                [i, j] = stack.pop();
            } else {
                return cnt > 1 ? cnt ** 2 : cnt;
            }
        }
    }
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);