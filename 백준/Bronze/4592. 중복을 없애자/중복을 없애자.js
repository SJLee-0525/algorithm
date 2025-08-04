const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const res = [];

    for (let i = 0; i < input.length - 1; i++) {
        const [N, ...arr] = input[i].split(' ').map(Number);

        const temp = [arr[0]];
        for (let a = 1; a < arr.length; a++) {
            if (arr[a] === temp[temp.length - 1]) continue;

            temp.push(arr[a]);
        }

        res.push(temp.join(' ') + ' $');
    }

    console.log(res.join('\n'));
}

solution(input);