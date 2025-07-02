class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
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
            cachedEnd.next = node;
            node.prev = cachedEnd;
            this.end = node;
        }

        this.size++;
        return;
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

    isEmpty() {
        return this.size === 0;
    }
}


const jump = (start, N, maze) => {
    const visited = Array(N).fill(-1);
    visited[start] = 0;

    const queue = new Deque();
    queue.append(start);

    while (!queue.isEmpty()) {
        const cur = queue.popleft();

        if (maze[cur] === 0) continue;

        for (let n = 1; n < maze[cur] + 1; n++) {
            const next = cur + n;

            if (visited[next] > -1) continue;

            visited[next] = visited[cur] + 1;
            queue.append(next);
        }
    }
    
    console.log(visited[N - 1]);
}

const solution = (input) => {
    const N = Number(input[0]);

    const maze = input[1].split(' ').map(Number);
    
    jump(0, N, maze);
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);