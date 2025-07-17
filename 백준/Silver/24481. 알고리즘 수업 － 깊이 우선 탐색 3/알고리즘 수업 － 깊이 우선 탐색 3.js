const solution = (input) => {
    const [N, M, R] = input[0].split(' ').map(Number);

    const adjL = Array.from({ length: N + 1 }, () => []);
    for (let m = 1; m < M + 1; m++) {
        const [s, e] = input[m].split(' ').map(Number);

        adjL[s].push(e);
        adjL[e].push(s);
    }

    adjL.forEach((list) => { list.sort((a, b) => b - a) });

    console.log(
        dfs(R, adjL, N).slice(1, N + 1).join('\n')
    );
}

const dfs = (start, adjL, N) => {
    const visited = Array(N + 1).fill(-1);
    visited[start] = 0;

    const stack = [];

    let now = start;

    while (true) {
        let check = false;

        for (let n = adjL[now].length - 1; n > -1; n--) {
            const next = adjL[now][n];

            if (visited[next] > -1) continue;

            check = true;
            visited[next] = visited[now] + 1;
            stack.push(now);
            adjL[now].pop();
            now = next;
            break;
        }

        if (!check) {
            if (stack.length > 0) {
                now = stack.pop();
            } else {
                return visited;
            }
        } 
    }
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);