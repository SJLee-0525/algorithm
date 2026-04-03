class Node {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class Deque {
    constructor() {
        this.init()
    }
    
    init() {
        this.size = 0
        this.front = null
        this.end = null
    }

    append(value) {
        const node = new Node(value)

        if (this.size === 0) {
            this.front = node
            this.end = node
        } else {
            const cachedEnd = this.end
            node.prev = cachedEnd
            cachedEnd.next = node
            this.end = node
        }
        this.size++
        return
    }

    popleft() {
        if (this.size === 0) {
            return -1
        } 

        const value = this.front
        
        if (this.size === 1) {
            this.init()
        } else {
            this.front = this.front.next
            this.front.prev = null
            this.size--
        }

        return value.value
    }

    isEmpty() {
        return this.size === 0
    }
}

function bfs(si, sj) {
    clearVisited()
    visited[si][sj] = 1

    const queue = new Deque()
    queue.append([si, sj])

    let maxDist = 1
    while (!queue.isEmpty()) {
        const [ni, nj] = queue.popleft()
        
        for (let k = 0; k < 4; k++) {
            const mi = ni + DI[k], mj = nj + DJ[k]
            if (0 <= mi && mi < N && 0 <= mj && mj < M && WORLD_MAP[mi][mj] === "L" && visited[mi][mj] === 0) {
                visited[mi][mj] = visited[ni][nj] + 1
                queue.append([mi, mj])
                maxDist = Math.max(maxDist, visited[mi][mj])
            }
        }
    }

    return maxDist
}

function clearVisited() {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            visited[i][j] = 0
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

const DI = [1, 0, -1, 0]
const DJ = [0, 1, 0, -1]

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().replaceAll('\r', '').split('\n')

const [N, M] = input[0].split(' ').map(Number)
const WORLD_MAP = input.slice(1, N + 1).map((innerMap) => innerMap.split(''))
const visited = Array.from({length: N}, () => Array(M).fill(0))

let res = 0
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (WORLD_MAP[i][j] === 'L') res = Math.max(res, bfs(i, j))
    }
}

console.log(res - 1)

