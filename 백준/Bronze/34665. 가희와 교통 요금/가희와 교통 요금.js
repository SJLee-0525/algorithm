const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((e) => e.trim());

if (A === B) console.log(0);
else console.log(1550);