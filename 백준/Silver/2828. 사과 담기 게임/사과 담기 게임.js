const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, M] = input[0].trim().split(' ').map(Number);
    const J = Number(input[1].trim());
    
    let move = 0;
    let boxStart = 1, boxEnd = M;

    for (let j = 0; j < J; j++) {
        const loc = Number(input[j + 2].trim());

        if (boxEnd < loc) {
            const temp = loc - boxEnd;

            move += temp;
            boxStart += temp;
            boxEnd += temp;
        } else if (loc < boxStart) {
            const temp = boxStart - loc;
            
            move += temp;
            boxStart -= temp;
            boxEnd -= temp;
        };
    };

    console.log(move);
};

solution(input);