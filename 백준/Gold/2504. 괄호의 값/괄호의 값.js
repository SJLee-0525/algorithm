const f = (arr) => {
    const stack = []
    let result = 0; value = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            stack.push(arr[i]);
            value *= 2;
        } else if (arr[i] === '[') {
            stack.push(arr[i]);
            value *= 3
        } else {
            if (stack.length > 0) {
                if (stack[stack.length - 1] === '(' && arr[i] === ')') {
                    if (arr[i - 1] === '(') {
                        result += value
                    }
                    stack.pop();
                    value /= 2; // 깊이 감소
                } else if (stack[stack.length - 1] === '[' && arr[i] === ']') {
                    if (arr[i - 1] === '[') {
                        result += value;
                    }
                    stack.pop();
                    value /= 3;
                } else {
                    return 0;
                }
            } else { 
                return 0;
            }
        }
    }

    return stack.length > 0 ? 0 : result;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('');

console.log(f(input))