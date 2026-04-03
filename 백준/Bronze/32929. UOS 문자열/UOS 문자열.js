const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

console.log(['U', 'O', 'S'][(N - 1) % 3]);
