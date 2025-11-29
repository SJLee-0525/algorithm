const solution = (input) => {
    const [N, M, R] = input[0].trim().split(' ').map(Number);
    const adjL = Array.from({ length: N + 1 }, () => Array());

    for (let m = 1; m <= M; m++) {
        const [a, b] = input[m].trim().split(' ').map(Number);

        adjL[a].push(b);
        adjL[b].push(a);
    };

    for (let n = 1; n <= N; n++) adjL[n].sort((a, b) => a - b);

    const visited = Array(N + 1).fill(false);
    let res = 0, seq = 1;

    function dfs (c, d) {
        visited[c] = true;
        res += d * seq++;

        for (const n of adjL[c]) {
            if (visited[n]) continue;

            dfs(n, d + 1);
        };
    };

    dfs(R, 0);

    console.log(res);
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input= fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);