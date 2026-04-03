const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (input) => {
    if (620 <= input && input <= 780) console.log('Red');
    else if (590 <= input && input < 620) console.log('Orange');
    else if (570 <= input && input < 590) console.log('Yellow');
    else if (495 <= input && input < 570) console.log('Green');
    else if (450 <= input && input < 495) console.log('Blue');
    else if (425 <= input && input < 450) console.log('Indigo');
    else if (380 <= input && input < 425) console.log('Violet');
};

solution(input);
