const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, K] = input[0].trim().split(' ').map(Number);
    const arr = input[1].trim().split(' ').map(Number);

    let changeCnt = 0;

    for (let t = N - 1; t > 0; t--) {
        let biggestIdx = null, biggestVal = -1;

        for (let c = 0; c < t; c++) {
            if (arr[c] > biggestVal) {
                biggestVal = arr[c];
                biggestIdx = c;
            };
        };

        if (biggestIdx !== null && biggestVal > arr[t]) {
            [arr[t], arr[biggestIdx]] = [arr[biggestIdx], arr[t]];
            changeCnt++;

            if (changeCnt === K) break;
        };
    };

    if (changeCnt < K) console.log('-1');
    else console.log(arr.join(' '));
};

solution(input);