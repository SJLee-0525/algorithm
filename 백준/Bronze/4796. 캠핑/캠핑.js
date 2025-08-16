const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const res = [];

    for (let tc = 0; tc < input.length; tc++) {
        const [L, P, V] = input[tc].split(' ').map(Number);

        const cnt = Math.floor(V / P);
        const etc = V % P > L ? L : V % P;
        const pos = cnt * L + etc;

        res.push(`Case ${tc + 1}: ${pos}`)
    }

    console.log(res.join('\n'));
}

solution(input.slice(0, input.length - 1));