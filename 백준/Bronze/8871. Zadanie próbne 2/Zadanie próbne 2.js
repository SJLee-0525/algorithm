let fs = require("fs")
const [input] = fs.readFileSync("/dev/stdin").toString().trim().split().map(Number)

console.log(`${2 * (input + 1)} ${3 * (input + 1)}`)
