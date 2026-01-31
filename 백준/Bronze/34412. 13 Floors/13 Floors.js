const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

if (N > 12) console.log(N + 1);
else console.log(N);
