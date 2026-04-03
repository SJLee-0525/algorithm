const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const A = input[0].trim().split(''), B = input[1].trim().split('');
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    function checkSyllable (word) {
        let hasVowel = false;

        for (let w = 0; w < word.length; w++) {
            if (!hasVowel) {
                if (vowels.has(word[w])) hasVowel = true;
            } else {
                if (!vowels.has(word[w])) return word.slice(0, w).join('');
            };
        };

        return null
    };

    const resA = checkSyllable(A), resB = checkSyllable(B);

    if (!resA || !resB) console.log('no such exercise');
    else console.log(resA + resB);
};

solution(input);