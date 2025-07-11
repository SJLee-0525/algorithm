const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);
    const arr = input[1].split(' ').map(Number);

    arr.sort((a, b) => a - b);

    console.log(
        perm(arr, N, M).join('\n')
    );
}

const perm = (arr, N, M) => {
    const res = [];
    const path = [];

    const dfs = (lv, start) => {
        if (lv === M) {
            res.push(path.join(' '));
            return
        }

        if (path.length >= M || arr.length - start < M - lv) return;

        const used = Array(10001).fill(false);
        for (let n = start; n < N; n++) {
            if (used[arr[n]]) continue;

            used[arr[n]] = true;

            path.push(arr[n]);
            dfs(lv + 1, n + 1);
            path.pop();

        }
    }

    dfs(0, 0);

    return res;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);