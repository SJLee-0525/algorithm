const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const init = input.length === 1 ? '0' + input[0] : input;
    const temp = input.length === 1 ? [0, input[0]] : input.split('');

    let cnt = 0;
    while (true) {
        cnt++; 

        const cal = Number(temp[0]) + Number(temp[1]);
        const newNum = temp[1] + (cal < 10 ? String(cal) : String(cal)[1]);

        if (newNum === init) break;

        temp[0] = newNum[0], temp[1] = newNum[1];
    }

    console.log(cnt);
}

solution(input);