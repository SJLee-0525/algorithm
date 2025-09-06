class Stack {
    constructor(L) {
        this.stack = new Array();
        this.scores = new Array(L).fill(0);
    }

    highestScore() {
        return Math.max(...this.scores);
    }

    size() {
        return this.stack.length;
    }

    peek() {
        if (this.size() === 0) return null;

        return this.stack[this.size() - 1];
    }

    append(val) {
        this.stack.push(val);
    }

    pop(target, score) {
        const candidates = [];

        while (this.size()) {
            const popVal = this.stack.pop();

            if (!isNaN(popVal)) candidates.push(popVal);
            else {
                if (popVal === target) {
                    while (candidates.length) {
                        const candidate = candidates.pop();

                        this.append(candidate);
                        this.scores[candidate] += score;
                    }
                } 

                return;
            }
        }
    }
}

const solution = (input) => {
    const inputArr = input.split('');

    const stack = new Stack(inputArr.length);

    for (let c = 0; c < inputArr.length; c++) {
        const char = inputArr[c];

        if (!isNaN(char)) stack.append(c);
        else {
            if (char === ')') stack.pop('(', 1);
            else if (char === '}') stack.pop('{', 2);
            else if (char === ']') stack.pop('[', 3);
            else stack.append(char);
        }
    }

    console.log(stack.highestScore());
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

solution(input);