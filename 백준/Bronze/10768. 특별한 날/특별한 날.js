const fs = require("fs");
const [M, D] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const before = "Before";
const after = "After";
const special = "Special";

if (M < 2) console.log(before);
else if (M > 2) console.log(after);
else {
  if (D < 18) console.log(before);
  else if (D > 18) console.log(after);
  else console.log(special);
}
