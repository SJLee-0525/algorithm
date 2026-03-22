const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const res = Array();

  for (let i = 0; i < input.length - 1; i++) {
    const [N, ...arr] = input[i].split(" ").map(Number);

    if (N % 2 === 0) res.push(`Case ${i + 1}: ${((arr[N / 2 - 1] + arr[N / 2]) / 2).toFixed(1)}`);
    else res.push(`Case ${i + 1}: ${arr[Math.floor(N / 2)].toFixed(1)}`);
  }

  console.log(res.join("\n"));
};

solution(input);
