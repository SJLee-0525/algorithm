const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());

    const arr = input[1].trim().split(' ').map(Number);
    arr.sort((a, b) => a - b)

    const newArr = arr.map(BigInt)
    const sumArr = [...newArr];
    for (let s = 0; s < N - 1; s++) sumArr[s + 1] += sumArr[s];

    let std = BigInt(N - 1);
    let res = 0n;
    for (let i = 0; i < N - 1; i++) {
        res += (sumArr[N - 1] - sumArr[i]) - (newArr[i] * std--);
    }

    console.log((res * 2n).toString())
}

solution(input);