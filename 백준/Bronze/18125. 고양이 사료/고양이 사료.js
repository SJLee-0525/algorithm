const wink = [
    '|>___/|        /}',
    '| O < |       / }',
    '(==0==)------/ }',
    '| ^  _____    |',
    '|_|_/     ||__|'
]

const suprise = [
    '|>___/|     /}',
    '| O O |    / }',
    '( =0= )""""  \\',
    '| ^  ____    |',
    '|_|_/    ||__|'
]

const solution = (input) => {
    const [R, C] = input[0].split(' ').map(Number);

    const rotated = input.slice(1, C + 1).map((l) => l.split(' ').map(Number));
    const original = input.slice(C + 1, C + R + 1).map((l) => l.split(' ').map(Number));

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (original[i][j] !== rotated[C - j - 1][i]) return suprise.join('\n');
        }
    }

    return wink.join('\n');
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log( solution(input) );