const main = (input) => {
    const res = [];

    const N = Number(input[0]);

    for (let n = 1; n < N + 1; n++) {
        res.push( solution( input[n].split('\n') ) );
    }

    console.log(res.join('\n'));
}

const solution = (input) => {
    // const [N, M] = input[0].split(' ').map(Number);

    const SEJUN = input[1].split(' ').map(Number).sort((a, b) => b - a);
    const SEBEE = input[2].split(' ').map(Number).sort((a, b) => b - a);

    while (SEJUN.length > 0 && SEBEE.length > 0) {
        const sejunSoldier = SEJUN[SEJUN.length - 1];
        const sebeeSoldier = SEBEE[SEBEE.length - 1];

        if (sejunSoldier < sebeeSoldier) SEJUN.pop();
        else SEBEE.pop();
    }

    if (SEJUN.length > 0) return 'S';
    else return 'B';
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n\n');

main(input);