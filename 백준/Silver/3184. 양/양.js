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
            this.end.next = node;
            node.prev = this.end;
            this.end = node;
        }

        this.size++;
    }

    popleft() {
        if (this.size === 0) return null;

        const ret = this.start.val;

        if (this.size === 1) {
            this.init();
        } else {
            this.start = this.start.next;
            this.start.prev = null;
            this.size--;
        }

        return ret;
    }

    isEmpty() {
        return this.size === 0;
    }
}


const DI = [1, 0, -1, 0];
const DJ = [0, 1, 0, -1];


const solution = (input) => {
    const [R, C] = input[0].split(' ').map(Number);

    const arr = [Array(C + 2).fill('#'), ...input.slice(1, R + 1).map((l) => ['#', ...l.split(''), '#']), Array(C + 2).fill('#')];
    const visited = Array.from({ length: R + 2 }, () => Array(C + 2).fill(false));

    let aliveSheeps = 0, aliveWolfs = 0;

    for (let i = 1; i < R + 1; i++) {
        for (let j = 1; j < C + 1; j++) {
            if (arr[i][j] !== '#' && !visited[i][j]) {
                const [sheeps, wolfs] = bfs(i, j, arr, visited);

                aliveSheeps += sheeps;
                aliveWolfs += wolfs;
            }
        }
    }

    console.log(aliveSheeps, aliveWolfs);
}

const bfs = (si, sj, arr, visited) => {
    let sheeps = 0, wolfs = 0;

    const queue = new Queue();
    queue.append([si, sj]);

    visited[si][sj] = true;

    while (!queue.isEmpty()) {
        const [i, j] = queue.popleft();

        if (arr[i][j] === 'o') {
            sheeps++;
        } else if (arr[i][j] === 'v') {
            wolfs++;
        }

        for (let k = 0; k < 4; k++) {
            const mi = i + DI[k], mj = j + DJ[k];

            if (arr[mi][mj] !== '#' && !visited[mi][mj]) {
                queue.append([mi, mj])
                visited[mi][mj] = true;
            }
        }
    }

    if (wolfs < sheeps) {
        return [sheeps, 0];
    } else {
        return [0, wolfs];
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);