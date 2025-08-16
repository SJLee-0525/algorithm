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
            this.end.next = node;
            node.prev = this.end;
            this.end = node;
        }

        this.size++;
        return;
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

    isempty() {
        return this.size === 0;
    }
}


const solution = (input) => {
    const [F, S, G, U, D] = input.map(Number);

    console.log( bfs(F, S, G, U, D) );
}

const bfs = (F, S, G, U, D) => {
    const visited = new Array(F + 1).fill(0);
    visited[S] = 1;

    const queue = new Queue();
    queue.append(S);

    while (!queue.isempty()) {
        const cur = queue.popleft();

        if (cur === G) return visited[cur] - 1;

        if (cur + U <= F && visited[cur + U] === 0) {
            visited[cur + U] = visited[cur] + 1;
            queue.append(cur + U);
        }

        if (cur - D > 0 && visited[cur - D] === 0) {
            visited[cur - D] = visited[cur] + 1;
            queue.append(cur - D);
        }
    }

    return 'use the stairs';
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

solution(input);