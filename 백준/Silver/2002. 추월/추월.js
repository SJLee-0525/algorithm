const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0]);

    const IN = input.slice(1, N + 1).map((car) => car.trim());
    const OUT = input.slice(N + 1, N * 2 + 1).map((car) => car.trim());
    
    const SEQ = Array(N);
    
    OUT.forEach((outCar, i) => {
        SEQ[IN.findIndex((inCar) => inCar === outCar)] = i;
    })

    let cnt = 1, cur = SEQ[0];

    for (let n = 1; n < N; n++) {
        if (SEQ[n] > cur) {
            cnt++;
            cur = SEQ[n];
        }
    }

    console.log(N - cnt);
}

solution(input);