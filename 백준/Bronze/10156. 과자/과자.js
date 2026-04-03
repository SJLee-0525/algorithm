const fs = require("fs");
const [K, N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const res = K * N - M;

if (res > 0) console.log(res);
else console.log(0);
