const solution = (input) => {
    const res = Array();
    const N = Number(input[0].trim());

    function testCase(str) {
        let tmp = '';

        for (const char of str) {
            if (isNaN(char)) {
                if (tmp.length === 0) continue;

                res.push(BigInt(tmp));
                tmp = '';
            } else {
                tmp += char;
            }
        };

        if (tmp.length > 0) res.push(BigInt(tmp));

        return;
    };

    for (let n = 1; n <= N; n++) testCase(input[n].trim());

    res.sort((a, b) => a < b ? -1 : 1);
    console.log( res.join('\n') );
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);