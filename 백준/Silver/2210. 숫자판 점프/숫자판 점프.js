const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const arr = input.map((l) => l.trim().split(' '));

    const numSet = new Set();
    const DI = [0, 1, 0, -1], DJ = [1, 0, -1, 0];

    function dfs (i, j, path) {
        if (path.length === 6) {
            numSet.add(path);
            return;
        };

        for (let k = 0; k < 4; k++) {
            const ni = i + DI[k], nj = j + DJ[k];

            if (0 <= ni && ni < 5 && 0 <= nj && nj < 5) {
                dfs(ni, nj, path + arr[ni][nj]);
            };
        };
    };

    for (let si = 0; si < 5; si++) {
        for (let sj = 0; sj < 5; sj++) {
            dfs(si, sj, arr[si][sj]);
        };
    };

    console.log(numSet.size);
};

solution(input);