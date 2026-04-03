let fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number)

const sum = input.reduce((prev, curr) => {
  return prev + curr
})

console.log(sum)
