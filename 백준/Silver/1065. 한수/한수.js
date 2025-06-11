const fs = require('fs')
const N = Number(fs.readFileSync('dev/stdin').toString().trim())

let res = 0;

for (let num = 1; num < N + 1; num++) {
    const strNum = num.toString();
    if (strNum.length < 2) {
        res++;
        continue;
    } else {
        const diff = Number(strNum[1]) - Number(strNum[0])

        let flag = true;
        for (let n = 1; n < strNum.length - 1; n++) {
            if (Number(strNum[n + 1]) - Number(strNum[n]) !== diff) flag = false;
        }

        if (flag) res++;
    }
}

console.log(res)