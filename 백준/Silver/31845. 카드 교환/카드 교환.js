const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);
    const arr = input[1].split(' ').map(Number);

    arr.sort((a, b) => b - a);

    let res = 0;
    let me = 0, you = arr.length - 1;
    let hasEmpty = false;

    for (let m = 0; m < M; m++) {
        if (arr[me] > 0) {
            res += arr[me];
            me++
        } else hasEmpty = true;

        if (hasEmpty) break;
        else {
            if (me >= you) break;
            you--;
            hasEmpty = false;
        }
    }

    console.log(res);
}

solution(input);