const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0]);
    const arr = input[1].split(' ').map(Number);

    const res = Array(N).fill(null);
    
    for (let a = 0; a < N; a++) {
        let counter = 0;

        for (let c = 0; c < N; c++) {
            if (!res[c]) counter++;
            else continue;

            if (counter > arr[a]) {
                res[c] = a + 1;
                break;
            }
        }
    }

    console.log(res.join(' '));
}

solution(input);