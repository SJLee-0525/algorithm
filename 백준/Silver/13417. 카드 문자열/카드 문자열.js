const solution = (input) => {
    const res = Array();

    const T = Number(input[0].trim());

    for (let tc = 0; tc < T; tc++) {
        res.push( testCase(input[tc * 2 + 2].trim().split(' ')) );
    };

    console.log( res.join('\n') );
};

const testCase = (cards) => {
    let ret = cards[0];

    for (let c = 1; c < cards.length; c++) {
        if (cards[c] <= ret[0]) ret = cards[c] + ret;
        else ret += cards[c];
    };

    return ret;
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);