const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [R, C] = input[0].trim().split(' ').map(Number);

    const puzzle = input.slice(1, input.length).map((e) => e.trim().split(''));
    const words = Array();

    for (let r = 0; r < R; r++) {
        let j = 0, word = '';

        while (j < C) {
            if (puzzle[r][j] === '#') {
                if (word.length > 1) words.push(word);

                word = '';
            } else word += puzzle[r][j];

            j++;
        };

        if (word.length > 1) words.push(word);
    };

    for (let c = 0; c < C; c++) {
        let i = 0, word = '';

        while (i < R) {
            if (puzzle[i][c] === '#') {
                if (word.length > 1)  words.push(word);

                word = '';
            } else word += puzzle[i][c];

            i++;
        };

        if (word.length > 1) words.push(word);
    };

    words.sort();
    console.log(words[0]);
};

solution(input);