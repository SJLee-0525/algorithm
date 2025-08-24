const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const solution = (input) => {
    console.log( 
        input.reduce((a, c) => {
            if (c < 40) return a + 40;
            return a + c;
        }, 0) / 5
    );
}

solution(input);