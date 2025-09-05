const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, M] = input[0].trim().split(' ').map(Number);

    const A = input[1].trim().split(' ').map(Number);
    const B = input[2].trim().split(' ').map(Number);

    const res = Array(N + M);
    
    let cur = 0, curA = 0, curB = 0;
    while (cur < N + M) {
        if (curA < N && curB < M) {
            if (A[curA] < B[curB]) res[cur++] = A[curA++];
            else res[cur++] = B[curB++];
        } else if (curB >= M) {
            res[cur++] = A[curA++];
        } else {
            res[cur++] = B[curB++];
        }
    }

    console.log(res.join(' '));
}

solution(input);