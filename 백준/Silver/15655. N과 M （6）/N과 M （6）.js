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
    const used = Array(N).fill(false);

    const dfs = (lv, start) => {
        if (lv === M) {
            res.push(path.join(' '));
            return
        }

        if (path.length >= M || arr.length - start < M - lv) return;

        for (let n = start; n < N; n++) {
            if (used[n]) continue;

            used[n] = true;
            path.push(arr[n]);
            dfs(lv + 1, n + 1);
            path.pop();
            used[n] = false;
        }
    }

    dfs(0, 0);

    return res;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);