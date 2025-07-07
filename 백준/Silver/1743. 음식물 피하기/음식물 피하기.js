const DI = [1, 0, -1, 0];
const DJ = [0, 1, 0, -1];

const solution = (input) => {
    const [N, M, K] = input[0].split(' ').map(Number);
    const hall = Array.from({ length: N + 2 }, () => Array(M + 2).fill(false));

    for (let k = 1; k < K + 1; k++) {
        const [r, c] = input[k].split(' ').map(Number);
        hall[r][c] = true;
    }

    let res = 0;
    const visited = Array.from({ length: N + 2 }, () => Array(M + 2).fill(false));
    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < M + 1; j++) {
            if (hall[i][j] && !visited[i][j]) {
                const temp = dfs(i, j, visited, hall);
                if (res < temp) res = temp;
            }
        }
    }

    console.log(res);
}

const dfs = (si, sj, visited, hall) => {
    visited[si][sj] = true;

    const stack = [];
    
    let size = 1;
    let i = si, j = sj;

    while (true) {
        let check = false;

        for (let k = 0; k < 4; k++) {
            const mi = i + DI[k], mj = j + DJ[k];

            if (hall[mi][mj] && !visited[mi][mj]) {
                check = true;
                visited[mi][mj] = true;
                stack.push([i, j]);
                i = mi;
                j = mj;
                size++;
                break;
            }
        }

        if (!check) {
            if (stack.length) {
                [i, j] = stack.pop();
            } else {
                return size;
            }
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);