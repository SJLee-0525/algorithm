const solution = (input) => {
    const res = new Array();

    input.forEach((n) => {
        res.push( tc(3 ** n) );
    });

    console.log(res.join('\n'));
}

const tc = (N) => {
    const arr = new Array(N).fill(false);

    const f = (s, e, size) => {
        if (size === 1) {
            arr[s] = true;
            return;
        };

        // 0 - 27: 0 - 9 | 9 - 18 | 18 - 27
        const next = size / 3;

        f(s, s + next, next);
        f(e - next, e, next);
    };


    f(0, N, N);

    return arr.map((e) => e ? '-' : ' ').join('');
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

solution(input);