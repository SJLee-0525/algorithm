const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    let res = '';

    const univ = ['C', 'A', 'M', 'B', 'R', 'I', 'D', 'G', 'E'];

    for (const char of input) {
        if (univ.some((u) => u === char)) continue;

        res += char;
    }

    console.log(res);
}

solution(input);