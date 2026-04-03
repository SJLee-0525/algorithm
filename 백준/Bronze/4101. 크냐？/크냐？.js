let fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

for (let i = 0; i < input.length; i++) {
  let [A, B] = input[i].split(" ").map(Number)

  if (A === 0 && B === 0) {
    break
  } else if (A > B) {
    console.log("Yes")
  } else {
    console.log("No")
  }
}
