const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const A = input[0].trim();
    const B = input[1].trim();
    const userOutput = input[2].trim();

    if (A.includes(userOutput) && B.includes(userOutput)) console.log("YES");
    else console.log("NO");
};

solution(input)