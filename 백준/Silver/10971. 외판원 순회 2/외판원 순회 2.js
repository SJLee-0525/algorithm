const solution = (input) => {
    let res = Infinity;

    const N = Number(input[0]);
    const adjL = input.slice(1, N + 1).map(l => l.split(' ').map(Number));

    for (let start = 0; start < N; start++) {
        const temp = travel(start, adjL, N);
        if (res > temp) res = temp;
    }

    console.log(res);
}

const travel = (start, adjL, N) => {
    let minDist = Infinity;

    const visited = Array(N).fill(false);
    visited[start] = true;

    const dfs = (now, cnt, dist) => {
        if (cnt === N) {
            if (adjL[now][start] > 0) {
                const temp = dist + adjL[now][start];
                if (minDist > temp) minDist = temp;
                return
            }
        } else {
            for (let next = 0; next < N; next++) {
                if (visited[next] || adjL[now][next] === 0) continue;
    
                visited[next] = true;
                dfs(next, cnt + 1, dist + adjL[now][next]);
                visited[next] = false;
            }
        } 
    }

    dfs(start, 1, 0);
    return minDist;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);