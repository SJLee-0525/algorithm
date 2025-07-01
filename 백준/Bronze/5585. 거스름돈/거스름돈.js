const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (input) => {
    const changes = [500, 100, 50, 10, 5];

    let remain = 1000 - input;
    let cnt = 0;

    changes.forEach((change) => {
        cnt += Math.floor(remain / change);
        remain = remain % change;
    })

    console.log(cnt + remain);
} 

solution(input);