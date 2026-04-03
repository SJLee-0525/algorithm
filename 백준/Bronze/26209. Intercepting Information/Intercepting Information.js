let fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const res = input.some((bit) => {
  return bit === 9;
});

if (res) {
  console.log("F");
} else {
  console.log("S");
}
