const solution = (input) => {
    let idx = 0;

    const T = Number(input[idx++]);
    for (let t = 0; t < T; t++) {
        const [F, R, N] = input[idx++].split(' ').map(Number);

        const building = Array.from({ length: F + 1 }, () => Array(R + 2).fill(false));
        const count = Array(F + 1).fill(0);

        for (let _ = 0; _ < N; _++) {
            const [f, b] = input[idx++].split(' ').map(Number);

            building[f][b] = true;
            count[f]++;
        }

        let res = F * 2 + R + 1;
        for (let f = 1; f < F + 1; f++) {
            if (count[f] === 0) continue;

            let minDist = 63;

            for (let mid = 0; mid < R + 1; mid++) {
                let left = 0, right = R + 1;
                let leftStep = 0; rightStep = 0;

                while (++left <= mid) if (building[f][left]) leftStep = left;
                while (--right > mid) if (building[f][right]) rightStep = R - right + 1;

                const tempDist = (leftStep + rightStep) * 2;
                if (minDist > tempDist) minDist = tempDist;
            }

            res += minDist;
        }

        console.log(res);

    }
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);