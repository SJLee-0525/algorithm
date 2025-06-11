const makeCombi = (obj) => {
    const combi = [];
    const bools = Array(obj.length).fill(false);

    function c(lv, count, N) {
        if (lv === N) {
            if (count > 0) {
                const temp = bools.reduce((acc, bool, index) => {
                    if (bool) acc.push(obj[index]);
                    return acc;
                }, []);
                combi.push(temp);
            }

            return;
        }

        bools[lv] = true;
        c(lv + 1, count + 1, N);
        bools[lv] = false;
        c(lv + 1, count, N);
    }

    c(0, 0, bools.length);

    return combi;
}

const sol = (input, combi) => {
    const tempRes = []

    for (const com of combi) {
        const temp = [...input]

        for (const [start, end] of com) {
            temp[start] = null;
            temp[end] = null;
        }

        tempRes.push(temp.join(''));
    }

    return Array.from(new Set(tempRes)).sort().join('\n');
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('')

const obj = []
const stack = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
        stack.push(i);
    } else if (input[i] === ')') {
        obj.push([stack.pop(), i]);
    }
}

const combi = makeCombi(obj);
const res = sol(input, combi);

console.log(res)