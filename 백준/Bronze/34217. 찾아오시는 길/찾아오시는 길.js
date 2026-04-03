const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    let hanyang = 0, yongdap = 0;

    input.forEach((line) => {
        const [h, y] = line.split(' ').map(Number);
        
        hanyang += h;
        yongdap += y;
    });

    if (hanyang < yongdap) console.log('Hanyang Univ.');
    else if (hanyang > yongdap) console.log('Yongdap');
    else console.log('Either');
};

solution(input);
