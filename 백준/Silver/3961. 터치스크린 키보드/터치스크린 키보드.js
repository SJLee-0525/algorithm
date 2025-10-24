const keyboardInit = () => {
    const ret = new Map();

    const layout = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    layout.forEach((line, idx) => {
        for (let l = 0; l < line.length; l++) ret.set(line[l], [idx, l]);
    });

    return ret;
};

const solution = (input) => {
    const res = Array();
    const keyboardLayout = keyboardInit();

    let idx = 0;
    const T = Number(input[idx++].trim());

    function testCase(userInput, L) {
        const recommend = new Array();

        for (let l = 0; l < L; l++) {
            const programWord = input[idx++].trim();

            let diff = 0;
            for (let c = 0; c < userInput.length; c++) {
                diff += Math.abs(keyboardLayout.get(userInput[c])[0] - keyboardLayout.get(programWord[c])[0]) + Math.abs(keyboardLayout.get(userInput[c])[1] - keyboardLayout.get(programWord[c])[1])
            };

            recommend.push([programWord, diff]);
        };

        recommend.sort((a, b) => a[1] - b[1] || (a[0] < b[0] ? -1 : 1));
        res.push( ...recommend.map((w) => w.join(' ')) );
    };

    for (let tc = 0; tc < T; tc++) {
        const [userInput, L] = input[idx++].trim().split(' ');
        testCase(userInput, Number(L));
    };

    console.log( res.join('\n') );
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);