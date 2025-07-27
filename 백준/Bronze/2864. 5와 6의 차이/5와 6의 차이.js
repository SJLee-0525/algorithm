const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(
    Number(A.replaceAll('6', '5')) + Number(B.replaceAll('6', '5')),
    Number(A.replaceAll('5', '6')) + Number(B.replaceAll('5', '6'))
)