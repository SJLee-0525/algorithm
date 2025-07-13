const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

const solution = (input) => {
    const list = [];

    for (let i = 0; i < input.length; i++) {
        list.push(input.slice(i, input.length).join(''));
    }

    list.sort();

    console.log(list.join('\n'));
}

solution(input);