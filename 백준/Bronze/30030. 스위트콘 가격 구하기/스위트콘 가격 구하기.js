const fs = require('fs');
console.log( Number(fs.readFileSync('/dev/stdin').toString().trim()) / 11 * 10 );