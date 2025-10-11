const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());

    const arrA = input[1].trim().split(' ').map(Number);
    const arrB = input[2].trim().split(' ').map(Number);

    function checkIsEqual() {
        for (let n = 0; n < N; n++) {
            if (arrA[n] !== arrB[n]) return 0;
        };

        return 1;
    };

    let res = checkIsEqual();

    if (!res) {
        for (let t = N - 1; t > 0; t--) {
            let biggestIdx = null, biggestVal = -1;
    
            for (let c = 0; c < t; c++) {
                if (arrA[c] > biggestVal) {
                    biggestVal = arrA[c];
                    biggestIdx = c;
                };
            };
    
            if (biggestIdx !== null && biggestVal > arrA[t]) {
                [arrA[t], arrA[biggestIdx]] = [arrA[biggestIdx], arrA[t]];
            
                res = checkIsEqual();

                if (res) break;
            };
        };
    };

    console.log(res);
};

solution(input);