const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (N, fruits) => {
    const used = Array(10).fill(0);
    let usedCount = 0;

    let maxLength = 0;

    let left = 0; right = 0;
    while (right < N) {
        used[fruits[right]]++;
        if (used[fruits[right]] === 1) usedCount++;

        while (usedCount > 2) {
            used[fruits[left]]--;
            if (used[fruits[left]] === 0) usedCount--;

            left++;
        }

        const curLength = right - left + 1;
        if (maxLength < curLength) maxLength = curLength;

        right++;
    }

    console.log(maxLength);
}

solution(Number(input[0]), input[1].split(' ').map(Number));