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

  getBack() {
    return this.count === 0 ? -1 : this.rear.value
  }
}

let fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const N = Number(input[0])
const deque = new Deque()

let output = []
for (let n = 1; n <= N; n++) {
  const command = input[n].split(" ")
  if (command[0] === "push") {
    deque.append(Number(command[1]))
  } else if (command[0] === "pop") {
    output.push(deque.popleft())
  } else if (command[0] === "size") {
    output.push(deque.size())
  } else if (command[0] === "empty") {
    output.push(deque.isEmpty())
  } else if (command[0] === "front") {
    output.push(deque.getFront())
  } else if (command[0] === "back") {
    output.push(deque.getBack())
  }
}

console.log(output.join("\n"))
