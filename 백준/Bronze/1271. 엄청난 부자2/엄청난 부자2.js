const fs = require("fs")
const [MONEY, ALIEN] = fs.readFileSync("/dev/stdin").toString().split(" ").map(BigInt)

console.log(`${MONEY / ALIEN} \n${MONEY % ALIEN}`)
