class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class Queue {
    constructor() {
        this.init();
    }

    init() {
        this.size = 0;
        this.start = null;
        this.end = null;
    }

    append(val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.start = node;
            this.end = node;
        } else {
            node.prev = this.end;
            this.end.next = node;
            this.end = node;
        }
        this.size++;
    }

    popleft() {
        if (this.size === 0) return -1;

        const val = this.start.val;

        if (this.size === 1) {
            this.init();
        } else {
            this.start = this.start.next;
            this.start.prev = null;
            this.size--;
        }

        return val;
    }

    isempty() {
        return this.size === 0;
    }
}


const DO = { 'N': [-1, 0], 'E': [0, 1], 'S': [1, 0], 'W': [0, -1] };
const DR = ['N', 'W', 'S', 'E'];
const DI = [1, 0, -1, 0];
const DJ = [0, 1, 0, -1];


const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);

    const arr = input.slice(1, N + 1).map((l) => l.split(''));
    const visited = Array.from({ length: N }, () => Array(M).fill(false));

    let cnt = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (!visited[i][j]) cnt += bfs(i, j, visited, arr, N, M);
        }
    }

    console.log(cnt);
}

const bfs = (si, sj, visited, arr, N, M) => {
    const queue = new Queue();
    queue.append([si, sj]);

    visited[si][sj] = true;

    while (!queue.isempty()) {
        const [i, j] = queue.popleft();

        const [di, dj] = DO[arr[i][j]];
        const ni = i + di, nj = j + dj;

        if (0 <= ni && ni < N && 0 <= nj && nj < M && !visited[ni][nj]) {
            queue.append([ni, nj]);
            visited[ni][nj] = true;
        }

        for (let k = 0; k < 4; k++) {
            const mi = i + DI[k], mj = j + DJ[k];

            if (0 <= mi && mi < N && 0 <= mj && mj < M
                && arr[mi][mj] === DR[k] && !visited[mi][mj]
            ) {
                queue.append([mi, mj]);
                visited[mi][mj] = true;
            }
        }
    }

    return 1;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);