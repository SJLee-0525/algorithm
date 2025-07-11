const solution = (input) => {
    const C = Number(input[0]);
    const charts = input[1].split(' ').map(Number);

    let jhCash = C, smCash = C;
    let jhStocks = 0, smStocks = 0;

    let status = 0;
    for (let d = 0; d < 14; d++) {
        if (jhCash >= charts[d]) {
            const buy = Math.floor(jhCash / charts[d]);
            jhCash -= buy * charts[d];
            jhStocks += buy;
        }

        if (d === 0) continue;

        if (charts[d] < charts[d - 1]) {
            if (status < 0) {
                status = 1;
            } else {
                status++;
            }
        } else if (charts[d] > charts[d - 1]) {
            if (status > 0) {
                status = -1;
            } else {
                status--;
            }
        }

        if (status >= 3) {
            if (smCash >= charts[d]) {
                const buy = Math.floor(smCash / charts[d]);
                smCash -= buy * charts[d];
                smStocks += buy;
            }
        } else if (status <= -3) {
            smCash += smStocks * charts[d];
            smStocks = 0;
        }
    }

    const jhRes = jhCash + jhStocks * charts[13];
    const smRes = smCash + smStocks * charts[13];

    if (jhRes > smRes) {
        return 'BNP';
    } else if (jhRes < smRes) {
        return 'TIMING';
    } else {
        return 'SAMESAME';
    }

}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(
    solution(input)
);