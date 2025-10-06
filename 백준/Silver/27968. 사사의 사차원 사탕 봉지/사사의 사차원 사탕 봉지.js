const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const res = Array();
    const [N, M] = input[0].trim().split(' ').map(Number);
    
    const shasha = [0, ...input[1].trim().split(' ').map(Number)];
    for (let s = 1; s <= M; s++) shasha[s] += shasha[s - 1];

    function binarySearch(tar, s, e) {
        if (s === e) return s;

        const m = Math.floor( (s + e) / 2 );
        if (tar <= shasha[m]) return binarySearch(tar, s, m);
        else return binarySearch(tar, m + 1, e);
    };

    for (let i = 2; i < N + 2; i++) {
        const need = Number(input[i].trim());

        if (need > shasha[M]) res.push('Go away!');
        else res.push( binarySearch(need, 0, M).toString() );
    }

    console.log( res.join('\n') );
};

solution(input);