const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());

    const parrots = input.slice(1, N + 1).map((parrot) => parrot.trim().split(' '));
    const parrotsIdx = Array(N).fill(0);

    const pps789 = input[N + 1].trim().split(' ');

    let ans = true;
    for (const cur of pps789) {
        let curIsPossible = false;

        for (let parrot = 0; parrot < N; parrot++) {
            if (curIsPossible) break;

            if (parrotsIdx[parrot] < parrots[parrot].length && parrots[parrot][parrotsIdx[parrot]] === cur) {
                parrotsIdx[parrot]++;
                curIsPossible = true;
            };
        };

        if (!curIsPossible) {
            ans = false;
            break;
        };
    };

    if (ans) {
        for (let parrot = 0; parrot < N; parrot++) {
            if (parrotsIdx[parrot] !== parrots[parrot].length ) {
                ans = false;
                break;
            }
        };
    };

    console.log(ans ? 'Possible' : 'Impossible');
};

solution(input);