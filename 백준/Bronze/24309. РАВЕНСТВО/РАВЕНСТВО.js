let fs = require("fs")
const [A, B, C] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(BigInt)

console.log(`${(B - C) / A}`)
