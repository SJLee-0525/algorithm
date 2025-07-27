const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const solution = (input) => {
    let res = null;

    const sum = input.reduce((a, c) => c += a, 0)

    switch (sum % 4) {
        case 0:
            res = 'N';
            break;

        case 1:
            res = 'E';
            break;
        
        case 2:
            res = 'S';
            break;

        case 3:
            res = 'W';
            break;

        default:
            throw(Error);
    }

    console.log(res);
}

solution(input);