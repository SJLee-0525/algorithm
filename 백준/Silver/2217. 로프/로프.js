const solution = (input) => {
    const arr = input.slice(1, input[0] + 1).sort((a, b) => b - a);

    let res = 0;
    
    arr.forEach((w, i) => {
        const temp = w * (i + 1);

        if (res < temp) res = temp;
    })

    console.log(res);
}

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

solution(input);