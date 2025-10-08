const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());
    const dancing = new Set(['ChongChong']);

    for (let n = 1; n <= N; n++) {
        const [A, B] = input[n].trim().split(' ');

        if (dancing.has(A) || dancing.has(B)) {
            dancing.add(A);
            dancing.add(B);
        };
    };

    console.log(dancing.size)
};

solution(input);