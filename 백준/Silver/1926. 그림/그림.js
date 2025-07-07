const DI = [1, 0, -1, 0];
const DJ = [0, 1, 0, -1];

const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);
    const arr = input.slice(1, N + 1).map((elem) => elem.split(' ').map(Number));
    const visited = Array.from({ length: N }, () => Array(M).fill(false));

    const res = { cnt: 0, size: 0 };
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (arr[i][j] === 1 && !visited[i][j]) {
                const temp = dfs(i, j, arr, visited, N, M);
                
                res.cnt++;
                if (res.size < temp) res.size = temp;
            }
        }
    }

    console.log(res.cnt.toString() + '\n' + res.size.toString());
}

const dfs = (si, sj, arr, visited, N, M) => {
    visited[si][sj] = true;
    stack = [];

    let i = si, 
        j = sj, 
        size = 1;

    while (true) {
        let check = false;

        for (let k = 0; k < 4; k++) {
            const mi = i + DI[k];
            const mj = j + DJ[k];

            if (0 <= mi && mi < N &&
                0 <= mj && mj < M &&
                arr[mi][mj] === 1 && !visited[mi][mj]
            ) {
                check = true;
                stack.push([i, j])
                i = mi;
                j = mj;
                size++;
                visited[mi][mj] = true;
                break;
            }
        }

        if (!check) {
            if (stack.length) {
                const prev = stack.pop();
                i = prev[0];
                j = prev[1];
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