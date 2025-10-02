const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());
    const charts = input[1].trim().split(' ').map(Number);

    let res = 0;
    let maxPrice = charts[charts.length - 1];

    for (let c = N - 1; c > -1; c--) {
        if (charts[c] <= maxPrice) res += maxPrice - charts[c];
        else maxPrice = charts[c];
    };

    console.log(res);
};

solution(input);