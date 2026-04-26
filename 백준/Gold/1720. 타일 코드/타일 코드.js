const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const solution = () => {
  if (N === 1) {
    console.log(1);
    return;
  } else if (N === 2) {
    console.log(3);
    return;
  }

  const dp = new Array(N + 1).fill(0);
  ((dp[0] = 1), (dp[1] = 1), (dp[2] = 3));

  // 전체 경우의 수
  for (let i = 3; i <= N; i++) dp[i] = dp[i - 1] + dp[i - 2] * 2;

  let sym = 0;
  if (N % 2 === 1) {
    // 홀수일 때: 중앙에 2x1 하나 박고 양옆이 대칭
    // 예: N=3 -> dp[(3-1)/2] = dp[1]
    sym = dp[Math.floor((N - 1) / 2)];
  } else {
    // 짝수일 때:
    // 1. 중앙을 가르는 선 기준으로 양옆 대칭: dp[N/2]
    // 2. 중앙에 2x2 하나가 걸쳐 있고 양옆 대칭: dp[N/2 - 1]
    // 3. 중앙에 1x2 두 개가 걸쳐 있고 양옆 대칭: dp[N/2 - 1]
    sym = dp[N / 2] + dp[N / 2 - 1] * 2;
  }

  console.log((dp[N] + sym) / 2);
};

solution();
