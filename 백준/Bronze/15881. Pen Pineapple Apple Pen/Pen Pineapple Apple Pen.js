const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());
    const seq = input[1].trim();
    
    let res = 0;
    let c = 0;
    while (c < N - 3) {
        if (seq[c] !== 'p' || seq[c + 1] !== 'P' || seq[c + 2] !== 'A' || seq[c + 3] !== 'p') c++;
        else {
            res++;
            c += 4;
        };
    };
    
    console.log(res);
};

solution(input);