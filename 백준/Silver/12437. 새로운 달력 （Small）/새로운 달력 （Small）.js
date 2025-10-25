const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const T = Number(input[0]);
  const res = [];

  for (let t = 1; t <= T; t++) {
    let [M, D, W] = input[t].split(' ').map(Number);
    const offset = D % W;

    let weeks = 0;
    let start = 0;

    for (let month = 0; month < M; month++) {
      weeks += Math.ceil((start + D) / W);
      start = (start + offset) % W;
    };

    res.push(`Case #${t}: ${weeks}`);
  };

  console.log(res.join('\n'));
};

solution(input);
