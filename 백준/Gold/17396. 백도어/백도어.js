class Heap {
  constructor() {
    this.heap = [null];
  }

  heapPush(value) {
    this.heap.push(value);

    let current = this.heap.length - 1;
    let parent = Math.floor(current / 2);
    while (parent !== 0 && this.heap[parent][0] > this.heap[current][0]) {
      const temp = this.heap[current];
      this.heap[current] = this.heap[parent];
      this.heap[parent] = temp;

      current = parent;
      parent = Math.floor(current / 2);
    }
    return;
  }

  heapPop() {
    if (this.heap.length == 1) {
      return false;
    } else if (this.heap.length == 2) {
      return this.heap.pop();
    }

    const popValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let current = 1;
    let left = 2;
    let right = 3;

    while (
      (left < this.heap.length && this.heap[current][0] > this.heap[left][0]) ||
      (right < this.heap.length && this.heap[current][0] > this.heap[right][0])
    ) {
      const temp = this.heap[current];
      if (
        right >= this.heap.length ||
        this.heap[left][0] < this.heap[right][0]
      ) {
        this.heap[current] = this.heap[left];
        this.heap[left] = temp;
        current = left;
      } else {
        this.heap[current] = this.heap[right];
        this.heap[right] = temp;
        current = right;
      }
      left = current * 2;
      right = left + 1;
    }

    return popValue;
  }

  isEmpty() {
    return this.heap.length <= 1 ? true : false;
  }
}

function dijkstra() {
  const start = 0;
  visited[start] = 0;

  const heap = new Heap();
  heap.heapPush([0, start]);

  while (!heap.isEmpty()) {
    const [currDist, curr] = heap.heapPop();

    if (visited[curr] < currDist) {
      continue;
    }

    for (let d = 0; d < adjList[curr].length; d++) {
      const next = adjList[curr][d][0];
      const nextDist = currDist + adjList[curr][d][1];

      if ((isWard[next] === 1 && next != N - 1) || visited[next] <= nextDist) {
        continue;
      }

      visited[next] = nextDist;
      heap.heapPush([nextDist, next]);
    }
  }

  return visited[N - 1] === Number.MAX_VALUE ? -1 : visited[N - 1];
}

// ----------------------------------------------------------------------------

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let idx = 0;

const [N, M] = input[idx++].split(" ").map(Number);
const isWard = input[idx++].split(" ").map(Number);

const visited = new Array(N).fill(Number.MAX_VALUE);
const adjList = Array.from({ length: N }, () => []);

for (let m = 0; m < M; m++) {
  const [a, b, t] = input[idx++].split(" ").map(Number);
  adjList[a].push([b, t]);
  adjList[b].push([a, t]);
}

console.log(dijkstra());
