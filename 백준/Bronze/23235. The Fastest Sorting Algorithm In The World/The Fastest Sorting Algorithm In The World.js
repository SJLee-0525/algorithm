let fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

for (let i = 1; i < input.length; i++) {
  console.log(`Case ${i}: Sorting... done!`)
}
