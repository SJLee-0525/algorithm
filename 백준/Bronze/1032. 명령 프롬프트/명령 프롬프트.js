const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

const res = input[1].split('');

if (N > 1) {
    const prompts = input.slice(2, N + 1);

    prompts.forEach((prompt) => {
        for (let c = 0; c < prompt.length; c++) {
            if (res[c] === '?' || res[c] === prompt[c]) continue;

            res[c] = '?';
        }
    })
}

console.log(res.join(''))

