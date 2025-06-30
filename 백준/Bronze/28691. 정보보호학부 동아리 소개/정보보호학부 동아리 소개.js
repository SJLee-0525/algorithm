const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const DATA = {
    'M': "MatKor",
    'W': 'WiCys',
    'C': 'CyKor',
    'A': 'AlKor',
    '$': '$clear',
}

console.log(DATA[input])