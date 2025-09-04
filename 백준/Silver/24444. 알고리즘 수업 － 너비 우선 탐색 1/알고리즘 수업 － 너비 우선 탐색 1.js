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
        const node =new Node(val);

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

const solution = (input) => {
    const [N, M, R] = input[0].trim().split(' ').map(Number);

    const adjL = Array.from({ length: N + 1 }, () => Array());

    for (let n = 1; n < M + 1; n++) {
        const [s, e] = input[n].trim().split(' ').map(Number);

        adjL[s].push(e);
        adjL[e].push(s);
    }

    adjL.forEach((adj) => { adj.sort((a, b) => a - b) });

    console.log(
        bfs(R, N, adjL).join('\n')
    );
}

const bfs = (start, N, adjL) => {
    let seq = 1;

    const visited = new Array(N + 1).fill(0);
    visited[start] = seq++;

    const queue = new Queue();
    queue.append(start);

    while (!queue.isEmpty()) {
        const cur = queue.popleft();

        for (const next of adjL[cur]) {
            if (visited[next] > 0) continue;

            visited[next] = seq++;
            queue.append(next);
        }
    }

    return visited.slice(1, N + 1);
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);