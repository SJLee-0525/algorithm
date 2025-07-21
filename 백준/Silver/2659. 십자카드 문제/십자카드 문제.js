const solution = (input) => {
    const tempTimeNum = [];
    for (let t = 0; t < 4; t++) {
        let temp = '';
        for (let k = 0; k < 4; k++) temp += input[(t + k) % 4];
        tempTimeNum.push(Number(temp));
    }

    const timeNum = Math.min(...tempTimeNum);

    console.log( perm(timeNum) );
}


const perm = (timeNum) => {
    const setList = new Set();
    const path = [];

    const f = (lv) => {
        if (lv === 4) {
            let tempTimeNum = 9999;
            for (let t = 0; t < 4; t++) {
                let temp = '';
                for (let k = 0; k < 4; k++) temp += path[(t + k) % 4];

                const tempNum = Number(temp)
                if (tempTimeNum > tempNum) tempTimeNum = tempNum;
            }

            setList.add(tempTimeNum);
            return;
        }

        for (let i = 1; i < 10; i++) {
            path.push(i);
            f(lv + 1);
            path.pop();
        }
    }

    f(0);

    const arrList = Array(...setList);
    arrList.sort((a, b) => a - b);

    return arrList.findIndex((num) => num === timeNum) + 1;
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

solution(input);