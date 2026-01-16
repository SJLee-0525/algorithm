const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

if (N > 10000) console.log('Time limit exceeded');
else console.log('Accepted');