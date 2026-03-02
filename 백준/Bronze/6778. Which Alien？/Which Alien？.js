const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const antenna = Number(input[0]);
const eyes = Number(input[1]);

let res = [];

if (antenna >= 3 && eyes <= 4) {
  res.push("TroyMartian");
}

if (antenna <= 6 && eyes >= 2) {
  res.push("VladSaturnian");
}

if (antenna <= 2 && eyes <= 3) {
  res.push("GraemeMercurian");
}

console.log(res.join("\n"));
