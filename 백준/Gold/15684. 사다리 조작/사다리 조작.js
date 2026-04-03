function check() {
  for (let start = 0; start < N; start++) {
    let temp = start;

    for (let j = 0; j < H; j++) {
      if (graph[j][temp]) {
        temp += 1;
      } else if (temp > 0 && graph[j][temp - 1]) {
        temp -= 1;
      }
    }

    if (temp !== start) {
      return false;
    }
  }

  return true;
}

function dfs(cnt, si, sj) {
  if (ans <= cnt) {
    return;
  }

  if (check()) {
    if (ans > cnt) {
        ans = cnt;
    }
    return;
  }
  
  for (let i = si; i < H; i++) {
    const k = i === si ? sj : 0; // 같은 세로줄일 때만 sj부터 시작, 다르면 0부터터

    for (let j = k; j < N - 1; j++) {
      if (graph[i][j] === 0 && cnt < 3) {
        // 가지치기
        graph[i][j] = 1;
        dfs(cnt + 1, i, j + 2);
        graph[i][j] = 0;
      }
    }
  }
}

// ---------------------------------------------------------------------------

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, H] = input[0].split(" ").map(Number);
const graph = Array.from(Array(H), () => Array(N).fill(0));

for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a - 1][b - 1] = 1;
    }

let ans = 4;
dfs(0, 0, 0);

console.log(ans <= 3 ? ans : -1);
