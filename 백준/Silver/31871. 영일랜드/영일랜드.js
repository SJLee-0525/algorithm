const solution = (input) => {
    let idx = 0;

    const N = Number(input[idx++]);
    const M = Number(input[idx++]);

    const adjL = Array.from({ length: N + 1 }, () => new Object());
    for (let m = 0; m < M; m++) {
        const [s, e, d] = input[idx++].split(' ');
        const dist = Number(d);

        if (!adjL[s][e]) {
            adjL[s][e] = dist;
        } else {
            if (adjL[s][e] < dist) adjL[s][e] = dist;
        }
    }

    const visited = Array(N + 1).fill(false);
    visited[0] = true;
    
    let maxDist = -1;
    
    const dfs = (cur, dist = 0, count = 1) => {
        if (cur === 0 && count === N + 2) {
            maxDist = Math.max(maxDist, dist);
            return;
        }

        for (const nextInfo of Object.entries(adjL[cur])) {
            const [next, nextDist] = nextInfo.map(Number);

            if (next === 0) {
                if (count === N + 1) {
                    dfs(0, dist + nextDist, count + 1);
                }
                continue;
            }

            if (visited[next]) continue;

            visited[next] = true;
            dfs(next, dist + nextDist, count + 1);
            visited[next] = false;
        }
    };

    dfs(0);

    console.log(maxDist);
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);