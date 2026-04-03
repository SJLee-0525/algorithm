let fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let result = "";
for (let i = 0; i < Math.floor(input / 5); i++) {
  result += "V";
}

for (let i = 0; i < input % 5; i++) {
  result += "I";
}

console.log(result);
