const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(`${N}\n1`);
