// Map https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map

class TrieNode {
  constructor(value = "") {
    this.value = value
    this.child = new Map()
    this.isEnd = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(foods) {
    let curRoom = this.root

    for (let i = 0; i < foods.length; i++) {
      if (!curRoom.child.get(foods[i])) {
        const childFood = new TrieNode(foods[i])
        curRoom.child.set(foods[i], childFood)
        curRoom = childFood
      } else {
        curRoom = curRoom.child.get(foods[i])
      }
    }

    curRoom.isEnd = true
    return
  }

  printTrie() {
    const curRoom = this.root
    this._printTrie(curRoom, 0)

    return
  }

  _printTrie(foods, depth) {
    const sortedMap = [...foods.child].sort((a, b) => a[0].localeCompare(b[0]))

    for (let [key, value] of sortedMap) {
      results.push("--".repeat(depth) + key)
      this._printTrie(value, depth + 1)
    }

    return
  }
}

// --------------------------------------------------------------------------------------

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const N = Number(input[0])
const trieTree = new Trie()

for (let n = 1; n <= N; n++) {
  const inputLine = input[n].replace("\r", "").split(" ")
  const inputFoods = inputLine.splice(1, Number(inputLine[0]))
  trieTree.insert(inputFoods)
}

const results = []
trieTree.printTrie()

console.log(results.join("\n"))
