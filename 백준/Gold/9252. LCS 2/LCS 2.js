const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().replaceAll('\r', '').split('\n')

const str1 = input[0]
const str2 = input[1]

const DP = Array.from({length: str2.length + 1}, () => Array(str1.length + 1).fill(0))

for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
        if (str1[j - 1] === str2[i - 1]) {
            DP[i][j] = DP[i - 1][j - 1] + 1
        } else {
            DP[i][j] = Math.max(DP[i][j - 1], DP[i - 1][j])
        }
    }
}

console.log(DP[str2.length][str1.length])

if (DP[str2.length][str1.length] > 0) {
    let i = str2.length
    let j = str1.length
    let lcs = ""
    
    while (i > 0 && j > 0) {
        if (str1[j - 1] === str2[i - 1]) {
            lcs = str1[j - 1] + lcs
            i--
            j--
        } else if (DP[i - 1][j] > DP[i][j - 1]) {
            i--
        } else {
            j--
        }
    }

    console.log(lcs)
}