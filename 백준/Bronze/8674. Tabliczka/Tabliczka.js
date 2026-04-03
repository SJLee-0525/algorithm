const fs = require("fs");
const [X, Y] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

if (X % 2 === 0 || Y % 2 === 0) console.log(0);
else console.log(Math.min(X, Y));
