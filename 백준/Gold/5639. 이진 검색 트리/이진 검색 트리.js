class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.recurInsert(this.root, key)
    }
  }

  recurInsert(curNode, key) {
    if (key < curNode.key) {
      if (curNode.left === null) {
        curNode.left = new Node(key)
      } else {
        this.recurInsert(curNode.left, key)
      }
    } else {
      if (curNode.right === null) {
        curNode.right = new Node(key)
      } else {
        this.recurInsert(curNode.right, key)
      }
    }
  }

  search(key) {
    return this.recurSearch(this.root, key)
  }

  recurSearch(curNode, key) {
    if (curNode === null || curNode.key === key) {
      return curNode
    }

    if (key < curNode.key) {
      return this.recurSearch(curNode.left, key)
    } else {
      return this.recurSearch(curNode.right, key)
    }
  }

  portOrderTraverse() {
    this.recurPostOrderTraverse(this.root)
  }

  recurPostOrderTraverse(curNode) {
    if (curNode !== null) {
      this.recurPostOrderTraverse(curNode.left)
      this.recurPostOrderTraverse(curNode.right)
      results.push(curNode.key)
    }
  }
}

// --------------------------------------------------------------------------------------

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number)

const BST = new BinarySearchTree()
const results = []

for (let i = 0; i < input.length; i++) {
  BST.insert(input[i])
}

BST.portOrderTraverse()

console.log(results.join("\n"))
