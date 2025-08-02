const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);
    const trains = Array(N + 1).fill(0);

    for (let m = 1; m <= M; m++) {
        const [prompt, ...args] = input[m].split(' ').map(Number);

        if (prompt === 1) {
            const [train, seat] = args;
            trains[train] |= (1 << (seat - 1));
        } else if (prompt === 2) {
            const [train, seat] = args;
            trains[train] &= ~(1 << (seat - 1));
        } else if (prompt === 3) {
            const [train] = args;
            trains[train] <<= 1;
            trains[train] &= (1 << 20) - 1; 
        } else if (prompt === 4) {
            const [train] = args;
            trains[train] >>= 1;
        }
    }

    const seen = new Set(trains.slice(1));
    console.log(seen.size);
};

solution(input);