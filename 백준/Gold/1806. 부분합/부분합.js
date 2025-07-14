const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, S] = input[0].split(' ').map(Number);
    const arr = input[1].split(' ').map(Number);

    const sumArr = Array(N + 1).fill(0);
    for (let i = 0; i < N; i++) sumArr[i + 1] = sumArr[i] + arr[i];
    
    let left = 0; right = 1;
    let minLength = N + 1;
    while (left < right) {
        const temp = sumArr[right] - sumArr[left];
        if (temp >= S) {
            const tempLength = right - left;
            if (minLength > tempLength) minLength = tempLength;
        }

        if (temp < S && right < N) {
            right++;
        } else {
            left++;
        }
    }

    console.log(minLength === N + 1 ? 0 : minLength);
}

solution(input);