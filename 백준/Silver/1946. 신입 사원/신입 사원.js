const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const T = Number(input[0]);

    const res = [];

    let idx = 1;
    for (let tc = 0; tc < T; tc++) {
        const N = Number(input[idx++]);

        const candidates = [];
        for (let n = 0; n < N; n++) candidates.push(input[idx++].split(' ').map(Number));

        // 서류 순 정렬 후, 면접 기준으로만 최소값 갱신
        candidates.sort((a, b) => a[0] - b[0])[0];

        let cnt = 1;
        let minInterview = candidates[0][1];
        for (let c = 1; c < N; c++) {
            if (candidates[c][1] < minInterview) {
                cnt++;
                minInterview = candidates[c][1]
            }
        }

        res.push(cnt);
    }

    console.log(res.join('\n'));
}

solution(input);