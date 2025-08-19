const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    const arr = Array.from({ length: N }, () => Array(N).fill(' '));

    const build = (si, ei, sj, ej, range) => {
        if (range === 1) {
            arr[si][sj] = '*'
            return;
        }

        const std = range / 3;

        build(si, si + std, sj, sj + std, range / 3);
        build(si + std, ei - std, sj, sj + std, range / 3);
        build(ei - std, ei, sj, sj + std, range / 3);
        build(si, si + std, sj + std, ej - std, range / 3);
        build(ei - std, ei, sj + std, ej - std, range / 3);
        build(si, si + std, ej - std, ej, range / 3);
        build(si + std, ei - std, ej - std, ej, range / 3);
        build(ei - std, ei, ej - std, ej, range / 3)
    }

    build(0, N, 0, N, N);

    console.log(
        arr.map( (e => e.join(''))).join('\n')
    )
}

solution(N);