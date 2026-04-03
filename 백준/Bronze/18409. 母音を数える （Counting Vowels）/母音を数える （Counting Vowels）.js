let fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")
const arr = input[1].split("")

const result = arr.filter((char) => {
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return char
  }
})

console.log(result.length)
