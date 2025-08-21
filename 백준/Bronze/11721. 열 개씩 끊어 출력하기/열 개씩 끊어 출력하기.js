const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const res = [];

    let str = '';
    
    for (let i = 0; i < input.length; i++) {
        str += input[i];

        if (i % 10 === 9) {
            res.push(str);
            str = '';
        }
    }

    if (str.length > 0) res.push(str);

    console.log( res.join('\n') );
}

solution(input);