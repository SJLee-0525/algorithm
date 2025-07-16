const solution = (N) => {
    if (0 < N && N < 11) return N - 1;

    const smallArr = Array.from({ length: 10 }, (_, i) => comb(10, i + 1));

    const arr = Array(10).fill(0);
    for (i = 0; i < 10; i++) {
        if (i === 0) {
            arr[i] = smallArr[i];
            continue;
        }

        arr[i] = arr[i - 1] + smallArr[i];
    }

    let t = -1;
    for (let j = 0; j < 10; j++) {
        if (arr[j] >= N) {
            t = j + 1;
            break;
        }
    }

    if (t < 1) return -1;

    return perm(t, arr[t - 2], N);
}

const comb = (n, r) =>  {
    /*
    0~9 중 서로 다른 숫자 k개를 내림차순으로 나열한 경우의 수는:

    ∑(k = 1 to 10) C(10, k) = 2^10 - 1 = 1023
    */

    if (r > n) return 0;

    let res = 1;
    for (let i = 0; i < r; i++) {
        res *= n - i;
        res /= i + 1;
    }
    return res;
}

const perm = (T, initCnt, target) => {
    const path = [];

    let cnt = initCnt;
    let ret = null;

    const f = (lv, end = 10) => {
        if (cnt > target) return null;

        if (lv === T) {
            cnt++;
            if (cnt === target) {
                ret = Number(path.join(''));
            }
            return;
        }

        for (let i = 0; i < end; i++) {
            path.push(i);
            f(lv + 1, i);
            path.pop();
        }
    }

    f(0);

    return ret;
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(
    solution(Number(input) + 1)
);