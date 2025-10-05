const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [A, B, C] = input[0].trim().split(' ').map(Number);
    const components = Array(A + B + C + 1).fill(2);

    const test = input.slice(2, input.length).map((e) => e.trim().split(' ').map(Number)).sort((a, b) => b[3] - a[3]);
    
    for (const [a, b, c, r] of test) {
        switch (r) {
            case 1:
                [components[a], components[b], components[c]] = [1, 1, 1];
                break;

            default:
                if (components[a] === 1 && components[b] === 1) components[c] = 0;
                else if (components[a] === 1 && components[c] === 1) components[b] = 0;
                else if (components[b] === 1 && components[c] === 1) components[a] = 0;
        };
    };

    console.log( components.slice(1, components.length).join('\n') );
};

solution(input);