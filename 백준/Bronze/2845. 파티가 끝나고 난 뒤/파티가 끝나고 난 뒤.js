const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [L, P] = input[0].trim().split(' ').map(Number);
    const estimation = L * P;
    
    const arr = input[1].trim().split(' ').map(Number);
    const res = Array(5);

    for (let n = 0; n < 5; n++) (res[n] = arr[n] - estimation).toString();

    console.log(res.join(' '));
}

solution(input);