const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const [N, K] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);

  const q1 = Array(), q2 = Array();

  // 학년별 인덱스 저장
  for (let i = 0; i < N; i++) {
    if (arr[i] === 1) q1.push(i);
    else q2.push(i);
  };

  let time = 0;
  let i1 = 0, i2 = 0, removed = 0;

  while (i1 < q1.length || i2 < q2.length) {
    time++;

    const front1 = i1 < q1.length ? q1[i1] - removed : Infinity;
    const front2 = i2 < q2.length ? q2[i2] - removed : Infinity;

    let remove1 = false, remove2 = false;

    if (front1 < K) remove1 = true;
    if (front2 < K) remove2 = true;

    if (remove1 && remove2) {
      i1++;
      i2++;
      removed += 2;
    } else if (remove1) {
      i1++;
      removed++;
    } else if (remove2) {
      i2++;
      removed++;
    }
  };

  console.log(time);
};

solution(input);