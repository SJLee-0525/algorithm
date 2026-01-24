const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const A = Number(input[0].trim());
const [W, B] = input[1].trim().split(' ').map(Number);

if (A <= W / B) console.log(1);
else console.log(0);