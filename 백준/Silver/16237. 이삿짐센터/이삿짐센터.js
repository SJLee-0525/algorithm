const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const solution = (input) => {
    let bags = input[4];

    // 4 
    bags += input[3];
    input[0] = Math.max(input[0] - input[3], 0);

    // 3
    bags += input[2];
    const remainB = Math.max(input[1] - input[2], 0);
    input[2] -= input[1] - remainB;;
    input[1] = remainB;
    input[0] = Math.max(input[0] - input[2] * 2, 0);

    // 2
    const doubleB = Math.floor(input[1] / 2);
    bags += doubleB;
    input[1] -= doubleB * 2;
    input[0] = Math.max(input[0] - doubleB, 0); 
    if (input[1] > 0) {
        input[0] = Math.max(input[0] - 3, 0);
        bags++;
    };    

    // 1
    bags += Math.floor((input[0] + 4) / 5);

    console.log(bags);
};

solution(input);