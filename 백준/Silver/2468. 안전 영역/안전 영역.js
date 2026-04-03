class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
    return;
  }
}

class Deque {
  constructor() {
    this.init();
    return;
  }

  init() {
    this.count = 0;
    this.front = null;
    this.rear = null;
    return;
  }

  appendLeft(value) {
    const node = new Node(value);

    if (this.count === 0) {
      this.front = node;
      this.rear = node;
    } else {
      const cachedFront = this.front;
      node.next = cachedFront;
      cachedFront.prev = node;
      this.front = node;
    }
    this.count++;
    return;
  }

  popLeft() {
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

  pop() {
    if (this.count === 0) {
      return -1;
    }

    const value = this.rear.value;
    if (this.count === 1) {
      this.init();
    } else {
      this.rear = this.rear.prev;
      this.rear.next = null;
      this.count--;
    }
    return value;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0 ? true : false;
  }
}

function makeVisited() {
  const visited = [];

  for (let i = 0; i < N; i++) {
    const line = [];
    for (let j = 0; j < N; j++) {
      line.push(0);
    }
    visited.push(line);
  }

  return visited;
}

function bfs(waterHeight, i, j) {
  const queue = new Deque();

  visited[i][j] = 1;
  queue.append([i, j]);

  while (!queue.isEmpty()) {
    const [qi, qj] = queue.popLeft();

    for (let k = 0; k < 4; k++) {
      let mi = qi + di[k];
      let mj = qj + dj[k];

      if (
        0 <= mi &&
        mi < N &&
        0 <= mj &&
        mj < N &&
        visited[mi][mj] === 0 &&
        town[mi][mj] > waterHeight
      ) {
        visited[mi][mj] = 1;
        queue.append([mi, mj]);
      }
    }
  }

  return;
}

// -----------------------------------------------------------------------

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const town = [];

const di = [1, 0, -1, 0];
const dj = [0, 1, 0, -1];

for (let n = 1; n <= N; n++) {
  const line = input[n].split(" ").map(Number);
  town.push(line);
}

let visited = [];
let result = 0;

for (let water = 0; water < 100; water++) {
  visited = makeVisited();

  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] === 0 && town[i][j] > water) {
        bfs(water, i, j);
        count++;
      }
    }
  }

  if (result < count) {
    result = count;
  }
}

console.log(result);
