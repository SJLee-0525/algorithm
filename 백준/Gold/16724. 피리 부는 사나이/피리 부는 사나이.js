function find(x) {
    if (parents[x] === x) return x

    parents[x] = find(parents[x])
    return parents[x]
}

function union(x, y) {
    const rootX = find(x)
    const rootY = find(y)

    if (rootX === rootY) return

    if (rootX < rootY) {
        parents[rootY] = rootX
    } else {
        parents[rootX] = rootY
    }

}

function init(i, j) {
    const mi = i + DIR[MAP[i][j]][0], mj = j + DIR[MAP[i][j]][1]

    if (0 <= mi && mi < N && 0 <= mj && mj < M) {
        nowIndex = (i * M) + j
        nextIndex = (mi * M) + mj
        union(nowIndex, nextIndex)
    }
}

///////////////////////////////////////////////////////////////////////////////////////

const DIR = { 'U': [-1, 0], 'R': [0, 1], 'D': [1, 0], 'L': [0, -1]}

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().replaceAll('\r', '').split('\n')

const [N, M] = input[0].split(' ').map(Number)
const MAP = input.slice(1).map((i) => {
    return i.split('')
})

let num = 0
const parents = Array.from({length : N * M}, () => num++)

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        init(i, j)
    }
}

// 경로 압축 후 중복 제거거
const result = new Set()
for (let i = 0; i < N * M; i++) {
    result.add(find(i))
}

console.log(result.size)