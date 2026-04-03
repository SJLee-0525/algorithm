const fs = require("fs");
const N = Number(fs.readFileSync("dev/stdin").toString().trim());

if (N > 5) console.log("Success!");
else console.log("Oh My God!");