let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number)

input.forEach((num) => {
  if (num !== 0) {
    let result = 0

    for (num; num > 0; num--) {
      result += num
    }

    console.log(result)
  } else {
    return
  }
})
