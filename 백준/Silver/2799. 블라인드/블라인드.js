const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const solution = (input) => {
    const [M, N] = input[0].trim().split(' ').map(Number); // M 층, M 창문

    const apartment = input.slice(1, input.length);
    const status = Array(5).fill(0);
    
    const floor = 5 * M + 1;
    const window = 5 * N + 1;
    
    for (let m = 1; m < floor; m += 5) {
        for (let n = 1; n < window; n += 5) {
            let blind = 0;

            for (let b = 0; b <= 4; b++) {
                if (apartment[m + b][n] === '*') blind++ 
            }

            status[blind]++;
        };
    };

    console.log( status.join(' ') );
};

solution(input);