const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);

    const arr = input.slice(1, N + 1).map((elem) => elem.split(' ').map(Number));
    const sumArr = calSum(N, arr);

    const res = new Array;
    for (let p = N + 1; p < N + M + 1; p++) {
        const [x1, y1, x2, y2] = input[p].split(' ').map(Number);

        res.push(sumArr[x2][y2] - sumArr[x1 - 1][y2] - sumArr[x2][y1 - 1] + sumArr[x1 - 1][y1 - 1]);
    }

    console.log(res.join('\n'));
}

const calSum = (N, arr) => {
    const sumArr = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < N + 1; j++) {
            sumArr[i][j] = arr[i - 1][j - 1] + sumArr[i - 1][j] + sumArr[i][j - 1] - sumArr[i - 1][j - 1];
        }
    }

    return sumArr;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

solution(input);