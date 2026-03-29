const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("").map(Number);

const solution = (input) => {
  if (input.length === 2) console.log(input.reduce((a, c) => (a += c), 0));
  else if (input.length === 3) {
    if (input[0] === 1 && input[1] === 0) console.log(10 + input[2]);
    else console.log(input[0] + 10);
  } else console.log(20);
};

solution(input);
