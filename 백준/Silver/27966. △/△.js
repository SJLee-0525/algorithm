const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    let dist = N - 1;
    for (let d = 1; d < N - 1; d++) dist += d * 2;

    const edges = Array(N - 1).fill(null);
    for (let n = 2; n < N + 1; n++) edges[n - 2] = [1, n].join(' ')    

    console.log([dist, edges.join('\n')].join('\n'));
}

solution(N);