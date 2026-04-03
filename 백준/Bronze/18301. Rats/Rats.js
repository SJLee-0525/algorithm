let fs = require("fs")
const [L1, L2, L12] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)
console.log(`${Math.floor(((L1 + 1) * (L2 + 1)) / (L12 + 1) - 1)}`)
