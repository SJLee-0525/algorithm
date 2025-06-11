const makePerm = (N, M) => {
    const perms = new Set();
    const path = [];
    const used = Array(N + 1).fill(false);

    function func(lv, len) {
        if (lv === N) {
            if (len === M) perms.add(path.join(' '));
            return;
        }

        if (len > M) return;

        func(lv + 1, len);
        
        for (let i = 1; i < N + 1; i++) {
            if (used[i]) continue;
            
            used[i] = true;
            path.push(i);
            
            func(lv + 1, len + 1);
            
            used[i] = false;
            path.pop();
        }
    }

    func(0, 0, N);

    return Array.from(perms).sort();
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const [N, M] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

const perms = makePerm(N, M);

console.log(perms.join('\n'))
