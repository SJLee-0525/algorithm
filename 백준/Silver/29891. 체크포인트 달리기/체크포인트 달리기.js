const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const [N, K] = input[0].split(' ').map(Number);

  const leftSide = [];
  const rightSide = [];

  for (let i = 1; i <= N; i++) {
    const x = Number(input[i]);

    if (x < 0) leftSide.push(-x);      
    else if (x > 0) rightSide.push(x); 
  }

  leftSide.sort((a, b) => a - b);
  rightSide.sort((a, b) => a - b);

  const calDist = (course, K) => {
    let ret = 0n;

    for (let i = course.length - 1; i >= 0; i -= K) {
      ret += BigInt(course[i]);
    }

    return ret;
  };

  let res = 0n;

  if (leftSide.length) res += calDist(leftSide, K);
  if (rightSide.length) res += calDist(rightSide, K);

  console.log( (res * 2n).toString() );
};

solution(input);
