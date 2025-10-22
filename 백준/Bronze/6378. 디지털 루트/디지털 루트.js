const testCase = (num) => {
    while (num.length > 1) {
        let tempDigit = 0;

        for (let n = 0; n < num.length; n++) tempDigit += Number(num[n]);

        num = tempDigit.toString();
    };

    return num;
};

const solution = (input) => {
    const res = Array();

    for (let i = 0; i < input.length - 1; i++) {
        res.push( testCase(input[i].trim()) );
    }; 

    console.log( res.join('\n') );
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);