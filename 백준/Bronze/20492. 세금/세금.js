let fs = require("fs")
const input = Number(fs.readFileSync("/dev/stdin").toString().trim())

console.log(`${input * 0.78} ${input * 0.956}`)
