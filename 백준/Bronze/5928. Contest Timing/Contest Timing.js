const fs = require("fs");
const [D, H, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const DAY = 24 * 60;

const start = 11 * DAY + 11 * 60 + 11;
const end = D * DAY + H * 60 + M;

const diff = end - start;

console.log(diff >= 0 ? diff : -1);
