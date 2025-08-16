const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const DAY = {
    '0': 'Sunday',
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday',
    '6': 'Saturday'
}

const solution = (input) => {
    const [D, M] = input.split(' ');
    
    const month = M.length === 1 ? `0${M}` : M;
    const day = D.length === 1 ? `0${D}` : D;

    const date = new Date(`2009-${month}-${day}`).getDay();
    
    console.log(DAY[date]);
}

solution(input);