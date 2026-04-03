class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.init();
  }

  init() {
    this.count = 0;
    this.front = null;
    this.rear = null;
  }

  append(value) {
    const node = new Node(value);

    if (this.count === 0) {
      this.front = node;
      this.rear = node;
    } else {
      const cachedRear = this.rear;
      cachedRear.next = node;
      node.prev = cachedRear;
      this.rear = node;
    }
    this.count++;
    return;
  }

  popleft() {
    if (this.count === 0) {
      return -1;
    }

    const value = this.front.value;
    if (this.count === 1) {
      this.init();
    } else {
      this.front = this.front.next;
      this.front.prev = null;
      this.count--;
    }
    return value;
  }

  isEmpty() {
    return this.count === 0 ? true : false;
  }
}

function makeVisited(M, N) {
  visited = [];

  for (let i = 0; i < N; i++) {
    const line = [];
    for (let j = 0; j < M; j++) {
      line.push(0);
    }
    visited.push(line);
  }

  return visited;
}

function bfs(i, j, N, M) {
  const queue = new Deque();
  queue.append([i, j]);

  visited[i][j] = 1;

  while (!queue.isEmpty()) {
    const [qi, qj] = queue.popleft();

    for (let k = 0; k < 8; k++) {
      let mi = qi + di[k];
      let mj = qj + dj[k];
      if (
        0 <= mi &&
        mi < N &&
        0 <= mj &&
        mj < M &&
        visited[mi][mj] === 0 &&
        world[mi][mj] === 1
      ) {
        visited[mi][mj] = 1;
        queue.append([mi, mj]);
      }
    }
  }

  return;
}

// ---------------------------------------------------------------------

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const di = [1, 0, -1, 0, 1, 1, -1, -1];
const dj = [0, 1, 0, -1, 1, -1, -1, 1];

let idx = 0;
let world = null;
let visited = null;
const results = [];

while (true) {
  const [M, N] = input[idx++].split(" ").map(Number);
  if (M === 0 && N === 0) {
    break;
  }

  const tempWorld = [];
  for (let i = 0; i < N; i++) {
    const tempLine = input[idx++].split(" ").map(Number);
    tempWorld.push(tempLine);
  }
  world = tempWorld;

  visited = makeVisited(M, N);
  let result = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (world[i][j] === 1 && visited[i][j] === 0) {
        bfs(i, j, N, M);
        result++;
      }
    }
  }

  results.push(result);
}

console.log(results.join("\n"));
