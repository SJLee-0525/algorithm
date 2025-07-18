const solution = (input) => {
    const [N, K] = input[0].split(' ').map(Number);
    const arr = input[1].split(' ').map(Number);

    let maxEvenLength = 0;
    let curOddCount = 0, curEvenCount = 0;
    let left = 0, right = 0;

    while (right < N) {
        if (arr[right] % 2 === 0) curEvenCount++;
        else curOddCount++;
        
        if (curOddCount > K) {
            if (arr[left] % 2 === 0) curEvenCount--;
            else curOddCount--;

            left++;
        }

        if (maxEvenLength < curEvenCount) maxEvenLength = curEvenCount;
        right++;
    }

    return maxEvenLength;
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(
    solution(input)
);