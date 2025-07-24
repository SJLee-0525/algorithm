const solution = (input) => {
    const N = Number(input[0]);

    const count = [0, 0, 0];
    for (let n = 1; n <= N; n++) {
        const p = input[n];

        if (p === '1/4') count[0]++;
        else if (p === '1/2') count[1]++;
        else count[2]++; 
    }

    let pizza = 0;

    pizza += count[2];
    count[0] = Math.max(0, count[0] - count[2]);

    pizza += Math.floor(count[1] / 2)
    count[1] %= 2;

    if (count[1] > 0) {
        count[1]--;
        if (count[0] > 1) count[0] -= 2
        else count[0] = 0;

        pizza++;
    }

    pizza += Math.floor((count[0] + 3) / 4);

    console.log(pizza);
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);