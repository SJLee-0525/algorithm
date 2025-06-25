const solution = (input) => {
    const N = input[0];
    const cows = input.slice(1, N + 1);
    
    if (N === 1) return 0;
    
    const notOne = Array(N + 1).fill(0);
    const notTwo = Array(N + 1).fill(0);

    // notOne[i]는 0~i-1까지에서 1이 아닌 소의 개수
    for (let i = 1; i < N + 1; i++) notOne[i] = notOne[i - 1] + (cows[i - 1] !== 1 ? 1 : 0);

    // notTwo[i]는 뒤에서부터 i~N-1까지에서 2가 아닌 소의 개수
    for (let i = N - 1; i > -1; i--) notTwo[i] = notTwo[i + 1] + (cows[i] !== 2 ? 1 : 0);

    let res = N;
    for (let pivot = 0; pivot < N + 1; pivot++) {
        const temp = notOne[pivot] + notTwo[pivot];

        if (res > temp) res = temp;
    }
    
    return res
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

console.log(
    solution(input)
);