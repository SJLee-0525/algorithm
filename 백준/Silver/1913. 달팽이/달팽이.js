const DI = [1, 0, -1, 0];
const DJ = [0, 1, 0, -1];

const solution = (input) => {
    const N = Number(input[0]);
    const tar = Number(input[1]);

    const arr = Array.from({ length: N }, () => Array(N).fill(null));

    let num = N ** 2;
    let i = 0, j = 0, k = 0;
    let li = null, lj = null;
    while (num > 0) {
        if (tar === num) li = i, lj = j;

        arr[i][j] = num--;

        const mi = i + DI[k], mj = j + DJ[k];
        if (mi < 0 || N <= mi || mj < 0 || N <= mj || arr[mi][mj]) k = (k + 1) % 4;

        i += DI[k];
        j += DJ[k];
    }

    console.log(arr.map((a) => a.join(' ')).join('\n'));
    console.log(++li, ++lj);
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);