const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());
    const box = input.slice(1, N + 1).map((b) => b.trim().split(' ').map(Number));

    function checkPerm(si, sj, ei, ej) {
        const nums = new Set();
        const size = (ei - si + 1) * (ej - sj + 1);

        for (let i = si; i <= ei; i++) for (let j = sj; j <= ej; j++) {
            nums.add(box[i][j]);
        }

        // 중복 확인 | 1부터 size까지의 모든 수가 있는지 확인
        if (nums.size !== size) return 0;
        for (let i = 1; i <= size; i++) if (!nums.has(i)) return 0;
        
        return 1;
    }

    let res = 0;

    for (let si = 0; si < N; si++) for (let sj = 0; sj < N; sj++) {
        for (let ei = si; ei < N; ei++) for (let ej = sj; ej < N; ej++) {
            res += checkPerm(si, sj, ei, ej);
        }
    }

    console.log(res);
}

solution(input);