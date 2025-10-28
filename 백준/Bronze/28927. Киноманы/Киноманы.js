const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const time = [3, 20, 120];

    const MAX = input[0].trim().split(' ').map(Number).reduce((a, c, i) => a + c * time[i], 0);
    const MEL = input[1].trim().split(' ').map(Number).reduce((a, c, i) => a + c * time[i], 0);

    if (MAX > MEL) console.log('Max');
    else if (MAX < MEL) console.log('Mel');
    else console.log('Draw');
};

solution(input);