const fs = require('fs');
const [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

if (A + B === C) console.log('correct!');
else console.log('wrong!');