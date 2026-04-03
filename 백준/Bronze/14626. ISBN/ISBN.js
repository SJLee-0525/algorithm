const fs = require('fs');
const ISBN = fs.readFileSync('dev/stdin').toString().trim().split('');

let sum = 0;
let index = null;

for (let i = 0; i < 13; i++) {
    if (ISBN[i] === '*') {
        index = i;
        continue;
    }

    if (i % 2 === 0) {
        sum += Number(ISBN[i]);
    } else {
        sum += Number(ISBN[i] * 3);
    }
}

let temp = (10 - sum % 10 === 10) ? 0 : 10 - sum % 10;

if (index % 2 === 0) {
    console.log(temp)
} else {
    while (temp % 3 !== 0) temp += 10;
    console.log(temp / 3)
}