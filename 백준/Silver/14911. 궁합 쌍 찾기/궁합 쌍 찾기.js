const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const nums = input[0].trim().split(' ').map(Number).sort((a, b) => a - b);
    const tarSum = Number(input[1].trim());

    const pair = new Set();

    for (let n = 0; n < nums.length - 1; n++) {
        for (let m = n + 1; m < nums.length; m++) {
            if (nums[n] + nums[m] === tarSum) pair.add(`${nums[n]} ${nums[m]}`);
        };
    };

    if (pair.size > 0) console.log([...pair].sort().join('\n'));
    console.log(pair.size);
};

solution(input);