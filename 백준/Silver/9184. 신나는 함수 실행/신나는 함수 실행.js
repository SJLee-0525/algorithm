const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const res = Array();
    
    const DP = Array.from({ length: 21 }, () => Array.from({ length: 21 }, () => Array(21).fill(0)));
    function w(a, b, c) {
        if (a <= 0 || b <= 0 || c <= 0) return 1;
        else if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);
        else if (DP[a][b][c]) return DP[a][b][c];
        else if (a < b && b < c) {
            DP[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
            return DP[a][b][c];
        };

        DP[a][b][c] = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
        return DP[a][b][c];
    };

    for (let i = 0; i < input.length - 1; i++) {
        const [a, b, c] = input[i].trim().split(' ').map(Number);
        res.push(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
    };

    console.log(res.join('\n'));
};

solution(input);