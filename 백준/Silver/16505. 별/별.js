const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (N) => {
    const L = 2 ** N;
    const board = Array.from({ length: L }, () => Array(L).fill(' '));

    function func(si, sj, ej, l) {
        if (l === 0) {
            board[si][sj] = '*';
            return;
        };

        const mi = si + l, mj = sj + l, ml = Math.floor(l / 2);

        func(si, sj, mj + 1, ml);
        func(si, mj, ej, ml);
        func(mi, sj, mj + 1, ml);
    };

    func(0, 0, L + 1, Math.floor(L / 2));
    
    console.log( board.map((b) => b.join('').trim()).join('\n').trim() );
};

solution(N);