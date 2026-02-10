const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (arr) => {
  const res = Array();

  arr.forEach((l, i) => {
    res.push(`${i + 1}. ${l}`);
  });

  console.log(res.join("\n"));
};

solution(input.slice(1, input.length));
