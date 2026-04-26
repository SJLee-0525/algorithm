const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const solution = ([N, e, w, s, n]) => {
  let simple = 0;
  const prob = [e / 100, w / 100, s / 100, n / 100];

  const visited = Array.from({ length: N * 2 + 1 }).map(() => new Array(N * 2 + 1).fill(false));
  visited[N][N] = true;

  const dfs = (L, ci, cj, visited, probability) => {
    if (L === N) {
      simple += probability;
      return;
    }

    for (let k = 0; k < 4; k++) {
      let ni = ci + dx[k];
      let nj = cj + dy[k];

      if (!visited[ni][nj]) {
        visited[ni][nj] = true;
        dfs(L + 1, ni, nj, visited, probability * prob[k]);
        visited[ni][nj] = false;
      }
    }
  };

  dfs(0, N, N, visited, 1);

  console.log(simple);
};

solution(input);
