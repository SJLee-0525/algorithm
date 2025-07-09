const solution = (input) => {
    let idx = 0;

    const N = Number(input[idx++]);
    const M = Number(input[idx++]);

    const adj = Array.from({ length: N + 1 }, () => Array(N + 1).fill(-1)); 
    for (let m = 0; m < M; m++) {
        const [s, e, d] = input[idx++].split(' ').map(Number);

        if (s === e) continue;

        if (adj[s][e] === -1 || adj[s][e] < d) {
            adj[s][e] = d;
        }
    }

    const visited = Array(N + 1).fill(false);
    visited[0] = true;
    
    let maxDist = -1;
    const dfs = (cur, dist = 0, count = 0) => {
        for (let next = 1; next <= N; next++) {
            if (adj[cur][next] === -1 || visited[next]) continue;

            visited[next] = true;
            dfs(next, dist + adj[cur][next], count + 1)
            visited[next] = false;
        }

        if (count === N && adj[cur][0] !== -1) {
            const temp = dist + adj[cur][0];

            if (maxDist < temp) maxDist = temp;
        }
    };

    dfs(0);
    console.log(maxDist);
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);