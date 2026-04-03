const fs = require("fs");
const [A, T] = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

const res = 10 + 2 * (25 - A + T);
if (res > 0) console.log(res);
else console.log(0);