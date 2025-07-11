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

    const dfs = (lv) => {
        if (lv === M) {
            res.push(path.join(' '));
            return
        }

        if (path.length >= M) return;

        for (let n = 0; n < N; n++) {
            path.push(arr[n]);
            dfs(lv + 1);
            path.pop();
        }
    }

    dfs(0);

    return res;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);