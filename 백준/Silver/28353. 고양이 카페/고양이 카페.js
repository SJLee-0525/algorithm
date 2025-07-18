const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = ([N, K], arr) => {
    let happy = 0;
    let left = 0, right = N - 1;
    
    while (left < right) {
        if (arr[left] + arr[right] <= K) {
            happy++;
            left++;
        }

        right--;
    }

    console.log(happy);
}

solution(input[0].split(' ').map(Number), input[1].split(' ').map(Number).sort((a, b) => a - b));