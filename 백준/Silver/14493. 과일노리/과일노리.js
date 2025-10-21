const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());
    let curTime = 0;

    for (let n = 1; n <= N; n++) {
        const [A, B] = input[n].trim().split(' ').map(Number);

        const temp = curTime % (A + B);
        
        if (temp < B) curTime += B - temp + 1;
        else curTime++;
    };

    console.log(curTime);
};

solution(input);