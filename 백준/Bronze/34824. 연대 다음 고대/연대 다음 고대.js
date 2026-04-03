const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((l) => l.trim());

const solution = (input) => {
    let isWin = false;

    for (let i = 1; i <= input.length; i++) {
        if (input[i] === 'yonsei') {
            isWin = true;
            break;
        } else if (input[i] === 'korea') {
            isWin = false;
            break;
        };
    };

    if (isWin) console.log('Yonsei Won!');
    else console.log('Yonsei Lost...');

}

solution(input);