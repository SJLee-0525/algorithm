const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [M, N] = input[0].trim().split(' ').map(Number);

    const DI = [0, -1, 0, 1], DJ = [1, 0, -1, 0]; // 동 남 서 북
    let i = 0, j = 0, dir = 0;

    for (let n = 1; n <= N; n++) {
        const [cmd, d] = input[n].trim().split(' ');

        switch (cmd) {
            case 'TURN':
                if (d === '0') dir = (dir + 3) % 4;
                else dir = (dir + 1) % 4;
                break;

            default:
                const dist = Number(d);

                i += DI[dir] * dist;
                j += DJ[dir] * dist;
        };

        if (i < 0 || i > M || j < 0 || j > M) return '-1';
    };

    return `${j} ${i}`
};

console.log( solution(input) );