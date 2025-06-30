class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class Deque {
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
            const cachedEnd = this.end;
            node.prev = cachedEnd;
            cachedEnd.next = node;
            this.end = node;
        }

        this.size++;
    }

    popleft() {
        if (this.size === 0) return null;

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

    isEmpty() {
        return this.size === 0;
    }
}


const DI = [1, 0, -1, 0, 1, 1, -1, -1];
const DJ = [0, 1, 0, -1, -1, 1, 1, -1];


const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);
    const ocean = [Array(M + 2).fill(-1), ...input.slice(1, N + 1).map((elem) => [-1, ...elem.split(' ').map(Number), -1]), Array(M + 2).fill(-1)];

    let res = 0;
    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < M + 1; j++) {
            if (ocean[i][j] === 1) continue;

            const dist = bfs(i, j, N + 2, M + 2, ocean);
            if (res < dist) res = dist;
        }
    }

    console.log(res);
} 

const bfs = (si, sj, N, M, ocean) => {
    const visited = Array.from({ length: N }, () => Array(M).fill(0));
    visited[si][sj] = 1;

    const queue = new Deque();
    queue.append([si, sj]);

    while (!queue.isEmpty()) {
        const [i, j] = queue.popleft();

        for (let k = 0; k < 8; k++) {
            const mi = i + DI[k];
            const mj = j + DJ[k];

            if (ocean[mi][mj] < 0 || visited[mi][mj] > 0) continue;

            if (ocean[mi][mj] === 1) {
                return visited[i][j];
            } else {
                visited[mi][mj] = visited[i][j] + 1;
                queue.append([mi, mj]);
            }
        }
    }

    return 0;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);