const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, _] = input[0].trim().split(' ').map(Number);
    const box = input[1].trim().split(' ').map(Number);

    let chocolate = 0, day = 0;

    for (let n = 1; n < N; n++) {
        if (box[0] < box[n]) {
            chocolate += box[n] - box[0];
            day++;
        };
    };

    console.log(`${chocolate} ${day}`)
};

solution(input);