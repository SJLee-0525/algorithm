const fs = require("fs");
const [weight, height] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const bmi = weight / (height * height);

if (bmi > 25) console.log("Overweight");
else if (bmi < 18.5) console.log("Underweight");
else console.log("Normal weight");
