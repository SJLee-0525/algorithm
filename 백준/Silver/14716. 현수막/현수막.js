const DI = [0, 1, 0, -1, -1, 1, 1, -1];
const DJ = [1, 0, -1, 0, 1, 1, -1, -1];

const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);

    const visited = Array.from({ length: N + 2 }, () => Array(M + 2).fill(false));
    const arr = [
        Array(M + 2).fill(0),
        ...input.slice(1, N + 1).map((e) => [0, ...e.split(' ').map(Number), 0]),
        Array(M + 2).fill(0),
    ]

    const dfs = (ci, cj) => {
        visited[ci][cj] = true;

        for (let k = 0; k < 8; k++) {
            const ni = ci + DI[k], nj = cj + DJ[k];

            if (arr[ni][nj] === 1 && !visited[ni][nj]) dfs(ni, nj);
        }

        return;
    }

    let res = 0;

    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < M + 1; j++) {
            if (arr[i][j] === 1 && !visited[i][j]) {
                dfs(i, j);
                res++;
            }
        }
    }

    console.log(res);
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);