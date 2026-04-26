const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const [N, M, L] = input[0].split(" ").map(Number);

  let stations = Array();
  if (N > 0) stations = input[1].split(" ").map(Number);

  // 시작점(0)과 끝점(L)을 추가하고 정렬
  stations.push(0, L);
  stations.sort((a, b) => a - b);

  let start = 1,
    end = L - 1,
    result = L;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = 0;

    // 각 구간마다 mid 간격으로 몇 개의 휴게소를 세울 수 있는지 계산
    for (let i = 1; i < stations.length; i++) {
      let dist = stations[i] - stations[i - 1];

      // dist / mid가 딱 나누어 떨어지는 경우, 마지막 지점은 기존 휴게소 위치와 겹치므로 하나를 빼줌
      if (dist > mid) count += Math.floor((dist - 1) / mid);
    }

    // 설치된 휴게소 수에 따라 범위 조절
    if (count > M) start = mid + 1;
    else {
      result = mid;
      end = mid - 1;
    }
  }

  console.log(result);
};

solution(input);
