const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const N = Number(input[0].trim());
    const board = input.slice(1, N + 1).map((b) => b.trim().split(''));

    function calRow(row) {
        let maxCount = 1;
        let count = 1;

        for (let j = 0; j < N - 1; j++) {
            if (board[row][j] === board[row][j + 1]) {
                count++;
                if (maxCount < count) maxCount = count;
            } else count = 1;
        };

        return maxCount;
    };

    function calCol(col) {
        let maxCount = 1;
        let count = 1;

        for (let i = 0; i < N - 1; i++) {
            if (board[i][col] === board[i + 1][col]) {
                count++;
                if (maxCount < count) maxCount = count;
            } else count = 1;
        };

        return maxCount;
    };

    let ans = 0;

    // 초기 상태
    for (let i = 0; i < N; i++) ans = Math.max(ans, calRow(i), calCol(i));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            // 세로
            if (i + 1 < N && board[i][j] !== board[i + 1][j]) {
                [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
                ans = Math.max(ans, calRow(i), calRow(i + 1), calCol(j));
                [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
            };

            // 가로
            if (j + 1 < N && board[i][j] !== board[i][j + 1]) {
                [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
                ans = Math.max(ans, calRow(i), calCol(j), calCol(j + 1));
                [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
            };
        };
    };
    
    console.log(ans);
};

solution(input);