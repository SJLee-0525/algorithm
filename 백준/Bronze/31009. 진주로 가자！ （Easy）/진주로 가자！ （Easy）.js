const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    let res, count = 0;

    const N = Number(input[0]);
    const tickets = input.slice(1, N + 1).map((e) => {
        const [detination, fee] = e.split(' ')
        return [detination, Number(fee)];
    });

    tickets.sort((a, b) => a[1] - b[1]);

    for (let t = 0; t < N; t++) {
        if (tickets[t][0] === 'jinju') {
            res = tickets[t][1];
            continue;
        }

        if (res && res < tickets[t][1]) {
            count++
        }
    }

    console.log( [res, count].join('\n') )
}

solution(input);