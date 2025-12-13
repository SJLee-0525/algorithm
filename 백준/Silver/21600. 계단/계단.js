const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());
    const histogram = input[1].trim().split(' ').map(Number);

    const DP = Array(N).fill(1); 

    for (let n = 1; n < N; n++) {
        if (histogram[n] <= DP[n - 1]) {
            DP[n] = Math.min(DP[n - 1], histogram[n]);
            continue;
        }

        DP[n] = DP[n - 1] + 1;
    };

    console.log( Math.max(...DP) );
};

solution(input);