const DI = [0, 1, 1, -1];
const DJ = [1, 0, 1, 1];

const solution = (input) => {
    const arr = input.map((line) => line.split(' ').map(Number));

    let winner = 0;
    let li = -1, lj = -1;
    
    for (let i = 0; i < 19; i++) {
        for (let j = 0; j < 19; j++) {
            if (arr[i][j] === 0) continue;

            const [temp, ti, tj] = check(i, j, arr[i][j], arr);
            if (temp > 0) {
                winner = temp;
                li = ti, lj = tj;
            }
        }
    }

    console.log(winner);
    if (winner > 0) console.log(++li, ++lj);
}

const check = (si, sj, color, arr) => {
    let isWin = false;
    let ti = -1, tj = -1;

    for (let k = 0; k < 4; k++) {
        let count = 1;

        let mi = si + DI[k], mj = sj + DJ[k];
        while (0 <= mi && mi < 19 && 0 <= mj && mj < 19 && arr[mi][mj] === color) {
            mi += DI[k];
            mj += DJ[k];
            count++;
        }

        mi = si - DI[k], mj = sj - DJ[k];
        while (0 <= mi && mi < 19 && 0 <= mj && mj < 19 && arr[mi][mj] === color) {
            mi -= DI[k];
            mj -= DJ[k];
            count++;
        }

        if (count === 5) {
            isWin = true;
            ti = mi + DI[k];
            tj = mj + DJ[k];
        }
    }

    return [isWin ? color : 0, ti, tj];
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);
