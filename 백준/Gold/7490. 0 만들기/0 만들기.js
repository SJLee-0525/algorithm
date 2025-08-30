const solution = (input) => {
    const res = Array();

    const T = input[0];

    for (let t = 1; t < T + 1; t++) res.push( func(input[t]) );

    console.log(res.join('\n\n'));
}

const func = (N) => {
    const ret = Array();
    
    const nums = Array.from({ length: N }, (_, i) => (i + 1).toString());
    const symbols = [' ', '-', '+'];

    const path = Array();

    const perm = (lv) => {
        if (lv === N - 1) {
            const tempRes = build();
            if (tempRes) ret.push(tempRes);
            return;
        }

        for (const symbol of symbols) {
            path.push(symbol);
            perm(lv + 1);
            path.pop();
        }
    }

    const build = () => {
        const strArr = [nums[0]];
        const buildArr = [nums[0]];

        for (let i = 0; i < N - 1; i++) {
            strArr.push(path[i]);
            if (path[i] !== ' ') buildArr.push(` ${path[i]} `);

            strArr.push(nums[i + 1]);
            buildArr.push(nums[i + 1]);
        }

        const calArr = buildArr.join('').split(' ');

        let temp = 0;
        let status = 1;
        for (const elem of calArr) {
            if (elem === '+') status = 1;
            else if (elem === '-') status = -1;
            else {
                temp += Number(elem) * status;
            }
        }

        if (temp === 0) return strArr.join('');

        return null;
    }

    perm(0);

    return ret.sort().join('\n');
}

// ------------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

solution(input);