const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0]);
    const arr = input[1].split(' ').map(Number);

    // dp[i]에서 끝나는 합이 가장 큰 증가 부분수열의 최대 합: 자기 자신으로 초기 값 설정
    const dp = [...arr];

    let bestSum = dp[0];

    // 모든 i에 대해, i 앞쪽 j들을 보며 arr[j] < arr[i]인 경우에만 갱신을 시도
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < i; j++) {
            // j에서 i로 연장했을 때의 합이 더 크면 갱신
            if (arr[j] < arr[i] && dp[j] + arr[i] > dp[i]) dp[i] = dp[j] + arr[i];
        }

        // i에서 끝나는 최대 합이 전체 결과보다 크면 갱신
        if (dp[i] > bestSum) bestSum = dp[i];
    }

    console.log(bestSum)
}

solution(input);