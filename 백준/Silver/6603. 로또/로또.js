const solution = (input) => {
    const res = [];

    for (let tc = 0; tc < input.length - 1; tc++) {
        const [k, ...arr] = input[tc].split(' ').map(Number);

        res.push(combi(arr));
    }

    console.log(res.join('\n\n'))
}

const combi = (arr) => {
    const ret = [];
    const path = [];

    const f = (lv) => {
        if (path.length > 6 || path.length + arr.length - lv < 6) return;

        if (lv === arr.length) {
            ret.push(path.join(' '));
            return;
        }

        path.push(arr[lv]);
        f(lv + 1);
        path.pop();
        f(lv + 1);
    }

    f(0);

    return ret.join('\n')
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

solution(input);