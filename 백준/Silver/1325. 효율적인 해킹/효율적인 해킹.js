const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const adjL = Array.from({ length: N + 1 }, () => []);

for (let idx = 1; idx < M + 1; idx++) {
    const [c1, c2] = input[idx].split(' ').map(Number);
    adjL[c2].push(c1);
}

const bfs = (start) => {
    const queue = [start];

    const visited = Array(N + 1).fill(false);
    visited[start] = true;

    let pointer = 0;
        cnt = 1;

    while (pointer < queue.length) {
        const cur = queue[pointer++];

        for (let c = 0; c < adjL[cur].length; c++) {
            if (visited[adjL[cur][c]]) continue;

            queue.push(adjL[cur][c]);
            visited[adjL[cur][c]] = true;
            cnt++;
        }
    }

    return cnt;
}

const res = { max: 0, list: [] };
for (let s = 1; s < N + 1; s++) {
    const cnt = bfs(s);

    if (res.max < cnt) {
        res.max = cnt;
        res.list = [s];
    } else if (res.max === cnt) {
        res.list.push(s);
    }
}

console.log(res.list.join(' '));