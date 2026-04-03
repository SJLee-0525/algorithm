let fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("")

function isUpperCase(char) {
  return char === char.toUpperCase()
}

const output = input.map((char) => {
  if (isUpperCase(char)) {
    return char.toLowerCase()
  } else {
    return char.toUpperCase()
  }
})

console.log(output.join(""))
