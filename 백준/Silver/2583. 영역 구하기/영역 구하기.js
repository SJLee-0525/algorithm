const di = [1, 0, -1, 0]
const dj = [0, 1, 0, -1]

class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class Deque {
  constructor() {
    this.init()
  }

  init() {
    this.count = 0
    this.start = null
    this.last = null
  }

  append(value) {
    const node = new Node(value)

    if (this.count === 0) {
      this.start = node
      this.last = node
    } else {
      const cachedLast = this.last
      cachedLast.next = node
      node.prev = cachedLast
      this.last = node
    }
    this.count++
    return
  }

  popleft() {
    if (this.count === 0) {
      return -1
    }

    const value = this.start.value
    if (this.count === 1) {
      this.init()
    } else {
      this.start = this.start.next
      this.start.prev = null
      this.count--
    }
    return value
  }

  isEmpty() {
    return this.count === 0 ? true : false
  }
}

function makeArray(M, N, num) {
  const newArray = []

  for (let i = 0; i < M; i++) {
    const line = []
    for (let j = 0; j < N; j++) {
      line.push(num)
    }
    newArray.push(line)
  }

  return newArray
}

function fillArray(x1, y1, x2, y2) {
  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      array[y][x] = 0
    }
  }
}

function bfs(si, sj, M, N) {
  const queue = new Deque()
  queue.append([si, sj])

  let cnt = 1
  visited[si][sj] = 1

  while (!queue.isEmpty()) {
    const [i, j] = queue.popleft()

    for (let k = 0; k < 4; k++) {
      const mi = i + di[k]
      const mj = j + dj[k]
      if (0 <= mi && mi < M && 0 <= mj && mj < N && array[mi][mj] === 1 && visited[mi][mj] === 0) {
        visited[mi][mj] = 1
        queue.append([mi, mj])
        ++cnt
      }
    }
  }

  return cnt
}

// ------------------------------------------------------------------------------------

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const [M, N, K] = input[0].split(" ").map(Number)

const array = makeArray(M, N, 1)

for (let k = 1; k <= K; k++) {
  const [x1, y1, x2, y2] = input[k].split(" ").map(Number)
  fillArray(x1, y1, x2, y2)
}

let count = 0
const result = []

const visited = makeArray(M, N, 0)

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (array[i][j] === 1 && visited[i][j] === 0) {
      result.push(bfs(i, j, M, N))
      ++count
    }
  }
}

console.log(count)

result.sort((a, b) => a - b)
console.log(result.join(" "))
