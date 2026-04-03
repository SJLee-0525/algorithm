let fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim()

for (let i = 0; i < 3; i++) {
  let output = ""
  for (let j = 0; j < 3; j++) {
    if (i == 1 && j == 1) {
      output += ":" + input + ":"
    } else {
      output += `:fan:`
    }
  }
  console.log(output)
}
