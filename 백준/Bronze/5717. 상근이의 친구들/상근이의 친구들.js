const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

input.slice(0, input.length - 1).forEach((elem) => {
    const [b, g] = elem.split(" ").map(Number);
    console.log(b + g);
})
