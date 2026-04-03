let fs = require("fs")
const [ME, DOCTOR] = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

if (ME.length < DOCTOR.length) {
  console.log("no")
} else {
  console.log("go")
}
