let fs = require("fs")
const [I, J] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number)

for (let i = 0; i < I; i++) {
  let output = ""
  for (let j = 0; j < J; j++) {
    output += "*"
  }
  console.log(output)
}
