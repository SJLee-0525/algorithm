const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const N = Number(input[0].trim());
  const arr = input.slice(1, N + 1).map((e) => e.trim().split(' ').map(Number)); // [D, V]

  for (let i = 1; i < N; i++) {
    arr[i][0] += arr[i - 1][0];
    arr[i][1] += arr[i - 1][1]; 
  }

  let res = arr[0][1]; 
  
  for (let k = 1; k < N; k++) {
    const v = arr[k][1];                // 다운로드하는데 걸린 시간
    const dPrev = arr[k - 1][0];        // 이전 곡까지의 재생 누계
    
    if (v - dPrev > res) res = v - dPrev;
  }

  console.log(res);
};

solution(input)