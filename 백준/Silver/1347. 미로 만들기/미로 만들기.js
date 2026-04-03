const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const movements = input[1].trim().split('');
    
    const visited = Array.from({ length: 101 }, () => Array(101).fill('#'));
    visited[50][50] = '.'; 
    
    const DI = [1, 0, -1, 0], DJ = [0, -1, 0 ,1];
    let k = 0;
    let ci = 50, cj = 50;
    let minI = 50, maxI = 50, minJ = 50, maxJ = 50;

    for (const movement of movements) {
        switch (movement) {
            case 'L':
                k = (k + 3) % 4;
                break;

            case 'R':
                k = (k + 1) % 4;
                break;

            default:
                ci += DI[k];
                cj += DJ[k];
                visited[ci][cj] = '.';

                if (minI > ci) minI = ci;
                else if (maxI < ci) maxI = ci;

                if (minJ > cj) minJ = cj;
                else if (maxJ < cj) maxJ = cj;
        };
    };

    console.log(visited.slice(minI, maxI + 1).map((line) => line.slice(minJ, maxJ + 1).join('')).join('\n'));
};

solution(input)