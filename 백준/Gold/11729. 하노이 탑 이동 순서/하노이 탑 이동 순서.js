const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    const res = [];

    const hanoi = (count, start, mid, end) => {
        if (count === 1) {
            res.push(`${start} ${end}`);
            return
        }

        hanoi(count - 1, start, end, mid);
        res.push(`${start} ${end}`);
        hanoi(count - 1, mid, start, end);
    }

    hanoi(N, 1, 2, 3);

    console.log(2 ** N - 1);
    console.log(res.join('\n'));
}

solution(N);