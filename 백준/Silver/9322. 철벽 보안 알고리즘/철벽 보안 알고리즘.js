const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const res = [];
    let idx = 0;

    const T = Number(input[idx++]);

    for (let tc = 0; tc < T; tc++) {
        const N = Number(input[idx++]);

        const first = input[idx++].split(' ');
        const second = input[idx++].split(' ');

        const movement = Array(N);
        second.forEach((sec, i) => {
            const tar = first.findIndex((fst) => fst === sec);
            movement[i] = tar;
        })

        const ciphertext = input[idx++].split(' ');

        const decipheringText = Array(N);
        for (let n = 0; n < N; n++) {
            decipheringText[movement[n]] = ciphertext[n];
        }

        res.push(decipheringText.join(' '));
    }

    console.log(res.join('\n'));
}

solution(input);