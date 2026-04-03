const fs = require('fs');
const [N, C, P] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(C * P < N ? 'no' : 'yes');
