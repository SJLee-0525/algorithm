const solution = (input) => {
    const res = [];

    const N = Number(input[0]);

    const top = input[1].split(' ').map(Number);
    const bottom = input[2].split(' ').map(Number);

    const diffs = [[top[0] - bottom[0], 0]];

    for (let n = 1; n < N; n++) {
        const diff = top[n] - bottom[n];
        if (diffs[diffs.length - 1][0] > diff) diffs.push([diff, n]); // [틈, 거리]
    }

    if (diffs[diffs.length - 1][0] > 0) diffs.push([0, N]);
    
    const birds = input[4].split(' ').map(Number);

    for (const bird of birds) {
        let left = 0, right = diffs.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (diffs[mid][0] < bird) right = mid;
            else left = mid + 1;
        }

        res.push(diffs[left][1]);
    }

    console.log(res.join('\n'));
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);