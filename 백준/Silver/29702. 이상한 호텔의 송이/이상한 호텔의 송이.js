const solution = (input) => {
    const res = Array();
    const N = Number(input[0].trim());

    for (let n = 1; n <= N; n++) res.push( testCase(input[n].trim()) );

    console.log( res.join('\n') );
};

const testCase = (room) => {
    const ret = Array();

    let cur = BigInt(room);
    let par = cur / 2n;

    while (cur !== 0n) {
        ret.push(cur);

        cur = par;
        par = cur / 2n;
    };

    for (let r = 0; r < ret.length; r++) {
        ret[ret.length - r - 1] = (r + 1).toString() + (ret[ret.length - r - 1] - (2n ** BigInt(r)) + 1n).toString().padStart(18, '0');
    };

    return ret.join('\n');
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);