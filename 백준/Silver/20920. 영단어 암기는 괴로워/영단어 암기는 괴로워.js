const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, M] = input[0].trim().split(' ').map(Number);

    const words = new Array();
    const wordCnt = new Object();

    for (let n = 1; n <= N; n++) {
        const word = input[n].trim();

        if (word.length < M) continue;

        if (wordCnt[word]) wordCnt[word]++;
        else {
            words.push(word);
            wordCnt[word] = 1;
        };
    };

    words.sort((wordA, wordB) => wordCnt[wordB] - wordCnt[wordA] || wordB.length - wordA.length || (wordA > wordB ? 1 : -1));

    console.log( words.join('\n') );
};

solution(input);