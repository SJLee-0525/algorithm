const solution = (input) => {
    let idx = 0;
    
    const N = Number(input[idx++]);
    const M = Number(input[idx++]);
    
    const adj = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));

    for (let _ = 0; _ < M; _++) {
        const [a, b] = input[idx++].split(' ').map(Number);

        adj[a][b] = true;
        adj[b][a] = true;
    }

    const res = bfs(1, adj, N);

    console.log(res);
}

const bfs = (start, adj, N) => {
    const visited = Array(N + 1).fill(false);
    visited[start] = true;

    let pointer = 0;
    const queue = [[start, 0]];

    let cnt = 0;

    while (pointer < queue.length) {
        const [now, depth] = queue[pointer++];

        if (depth > 1) continue;

        for (let n = 2; n < N + 1; n++) {
            if (!adj[now][n] || visited[n]) continue;

            cnt++;
            visited[n] = true;
            queue.push([n, depth + 1]);
        }
    }

    return cnt;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);