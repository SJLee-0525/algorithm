const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const arr = input.split('').map(Number);

    if (arr.length === 1) return input;

    let res = BigInt(arr.length) * (BigInt(arr.slice(1, arr.length).join('')) + 1n);
    if (arr[0] > 1) res += (BigInt(arr.length) * (10n ** BigInt(arr.length - 1))) * (BigInt(arr[0]) - 1n);

    let std = 9n;
    for (let a = 0; a < arr.length - 1; a++) {
        res += std * (BigInt(a) + 1n);
        std *= 10n;
    }

    return res.toString();
}

console.log(
    solution(input)
);