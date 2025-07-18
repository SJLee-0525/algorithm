const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (N, firstWord, words) => {
    const std = Array(26).fill(0);
    firstWord.forEach((fc) => {
        std[fc.charCodeAt() - 65]++;
    })

    let res = 0;
    for (let w = 0; w < N - 1; w++) {
        const diffLenght = Math.abs(firstWord.length - words[w].length);
        if (diffLenght > 1) continue;

        const temp = Array(26).fill(0);
        words[w].forEach((w) => {
            temp[w.charCodeAt() - 65]++;
        })
        
        let isPossible = true, isAdjusted = 0;

        if (diffLenght === 0) {
            for (let e = 0; e < 26; e++) {
                if (std[e] !== temp[e]) {
                    const diffCount = Math.abs(std[e] - temp[e]);
    
                    if (diffCount === 1) {
                        if (isAdjusted < 2) isAdjusted++;
                        else isPossible = false;
                    } else {
                        isPossible = false;
                    }
                }
            }
        } else {
            for (let e = 0; e < 26; e++) {
                if (std[e] !== temp[e]) {
                    const diffCount = Math.abs(std[e] - temp[e]);

                    if (diffCount === 1) isAdjusted++
                    else isPossible = false;
                }
            }

            if (isAdjusted > 1) isPossible = false;
        }

        if (isPossible) res++;
    }

    console.log(res)
}

solution(
    Number(input[0]), 
    input[1].split(''), 
    input.slice(2, input.length).map(e => e.split(''))
);