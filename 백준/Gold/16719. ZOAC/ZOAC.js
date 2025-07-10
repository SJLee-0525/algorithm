const solution = (word) => {
    const res = Array(word.length).fill(null);

    const cvtWord = word.map((c) => c.charCodeAt());
    const tempWord = Array(word.length).fill('');

    const stack = [0];
    let count = 0;

    while (count < cvtWord.length) {
        const start = stack[stack.length - 1];
        min = 99, minIdx = 0;
        for (let t = start; t < cvtWord.length; t++) {
            if (min > cvtWord[t]) {
                min = cvtWord[t];
                minIdx = t;
            }
        }

        if (min === 99) {
            stack.pop();
            continue;
        } 

        stack.push(minIdx);
        cvtWord[minIdx] = 100;
        tempWord[minIdx] = word[minIdx];
        res[count++] = tempWord.join('');
    }

    console.log(res.join('\n'));
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

solution(input);