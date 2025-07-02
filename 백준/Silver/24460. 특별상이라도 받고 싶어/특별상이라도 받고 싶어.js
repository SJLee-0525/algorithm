const solution = (input) => {
    const N = Number(input[0]);

    const arr = input.slice(1, N + 1).map((a) => a.split(' ').map(Number));

    const f = (si, ei, sj, ej) => {
        if (si > ei || sj > ej) return Infinity;
    
        if (si === ei && sj === ej) return arr[si][sj];
    
        const mi = Math.floor((si + ei) / 2);
        const mj = Math.floor((sj + ej) / 2);
    
        return [
            f(si, mi, sj, mj), 
            f(mi + 1, ei, sj, mj), 
            f(si, mi, mj + 1, ej), 
            f(mi + 1, ei, mj + 1, ej)
        ].sort((a, b) => a - b)[1];
    }

    console.log(
        f(0, N - 1, 0, N - 1)
    );
}


/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);