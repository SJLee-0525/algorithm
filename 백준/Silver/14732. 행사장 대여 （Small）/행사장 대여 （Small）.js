const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());
    const ground = Array.from({ length: 501 }, () => Array(501).fill(false));

    let res = 0;

    function fillGround (x1, y1, x2, y2) {
        for (let x = x1; x < x2; x++) {
            for (let y = y1; y < y2; y++) {
                if (ground[x][y]) continue;

                ground[x][y] = true;
                res++;
            };
        };
    };

    for (let n = 1; n <= N; n++) {
        const [x1, y1, x2, y2] = input[n].trim().split(' ').map(Number);

        fillGround(x1, y1, x2, y2);
    };

    console.log(res);
};

solution(input);