const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const solution = (N) => {
  let start = 1;
  let end = N;
  let weight = 1;
  let counts = new Array(10).fill(0);

  const calc = (num, w, counts) => {
    while (num > 0) {
      counts[num % 10] += w;
      num = Math.floor(num / 10);
    }
  };

  while (start <= end) {
    // 1. end의 끝자리를 9로 맞춤 (감소시키며 보정)
    // start <= end 조건을 반드시 넣어주어야 무한 루프를 방지합니다.
    while (end % 10 !== 9 && start <= end) {
      calc(end, weight, counts);
      end--;
    }

    if (end < start) break; // 보정 후 역전되면 종료

    // 2. start의 끝자리를 0으로 맞춤 (증가시키며 보정)
    while (start % 10 !== 0 && start <= end) {
      calc(start, weight, counts);
      start++;
    }

    if (start > end) break; // 보정 후 역전되면 종료

    // 3. 자릿수 전체 카운팅
    let diff = Math.floor(end / 10) - Math.floor(start / 10) + 1;
    for (let i = 0; i < 10; i++) {
      counts[i] += diff * weight;
    }

    // 다음 자릿수로 이동
    start = Math.floor(start / 10);
    end = Math.floor(end / 10);
    weight *= 10;
  }

  console.log(counts.join(" "));
};

solution(N);
