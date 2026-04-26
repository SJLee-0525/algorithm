const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const positions = input[1].split(" ").map(Number);

  const pos = [],
    neg = [];

  for (let i = 0; i < N; i++) {
    if (positions[i] > 0) pos.push(positions[i]);
    else neg.push(Math.abs(positions[i]));
  }

  // 양수, 음수 모두 내림차순 정렬
  pos.sort((a, b) => b - a);
  neg.sort((a, b) => b - a);

  const distances = [];
  for (let i = 0; i < pos.length; i += M) distances.push(pos[i]);
  for (let i = 0; i < neg.length; i += M) distances.push(neg[i]);

  let result = 0,
    maxDist = 0;

  for (let dist of distances) {
    result += dist * 2;
    if (dist > maxDist) maxDist = dist;
  }

  console.log(result - maxDist);
};

solution(input);
