const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

switch (input) {
    case 'SONGDO':
        console.log('HIGHSCHOOL');
        break;

    case 'CODE':
        console.log('MASTER');
        break;

    case '2023':
        console.log('0611');
        break;

    default:
        console.log('CONTEST');
        break;
}

