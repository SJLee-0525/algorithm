let fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)

const result = input.reduce((prev, curr) => {
  return prev + curr * 5
}, 0)

console.log(result)
