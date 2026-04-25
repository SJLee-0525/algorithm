const fs = require("fs");
const [x, y] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

if (y < x) {
  console.log(x + y);
} else {
  console.log(y - x);
}