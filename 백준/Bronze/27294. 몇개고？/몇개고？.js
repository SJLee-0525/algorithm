let fs = require("fs");
const [T, S] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (S === 0 && 12 <= T && T <= 16) {
  console.log("320");
} else {
  console.log("280");
}
