const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const solution = (input) => {
    const counts = Array(26).fill(0);

    for (const char of input) {
        counts[char.charCodeAt() - 97]++;
    }

    console.log(counts.join(' '));
}

solution(input);