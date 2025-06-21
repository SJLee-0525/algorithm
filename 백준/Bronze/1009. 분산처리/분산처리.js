const fastPow = (a ,b) => {
    let ret = 1;

    // 지수가 0이 될 때까지 반복
    while (b > 0) {
        // 현재 지수가 홀수일 경우 결과 값에 a를 곱함
        if (b % 2 !== 0) ret = (ret * a) % 10;

        a = (a * a) % 10;       // 밑을 제곱하고 모듈로 10
        b = Math.floor(b / 2);  // 지수를 절반으로 줄임
    }

    return ret
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

const res = [];

for (let n = 1; n < N + 1; n++) {
    const [a, b] = input[n].split(' ').map(Number);
    
    const ans = fastPow(a, b);
    res.push(ans === 0 ? 10 : ans);
}

console.log(res.join('\n'));