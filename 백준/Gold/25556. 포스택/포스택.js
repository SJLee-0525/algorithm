class Stack {
    constructor() {
        this.stack = [-1];
    };

    stackPeek() {
        return this.stack[this.stack.length - 1];
    }

    stackPush(val) {
        this.stack.push(val);
    }
}

const solution = (input) => {
    const N = Number(input[0]);
    const arr = input[1].split(' ').map(Number);

    console.log( check(arr) );
}

const check = (arr) => {
    const stacks = Array.from({ length: 4 }, () => new Stack());

    for (const num of arr) {
        let candidateStack = null, candidateStackVal = -2;

        for (let s = 0; s < 4; s++) {
            const peek = stacks[s].stackPeek();

            if (peek < num && candidateStackVal < peek) {
                candidateStack = s;
                candidateStackVal = peek;
            }
        }

        if (candidateStack === null) return 'NO';
        stacks[candidateStack].stackPush(num);
    }

    return 'YES';
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);