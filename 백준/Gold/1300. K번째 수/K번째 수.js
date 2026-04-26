const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

let min = 1,
  max = K,
  answer = N * N;

while (min <= max) {
  let mid = Math.floor((min + max) / 2),
    cnt = 0;

  for (let i = 1; i <= N; i++) cnt += Math.min(Math.floor(mid / i), N);

  if (cnt < K) min = mid + 1;
  else {
    if (answer > mid) answer = mid;
    max = mid - 1;
  }
}

console.log(answer);
