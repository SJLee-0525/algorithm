const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, S] = input[0].split(' ').map(Number);
    const arr = input[1].split(' ').map(Number);

    console.log( perm(arr, N, S) );
}

const perm = (arr, N, S) => {
    let cnt = 0;

    const f = (lv, sum) => {
        if (lv >= N) {
            if (sum === S) cnt++;
            return;
        }

        for (let n = lv; n < N; n++) f(n + 1, sum + arr[n]);

        if (lv > 0) f(N, sum);
    }

    f(0, 0);
    return cnt;
}

solution(input);