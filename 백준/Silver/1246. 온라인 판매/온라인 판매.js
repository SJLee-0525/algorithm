const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, M] = input[0].trim().split(' ').map(Number);
    const customers = input.slice(1, M + 1).map(Number).sort((a, b) => b - a);

    const MAX_EGG = Math.min(N, M);
    let res = [customers[0], customers[0]];

    for (let c = 1; c < MAX_EGG; c++) {
        const temp = customers[c] * (c + 1);

        if (res[1] < temp) [res[0], res[1]] = [customers[c], temp];
    };

    console.log(res.join(' '));
};

solution(input);