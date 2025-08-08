const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const N = Number(input[0]);
  const arr = input[1].trim().split(' ').map(Number); // indices 0..N
  const x = Number(input[2]);

  //  1 의 개수
  let ones = 0;
  for (let i = 0; i <= N; i++) if (arr[i] === 1) ones++;

  const limit = N - x; // s in [0 .. N-x], e = s+x <= N
  for (let s = 0; s <= limit; s++) {
    if (arr[s] === 0) continue;  // 말이 있어야 이동
    const e = s + x;

    let delta = 0;

    // s 칸에서 -1
    const a = arr[s];
    if (a === 1) delta -= 1;       // 1 -> 0
    else if (a === 2) delta += 1;  // 2 -> 1

    // e 칸에서 +1
    const b = arr[e];
    if (b === 0) delta += 1;       // 0 -> 1
    else if (b === 1) delta -= 1;  // 1 -> 2

    if (ones + delta === 0) {
      console.log(`YES\n${s} ${e}`);
      return;
    }
  }

  console.log('NO');
};

solution(input);