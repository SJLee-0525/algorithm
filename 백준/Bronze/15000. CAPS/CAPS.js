let fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

console.log(input.toUpperCase())