const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0]);
    const arr = input[1].split(' ').map(Number);

    let res = arr[N - 1];
    
    for (let n = N - 2; n > -1; n--) {
        if (arr[n] > arr[n + 1]) arr[n] = arr[n + 1];

        res += arr[n];
    }

    console.log(res);
}

solution(input);