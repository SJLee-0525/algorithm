let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()

input = BigInt(input)
console.log(`${input % 20000303n}`)