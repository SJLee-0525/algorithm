function bisectLeft(arr, x) {
    let left = 0;
    let right = arr.length

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if(arr[mid] < x) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return left
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().replaceAll('\r', '').split('\n')

const N = Number(input[0])
const arr = input[1].split(' ').map(Number)

const DP = [arr[0]]
for (let i = 1; i < N; i++) {
    if (arr[i] > DP[DP.length - 1]) {
        DP.push(arr[i])
    } else {
        const idx = bisectLeft(DP, arr[i])
        DP[idx] = arr[i]
    }
}

console.log(DP.length)

