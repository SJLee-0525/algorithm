class Heap {
  constructor() {
    this.heap = [null]
  }

  heappush(value) {
    this.heap.push(value)

    if (this.heap.length === 1) {
      return
    }

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

  heappop() {
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

  isempty() {
    return this.heap.length <= 1
  }
}

function dijkstra() {
  const heap = new Heap()
  heap.heappush([0, 1, [1]])

  visited[1] = 0

  while (!heap.isempty()) {
    const [curDist, cur, pastRoute] = heap.heappop()

    if (cur === V) {
      routes.push([curDist, ...pastRoute])
    }

    if (visited[cur] < curDist) {
      continue
    }

    for (let k = 0; k < adjL[cur].length; k++) {
      const [next, needDist] = adjL[cur][k]

      const nextDist = curDist + needDist
      if (visited[next] < nextDist) {
        continue
      }

      visited[next] = nextDist
      heap.heappush([nextDist, next, [...pastRoute, next]])
    }
  }

  return
}

// ----------------------------------------------------------------------------------------

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().replace("r", "").trim().split("\n")

// 정점 개수 V, 간선 개수 E, 건우 위치 P
const [V, E, P] = input[0].split(" ").map(Number)

const adjL = []
for (let v = 0; v <= V; v++) {
  adjL.push([])
}

for (let e = 1; e <= E; e++) {
  const [a, b, c] = input[e].split(" ").map(Number)
  adjL[a].push([b, c])
  adjL[b].push([a, c])
}

const visited = Array(V + 1).fill(Number.MAX_VALUE)
const routes = []

dijkstra()

routes.sort()

let isPossible = false
if (routes.length >= 1) {
  let r = 0
  const minDist = routes[0][0]
  while (r < routes.length && routes[r][0] === minDist) {
    for (let d = 1; d < routes[r].length; d++) {
      if (routes[r][d] === P) {
        isPossible = true
        break
      }
    }
    r++
  }
}
console.log(isPossible ? "SAVE HIM" : "GOOD BYE")
