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
    this.start = null
    this.end = null
  }

  append(value) {
    const node = new Node(value)

    if (this.size === 0) {
      this.start = node
      this.end = node
    } else {
      const cachedEnd = this.end
      cachedEnd.next = node
      node.prev = cachedEnd
      this.end = node
    }

    this.size++
    return
  }

  popleft() {
    if (this.size === 0) {
      return -1
    }

    const value = this.start.value

    if (this.size === 1) {
      this.init()
    } else {
      this.start = this.start.next
      this.start.prev = null
      this.size--
    }

    return value
  }

  isEmpty() {
    return this.size === 0
  }
}

function bfs(start, end) {
  const queue = new Deque()
  queue.append(start)

  const visited = Array(N + 1).fill(0)
  visited[start] = 1

  while (!queue.isEmpty()) {
    const curr = queue.popleft()

    for (let next of adjL[curr]) {
      if (visited[next] !== 0) {
        continue
      } else if (next === end) {
        return visited[curr]
      }

      visited[next] = visited[curr] + 1
      queue.append(next)
    }
  }

  return -1
}

//////////////////////////////////////////////////////////////////////////////////////////////

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().replaceAll("\r", "").split("\n")

const N = Number(input[0])
const [t1, t2] = input[1].split(" ").map(Number)

const adjL = Array.from({ length: N + 1 }, () => [])

const M = Number(input[2])
for (let m = 3; m < M + 3; m++) {
  const [x, y] = input[m].split(" ").map(Number)
  adjL[x].push(y)
  adjL[y].push(x)
}

console.log(bfs(t1, t2))
