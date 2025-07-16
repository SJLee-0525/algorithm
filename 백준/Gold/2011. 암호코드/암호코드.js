const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(Number);

const solution = (inputArr, N) => {
    const arr = Array(N).fill(0);
    arr[0] = 1;

    for (let i = 1; i < N; i++) {
        if (inputArr[i] === 0) {
            if (0 < inputArr[i - 1] && inputArr[i - 1] < 3) {
                arr[i] = arr[i - 2];
            } else {
                arr[i - 1] = 0;
                arr[i] = 0;
            }
        } else {
            if (inputArr[i - 1] === 1 || (inputArr[i - 1] === 2 && inputArr[i] < 7)) {
                arr[i] = arr[i - 1] + arr[i - 2];
            } else {
                arr[i] = arr[i - 1];
            }
        }

        arr[i] = arr[i] % 1000000;
    }

    console.log(arr[N - 1]);
}

solution([9, ...input], input.length + 1);