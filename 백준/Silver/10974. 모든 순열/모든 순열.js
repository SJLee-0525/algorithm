const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    const res = Array();

    const path = Array();
    const used = Array(N + 1).fill(false);

    function perm (lv) {
        if (lv === N) {
            res.push( path.join(' ') );
            return;
        };

        for (let n = 1; n <= N; n++) {
            if (used[n]) continue;

            used[n] = true;
            path.push(n);

            perm(lv + 1);

            used[n] = false;
            path.pop();
        };
    };

    perm(0);

    console.log( res.join('\n') );
};

solution(N);