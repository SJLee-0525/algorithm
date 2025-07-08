const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    const arr = [0, ...Array(9).fill(1)];

    for (let _ = 0; _ < N - 1; _++) {
        let temp = Array(10).fill(0);

        for (let i = 0; i < 10; i++) {
            if (i === 0) {
                temp[i + 1] += arr[i];
            } else if (i === 9) {
                temp[i - 1] += arr[i];
            } else {
                temp[i + 1] += arr[i];
                temp[i - 1] += arr[i];
            }
        }

        for (let j = 0; j < 10; j++) {
            arr[j] = temp[j] % 1000000000;
        }
    }

    console.log(arr.reduce((a, c) => (a + c) % 1000000000, 0));
}

solution(N);
