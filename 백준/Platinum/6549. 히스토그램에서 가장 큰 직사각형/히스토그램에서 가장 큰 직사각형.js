const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const solution = (tests) => {
  const cal = (stack, len, MAX) => {
    const [target, _] = stack.pop();
    let width = 0;

    if (stack.length === 0) width = len;
    else width = len - stack[stack.length - 1][1] - 1;

    MAX = Math.max(MAX, width * target);

    return [stack, MAX];
  };

  // console.log(tests);

  tests.forEach((test) => {
    const [N, ...blocks] = test;
    let stack = [];
    let MAX = 0;

    if (blocks.length !== 0) {
      blocks.forEach((block, idx) => {
        while (stack.length !== 0 && stack[stack.length - 1][0] > block) {
          [stack, MAX] = cal(stack, idx, MAX);
        }

        stack.push([block, idx]);
      });

      while (stack.length !== 0) {
        [stack, MAX] = cal(stack, N, MAX);
      }

      console.log(MAX);
    }
  });
};

solution(input);
