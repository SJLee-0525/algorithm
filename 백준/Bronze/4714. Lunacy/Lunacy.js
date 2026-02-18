const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const solution = (input) => {
  const res = Array();

  for (let i = 0; i < input.length - 1; i++) {
    res.push(
      `Objects weighing ${input[i].toFixed(2)} on Earth will weigh ${(Math.round(input[i] * 0.167 * 100) / 100).toFixed(2)} on the moon.`,
    );
  }

  console.log(res.join("\n"));
};

solution(input);
