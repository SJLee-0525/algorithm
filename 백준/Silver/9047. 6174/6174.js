const solution = (input) => {
    const res = new Array();

    const T = Number(input[0].trim());

    for (let tc = 1; tc < T + 1; tc++) {
        res.push( test(input[tc] ));
    }

    console.log( res.join('\n') );
}

const test = (N, memo) => {
    const initialNum = Number(N);

    let num = N;
    let cnt = 0;

    while (num !== '6174') {
        cnt++;

        const arrNum = num.trim().split('').map(Number).sort((a, b) => b - a);
    
        const bigNum = Number(arrNum.join(''));
        const smallNum = Number(arrNum.reverse().join(''));

        num = (bigNum - smallNum).toString().padStart(4, '0');
    }
    
    return cnt;
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);
