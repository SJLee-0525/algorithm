const DI = [0, 1, 0, -1];
const DJ = [1, 0, -1, 0];

const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);
    const boxes = [
        Array(M + 2).fill(0n),
        ...input.slice(1, N + 1).map((l) => [0n, ...l.split(' ').map(BigInt), 0n]),
        Array(M + 2).fill(0n)
    ];

    let res = 0n;
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= M; j++) {
            if (boxes[i][j] === 0n) continue;
            
            let minNear = Infinity;

            for (let k = 0; k < 4; k++) {
                const mi = i + DI[k], mj = j + DJ[k];
                if (minNear > boxes[mi][mj]) minNear = boxes[mi][mj];
            }

            if (boxes[i][j] > minNear) res += minNear;
            else res += boxes[i][j] - 1n;
        }
    }

    console.log(res.toString());
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);