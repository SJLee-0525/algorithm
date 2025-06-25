const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);
    const arr = input.slice(1, N + 1).map((row) => row.split(' ').map(Number));

    const sumArr = calSum(N, M, arr);
    const res = new Array;

    let idx = N + 1
    const K = input[idx++];
    for (let k = 0; k < K; k++) {
        const [i, j, x, y] = input[idx++].split(' ').map(Number);

        res.push(sumArr[x][y] - sumArr[i - 1][y] - sumArr[x][j - 1] + sumArr[i - 1][j - 1]);
    }

    console.log(res.join('\n'));

}

const calSum = (N, M, arr) => {
    const sumArr = Array.from({ length: N + 1} , () => Array(M + 1).fill(0));

    for (let n = 1; n < N + 1; n++) {
        for (let m = 1; m < M + 1; m++) {
            sumArr[n][m] = arr[n - 1][m - 1] + sumArr[n - 1][m] + sumArr[n][m - 1] - sumArr[n - 1][m - 1];
        }
    }

    return sumArr;
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

solution(input);

