const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = ([_, ...arr]) => {
  const res = Array();

  for (let a = 0; a < arr.length; a++) {
    const [C, T] = arr[a].trim().split(" ");
    res.push(T.repeat(Number(C)));
  }

  console.log(res.join("\n"));
};

solution(input);
