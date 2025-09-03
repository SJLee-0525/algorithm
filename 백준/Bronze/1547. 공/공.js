const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0]);

    const CUPS = [null, true, false, false];

    for (let n = 1; n < N + 1; n++) {
        const [x, y] = input[n].split(' ').map(Number);

        [CUPS[x], CUPS[y]] = [CUPS[y], CUPS[x]];
    }

    console.log(
        CUPS.findIndex((cup) => cup === true)
    );
}

solution(input);