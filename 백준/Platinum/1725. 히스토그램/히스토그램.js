const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split("\n").map(Number)[0]);

const solution = ([N, ...blocks]) => {
  const cal = (stack, len, MAX) => {
    const [target, _] = stack.pop();
    let width = 0;

    if (stack.length === 0) width = len;
    else width = len - stack[stack.length - 1][1] - 1;

    MAX = Math.max(MAX, width * target);

    return [stack, MAX];
  };

  let stack = [];
  let MAX = 0;

  blocks.forEach((block, idx) => {
    while (stack.length !== 0 && stack[stack.length - 1][0] > block) {
      [stack, MAX] = cal(stack, idx, MAX);
    }

    stack.push([block, idx]);
  });

  while (stack.length !== 0) {
    [stack, MAX] = cal(stack, N, MAX);
  }

  return MAX;
};

console.log(solution(input));
