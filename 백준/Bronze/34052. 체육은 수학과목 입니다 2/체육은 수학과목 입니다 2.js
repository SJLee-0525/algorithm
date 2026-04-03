const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const sum = input.reduce((a, b) => a + b, 0);

if (sum <= 1500) console.log("Yes");
else console.log("No");