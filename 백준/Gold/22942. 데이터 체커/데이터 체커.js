const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')


const N = Number(input[0])

const locs = []

input.slice(1, N + 1).forEach((elem, index) => {
    const [x, d] = elem.split(' ').map(Number)
    locs.push([x - d, index])
    locs.push([x + d, index])
})

locs.sort((a, b) => a[0] - b[0])

const check = Array(locs.length + 1).fill(2)
const stack = []

let flag = true
for (const [loc, num] of locs) {
    if (stack.length === 0) {
        stack.push([loc, num])
        check[num]--
    } else {
        if (check[num] === 2) {
            stack.push([loc, num])
            check[num]--
        } else {
            if (stack[stack.length - 1][1] === num) {
                stack.pop()
            } else {
                flag = false
                break
            }
        }
    }
}

console.log(flag ? "YES" : "NO")

