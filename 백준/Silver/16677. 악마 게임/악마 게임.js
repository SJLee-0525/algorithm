const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const M = input[0].trim();
    const N = Number(input[1].trim());

    let res = 'No Jam';
    let maxG = 0;

    for (let n = 2; n <= N + 1; n++) {
        const [W, G] = input[n].trim().split(' ');

        if (W.length < M.length) continue;

        let m = 0;
        let isValid = false;

        for (let w = 0; w < W.length; w++) {
            if (W[w] === M[m] && ++m === M.length) isValid = true;

            if (isValid) {
                const tempG = Number(G) / (W.length - M.length);

                if (maxG < tempG) {
                    maxG = tempG;
                    res = W;
                };

                break;
            };
        };
    };

    console.log(res);
};

solution(input);