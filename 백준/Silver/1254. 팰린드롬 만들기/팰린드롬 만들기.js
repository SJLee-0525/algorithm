const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    let res = 101;
    const m = Math.floor(input.length / 2);

    // 팰린드롬 길이가 홀수
    for (let o = m; o < input.length; o++) {
        let l = o - 1, r = o + 1;

        while (r < input.length && input[l] === input[r]) {
            l--;
            r++;
        };

        if (r === input.length) res = Math.min(res, o * 2 + 1);
    };

    // 팰린드롬 길이가 짝수
    for (let e = m; e < input.length; e++) {
        let l = e - 1, r = e;

        while (r < input.length && input[l] === input[r]) {
            l--;
            r++;
        };

        if (r === input.length) res = Math.min(res, e * 2);
    };

    console.log(res);
};

solution(input);