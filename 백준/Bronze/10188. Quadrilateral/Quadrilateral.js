const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = ([N, ...arr]) => {
  const res = Array();
  N = Number(N.trim());

  for (let n = 0; n < N; n++) {
    const [i, j] = arr[n].trim().split(" ").map(Number);
    let temp = Array();

    for (let k = 0; k < j; k++) temp.push("X".repeat(i));

    res.push(temp.join("\n"));
  }

  console.log(res.join("\n\n"));
};

solution(input);
