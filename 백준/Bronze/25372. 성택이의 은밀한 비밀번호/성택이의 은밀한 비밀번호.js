let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  if (6 <= input[i].length && input[i].length < 10) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
