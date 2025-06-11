const factorial = (num) => {
    let res = 1;

    for (let n = num; n > 0; n--) {
        res *= n;
    }

    return res;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for (let tc = 1; tc < T + 1; tc++) {
    const [WEST, EAST] = input[tc].split(' ').map(Number);

    const res = factorial(EAST) / (factorial(EAST - WEST) * factorial(WEST))
    console.log(Math.round(res));
} 