const makePerm = (N, M) => {
    const perms = [];
    const path = [];

    function f(lv) {
        if (lv === M) {
            perms.push(path.join(' '));
            return;
        }

        for (let num = 1; num < N + 1; num++) {
            path.push(num);
            f(lv + 1);
            path.pop();
        }
    }

    f(0);

    console.log(perms.join('\n'));
    return;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const [N, M] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

makePerm(N, M)