const solution = (input) => {
    let res = false;

    const [N, M] = input[0].split(' ').map(Number);

    const adjL = Array.from({ length: N }, () => []);
    const visited = Array(N).fill(false);

    for (let m = 1; m < M + 1; m++) {
        const [a, b] = input[m].split(' ').map(Number);
        adjL[a].push(b);
        adjL[b].push(a);
    }

    const dfs = (node, depth) => {
        if (depth >= 5) {
            res = true;
            return;
        }

        for (const next of adjL[node]) {
            if (visited[next]) continue;

            visited[next] = true;
            dfs(next, depth + 1);
            visited[next] = false;
            if (res) return;
        }
    }

    for (let start = 0; start < N; start++) {
        visited[start] = true;
        dfs(start, 1);
        visited[start] = false;

        if (res) return 1;
        
    }

    return 0;
}


// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log( solution(input) );