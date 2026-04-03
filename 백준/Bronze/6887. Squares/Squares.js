const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(`The largest square has side length ${Math.floor(Math.sqrt(N))}.`);
