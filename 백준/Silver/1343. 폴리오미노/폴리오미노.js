const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

const solution = (input) => {
    for (let s = 0; s < input.length; s++) {
        if (input[s] !== 'X') continue;

        let n = 1;
        while (input[s + n] !== '.') n++;
        if (n % 2 === 1) return -1;

        let m = 0;
        while (n > 0) {
            if (n >= 4) {
                for (let k = 0; k < 4; k++) {
                    input[s + m + k] = 'A';
                }
                m += 4;
                n -= 4;
            } else {
                for (let k = 0; k < 2; k++) {
                    input[s + m + k] = 'B';
                }
                m += 2;
                n -= 2;
            }
        }
    }

    return input.slice(0, input.length - 1).join('');
}

console.log( solution([...input, '.']) );