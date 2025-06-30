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

    const visited = Array.from({ length: N + 2 }, () => Array(M + 2).fill(-1));
    const queue = new Deque();

    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < M + 1; j++) {
            if (ocean[i][j] === 1) { 
                visited[i][j] = 0;
                queue.append([i, j]);
            }
        }
    }

    bfs(ocean, visited, queue);

    console.log(Math.max(...visited.flat()));   
} 

const bfs = (ocean, visited, queue) => {
    while (!queue.isEmpty()) {
        const [i, j] = queue.popleft();

        for (let k = 0; k < 8; k++) {
            const mi = i + DI[k];
            const mj = j + DJ[k];

            if (ocean[mi][mj] < 0 || visited[mi][mj] > -1) continue;

            visited[mi][mj] = visited[i][j] + 1;
            queue.append([mi, mj]);
        }
    }

    return null;
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);