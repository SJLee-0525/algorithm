const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [_, L] = input[0].split(' ').map(Number);
    const floods = input[1].split(' ').map(Number).sort((a, b) => a - b);

    let cnt = 0, last = 0;
    for (const flood of floods) {
        if (last <= flood) {
            cnt++;
            last = flood + L;
        }
    }

    console.log(cnt);
}

solution(input);