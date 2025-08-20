// 설마 별 뒤에 쓸모 없는 공백 제거했다고 출력형식 잘못됐다고 하는거면 진짜 whsskwhssk 화날 예정임;
// 맞네 얼탱;

const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    const res = Array.from({ length: N }, () => Array(N * 2).fill(' '));

    const func = (si, ei, sj, ej, depth) => {
        if (depth === 3) {
            res[si][sj + 2] = '*';
            res[si + 1][sj + 1] = '*';
            res[si + 1][sj + 3] = '*';
            for (let k = 0; k < 5; k++) res[si + 2][sj + k] = '*';
            return;
        }

        const halfDepth = depth / 2;
        const mi = si + halfDepth;

        func(si, mi - 1, sj + halfDepth, ej - halfDepth, halfDepth);
        func(mi, ei, sj, sj + depth - 1, halfDepth);
        func(mi, ei, ej - depth + 1, ej, halfDepth);
    }

    func(0, N - 1, 0, N * 2 - 1, N);

    console.log( 
        res.map((r) => r.join('')).join('\n') 
    );
}

solution(N);