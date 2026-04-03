const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const word = 'WelcomeToSMUPC';

console.log(word[(N - 1) % 14]);