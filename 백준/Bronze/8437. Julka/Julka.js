let fs = require("fs")
const [S, M] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(BigInt)

console.log(`${(S + M) / 2n}\n${(S - M) / 2n}`)
