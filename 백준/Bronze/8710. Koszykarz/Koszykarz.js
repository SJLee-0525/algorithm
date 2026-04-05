const fs = require("fs");
const [c, t, x] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(Math.ceil((t - c) / x));
