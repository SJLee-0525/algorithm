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
    this.count = 0
    this.front = null
    this.rear = null
  }

  appendLeft(value) {
    const node = new Node(value)

    if (this.count === 0) {
      this.front = node
      this.rear = node
    } else {
      const cachedFront = this.front
      cachedFront.prev = node
      node.next = cachedFront
      this.front = node
    }
    this.count++
    return
  }

  popleft() {
    if (this.count === 0) {
      return -1
    }

    const value = this.front.value
    if (this.count === 1) {
      this.init()
    } else {
      this.front = this.front.next
      this.front.prev = null
      this.count--
    }
    return value
  }

  append(value) {
    const node = new Node(value)

    if (this.count === 0) {
      this.front = node
      this.rear = node
    } else {
      const cachedRear = this.rear
      cachedRear.next = node
      node.prev = cachedRear
      this.rear = node
    }
    this.count++
    return
  }

  pop() {
    if (this.count === 0) {
      return -1
    }

    const value = this.rear.value
    if (this.count === 1) {
      this.init()
    } else {
      this.rear = this.rear.prev
      this.rear.next = null
      this.count--
    }
    return value
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0 ? 1 : 0
  }

  getFront() {
    return this.count === 0 ? -1 : this.front.value
  }

  getRear() {
    return this.count === 0 ? -1 : this.rear.value
  }
}

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const N = Number(input[0])
const deque = new Deque()
const result = []

for (let n = 1; n <= N; n++) {
  const [command, value] = input[n].split(" ")

  if (command === "push_front") {
    deque.appendLeft(value)
  } else if (command === "push_back") {
    deque.append(value)
  } else if (command === "pop_front") {
    result.push(deque.popleft())
  } else if (command === "pop_back") {
    result.push(deque.pop())
  } else if (command === "size") {
    result.push(deque.size())
  } else if (command === "empty") {
    result.push(deque.isEmpty())
  } else if (command === "front") {
    result.push(deque.getFront())
  } else if (command === "back") {
    result.push(deque.getRear())
  }
}

console.log(result.join("\n"))
