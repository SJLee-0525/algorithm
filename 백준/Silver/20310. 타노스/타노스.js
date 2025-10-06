const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

const solution = (input) => {
  const zeroCnt = input.reduce((acc, cur) => (cur === '0' ? acc + 1 : acc), 0);
  const oneCnt = input.length - zeroCnt;

  let delZero = Math.floor(zeroCnt / 2);
  let delOne = Math.floor(oneCnt / 2);

  // 지울 자리 표시
  const del = Array(input.length).fill(false);

  // 1은 왼쪽부터
  for (let i = 0; i < input.length && delOne > 0; i++) {
    if (input[i] === '1') {
      del[i] = true;
      delOne--;
    };
  };

  // 0은 오른쪽부터
  for (let i = input.length - 1; i >= 0 && delZero > 0; i--) {
    if (input[i] === '0' && !del[i]) {
      del[i] = true;
      delZero--;
    };
  };

  let res = '';
  for (let i = 0; i < input.length; i++) {
    if (!del[i]) res += input[i];
  };

  console.log(res);
};

solution(input);
