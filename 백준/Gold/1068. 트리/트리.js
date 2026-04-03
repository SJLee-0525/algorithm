function dfs(node) {
  visited[node] = 1

  if (adjL[node].length === 0) {
    cnt++
  }

  for (let k = 0; k < adjL[node].length; k++) {
    if (visited[adjL[node][k]] === 0) {
      dfs(adjL[node][k])
    }
  }
}

// -----------------------------------------------------------------------------------------

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().replace("\r", "").split("\n")

const N = Number(input[0])
const adjInfo = input[1].split(" ").map(Number)
const tar = Number(input[2])

const adjL = []
for (let n = 0; n < N; n++) {
  adjL.push([])
}

let root = -1

for (let node = 0; node < N; node++) {
  if (adjInfo[node] === -1) {
    root = node
  } else if (node !== tar) {
    adjL[adjInfo[node]].push(node)
  }
}

let cnt = 0
const visited = Array(N).fill(0)
if (tar !== root) {
  dfs(root)
}

console.log(cnt)
