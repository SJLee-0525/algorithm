const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const res = [];
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let s = 0; s < input.length - 1; s++) {
        let count = 0;

        const sentence = input[s];
        for (let s = 0; s < sentence.length; s++) {
            if (vowels.has(sentence[s].toLowerCase())) count++;
        }

        res.push(count);
    }

    console.log(res.join('\n'));
}

solution(input);