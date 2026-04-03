const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, M] = input[0].trim().split(' ').map(Number);
    const road = Array(100);

    let cachedDist = 0; 
    for (let n = 1; n <= N; n++) {
        const [dist, val] = input[n].trim().split(' ').map(Number);
        for (let d = cachedDist; d < cachedDist + dist; d++) road[d] = val;
        cachedDist += dist;
    };

    let res = 0;
    cachedDist = 0;
    for (let m = N + 1; m <= N + M; m++) {
        const [dist, val] = input[m].trim().split(' ').map(Number);
        for (let d = cachedDist; d < cachedDist + dist; d++) {
            const temp = val - road[d];
            if (res < temp) res = temp;
        };
        cachedDist += dist;
    };

    console.log(res);
};

solution(input);
