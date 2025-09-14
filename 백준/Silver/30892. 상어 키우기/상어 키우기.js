const solution = (input) => {
    const [N, K, T] = input[0].trim().split(' ').map(Number);

    const sharks = input[1].trim().split(' ').map(v => BigInt(v)).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

    const stack = new Array();
    let curShark = BigInt(T);
    let std = 0;

    for (let k = 0; k < K; k++) {
        while (std < N && sharks[std] < curShark) stack.push(sharks[std++]);

        if (stack.length) curShark += stack.pop();
    }

    console.log( curShark.toString() );
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);