const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    let idx = 0;

    const [N, P] = input[idx++].trim().split(' ').map(Number);
    const [W, L, G] = input[idx++].trim().split(' ').map(Number);

    const INFO = new Object();
    for (let p = 0; p < P; p++) {
        const [name, res] = input[idx++].trim().split(' ');
        INFO[name] = res === 'W' ? true : false;
    };

    let curG = 0;
    for (let n = 0; n < N; n++) {
        const name = input[idx++].trim();

        if (INFO[name]) {
            curG += W;
            if (curG >= G) return ('I AM NOT IRONMAN!!');
        } else {
            curG -= L;
            if (curG < 0) curG = 0;
        };
    };

    return 'I AM IRONMAN!!';
};

console.log( solution(input) )
