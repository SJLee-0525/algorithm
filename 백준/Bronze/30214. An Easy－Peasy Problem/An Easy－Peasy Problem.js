const fs = require('fs');
const [S1, S2] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

if (S1 / S2 >= 0.5) console.log('E');
else console.log('H');