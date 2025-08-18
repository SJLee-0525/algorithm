const solution = (input) => {
    const [N, K] = input;

    const res = bfs(N, K);
    console.log(res);
}

const bfs = (S, E) => {
    const visited = Array(100001).fill(0);
    visited[S] = 1;

    const queue = [[S, `${S}`]];
    let pointer = 0;

    while (pointer < queue.length) {
        const [cur, path] = queue[pointer++];

        if (cur === E) return `${visited[cur] - 1}\n${path}`;
        
        if (cur - 1 >= 0) {
            const next = cur - 1;

            if (visited[next] === 0) {
                visited[next] = visited[cur] + 1;
                queue.push([next, path + ` ${next}`]);
            }
        } 
        
        if (cur + 1 < 100001) {
            const next = cur + 1;

            if (visited[next] === 0) {
                visited[next] = visited[cur] + 1;
                queue.push([next, path + ` ${next}`]);
            }
        }

        if (cur * 2 <= 100001) {
            const doubleNext = cur * 2;

            if (visited[doubleNext] === 0) {
                visited[doubleNext] = visited[cur] + 1;
                queue.push([doubleNext, path + ` ${doubleNext}`]);
            }
        }
    }
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

solution(input);