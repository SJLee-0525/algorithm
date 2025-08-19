class StringFunc {
    constructor() {
        this.stack = [];
    }

    xFunc() {
        this.stack.push(0);
        return true;
    }

    gFunc() {
        if (this.stack.length === 0) return false;

        const val = this.stack.pop();
        this.stack.push(val + 1);
        return true;
    }

    fFunc() {
        if (this.stack.length < 2) return false;

        const val1 = this.stack.pop();
        const val2 = this.stack.pop();
        this.stack.push(Math.min(val1, val2));
        return true;
    }

    size() {
        return this.stack.length;
    }
}

const solution = (input) => {
    const stack = new StringFunc();

    for (let i = input.length - 1; i > -1; i--) {
        let funcRes;

        if (input[i] === 'x') funcRes = stack.xFunc();
        else if (input[i] === 'g') funcRes = stack.gFunc();
        else funcRes = stack.fFunc();

        if (!funcRes) return -1;
    }

    if (stack.size() !== 1) return -1;

    return stack.stack.pop();
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

console.log(
    solution(input)
);