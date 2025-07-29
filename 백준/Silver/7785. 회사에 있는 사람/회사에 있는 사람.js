const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0]);

    const record = new Map();

    for (let n = 1; n < N + 1; n++) {
        const [name, status] = input[n].split(' ');

        if (status === 'enter') {
            record.set(name, true);
        } else {
            record.delete(name);
        }
    }

    console.log(
        Array(...record.keys()).sort().reverse().join('\n')
    );
}

solution(input);