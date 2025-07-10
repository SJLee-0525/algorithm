const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, K] = input[0].split(' ').map(Number);
    const course = input[1].split(' ').map(Number);

    const dist = Array(N * 2 + 1).fill(0);
    for (let u = 0; u < N; u++) dist[u + 1] = dist[u] + course[u];
    for (let d = 0; d < N; d++) dist[N + d + 1] = dist[N + d] + course[N - d - 1];

    let res = 0;
    while (dist[res] <= K) res++;

    console.log(res > N ? N * 2 - res + 1 : res);
}

solution(input);