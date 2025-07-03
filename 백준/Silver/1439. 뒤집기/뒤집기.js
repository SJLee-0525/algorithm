const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const count = {
        '0': 0,
        '1': 0,
    }

    let cur = input[0];
    count[cur]++;

    for (let i = 1; i < input.length; i++) {
        if (cur === input[i]) {
            continue;
        } else {
            cur = input[i];
            count[cur]++;
        }
    }

    console.log(Math.min(...Object.values(count)));
}

solution(input);