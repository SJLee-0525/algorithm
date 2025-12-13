const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const guitars = input.slice(1, input.length).map((e) => e.trim());

    function calSum(guitar) {
        let ret = 0;

        for (const elem of guitar) {
            if (isNaN(elem)) continue;

            ret += Number(elem);
        };

        return ret;
    };

    console.log(
        guitars.sort((a, b) => a.length - b.length || calSum(a) - calSum(b) || ((a < b) ? -1 : 1)).join('\n')
    );
};

solution(input)