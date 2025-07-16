const delta = [-1, 1];

const solution = (input) => {
    const grid = input.slice(0, 7).map((l) => l.split(' ').map(Number));
    const ball = Number(input[7]);
    
    const res = game(grid, ball);
    console.log(res);
}

const game = (grid, ball) => {
    let maxCount = -1;

    for (let j = 0; j < 7; j++) {
        const copiedGrid = grid.map((line) => [...line]);

        for (let i = 6; i > -1; i--) {
            if (copiedGrid[i][j] === 0) {
                copiedGrid[i][j] = ball;

                let repeat = true;

                while (repeat) {
                    repeat = check(copiedGrid);
                }

                const tempMax = count(copiedGrid);
                if (maxCount < tempMax) maxCount = tempMax;

                break;
            }
        }
    }

    return 49 - maxCount;
}

const check = (prevGrid) => {
    const disappearList = Array.from({ length: 7 }, () => Array(7).fill(false));

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (prevGrid[i][j] > 0) {
                garoDfs(i, j, prevGrid, disappearList);
                seroDfs(i, j, prevGrid, disappearList);
            }
        }
    }

    const isBombed = bomb(prevGrid, disappearList);
    gravity(prevGrid);

    return isBombed;
}

const garoDfs = (si, sj, prevGrid, disappearList) => {
    const isChecked = Array(7).fill(false);
    isChecked[sj] = true;

    const stack = [];

    let size = 1;
    let j = sj;

    while (true) {
        let flag = false;
        
        for (let k = 0; k < 2; k++) {
            const mj = j + delta[k];

            if (0 <= mj && mj < 7 && prevGrid[si][mj] > 0 && !isChecked[mj]) {
                flag = true;
                stack.push(j);
                j = mj;
                isChecked[j] = true;
                size++;
                break;
            }
        }

        if (!flag) {
            if (stack.length) {
                j = stack.pop();
            } else {
                for (let v = 0; v < 7; v++) {
                    if (isChecked[v] && prevGrid[si][v] === size) disappearList[si][v] = true;
                }
                return;
            }
        }
    }
}

const seroDfs = (si, sj, prevGrid, disappearList) => {
    const isChecked = Array(7).fill(false);
    isChecked[si] = true;

    const stack = [];

    let size = 1;
    let i = si;

    while (true) {
        let flag = false;

        for (let k = 0; k < 2; k++) {
            const mi = i + delta[k];

            if (0 <= mi && mi < 7 && prevGrid[mi][sj] > 0 && !isChecked[mi]) {
                flag = true;
                stack.push(i);
                i = mi;
                isChecked[i] = true;
                size++;
                break;
            }
        }

        if (!flag) {
            if (stack.length) {
                i = stack.pop();
            } else {
                for (let v = 0; v < 7; v++) {
                    if (isChecked[v] && prevGrid[v][sj] === size) disappearList[v][sj] = true;
                }
                return;
            }
        }
    }
}

const bomb = (prevGrid, disappearList) => {
    let isBombed = false;

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (disappearList[i][j]) {
                prevGrid[i][j] = 0;
                if (!isBombed) isBombed = true;
            }
        }
    }

    return isBombed;
}

const gravity = (prevGrid) => {
    for (let j = 0; j < 7; j++) {
        let replaceIdx = 6;

        for (let i = 6; i > -1; i--) {
            if (prevGrid[i][j] > 0) {
                prevGrid[replaceIdx--][j] = prevGrid[i][j];
            }
        }

        for (let r = replaceIdx; r > -1; r--) {
            prevGrid[r][j] = 0;
        }
    }
}

const count = (prevGrid) => {
    let cnt = 0;

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (prevGrid[i][j] === 0) cnt++;
        }
    }

    return cnt;
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);