let fs = require("fs")

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

for (let n = 0; n < input.length; n++) {
  let [N, S] = input[n].trim().split(" ").map(Number)
  
  console.log(Math.floor(S / (N + 1)))
}
