let fs = require('fs')
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(`${A === B ? 1 : 0}`)