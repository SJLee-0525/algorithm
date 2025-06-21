const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const str = input[1].split('');

let left = 0, right = N - 1;

while (left <= right) {
    if (str[left] === '?' && str[right] === '?') {
        str[left] = 'a';
        str[right] = 'a';
    } else if (str[left] === '?') {
        str[left] = str[right];
    } else if (str[right] === '?') {
        str[right] = str[left];
    }

    left++;
    right--;
}

console.log(str.join(''))