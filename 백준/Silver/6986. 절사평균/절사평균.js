const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function toTenthsInt(s) {
  const [a, b = ""] = s.split('.');
  const d = b[0] ? b[0] : '0';

  return Number(a) * 10 + Number(d); // 0.1점 단위 정수
}

function formatHundredthsInt(h) {
  // 0.01점 단위 정수 -> "x.xx"
  return (h / 100).toFixed(2);
}

const solution = (lines) => {
  const [N, K] = lines[0].split(' ').map(Number);

  const scores = lines.slice(1, N + 1).map(n => toTenthsInt(n.trim())).sort((a, b) => a - b);

  // 절사평균
  const m = N - 2 * K;
  const sliceSum = scores.slice(K, N - K).reduce((a, c) => a += c, 0);
  const sliceAverage = Math.round((sliceSum * 10) / m);

  // 보정평균
  const left = scores[K];
  const right = scores[N - K - 1];
  const bojungSum = sliceSum + left * K + right * K; 

  const bojungAverage = Math.round((bojungSum * 10) / N);

  console.log(formatHundredthsInt(sliceAverage));
  console.log(formatHundredthsInt(bojungAverage));
};

solution(input);
