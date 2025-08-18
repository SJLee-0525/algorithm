const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const solution = ([N, ...scores]) => {
    let res = 0;

    let cur = scores[N - 1];
    for (let c = N - 2; c > -1; c--) {
        if (scores[c] < cur) cur = scores[c];
        else {
            cur--;
            res += scores[c] - cur;
        } 
    }

    console.log(res);
}

solution(input);