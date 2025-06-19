const fs = require('fs');
const [N, L] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

let flag = false;

// 수열의 길이 i를 L부터 100까지 시도
for (let i = L; i < 101; i++) {
    // 0부터 i-1까지의 합 (등차수열 공차 1)
    // N = x*i + (i*(i-1))/2 
    const numerator = N - (i * (i - 1)) / 2; 

    // x가 음수면 자연수가 될 수 없으므로 중단
    if (numerator < 0) break;   

    // x가 정수인지 확인
    if (numerator % i === 0) {
        const x = numerator / i; // 수열의 첫 수
        console.log(Array.from({ length: i }, (_, idx) => x + idx).join(' '));
        flag = true;
        break;
    }
}

if (!flag) console.log(-1);