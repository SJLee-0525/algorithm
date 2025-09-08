const solution = (input) => {
    const res = new Array();

    for (let tc = 0; tc < input.length - 1; tc++) res.push( test(input[tc] ));

    console.log(res.join('\n'));
}

const test = (address) => {
    let ret = address.length + 1;

    for (const char of address) {
        switch (char) {
            case '0':
                ret += 4;
                break;

            case '1':
                ret += 2;
                break

            default:
                ret += 3;
        }
    }

    return ret;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);