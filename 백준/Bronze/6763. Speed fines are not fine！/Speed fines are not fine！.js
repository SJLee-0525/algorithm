const fs = require("fs");
const [LIMIT, SPEED] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

if (LIMIT >= SPEED) console.log("Congratulations, you are within the speed limit!");
else {
  const DIFF = SPEED - LIMIT;
  let price;

  if (DIFF <= 20) price = 100;
  else if (21 <= DIFF && DIFF <= 30) price = 270;
  else price = 500;

  console.log(`You are speeding and your fine is $${price}.`);
}
