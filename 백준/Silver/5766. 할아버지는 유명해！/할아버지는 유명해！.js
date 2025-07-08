const solution = (input) => {
    const ret = [];
    let idx = 0;

    while (true) {
        const [N, M] = input[idx++].split(' ').map(Number);
        if (N === 0 && M === 0) return ret;

        const scores = {};
        for (let _ = 0; _ < N; _++) {
            input[idx++].split(' ').forEach((player) => {
                if (scores[player]) {
                    scores[player]++;
                } else {
                    scores[player] = 1;
                }
            })
        }

        const res = {};
        Object.entries(scores).forEach(([player, score]) => {
            if (res[score]) {
                res[score].push(player);
            } else {
                res[score] = [player];
            }
        })

        const scoresList = Object.keys(res).map(Number).sort((a, b) => b - a);
        ret.push(res[scoresList[1]].map(Number).sort((a, b) => a - b).join(' '));
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(
    solution(input).join('\n')
);