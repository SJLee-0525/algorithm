class Heap {
  constructor() {
    this.heap = [null]
  }

  heapPush(value) {
    this.heap.push(value)
    let curr = this.heap.length - 1
    let par = Math.floor(curr / 2)

    while (par !== 0 && this.heap[curr][0] < this.heap[par][0]) {
      const temp = this.heap[curr]
      this.heap[curr] = this.heap[par]
      this.heap[par] = temp

      curr = par
      par = Math.floor(curr / 2)
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

    let curr = 1
    let left = 2
    let right = 3

    while ((left < this.heap.length && this.heap[curr][0] > this.heap[left][0]) || (right < this.heap.length && this.heap[curr][0] > this.heap[right][0])) {
      const temp = this.heap[curr]

      if (right >= this.heap.length || this.heap[left][0] < this.heap[right][0]) {
        this.heap[curr] = this.heap[left]
        this.heap[left] = temp
        curr = left
      } else {
        this.heap[curr] = this.heap[right]
        this.heap[right] = temp
        curr = right
      }

      left = curr * 2
      right = left + 1
    }

    return value
  }

  isEmpty() {
    return this.heap.length <= 1 ? true : false
  }
}

function makeMap(size, type) {
  const newMap = []

  for (let i = 0; i < size; i++) {
    const newLine = []
    for (let j = 0; j < size; j++) {
      newLine.push(type)
    }
    newMap.push(newLine)
  }

  return newMap
}

function fillMap(x1, y1, x2, y2, type) {
  if (x1 > x2) {
    const temp = x1
    x1 = x2
    x2 = temp
  }

  if (y1 > y2) {
    const temp = y1
    y1 = y2
    y2 = temp
  }

  for (let y = y1; y <= y2; y++) {
    for (let x = x1; x <= x2; x++) {
      map[y][x] = type
    }
  }
}

function dijkstra() {
  const heap = new Heap()
  heap.heapPush([0, 0, 0])

  const visited = makeMap(501, Number.MAX_VALUE)
  visited[0][0] = 0

  while (!heap.isEmpty()) {
    const [curr, i, j] = heap.heapPop()
    if (visited[i][j] < curr) {
      continue
    }

    for (let k = 0; k < 4; k++) {
      const mi = i + di[k]
      const mj = j + dj[k]

      if (0 <= mi && mi <= 500 && 0 <= mj && mj <= 500 && map[mi][mj] > -1) {
        const next = curr + map[mi][mj]
        if (visited[mi][mj] <= next) {
          continue
        }

        visited[mi][mj] = next
        heap.heapPush([next, mi, mj])
      }
    }
  }

  return visited[500][500] === Number.MAX_VALUE ? -1 : visited[500][500]
}

const di = [1, 0, -1, 0]
const dj = [0, 1, 0, -1]

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const map = makeMap(501, 0)
let idx = 0

// 위험한 구역
const N = Number(input[idx++])
for (let n = 0; n < N; n++) {
  const [x1, y1, x2, y2] = input[idx++].split(" ").map(Number)
  fillMap(x1, y1, x2, y2, 1)
}

// 죽음의 구역
const M = Number(input[idx++])
for (let m = 0; m < M; m++) {
  const [x1, y1, x2, y2] = input[idx++].split(" ").map(Number)
  fillMap(x1, y1, x2, y2, -1)
}

console.log(dijkstra())
