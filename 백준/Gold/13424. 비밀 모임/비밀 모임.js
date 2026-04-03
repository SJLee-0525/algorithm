class Heap {
    constructor() {
        this.heap = [[null, null]]
    }

    heapPush(value) {
        this.heap.push(value)

        let cur = this.heap.length - 1
        let par = Math.floor(cur / 2)

        while (par !== 0 && this.heap[par][0] > this.heap[cur][0]) {
            const temp = this.heap[par]
            this.heap[par] = this.heap[cur]
            this.heap[cur] = temp
            
            cur = par
            par = Math.floor(cur / 2)
        }
        
        return
    }

    heapPop() {
        if (this.heap.length === 1) {
            return -1
        } else if (this.heap.length === 2) {
            return this.heap.pop()
        }

        const value = this.heap[1]
        this.heap[1] = this.heap.pop()

        let cur = 1, left = 2, right = 3
        while ((left < this.heap.length && this.heap[cur][0] > this.heap[left][0]) ||
            (right < this.heap.length && this.heap[cur][0] > this.heap[right][0])) {
            const temp = this.heap[cur]

            if (right >= this.heap.length || this.heap[left][0] < this.heap[right][0]) {
                this.heap[cur] = this.heap[left]
                this.heap[left] = temp

                cur = left
            } else {
                this.heap[cur] = this.heap[right]
                this.heap[right] = temp

                cur = right
            }

            left = cur * 2
            right = left + 1
        }

        return value
    }

    isEmpty() {
        return this.heap.length <= 1
    }
}

function dijkstra(adjInfo, friendsInfo, start, N) {
    const heap = new Heap
    heap.heapPush([0, start])

    const visited = Array(N + 1).fill(Number.MAX_VALUE)
    visited[start] = 0

    while (!heap.isEmpty()) {
        const [currDist, curr] = heap.heapPop()

        if (visited[curr] < currDist) continue
        for (const [next, dist] of  adjInfo[curr]) {
            const nextDist = currDist + dist
            if (nextDist >= visited[next]) continue

            visited[next] = nextDist
            heap.heapPush([nextDist, next])
        }
    }

    let totalDist = 0
    for (friend of friendsInfo) {
        totalDist += visited[friend]
    }

    return totalDist
}

////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().replaceAll('r', '').split('\n')

const T = Number(input[0])
const results = []

let idx = 1

for (let t = 0; t < T; t++) {
    const [N, M] = input[idx++].split(' ').map(Number)

    const adjL = Array.from({length: N + 1}, () => [])
    
    for (let m = 0; m < M; m++) {
        const [a, b, d] = input[idx++].split(' ').map(Number)

        adjL[a].push([b, d])
        adjL[b].push([a, d])
    }

    // 친구의 수, 위치
    const K = Number(input[idx++])
    const friends = input[idx++].split(' ').map(Number)

    let result = 0
    let minDist = Number.MAX_VALUE

    for (let start = 1; start <= N; start++) {
        const temp = dijkstra(adjL, friends, start, N)

        if (minDist > temp) {
            minDist = temp
            result = start
        }
    }

    results.push(result)
}

console.log(results.join('\n'))