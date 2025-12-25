const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((l) => l.trim().split(' ').map(Number));

const solution = (adjL) => {
    const dfs = (group, prev) => {
        if (group === 6) return 0;

        const p1 = group * 2;
        const p2 = group * 2 + 1;

        const path1 = adjL[prev][p1] + adjL[p1][p2] + dfs(group + 1, p2);
        const path2 = adjL[prev][p2] + adjL[p2][p1] + dfs(group + 1, p1);

        return Math.min(path1, path2);
    };

    // 선생님 -> 1 / 선생님 -> 2
    const case1 = adjL[0][1] + dfs(1, 1);
    const case2 = adjL[1][0] + dfs(1, 0);

    console.log(Math.min(case1, case2));
};

solution(input);