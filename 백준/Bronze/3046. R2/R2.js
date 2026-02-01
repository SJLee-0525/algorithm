const fs = require("fs");
const [R1, S] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(S * 2 - R1);
