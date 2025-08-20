class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
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
        return;
    }

    popleft() {
        if (this.size === 0) return null;
        
        const ret = this.start.val;

        if (this.size === 1) this.init();
        else {
            this.start = this.start.next;
            this.start.prev = null;
            this.size--;
        }

        return ret;
    }

    isempty() {
        return this.size === 0;
    }
}

const DI = [-2, -1, 1, 2, 2, 1, -1, -2];
const DJ = [1, 2, 2, 1, -1, -2, -2, -1];

const main = (input) => {
    let idx = 0;
    const res = [];

    const T = Number(input[idx++]);
    
    for (let tc = 0; tc < T; tc++) {
        const L = Number(input[idx++]);
        const start = input[idx++].split(' ').map(Number);
        const target = input[idx++].split(' ').map(Number);

        res.push( solution(L, start, target) );
    }

    console.log( res.join('\n') );
}

const solution = (L, [si, sj], [ti, tj]) => {
    const visited = Array.from({ length: L }, () => Array(L).fill(0));

    return bfs(si, sj, ti, tj, L, visited);
}

const bfs = (si, sj, ti, tj, L, visited) => {
    if (si === ti && sj == tj) return 0;

    const queue = new Queue();
    queue.append([si, sj]);

    visited[si][sj] = 1;

    while (!queue.isempty()) {
        const [i, j] = queue.popleft();

        for (let k = 0; k < 8; k++) {
            const ni = i + DI[k], nj = j + DJ[k];
            if (ni === ti && nj === tj) return visited[i][j];

            if (0 <= ni && ni < L && 0 <= nj && nj < L && visited[ni][nj] === 0) {
                visited[ni][nj] = visited[i][j] + 1;
                queue.append([ni, nj]);
            }
        }
    }

    return null;
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

main(input);