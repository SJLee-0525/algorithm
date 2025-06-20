const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

let cheapestPack = 1001;
let cheapestBulk = 1001;
for (let m = 1; m < M + 1; m++) {
    const [pack, bulk] = input[m].split(' ').map(Number);

    if (cheapestPack > pack) cheapestPack = pack;
    if (cheapestBulk > bulk) cheapestBulk = bulk;
}

console.log(Math.min(cheapestPack * Math.floor(N / 6) + cheapestBulk * (N % 6), cheapestPack * ((Math.floor(N / 6) + 1)), cheapestBulk * N));