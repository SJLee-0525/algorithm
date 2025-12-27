const solution = (input) => {
    const [I, N, _] = input[0].trim().split(' ').map(Number);

    const INK = input[1].trim().split('');
    let i = 0, curInk = 0;

    const BOARD = input.slice(2, N + 2).map((l) => l.trim().split(''));
    let bi = BOARD.findIndex((r) => r.includes('@'));
    let bj = BOARD[bi].findIndex((c) => c === '@');

    const COMMANDS = input[N + 2].trim().split('')
    const MOVE = {
        'U': [-1, 0],
        'D': [1, 0],
        'L': [0, -1],
        'R': [0, 1],
    };

    function jump () {
        const color = INK[i % I];

        for (let r = Math.max(0, bi - curInk); r <= Math.min(N - 1, bi + curInk); r++) {
            for (let c = Math.max(0, bj - curInk); c <= Math.min(N - 1, bj + curInk); c++) {
                if (Math.abs(bi - r) + Math.abs(bj - c) <= curInk) {
                    if (BOARD[r][c] !== '.' && BOARD[r][c] !== '@') BOARD[r][c] = color;
                };
            };
        };

        curInk = 0, i++;
    };

    COMMANDS.forEach((command) => {
        switch (command) {
            case 'j':
                curInk++;
                break;

            case 'J':
                jump();
                break;

            default:
                const [ni, nj] = [bi + MOVE[command][0], bj + MOVE[command][1]];
                if (ni < 0 || N <= ni || nj < 0 || N <= nj || BOARD[ni][nj] !== '.') break;

                [BOARD[bi][bj], BOARD[ni][nj]] = [BOARD[ni][nj], BOARD[bi][bj]];
                [bi, bj] = [ni, nj];
        };
    });

    console.log(BOARD.map(row => row.join('')).join('\n'));
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);