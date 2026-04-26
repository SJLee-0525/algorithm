const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const solution = (input) => {
  let idx = 0;

  const [N, M] = input[idx++].split(" ").map(Number);
  const coords = [];
  for (let i = 0; i < N; i++) coords.push(input[idx++].split(" ").map(Number));

  // 유니온 파인드 부모 배열 초기화
  const parent = Array.from({ length: N + 1 }, (_, i) => i);
  const find = (i) => {
    if (parent[i] === i) return i;
    return (parent[i] = find(parent[i]));
  };

  const union = (i, j) => {
    const rootI = find(i);
    const rootJ = find(j);

    if (rootI !== rootJ) {
      parent[rootI] = rootJ;
      return true;
    }
    return false;
  };

  // 이미 연결된 통로 처리
  let connectedEdges = 0;
  for (let i = 0; i < M; i++) {
    const [u, v] = input[idx++].split(" ").map(Number);
    if (union(u, v)) connectedEdges++;
  }

  // 모든 가능한 우주신 간의 거리 계산 (간선 생성)
  const edges = [];
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const dist = Math.sqrt(Math.pow(coords[i][0] - coords[j][0], 2) + Math.pow(coords[i][1] - coords[j][1], 2));
      edges.push({ u: i + 1, v: j + 1, dist });
    }
  }

  // 거리 순 정렬 (오름차순)
  edges.sort((a, b) => a.dist - b.dist);

  // MST 구성 (크루스칼 알고리즘)
  let minCost = 0;
  for (let edge of edges) if (union(edge.u, edge.v)) minCost += edge.dist;

  console.log(minCost.toFixed(2));
};

solution(input);
