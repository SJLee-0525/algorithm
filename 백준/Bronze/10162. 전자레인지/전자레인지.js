const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (input) => {
    let remain = input;

    const buttons = [300, 60, 10];
    const res = [0, 0, 0];

    buttons.forEach((button, i) => {
        res[i] = Math.floor(remain / button);
        remain = remain % button;
    })

    if (remain > 0) return '-1';
    
    return res.join(' ');
}

console.log(
    solution(input)
);