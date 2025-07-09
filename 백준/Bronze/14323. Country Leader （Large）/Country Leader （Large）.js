const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const T = Number(input[0]);
    
    const res = [];
    let idx = 1;

    for (let tc = 1; tc < T + 1; tc++) {
        const N = Number(input[idx++]);

        let maxSize = 0;
        const data = Array.from({ length: 21 }, () => []);

        for (let n = 0; n < N; n++) {
            const inputName = input[idx++];
            const count = new Set(inputName.replaceAll(' ', '').trim().split('')).size;
            data[count].push(inputName);
            if (maxSize < count) maxSize = count;
        }

        res.push(`Case #${tc}: ${data[maxSize].sort()[0]}`);
    }

    console.log(res.join('\n'));
}

solution(input);