const makePerm = (N, M) => {
    const perms = [];
    const path = [];
    const used = Array(N + 1).fill(false);

    function func(len) {
        if (len === M) {
            perms.push(path.join(' '));
            return;
        }
        
        for (let i = 1; i < N + 1; i++) {
            if (used[i]) continue;
            
            used[i] = true;
            path.push(i);
            
            func(len + 1);
            
            used[i] = false;
            path.pop();
        }
    }

    func(0);

    return perms;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const [N, M] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

const perms = makePerm(N, M);

console.log(perms.join('\n'))
