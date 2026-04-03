const fs = require('fs')
const N = Number(fs.readFileSync('/dev/stdin').toString().trim())

for (let n = N; n > 0; n--) {
    console.log(n)
}