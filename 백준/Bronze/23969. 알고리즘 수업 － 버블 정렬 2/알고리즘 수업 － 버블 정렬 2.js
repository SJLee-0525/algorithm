const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, K] = input[0].trim().split(' ').map(Number);
    const arr = input[1].trim().split(' ').map(Number);

    let changeCnt = 0;
    let res = '-1';

    for (let l = N - 1; l > 0; l--) {
        for (let i = 0; i < l; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                changeCnt++;

                if (changeCnt === K) {
                    res = arr.join(' ');
                    break;
                };
            };
        };
    };

    console.log(res);
};

solution(input);