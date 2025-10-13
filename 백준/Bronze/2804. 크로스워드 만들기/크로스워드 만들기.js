const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((word) => word.split(''));

const solution = (input) => {
    const [A, B] = input;

    function findCrossIdx() {
        for (let a = 0; a < A.length; a++) {
            const b = B.findIndex((bChar) => A[a] === bChar);
    
            if (b > -1) return [a, b];
        };
    };

    const puzzle = Array.from({ length: B.length }, () => Array(A.length).fill('.'));
    
    const [aIdx, bIdx] = findCrossIdx();
    for (let a = 0; a < A.length; a++) puzzle[bIdx][a] = A[a];
    for (let b = 0; b < B.length; b++) puzzle[b][aIdx] = B[b];

    console.log(
        puzzle.map(l => l.join('')).join('\n')
    );
};

solution(input);