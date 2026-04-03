const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

switch (input[0]) {
    case 'F':
        console.log('Foundation');
        break;
    
    case 'C':
        console.log('Claves');
        break;
        
    case 'V':
        console.log('Veritas');
        break;
        
    case 'E':
        console.log('Exploration');
        break;
}