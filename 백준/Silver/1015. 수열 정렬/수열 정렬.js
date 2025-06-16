const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const count = Array(1001).fill(0);

arr.forEach((elem) => {
    count[elem]++;
})

for (let c = 0; c < 1000; c++) {
    count[c + 1] += count[c];
}

const res = Array(N).fill(0);

for (let i = N - 1; i > -1; i--) {
    res[i] = --count[arr[i]]
}

console.log(res.join(' '))