let fs = require("fs")
const input = Number(fs.readFileSync("/dev/stdin").toString().trim())

if (input % 5 === 0) {
  console.log(input / 5)
} else {
  console.log(Math.floor(input / 5) + 1)
}
