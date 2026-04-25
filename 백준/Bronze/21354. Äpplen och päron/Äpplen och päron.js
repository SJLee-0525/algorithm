const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const solution = ([A, B]) => {
  const apple = A * 7,
    pear = B * 13;
  if (apple > pear) console.log("Axel");
  else if (apple < pear) console.log("Petra");
  else console.log("lika");
};

solution(input);
