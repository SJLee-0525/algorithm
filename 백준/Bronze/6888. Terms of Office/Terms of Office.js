const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const solution = ([X, Y]) => {
  const res = Array();

  for (let c = X; c <= Y; c += 60) {
    res.push(c);
  }

  console.log(res.map((e) => `All positions change in year ${e}`).join("\n"));
};

solution(input);
