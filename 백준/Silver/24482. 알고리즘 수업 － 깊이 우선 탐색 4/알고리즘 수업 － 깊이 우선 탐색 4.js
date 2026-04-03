const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, M, R] = input[0].trim().split(' ').map(Number);
    const adjL = Array.from({ length: N + 1 }, () => []);

    for (let m = 1; m <= M; m++) {
        const [u, v] = input[m].trim().split(' ').map(Number);
        adjL[u].push(v);
        adjL[v].push(u);
    }

    for (let i = 1; i <= N; i++) {
        adjL[i].sort((a, b) => b - a);
    }

    function dfs(start) {
        const visited = Array(N + 1).fill(-1);
        
        function _dfs(node, depth) {
            visited[node] = depth;
            
            for (const next of adjL[node]) {
                if (visited[next] === -1) {
                    _dfs(next, depth + 1);
                }
            }
        }
        
        _dfs(start, 0);
        return visited.slice(1, N + 1).join('\n');
    }

    console.log(dfs(R));
};

solution(input);
