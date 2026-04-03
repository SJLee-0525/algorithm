class Heap {
  constructor() {
    this.heap = [null]
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
      return null
    } else if (this.heap.length === 2) {
      return this.heap.pop()
    }

    const value = this.heap[1]
    this.heap[1] = this.heap.pop()

    let cur = 1
    let left = 2
    let right = 3
    while ((left < this.heap.length && this.heap[cur][0] > this.heap[left][0]) || (right < this.heap.length && this.heap[cur][0] > this.heap[right][0])) {
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

function dijkstra() {
  const visited = []
  for (let vi = 0; vi < N; vi++) {
    const visitedLine = []
    for (let vj = 0; vj < M; vj++) {
      visitedLine.push(Number.MAX_VALUE)
    }
    visited.push(visitedLine)
  }
  visited[si - 1][sj - 1] = 0

  const heap = new Heap()
  heap.heapPush([0, si - 1, sj - 1])

  while (!heap.isEmpty()) {
    const [cur, ci, cj] = heap.heapPop()
    if (visited[ci][cj] < cur) {
      continue
    }

    for (let k = 0; k < 4; k++) {
      const mi = ci + di[k]
      const mj = cj + dj[k]

      if (0 <= mi && mi < N && 0 <= mj && mj < M) {
        let need = null
        if (classRoom[mi][mj] === "0") {
          need = 0
        } else {
          need = 1
        }

        const next = cur + need
        if (visited[mi][mj] <= next) {
          continue
        }

        visited[mi][mj] = next
        heap.heapPush([next, mi, mj])
      }
    }
  }

  console.log(visited[ei - 1][ej - 1])
}

// ------------------------------------------------------------------------

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const di = [1, 0, -1, 0]
const dj = [0, 1, 0, -1]

const [N, M] = input[0].split(" ").map(Number)
const [si, sj, ei, ej] = input[1].split(" ").map(Number)

const classRoom = []
for (let l = 2; l < N + 2; l++) {
  const classLine = input[l].replace("\r", "").split("")
  classRoom.push(classLine)
}

dijkstra()
