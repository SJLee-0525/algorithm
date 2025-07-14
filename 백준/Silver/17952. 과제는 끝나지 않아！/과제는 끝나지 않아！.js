const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

let N;
let processedLines = 0;
let scores = 0;
const stack = [];

rl.on("line", (line) => {
    if (processedLines === 0) {
        N = parseInt(line);
    } else {
        const prompt = line.split(' ').map(Number);
        
        if (prompt[0] === 0) {
            if (stack.length) {
                stack[stack.length - 1][0]--;
                if (stack[stack.length - 1][0] === 0) {
                    scores += stack[stack.length - 1][1];
                    stack.pop();
                }
            }
        } else {
            if (prompt[2] === 1) scores += prompt[1];
            else stack.push([prompt[2] - 1, prompt[1]]);
        }
        
        // 처리 완료 후 즉시 메모리 해제
        prompt.length = 0;
        
        if (processedLines === N) {
            console.log(scores);
            rl.close();
        }
    }

    processedLines++;
});
