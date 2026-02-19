const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const solution = (N) => {
  const res = Array();

  for (let n = 1; n <= N; n++) {
    res.push(n);
    if (n % 6 === 0) res.push("Go!");
  }

  if (res[res.length - 1] !== "Go!") res.push("Go!");

  console.log(res.join(" "));
};

solution(N);
