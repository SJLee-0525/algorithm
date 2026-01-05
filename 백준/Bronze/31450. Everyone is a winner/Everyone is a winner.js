const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

if (N % M === 0) console.log('Yes');
else console.log('No');