const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);
    
    const board = Array(101).fill(0);

    let idx = 1;
    for (let _ = 0; _ < N; _++) {
        const [x, y] = input[idx++].split(' ').map(Number);
        board[x] = y;
    }

    for (let _ = 0; _ < M; _++) {
        const [u, v] = input[idx++].split(' ').map(Number);
        board[u] = v;
    }

    console.log(
        bfs(1, board) - 1
    );
}

const bfs = (start, board) => {
    const queue = [start];

    const visited = Array(101).fill(Number.MAX_VALUE);
    visited[start] = 1;

    let left = 0;
    while (left < queue.length) {
        const cur = queue[left++];

        for (let dice = 1; dice < 7; dice++) {
            let next = cur + dice;
            if (next > 100) continue;

            if (board[next] > 0) next = board[next];

            if (visited[next] > visited[cur] + 1) {
                visited[next] = visited[cur] + 1;
                queue.push(next);
            }
        }
    }

    return visited[100];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);